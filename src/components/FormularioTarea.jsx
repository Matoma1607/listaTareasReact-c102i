import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const tareasLocalstorage =
    JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTarea, setCurrentTarea] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const onSubmit = (data) => {
    if (isEditing && currentTarea) {
      const updatedTareas = listaTareas.map((t) =>
        t.id === currentTarea.id
          ? { ...t, titulo: data.tarea, fechaActualizacion: new Date() }
          : t
      );
      setListaTareas(updatedTareas);
      setIsEditing(false);
      setCurrentTarea(null);
    } else {
      const nuevaTarea = {
        id: Date.now(),
        titulo: data.tarea,
        descripcion: "Descripción de ejemplo",
        completado: false,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
      };
      setListaTareas([...listaTareas, nuevaTarea]);
    }
    reset();
  };

  const borrarTarea = (id) => {
    const tareaFiltradas = listaTareas.filter((t) => t.id !== id);
    setListaTareas(tareaFiltradas);
  };

  const iniciarEdicion = (tarea) => {
    setIsEditing(true);
    setCurrentTarea(tarea);
    setValue("tarea", tarea.titulo);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Agrega una tarea"
            {...register("tarea", {
              required: "Este campo es obligatorio",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
              maxLength: { value: 100, message: "Máximo 100 caracteres" },
            })}
          />
          <Button variant="primary" type="submit">
            {isEditing ? "Guardar cambios" : "Agregar"}
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={borrarTarea}
        iniciarEdicion={iniciarEdicion}
      />
    </section>
  );
};
export default FormularioTarea;

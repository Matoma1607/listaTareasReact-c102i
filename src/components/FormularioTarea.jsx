import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const tareasLocalstorage =
    JSON.parse(localStorage.getItem("tareaskey")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage);
  const [tareaEditando, setTareaEditando] = useState(null);
  const [tareaActual, setTareaActual] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    localStorage.setItem("tareaskey", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const onSubmit = (data) => {
    if (tareaEditando !== null) {
      const tareasActualizadas = listaTareas.map((item, index) =>
        index === tareaEditando ? data.tarea : item
      );
      setListaTareas(tareasActualizadas);
      setTareaEditando(null);
    } else {
      setListaTareas([...listaTareas, data.tarea]);
    }
    reset();
  };

  const iniciarEdicion = (tarea, index) => {
    setTareaEditando(index);
    setTareaActual(tarea);
    reset({ tarea });
  };

  const borrarTarea = (nombreTarea) => {
    const tareaFiltradas = listaTareas.filter((item) => item !== nombreTarea);
    setListaTareas(tareaFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Agrega una tarea"
            {...register("tarea", {
              required: "Este campo es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe contener como mínimo 3 caracteres",
              },
              maxLength: {
                value: 15,
                message: "La tarea debe contener como máximo 15 caracteres",
              },
            })}
            value={tareaActual}
            onChange={(e) => setTareaActual(e.target.value)}
          />
          <Button variant="danger" type="submit">
            {tareaEditando !== null ? "Guardar" : "Enviar"}{" "}
            {/* Cambia el texto del botón */}
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

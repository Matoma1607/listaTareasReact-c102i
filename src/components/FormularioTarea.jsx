//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const tareasLocalstorage =
    JSON.parse(localStorage.getItem("tareaskey")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage);
  const [tarea, setTarea] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //ciclo de vida del componente
  useEffect(() => {
    console.log("prueba del ciclo de vida");
    //guardar en el localstorage
    localStorage.setItem("tareasKey", JSON.stringify(listaTareas));
  }, [listaTareas]);

  //const tomarTexto = (e) =>{
  //setTarea(e.target.value)
  //}

  const onSubmit = (data) => {
  console.log(data)
    //guardar la atera en listaTarea
    //operador spread
    setListaTareas([...listaTareas, data.tarea]);
    reset ()
    
  };

  const borrarTarea = (nombreTarea) => {
    //listaTarea.splice
    const tareaFiltradas = listaTareas.filter((item) => item !== nombreTarea);
    //actualizar el state
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
                value:3,
                message: "La tarea debe contener como minimo 3 caracteres"
              },
              maxLength: {
                value:15,
                message: "La tarea debe contener como maximo 15 caracteres"
              }
            })}
          />
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

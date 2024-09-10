//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  //const tomarTexto = (e) =>{
  //setTarea(e.target.value)
  //}

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la atera en listaTarea
    //operador spread
    setListaTareas([...listaTareas, tarea]);
    //limpiar el stado
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    //listaTarea.splice
    const tareaFiltradas = listaTareas.filter((item) => item !== nombreTarea);
    //actualizar el state
    setListaTareas(tareaFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Agrega una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas listaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

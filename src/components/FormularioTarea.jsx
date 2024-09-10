//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";


const FormularioTarea = () => {
  const tareasLocalstorage = JSON.parse(localStorage.getItem('tareaskey')) || [];  
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage);
  const [tarea, setTarea] = useState("");

  //ciclo de vida del componente 
  useEffect(()=>{
    console.log('prueba del ciclo de vida')
    //guardar en el localstorage
    localStorage.setItem('tareasKey', JSON.stringify(listaTareas))
  }, [listaTareas])

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

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import FormularioTarea from "./components/FormularioTarea";
import ItemTarea from "./components/ItemTarea";

function App() {
  const [tasks, setTasks] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTasks([...tasks, nuevaTarea]);
  };

  const borrarTarea = (tarea) => {
    setTasks(tasks.filter((t) => t !== tarea));
  };

  const editarTarea = (tareaAntigua, tareaNueva) => {
    setTasks(tasks.map((t) => (t === tareaAntigua ? tareaNueva : t)));
  };

  return (
    <>
      <main className="container my-5">
        <h1 className="text-center text-light">Bienvenido</h1>
        <h2 className="text-center text-light">Ingresa tus tareas</h2>
        <FormularioTarea agregarTarea={agregarTarea} />
        <Container>
          <ListGroup>
            {tasks.map((tarea, index) => (
              <ItemTarea
                key={index}
                tarea={tarea}
                borrarTarea={borrarTarea}
                editarTarea={editarTarea}
              />
            ))}
          </ListGroup>
        </Container>
      </main>
    </>
  );
}

export default App;

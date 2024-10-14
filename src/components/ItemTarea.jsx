import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea, iniciarEdicion }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <span>{tarea.titulo}</span>
      <div>
        <Button
          variant="warning"
          className="me-2"
          onClick={() => iniciarEdicion(tarea)}
        >
          Editar
        </Button>
        <Button variant="danger" onClick={() => borrarTarea(tarea.id)}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;

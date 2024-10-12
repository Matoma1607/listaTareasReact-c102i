import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea, iniciarEdicion }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <div>
        <Button variant="warning" onClick={() => iniciarEdicion(tarea, tarea)}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => borrarTarea(tarea)}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;

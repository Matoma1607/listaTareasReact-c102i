import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTareas, borrarTarea, iniciarEdicion }) => {
  return (
    <ListGroup>
      {listaTareas.map((item) => (
        <ItemTarea
          key={item.id}
          tarea={item}
          borrarTarea={borrarTarea}
          iniciarEdicion={iniciarEdicion}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;

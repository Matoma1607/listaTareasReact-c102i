import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTareas, borrarTarea, iniciarEdicion }) => {
  return (
    <ListGroup>
      {listaTareas.map((item, posicionTarea) => (
        <ItemTarea
          key={posicionTarea}
          tarea={item}
          borrarTarea={borrarTarea}
          iniciarEdicion={() => iniciarEdicion(item, posicionTarea)}
        />
      ))}
    </ListGroup>
  );
};
export default ListaTareas;

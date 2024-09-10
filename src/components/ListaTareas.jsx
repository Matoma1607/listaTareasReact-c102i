import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({listaTareas, borrarTarea}) => {
    return (
        <ListGroup>
          {
            listaTareas.map((item, posicionTarea)=><ItemTarea key={posicionTarea} tarea = {item} borrarTarea={borrarTarea}></ItemTarea>)
          }
        
      </ListGroup>
    );
};

export default ListaTareas;
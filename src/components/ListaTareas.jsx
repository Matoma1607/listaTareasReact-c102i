import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({listaTareas}) => {
    return (
        <ListGroup>
          {
            listaTareas.map((item, posicionTarea)=><ItemTarea key={posicionTarea}></ItemTarea>)
          }
        
      </ListGroup>
    );
};

export default ListaTareas;
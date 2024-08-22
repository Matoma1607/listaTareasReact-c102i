import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">Tarea 1 <Button variant="warning">Borrar</Button></ListGroup.Item>
    );
};

export default ItemTarea;
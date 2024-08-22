import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Agrega una tarea" />
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;

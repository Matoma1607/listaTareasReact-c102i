import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <main className="container my-5">
      <h1 className="text-center text-light">Bienvenido</h1>
      <h2 className="text-center text-light">Ingresa tus tareas</h2>
      <FormularioTarea />
    </main>
  );
}

export default App;

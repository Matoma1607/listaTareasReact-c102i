import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import FormularioTarea from './components/FormularioTarea';

function App() {
  return (
    <>
      <main className='container my-5'>
    <h1 className='text-center'>
      Bienvenido
    </h1>
    <h2 className='text-center'>
      Ingresa tus tareas
    </h2>
    <FormularioTarea></FormularioTarea>
      </main>
    </>
  );
}

export default App;

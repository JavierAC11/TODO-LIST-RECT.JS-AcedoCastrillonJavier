import Formulario from "./components/Formulario";
import { useEffect, useState } from 'react';
import ListaDeTareas from './components/ListaDeTareas';

const initialStateTodo = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

export const App = () => {

  const [todos, setTodos] = useState(initialStateTodo);
  
  const [modoEdicion, setEditar] = useState(false);

  const [todo, setTodo] = useState({
    titulo: '',
    descripcion: '',
    estado: '',
    prioridad: false
});

  todos.sort((a, b) => b.prioridad - a.prioridad );
  todos.sort((a, b) => b.estado - a.estado );

  const activarModoEdicion = (id) => {
    setEditar(true);
    const tarea = todos.filter(todo => todo.id === id)[0];
    setTodo({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      estado: tarea.estado? "pendiente" : "completada",
      prioridad: tarea.prioridad,
      id: tarea.id
    });
  }

  const updateTodo = () => {
    setTodos(todos.map(todoOld => todoOld.id === todo.id ? todo : todoOld));
    setEditar(false);
  }

  const addTodo = (todo) => { 
    setTodos([...todos, todo]);
  }

  const eliminarTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const completarTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.estado = !todo.estado;
      }
      return todo;
    }));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  })

  return (
    <div className="container mb-2">
    <Formulario addTodo={addTodo} modoEdicion={modoEdicion} todo = {todo} setTodo={setTodo} eliminarTodo={eliminarTodo} updateTodo={updateTodo}/>
    <ListaDeTareas tareas={todos} eliminarTodo={eliminarTodo} completarTodo={completarTodo} modoEdicion={modoEdicion} activarModoEdicion={activarModoEdicion}/>
    </div>
  );
}
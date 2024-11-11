/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import propTypes from 'prop-types'

const mostrarError = (titulo) => {
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: ''
    })
}

const Formulario = ({addTodo, modoEdicion, todo, setTodo, updateTodo}) => {

    /*const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [estado, setEstado] = useState("");
*/

    const handleChange = (e) => {

        if(e.target.type === 'checkbox'){
            setTodo({
                ...todo,
                [e.target.name]: e.target.checked
            })
        }
        else{
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })}
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (modoEdicion) {
            console.log("modo edicion")
            if (!todo.titulo.trim() || !todo.descripcion.trim() || !todo.estado.trim()) {
                mostrarError();
                return;
            }
            else{
                if (todo.estado === 'pendiente') {
                    todo.estado = true;
                }
                else {
                    todo.estado = false;
                }

                updateTodo();
                
            }
        }
        else{
            if (!todo.titulo.trim() || !todo.descripcion.trim() || !todo.estado.trim()) {
                mostrarError();
                return;
            }
            else{
                const id = Date.now();
                todo.id = id;
                if (todo.estado === 'pendiente') {
                    todo.estado = true;
                }
                else {
                    todo.estado = false;
                }
                addTodo(todo)
            }
        }
    }

  return (
    <div>
      <h2>Formulario</h2>
        <form /*ref={formulario} */onSubmit={handleSubmit}>
            <input type="text" 
                name="titulo" 
                placeholder='Tarea' 
                className='form-control mb-2'  
                value={todo.titulo} 
                onChange={handleChange}/>
            
            <textarea name="descripcion" 
                placeholder='Introduce la descripcion' 
                className='form-control mb-2' 
                value={todo.descripcion}
                onChange={handleChange}>
            </textarea>

            <select name="estado" 
                className='form-control'
                value={todo.estado}
                onChange={handleChange}>
                
                <option value="">Seleccione un estado</option>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>

            </select>
            <div className='form-check mb2'>
            <label htmlFor='inputCheck' className='form-check mb2'>Prioridad</label>
            <input className='form-check mb2' 
                type='checkbox' 
                name='prioridad' 
                value='true' 
                id='inputCheck'
                onChange={handleChange}/>
            
            </div>
            

            <button type="submit" className={modoEdicion ? 'btn btn-warning mt-2' : 'btn btn-primary mt-2'} onSubmit={handleSubmit}>{modoEdicion ? "Editar" : "Enviar"}</button>
            
        </form>
    </div>
  )
}

Formulario.propTypes = {
    addTodo: propTypes.func, 
    modoEdicion: propTypes.bool,
    todo: propTypes.object,
    setTodo: propTypes.func,
    eliminarTodo: propTypes.func,
    updateTodo: propTypes.func
}

export default Formulario
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import Swal from 'sweetalert2'

/*
*/
const Controlado = () => {

    const [todo, setTodo] = useState({
        titulo: '',
        descripcion: '',
        estado: '',
        terminos: false
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo)
    }

  return (
    <>
      <h2>Formulario no controlado</h2>
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
            <input className='form-check mb2' 
                type='checkbox' 
                name='terminos' 
                value='true' 
                id='inputCheck'
                onChange={handleChange}/>
            <label htmlFor='inputCheck' className='form-check mb2'>Acepto terminos y condiciones</label>
            </div>
            

            <button type="submit" className='btn btn-primary mt-2'>Enviar</button>
            
        </form>
    </>
  )
}

export default Controlado
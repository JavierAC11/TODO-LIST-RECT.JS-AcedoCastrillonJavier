/* eslint-disable no-unused-vars */
import { useRef } from "react"

const NoControlado = () => {

    const formulario = useRef(null)

    console.log(formulario)

    const handleSubmit = (e) => {
        e.preventDefault()
        const datos = new FormData(formulario.current)
        const objDatos = Object.fromEntries([...datos.entries()])
        const {todoName, todoDescripcion, todoEstado} = objDatos
        console.log(objDatos)

        if(todoName.trim() === '' || todoDescripcion.trim() === ''){
            console.log('Todos los campos son obligatorios')
            return
        }


    }

  return (
    <>
      <h2>Formulario no controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input type="text" name="todoName" placeholder='Tarea' className='form-control mb-2' defaultValue="Tarea 1"/>
            <textarea name="todoDescripcion" placeholder='Introduce la descripcion' className='form-control mb-2' defaultValue="Tarea 1"></textarea>
            <select name="todoEstado" id="" className='form-control'>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type="submit" className='btn btn-primary mt-2'>Enviar</button>
            
        </form>
    </>
  )
}

export default NoControlado

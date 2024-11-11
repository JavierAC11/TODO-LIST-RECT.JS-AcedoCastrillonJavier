/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';

const Tarea = ({tarea, eliminarTodo, completarTodo, activarModoEdicion}) => {
    
    const {id, titulo, descripcion, estado, prioridad} = tarea;

    return (
        <li className='list-group-item'>
            <div>
                
                <h5 className={estado? undefined : "text-decoration-line-through"}>{titulo}</h5>
                <div className='d-flex justify-item-between'>
                <span className='badge bg-primary '>{prioridad && 'Prioritaria'}</span>
                </div>
                

                <p>{descripcion}</p>
                <div className='d-flex'>
                    <button className='btn btn-danger btn-small' onClick={ () => eliminarTodo(id) }>Eliminar</button>
                    <button className='btn btn-primary btn-small' onClick={() => activarModoEdicion(id)}>Editar</button>
                    <button className='btn btn-warning btn-small' onClick={ () => completarTodo(id)}>Cambiar estado</button>
                </div>
            </div>
        </li>
    );
}

Tarea.propTypes = {
    tarea: propTypes.object,
    eliminarTodo: propTypes.func,
    completarTodo: propTypes.func,
    activarModoEdicion: propTypes.func

}

export default Tarea;
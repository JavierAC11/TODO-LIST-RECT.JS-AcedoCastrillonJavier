import propTypes from 'prop-types';
import Tarea from './Tarea';

const ListaDeTareas = ({ tareas, eliminarTodo, completarTodo, modoEdicion, activarModoEdicion}) => {
    
    
    return (
        <ul className='list-group'>
            {tareas.map((tarea) => (
                <Tarea key={tarea.id} tarea={tarea} eliminarTodo={eliminarTodo} completarTodo={completarTodo} modoEdicion={modoEdicion} activarModoEdicion={() => activarModoEdicion(tarea.id)}/>
            ))}
            {tareas.length === 0 && <li className='list-group-item'>No hay tareas</li>}
        </ul>
        
    );
    }

ListaDeTareas.propTypes = {
    tareas: propTypes.array,
    eliminarTodo: propTypes.func,
    completarTodo: propTypes.func,
    modoEdicion: propTypes.bool,
    activarModoEdicion: propTypes.func
}


export default ListaDeTareas;
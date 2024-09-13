import { Link } from 'react-router-dom';
import tasks from '../tasks';

const Home = () => {
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              {task.title}
            </Link>
            <p>{task.description.substring(0, 30)}...</p>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Link to="/create">
          <button>Crear nueva tarea</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

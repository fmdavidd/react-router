import { useParams } from 'react-router-dom';
import tasks from '../tasks';

const TaskDetail = () => {
  const { id } = useParams();
  const task = tasks.find(task => task.id === parseInt(id));

  return (
    <div className="container">
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Fecha de creación: {task.createdAt}</p>
        <p style={{ color: task.completed ? 'green' : 'red' }}>
          Estado: {task.completed ? 'Completa' : 'Incompleta'}
        </p>
      </div>
    </div>
  );
};

export default TaskDetail;

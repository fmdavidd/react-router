import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tasks from '../tasks';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      createdAt: new Date().toISOString().split('T')[0],
      completed,
    };
    tasks.push(newTask);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Crear nueva tarea</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
          <label>Completada</label>
        </div>
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
};

export default CreateTask;

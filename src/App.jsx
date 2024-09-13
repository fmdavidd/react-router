import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';
import CreateTask from './pages/CreateTask';
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </div>
  );
}

export default App;

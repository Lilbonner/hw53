import React, {useState} from 'react';
import AddTaskForm from './addTaskForm';
import Task from './task';
import './App.css';

interface Task {
  id: string;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: '1', text: 'Make a home work'},
    {id: '2', text: 'Go to the store'},
  ]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    if (currentTask.trim() === '') return;

    const newTask: Task = {id: Date.now().toString(), text: currentTask};
    setTasks([...tasks, newTask]);
    setCurrentTask('');
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  let taskList: React.ReactNode = null;

  if (tasks.length > 0) {
    taskList = tasks.map((task) => (
      <Task key={task.id} task={task} onDeleteTask={() => deleteTask(task.id)}/>
    ));
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTaskForm
        onAddTask={addTask}
        onTextChange={(e) => setCurrentTask(e.target.value)}
        currentTask={currentTask}
      />
      {taskList}
    </div>
  );
}

export default App;

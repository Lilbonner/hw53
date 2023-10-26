import React from 'react';

interface AddTaskFormProps {
  onAddTask: () => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentTask: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask, onTextChange, currentTask }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Введите задачу:"
        onChange={onTextChange}
        value={currentTask}
      />
      <button onClick={onAddTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;

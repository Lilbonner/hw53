import React from 'react';

interface TaskProps {
  task: Task;
  onDeleteTask: () => void;
}

function Task({ task, onDeleteTask }: TaskProps) {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={onDeleteTask}>—</button>
    </div>
  );
}

export default Task;

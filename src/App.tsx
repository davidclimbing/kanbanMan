import './App.css'
import Card from "./components/task-card/task-card.tsx";
import {statuses} from "./tasks/task.ts";
import {Status, Task} from "./schemas/task.ts";
import React, {useEffect, useState} from "react";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    }
  })

  useEffect(() => {
    fetch('http://localhost:3000/tasks').then((resp: Response) => resp.json()).then((data) => {
      setTasks(data);
    })
  }, [])


  const updateTask = (task: Task) => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    })
    setTasks(updatedTasks);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    setCurrentlyHoveringOver(null);
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);

    if (task) {
      updateTask({...task, status});
    }
  }

  const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<Status | null>(null)
  const handleDragEnter = (status: Status) => {
    setCurrentlyHoveringOver(status)
  }

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
          <div onDrop={(e) => handleDrop(e, column.status)}
               onDragOver={(e) => e.preventDefault()}
               onDragEnter={() => handleDragEnter(column.status)}
          >
            <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
              <h2 className="capitalize">{column.status}</h2>
              {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
            </div>
            <div className={`h-full ${currentlyHoveringOver === column.status ? 'bg-gray-200' : ''}`}>
              {column.tasks.map((task) => (
                <Card
                  task={task}
                  updateTask={updateTask}
                />
              ))}
            </div>
          </div>
      ))}
    </div>
  )
}

export default App

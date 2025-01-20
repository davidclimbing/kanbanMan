import './App.css'
import Card from "./components/task-card/task-card.tsx";
import {tasks as initialTasks, statuses} from "./tasks/task.ts";
import {Task} from "./schemas/task.ts";
import {useState} from "react";


function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
          <div>
            <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
              <h2 className="capitalize">{column.title}</h2>
              {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
            </div>
            {column.tasks.map((task) => (
              <Card
                task={task}
                updateTask={updateTask}
              />
            ))}
          </div>
      ))}
    </div>
  )
}

export default App

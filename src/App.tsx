import './App.css'
import Card from "./components/task-card/task-card.tsx";
import {tasks, statuses} from "./tasks/task.ts";


function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    }
  })

  return (
    <>
      <div className="flex divide-x">
        {columns.map((column) => (
            <div>
              <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">{column.title}</h2>
              {column.tasks.map((task) => <Card task={task}/>)}
            </div>
        ))}
      </div>
    </>
  )
}

export default App

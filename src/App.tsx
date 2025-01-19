import './App.css'
import Card from "./components/task-card/task-card.tsx";
import {Task} from "./schemas/task.ts";

function App() {
  const task: Task = {
    title: 'Do Market Research',
    id: 'BUS-1',
    points: 5,
  }

  return (
    <>
      <Card task={task} />
      <Card task={task} />
      <Card task={task} />
    </>
  )
}

export default App

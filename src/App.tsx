import './App.css'
import Card from "./components/task-card/task-card.tsx";
import {Task} from "./schemas/task.ts";

function App() {
  const tasks: Task[] = [
    {
      title: 'Do Market Research',
      id: 'BUS-1',
      points: 5,
    },
    {
      title: 'Competitor analysis',
      id: 'BUS-2',
    },
    {
      title: 'Develop Business Strategy',
      id: 'BUS-3',
      points: 8,
    }
  ]


  return (
    <>
      {tasks.map((task) => <Card task={task} />)}
    </>
  )
}

export default App

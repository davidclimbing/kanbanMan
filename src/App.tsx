import './App.css'
import Card from "./components/task-card/task-card.tsx";

function App() {
  const title = "Do Market Research"
  const id = "BUS-1"
  const points = 5

  return (
    <>
      <Card title={title} id={id} points={points}></Card>
      <Card title={title} id={id} points={points}></Card>
      <Card title={title} id={id} points={points}></Card>
      <Card title={title} id={id} points={points}></Card>
      <Card title={title} id={id} points={points}></Card>
    </>
  )
}

export default App

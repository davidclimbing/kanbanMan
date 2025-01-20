import {Task} from "../../schemas/task.ts";
import {useState} from "react";

const highPriority = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="red" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
</svg>
const mediumPriority = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="orange" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
</svg>
const lowPriority = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="blue" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
</svg>


const Card = ({task, updateTask}: {
  task: Task
  updateTask: (task: Task) => void
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const points = task.points || 0
  const updatePoints = (direction: 'up' | 'down') => {
    const fib = [0, 1, 2, 3, 5, 8, 13]
    const index = fib.indexOf(points)
    const nextIndex = direction === 'up' ? index + 1 : index - 1
    const newPoints = fib[nextIndex]
    if(newPoints) {
      updateTask({...task, points: newPoints})
    }
  }

  return <div className="border rounded-lg px-2 m-2 bg-gray-50 w-56">
    <div className="text-base font-base py-2">
      {isEditingTitle ? (
          <input
            autoFocus
            className="w-full"
            onBlur={() => setIsEditingTitle(false)}
            value={task.title}
            onChange={(e) => updateTask({...task, title: e.target.value})}
          />
        ) :
        <div onClick={() => setIsEditingTitle(true)}>
          {task.title}
        </div>
      }
    </div>
    <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
      <div className="flex gap-2">
        <div>{task.id}</div>
        <div>{task.priority}</div>
        {task.priority === 'high' && highPriority}
        {task.priority === 'medium' && mediumPriority}
        {task.priority === 'low' && lowPriority}
      </div>
      <div className="flex gap-2 items-center">
        <button onClick={() => updatePoints('down')}>-</button>
        <div className="font-bold">{points}</div>
        <button onClick={() => updatePoints('up')}>+</button>
      </div>
    </div>
  </div>
}


export default Card

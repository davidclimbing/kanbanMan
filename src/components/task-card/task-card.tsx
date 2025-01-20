import {Task} from "../../schemas/task.ts";

const Card = ({task}: {
  task: Task
}) => {
  return <div className="text-3xl border rounded-lg px-2 m-2 bg-gray-50 w-80">
    <div className="text-base font-base py-2">
      {task.title}
    </div>
    <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
      <div>{task.id}</div>
      <div>{task.points}</div>
    </div>
  </div>
}

export default Card

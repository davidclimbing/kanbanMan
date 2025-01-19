import {Task} from "../../schemas/task.ts";

const Card = ({task}: {
  task: Task
}) => {
  return <div className="text-4xl border rounded-lg px-2 m-2">
    <div className="text-4xl py-2">
      {task.title}
    </div>
    <div className="flex gap-4 justify-between py-2">
      <div>{task.id}</div>
      <div>{task.points}</div>
    </div>
  </div>
}

export default Card
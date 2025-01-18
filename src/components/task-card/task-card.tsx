const Card = ({title, id, points}) => {
  return <div className="text-4xl border rounded-lg px-2 m-2">
    <div className="text-4xl py-2">
      {title}
    </div>
    <div className="flex gap-4 justify-between py-2">
      <div>{id}</div>
      <div>{points}</div>
    </div>
  </div>
}

export default Card
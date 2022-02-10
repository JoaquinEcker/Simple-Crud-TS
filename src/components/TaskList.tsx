import { Task } from "../interfaces/taskInterface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, deleteTask }: Props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="col-md-4 pb-2"
          style={{ paddingLeft: "4px", paddingRight: "4px" }}
        >
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </div>
  );
}

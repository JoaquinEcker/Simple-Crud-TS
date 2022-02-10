import { userInfo } from "os";
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/taskInterface";

interface Props {
  newAddTask: (task: Task) => void;
}

type HandleInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ newAddTask }: Props) {
  const [task, setTask] = useState<Task>(initialState);

  const handleInputChange = (e: HandleInput) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };

  const inputTitle = useRef<HTMLInputElement>(null);

  return (
    <div className="card card-body bg-secondary">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          value={task.title}
          autoFocus
          ref={inputTitle}
        />
        <textarea
          onChange={handleInputChange}
          name="description"
          rows={2}
          placeholder="Write a descrpition"
          className="form-control mb-3 shadow-none border-0"
          value={task.description}
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}

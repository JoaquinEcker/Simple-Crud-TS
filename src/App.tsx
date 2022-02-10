import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Task } from "./interfaces/taskInterface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface AppProps {
  title?: string;
}

function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  const getCurrentDate = (): number => {
    return new Date().getTime();
  };

  const newAddTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: getCurrentDate(), completed: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((taske) => taske.id !== id));
  };

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="reactLogo" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={newAddTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

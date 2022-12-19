import { ChangeEvent, useState } from "react";
import "./styles.css";

interface Task {
  id: number | undefined;
  task: string | undefined;
}
export default function App() {
  const [task, setTask] = useState<Task>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleInputTask = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setTask({ task: value, id: tasks.length });
  };

  console.log(tasks);

  const handleSubmitTask = () => {
    // const id = tasks.length - 1;
    setTasks([task]);
  };

  return (
    <div className="App">
      <div className="background">
        a
        <div className="wraper">
          <div className="container">
            <h2>MY TODO LIST</h2>
            <div className="inputArea">
              <input type="text" className="input" onChange={handleInputTask} />
              <button className="button" onClick={handleSubmitTask}>
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            <div className="tasks-container">
              {tasks.map((task) => (
                <p key={task.id} className="task">
                  {task.task}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

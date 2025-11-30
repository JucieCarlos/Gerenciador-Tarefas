import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import Tarefa from "./Tarefa";
import { List, Typography } from "@mui/material";

export default function ListaDeTarefas() {
  const { state } = useContext(TaskContext);

  const filteredTasks =
    state.filter === "all"
      ? state.tasks
      : state.filter === "completed"
      ? state.tasks.filter((t) => t.completed)
      : state.tasks.filter((t) => !t.completed);

  return (
    <>
      {filteredTasks.length === 0 ? (
        <Typography textAlign="center" color="text.secondary">
          Nenhuma tarefa encontrada.
        </Typography>
      ) : (
        <List>
          {filteredTasks.map((task) => (
            <Tarefa key={task.id} task={task} />
          ))}
        </List>
      )}
    </>
  );
}


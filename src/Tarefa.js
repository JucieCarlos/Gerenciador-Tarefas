import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { ListItem, Checkbox, Typography } from "@mui/material";

export default function Tarefa({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        py: 1,
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />

      <Typography
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          fontSize: "1.1rem",
        }}
      >
        {task.title}
      </Typography>
    </ListItem>
  );
}


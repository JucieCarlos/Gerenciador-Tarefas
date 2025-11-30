import { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";
import ListaDeTarefas from "./ListaDeTarefas";
import {
  Container,
  TextField,
  Button,
  Stack,
  Typography,
  Paper,
  ButtonGroup,
} from "@mui/material";

export default function App() {
  const { dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTask("");
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" textAlign="center" mb={3} fontWeight="bold">
          Gerenciador de Tarefas
        </Typography>

        <Stack direction="row" spacing={2} mb={3}>
          <TextField
            variant="outlined"
            fullWidth
            label="Digite uma tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" onClick={addTask}>
            Adicionar
          </Button>
        </Stack>

        {/* Filtros */}
        <ButtonGroup fullWidth sx={{ mb: 3 }}>
          <Button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
            Todas
          </Button>
          <Button onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}>
            Concluídas
          </Button>
          <Button onClick={() => dispatch({ type: "SET_FILTER", payload: "pending" })}>
            Pendentes
          </Button>
        </ButtonGroup>

        <ListaDeTarefas />
      </Paper>
    </Container>
  );
}

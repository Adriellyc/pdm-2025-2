import axios from "axios";

// URL do seu back-end publicado na Vercel
const API_URL = "https://aos-2025-2-i8gv.vercel.app";

const api = axios.create({
  baseURL: API_URL,
});

export const getTasks = () => api.get("/tarefas");
export const createTask = (task) => api.post("/tarefas", task);
export const updateTask = (id, task) => api.put(`/tarefas/${id}`, task);
export const deleteTask = (id) => api.delete(`/tarefas/${id}`);

export default api;
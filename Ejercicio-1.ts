/**1. Gestor de tareas con estados
Crea un tipo Tarea que tenga las propiedades: id, descripción, si está completada,
y un estado que solo puede ser "pendiente", "en_progreso" o "finalizada".
Implementa una función que reciba una lista de tareas y devuelva solo aquellas
que estén en progreso o pendientes.*/






type TaskStatus = "pendiente" | "en_progreso" | "finalizada";
type Task = {
id: number;
description: string;
isComplete: boolean;
status: TaskStatus
}
function getTaskProgressOrPending(tasks: Task[]) {
return tasks.filter((task: Task) => task.status !== "finalizada")
}
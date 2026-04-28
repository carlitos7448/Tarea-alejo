/**6. Sistema de calificaciones por categoría
Crea una tipo Calificación con estudianteId, materia, categoría ("tareas", "quices",
"examen") y nota.
Escribe una función que calcule el promedio por categoría para un estudiante
específico.*/

type Categoria = "tareas" | "quices" | "examen";

interface Calificacion {
  estudianteId: string;
  materia: string;
  categoria: Categoria;
  nota: number;
}

const promedioPorCategoria = (notas: Calificacion[], estudianteId: string) => {
  const notasEstudiante = notas.filter(n => n.estudianteId === estudianteId);

  return notasEstudiante.reduce((acc, curr) => {
    const { categoria, nota } = curr;
    if (!acc[categoria]) {
      acc[categoria] = { suma: 0, cantidad: 0 };
    }
    acc[categoria].suma += nota;
    acc[categoria].cantidad += 1;
    return acc;
  }, {} as Record<string, { suma: number; cantidad: number }>);
};
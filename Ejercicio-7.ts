/**7. Control de stock con reglas personalizadas

Ejercicios de tipos 3

Define un tipo Producto que incluya id, nombre, cantidad y categoría ("alimentos",
"tecnología", "papelería").
Crea una función que evalúe si un producto tiene bajo stock dependiendo de la
categoría:
alimentos: menos de 20 unidades
tecnología: menos de 5 unidades
papelería: menos de 50 unidades*/

type CategoriaProducto = "alimentos" | "tecnología" | "papelería";

interface Producto {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: CategoriaProducto;
}

const tieneBajoStock = (producto: Producto): boolean => {
  const reglas: Record<CategoriaProducto, number> = {
    alimentos: 20,
    tecnología: 5,
    papelería: 50
  };

  return producto.cantidad < reglas[producto.categoria];
};
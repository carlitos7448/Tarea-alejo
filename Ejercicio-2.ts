/**2. Agrupación por tipo de transacción
Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y
la categoría.

Ejercicios de tipos 1

Crea una función que reciba un arreglo de transacciones y retorne un objeto que
contenga la suma total agrupada por tipo.*/

// { ingreso: 350000, egreso: 180000 }
type TipoTransaccion = "ingreso" | "egreso"
type Transaccion = {
monto: number;
tipo: TipoTransaccion;
categoria: string;
}
function groupTransactionsByType(transacciones: Transaccion[]) {
return transacciones.reduce((acc, cur) => {
if (cur.tipo === "ingreso") {
acc.ingreso += cur.monto;
} else {
acc.egreso += cur.monto;
}
return acc;
}, {ingreso: 0, egreso: 0})
}
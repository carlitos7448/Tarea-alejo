/*10. Sistema de pagos con métodos variados
Modela un tipo Pago que tenga una propiedad método , que puede ser "tarjeta",
"efectivo" o "transferencia".
Cada método requiere distintos campos:
"tarjeta": número de tarjeta y CVV
"transferencia": banco y número de cuenta
"efectivo": no requiere datos adicionales
Crea una función que reciba un pago y valide que se hayan ingresado los datos
obligatorios dependiendo del método.*/

type Pago = 
  | { metodo: "tarjeta"; numero: string; cvv: number }
  | { metodo: "transferencia"; banco: string; cuenta: string }
  | { metodo: "efectivo" };

const validarPago = (pago: Pago): boolean => {
  if (pago.metodo === "tarjeta") return !!(pago.numero && pago.cvv);
  if (pago.metodo === "transferencia") return !!(pago.banco && pago.cuenta);
  if (pago.metodo === "efectivo") return true;
  return false;
};
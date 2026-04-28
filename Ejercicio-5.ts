/*5. Historial de cambios de usuario
Modela un historial de cambios de un usuario, donde cada cambio puede ser de
nombre, correo o contraseña.
Escribe una función que reciba una lista de estos cambios y devuelva un resumen
con el número de veces que se cambió cada uno.*/


type TipoCambio = "nombre" | "correo" | "contraseña";

interface CambioUsuario {
  tipo: TipoCambio;
  valorAnterior: string;
  valorNuevo: string;
  fecha: Date;
}

const resumirHistorial = (historial: CambioUsuario[]) => {
  return historial.reduce((resumen, cambio) => {
    resumen[cambio.tipo] = (resumen[cambio.tipo] || 0) + 1;
    return resumen;
  }, {} as Record<TipoCambio, number>);
};
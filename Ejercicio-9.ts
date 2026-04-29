/*9. Conversor de unidades tipado
Diseña una función que permita convertir entre distintas unidades de medida:
"cm", "m" y "km".
Usa un tipo unión para representar las unidades posibles y asegúrate de validar
correctamente los valores de entrada y salida.*/


type Unidad = "cm" | "m" | "km";

const convertirUnidades = (valor: number, desde: Unidad, a: Unidad): number => {
  const factores: Record<Unidad, number> = {
    cm: 0.01,
    m: 1,
    km: 1000
  };

  const valorEnMetros = valor * factores[desde];
  return valorEnMetros / factores[a];
};

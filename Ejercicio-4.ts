/*4. Validación de formularios dinámicos
Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
"email") y valor (que puede ser string o number).
Desarrolla una función que valide una lista de campos y devuelva los nombres de
los campos inválidos según su tipo.*/

type CampoFormulario = {
  nombre: string;
  tipo: "texto" | "numero" | "email";
  valor: string | number;
};

const validarCampos = (campos: CampoFormulario[]): string[] => {
  return campos
    .filter((campo) => {
      if (campo.tipo === "numero") return typeof campo.valor !== "number";
      if (campo.tipo === "texto") return typeof campo.valor !== "string";
      if (campo.tipo === "email") {
        return typeof campo.valor !== "string" || !campo.valor.includes("@");
      }
      return false;
    })
    .map((campo) => campo.nombre);
};
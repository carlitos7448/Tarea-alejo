/*8. Filtro avanzado de usuarios
Crea un tipo Usuario con nombre, edad, estado activo y rol ("admin", "editor",
"visitante").
Implementa una función que devuelva únicamente los usuarios que sean mayores
de edad, estén activos y no tengan el rol de visitante.*/


type Rol = "admin" | "editor" | "visitante";

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
  rol: Rol;
}

const filtrarUsuariosAcceso = (usuarios: Usuario[]): Usuario[] => {
  return usuarios.filter(u => 
    u.edad >= 18 && 
    u.activo && 
    u.rol !== "visitante"
  );
};
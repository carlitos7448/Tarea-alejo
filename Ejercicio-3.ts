/**3. Sistema de notificaciones
Define una unión de tipos para representar notificaciones por email, SMS y push.
Cada una debe tener propiedades distintas.
Implementa una función enviarNotificacion que reciba una notificación y ejecute
una lógica distinta dependiendo del tipo (usando type narrowing)..*/


type SMS = {
numero: number;
mensaje: string;


}
type Email = {
receptor: string;
mensaje: string
}
type Push = {
esquina: string
}
type Notificacion = SMS | Email | Push


    
    import { Vehiculo } from "./Vehiculo";
import { Factura } from "./Factura";
import { Tarifa } from "./Tarifa";
import { Estacionamiento } from "./Estacionamiento";

export class Ticket{
     codigoTic : number = 0;
	 fecha: string = '';
	 mensaje: string = '';
     vehiculo! : Vehiculo;
     factura! : Factura;
     tarifa! : Tarifa;
     estacionamiento! : Estacionamiento;
}




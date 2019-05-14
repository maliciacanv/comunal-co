import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface Visitor {
  foto: string;
  nombre: string;
  correo: string;
  empresaVisitada: string;
  persona: string;
  empresaVisitante: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalServicesService {
  
  constructor() { }

}

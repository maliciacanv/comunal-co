import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


interface Visitor {
  foto: string;
  nombre: string;
  correo: string;
  empresaPorVisitada: string;
  persona: string;
  empresaVisitante: string;
  fecha: any;
  id: any;
  fechaDeSalida: any;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
   public Visitor = {
    foto: '',
    nombre: '',
    correo: '',
    empresaPorVisitada: '',
    persona: '',
    empresaVisitante: '',
    id: '',
    fechaDeSalida: ''
  };

  constructor(public firestore: AngularFirestore) {
  }


  getValue(name, email, companyVisitor, comunero, comuneroCompany) {

    const newObject = {
      ...this.Visitor,
      foto: '',
      nombre: name,
      correo: email,
      empresaPorVisitada: comuneroCompany,
      persona: comunero,
      empresaVisitante: companyVisitor,
      fecha: new Date(),
      fechaDeSalida: '',
      id: Math.random()
    };
    this.firestore.collection('visitors').add(newObject);
    console.log('entro' + newObject.fechaDeSalida);
    }
}

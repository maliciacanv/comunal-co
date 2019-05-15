import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface Visitor {
  foto: string;
  nombre: string;
  correo: string;
  empresaPorVisitada: string;
  persona: string;
  empresaVisitante: string;
  fecha: string;
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
  };

  constructor(public firestore: AngularFirestore) {
  }


  getValue(name, email, companyVisitor, comunero, comuneroCompany) {
    console.log(name, email, companyVisitor, comunero, comuneroCompany)

    const newObject = {
      ...this.Visitor,
      foto: '',
      nombre: name,
      correo: email,
      empresaPorVisitada: comuneroCompany,
      persona: comunero,
      empresaVisitante: companyVisitor,
    };
    this.firestore.collection('visitors').add(newObject);
    console.log(newObject)

    }
}

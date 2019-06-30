import { Component,  } from '@angular/core';
import { FirebaseServicesService } from '../../services/firebase/firebase-services.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

 empresas: any;
 empresa = '';

 valorCapturado = '';
 valorEmpresa = '';

 cantidad = 0;

 photo:'';
 
  constructor(public firestore: FirebaseServicesService,
              public router: Router) {

  this.firestore.getEmpresas().subscribe((data) => {
    this.empresas = data;
  })
  }

  getVisitorValues(name, email, companyVisitor, comunero, cantidad, foto) {
  this.firestore.getValue(name, email, companyVisitor, comunero, cantidad, foto);
  console.log(name, email, companyVisitor, comunero, cantidad,foto)
  this.sendNotification();
  }


  capturarValor(empresaNombre: string, nombre: string){
  this.valorCapturado = empresaNombre;
  this.valorEmpresa = nombre;
  
  }
 

  aumentar() {
    this.cantidad += 1;
  }

  disminuir() {
    this.cantidad -= 1;
  }

  aceptar(){
     this.router.navigateByUrl('/home');
  }


  sendNotification(){
    fetch('https://laboratoria-hackaton.herokuapp.com/notification',
    {
      body: JSON.stringify({
        message: 'hola tu visita a llegado',
      }),
     method: 'POST',
 
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    }
    )
  }

}
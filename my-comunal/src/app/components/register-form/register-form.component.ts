import { Component,  } from '@angular/core';
import { FirebaseServicesService } from '../../services/firebase/firebase-services.service';



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
 
  constructor(public firestore: FirebaseServicesService,
    ) {

  this.firestore.getEmpresas().subscribe((data) => {
    this.empresas = data;
  })


   }


   



//   validateUserInputs(name: string, email: string, empresa: string, anfitrion: string) {
//     if (email === '') {
//      alert('Debes ingresar tu email');
//    }
//  }

  getVisitorValues(name, email, companyVisitor, comunero, cantidadVisitantes, imagen) {
  this.firestore.getValue(name, email, companyVisitor, comunero, cantidadVisitantes, imagen);
  console.log(name, email, companyVisitor, comunero, cantidadVisitantes, imagen);
  
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

  focusInput(id) {
    document.getElementById(id).style.color = '#00a8cd';
}

  blurInput(id) {
      document.getElementById(id).style.color = '#000013';
  }

    aceptarCondition() {
      const element: any =  document.getElementById('cbox1');
      element.checked = true;
  }

  

}
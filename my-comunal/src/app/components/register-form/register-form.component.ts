import { Component,  } from '@angular/core';
import { FirebaseServicesService } from '../../services/firebase/firebase-services.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(public firestore: FirebaseServicesService) { }

  getVisitorValues(name, email, companyVisitor, comunero, comuneroCompany) {
  this.firestore.getValue(name, email, companyVisitor, comunero, comuneroCompany);
  }

}
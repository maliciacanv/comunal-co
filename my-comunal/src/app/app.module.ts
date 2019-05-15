import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FirebaseServicesService } from './services/firebase/firebase-services.service';
import { LocalServicesService } from './services/local/local-services.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { FilterEmpresasPipe } from './pipes/filter-empresas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    FilterEmpresasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [FirebaseServicesService, LocalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

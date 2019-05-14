import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FirebaseServicesService } from './services/firebase/firebase-services.service';
import { LocalServicesService } from './services/local/local-services.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [FirebaseServicesService, LocalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

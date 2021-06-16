import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatFirestoreComponent } from './pages/chat-firestore/chat-firestore.component';
import { ListadoFirestoreComponent } from './pages/listado-firestore/listado-firestore.component';
import { ListadoRealtimeComponent } from './pages/listado-realtime/listado-realtime.component';
import { FormSubirArchivosComponent } from './componentes/form-subir-archivos/form-subir-archivos.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    AppComponent,
    ChatFirestoreComponent,
    ListadoFirestoreComponent,
    ListadoRealtimeComponent,
    FormSubirArchivosComponent,
    
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxJsonViewerModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

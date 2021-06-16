import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatFirestoreComponent } from './pages/chat-firestore/chat-firestore.component';
import { ListadoFirestoreComponent } from './pages/listado-firestore/listado-firestore.component';
import { ListadoRealtimeComponent } from './pages/listado-realtime/listado-realtime.component';
import { TicketsComponent } from './pages/tickets/tickets.component';

const routes: Routes = [
  { path: '', redirectTo: 'operacionesTicket', pathMatch: 'full' },
  { path: 'chat', component: ChatFirestoreComponent },
  { path: 'listadoFireStore', component: ListadoFirestoreComponent },
  { path: 'listadoRealtime', component: ListadoRealtimeComponent },
  { path: 'operacionesTicket', component: TicketsComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

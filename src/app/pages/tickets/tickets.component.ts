import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/servicios/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public respuesta:any = "...";
  public expandido = false;
  private ultimaEjecucion = null;
  constructor( private ticketService: TicketService ) { }

  ngOnInit(): void {
   
  }


  botones=[
    {
      descripcion:"Obtener Todos los tickets",
      link: "/",
    },
    {
      descripcion:"Cada cuanto y que desperfecto",
      link: "cadaCuanto",
    },
    {
      descripcion:"Obtiene los tickets por tipo",
      link:"type?type=cambioPlan",
    },
    {
      descripcion:"Que usuario atiende mas tickets",
      link:"AtiendeMasTickets",
    },
    {
      descripcion:"Horas en las que hay mas trabajo",
      link:"findHoraMasTrabajo",
    },
    {
      descripcion:"Tickets Cerrados",
      link:"findClosedTickets",
    },
    {
      descripcion:"Tickets Abiertos",
      link:"findOpenTickets",
    },
    {
      descripcion:"Que centros atienden por zona",
      link:"findCentroAtencionPorZona",
    },
    {
      descripcion:"Cliente que genera mas tickets",
      link:"findClienteMasTickets",
    },
    {
      descripcion:"Clientes con tickets pendientes",
      link:"findClienteTicketsPendientes",
    },
    {
      descripcion:"Empleado que genero tickets",
      link:"findEmpleadoTicket",
    }

  ]

  traerResultado(boton : any){
    this.ticketService.callMethod(boton.link).then((datos : any)=>{
      datos.subscribe((response:any)=>{
        this.respuesta = response
      })
    });
  }

  changeExpand(){
    this.expandido = !this.expandido;
  }

}

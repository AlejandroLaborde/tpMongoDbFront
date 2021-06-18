import { HttpParams } from '@angular/common/http';
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
  public selectedOptionType = "Select type"
  public ultimaEjecucion = {descripcion:null,link:null}
  public dateTo:any;
  public dateFrom:any;
  constructor( private ticketService: TicketService ) { }

  ngOnInit(): void {

    var parametros = {typo: "sasdas", dateTo:"2021", dateFrom:"asd"}
    for (const key in parametros) {
      if (Object.prototype.hasOwnProperty.call(parametros, key)) {
        console.log(key)
        const i :string = key + "";
        console.log( parametros['dateFrom'] )
      }
    }

   
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
      link:"type",
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
        this.dateFrom = undefined;
        this.dateTo = undefined;
        this.ultimaEjecucion = boton;
        this.respuesta = response
      })
    });
  }

  getTicketTypeParametros(){
    const params = new HttpParams().set("type",this.selectedOptionType).set("dateTo",this.dateTo.toString()).set("dateFrom",this.dateFrom.toString());
    this.ticketService.callMethod(this.ultimaEjecucion.link, params).then((datos : any)=>{
      datos.subscribe((response:any)=>{
        if(response.length == 0){
          this.respuesta = "...";
        }else{
          this.respuesta = response
        }
      })
    });
  }

  filtrarPorFechas(){
    const params = new HttpParams().set("dateTo",this.dateTo.toString()).set("dateFrom",this.dateFrom.toString());
    this.ticketService.callMethod(this.ultimaEjecucion.link, params).then((datos : any)=>{
      datos.subscribe((response:any)=>{
        if(response.length == 0){
          this.respuesta = "...";
        }else{
          this.respuesta = response
        }
      })
    });
  }

  

  changeExpand(){
    this.expandido = !this.expandido;
  }


}

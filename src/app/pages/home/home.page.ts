import { Component } from '@angular/core';
//agregamos esta importacion(control de formularios)
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //EN SU INTERIOR SE DECLARAN LOS OBJETOS A INJECTAR EN LA PAGINA TYPESCRIPT
  constructor() {}

  //DEFIMICIO DE VARIABLES nombre: "valor inicial"
  // String, number, boolean, any(cualquier dato), array(definicion de arreglo)
  rut:String ="453534";
  nombreCompleto:String ="";
  edad:Number;
  //Declaracion de objetos de tipo formulario
  //elrut = new FormControl('');
  //elnombre = new FormControl('');
  //laedad = new FormControl('');

  //grupo de controles de persona
  persona = new FormGroup({
    elrut : new FormControl(''),
    elnombre : new FormControl(''),
    laedad : new FormControl('')
  });

  //creacion d arreglo que contiene el listado de "personas"
  lista_personas = new Array();

  //metodo de acceso
  cambiarDatos(){
    console.log(this.lista_personas);
  }

  enviar(){
    console.log(this.persona.value);
    this.lista_personas.push(this.persona);
  }

}


// IMPLEMENTACION DE CODIGO EN JAVASCRIPT



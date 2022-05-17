import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solidictamen',
  templateUrl: './solidictamen.component.html',
  styleUrls: ['./solidictamen.component.css']
})
export class SolidictamenComponent implements OnInit {

  public solidictamen: FormGroup;

  constructor(private formbuilder: FormBuilder){}

  ngOnInit() {
    this.solidictamen = this.formbuilder.group({
      fechasolicitud: ['', Validators.required],
      motivodictamen: ['', Validators.required],
      tipodictamen: ['', Validators.required],
      peticion: ['', [Validators.required, Validators.minLength(20)]]


    });

  }  

   send(): any{
     console.log(this.solidictamen.value);
   }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formdeportivos',
  templateUrl: './formdeportivos.component.html',
  styleUrls: ['./formdeportivos.component.css']
})
export class FormdeportivosComponent implements OnInit {

  public formdeportivos: FormGroup;

  constructor(private formbuilder: FormBuilder){}

  ngOnInit() {

    this.formdeportivos= this.formbuilder.group({
      deporte: ['', Validators.required],
      entrenador: ['', Validators.required],
      categoria: ['', Validators.required],
      asociacion: ['', Validators.required],
      fechadeinicio: ['', Validators.required],
      lugardeentrenamiento: ['', Validators.required],
      horaentrada: ['', Validators.required],
      horasalida: ['', Validators.required],
      deportecompetencia: ['', Validators.required],
      competencia: ['', Validators.required],
      sede: ['', Validators.required],
      patrocinador: ['', Validators.required],
      fechainicio: ['', Validators.required],
      fechatermino: ['', Validators.required]


    });

  }

  send(): any{
    console.log(this.formdeportivos.value);
  }

}

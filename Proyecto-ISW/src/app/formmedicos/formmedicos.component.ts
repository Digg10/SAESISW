import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formmedicos',
  templateUrl: './formmedicos.component.html',
  styleUrls: ['./formmedicos.component.css']
})
export class FormmedicosComponent implements OnInit {

  public formmedicos: FormGroup;

  constructor(private formbuilder: FormBuilder){}

  ngOnInit() {

    this.formmedicos= this.formbuilder.group({
      peso: ['', Validators.required],
      estatura: ['', Validators.required],
      tipodesangre: ['', Validators.required],
      seguro: ['', [Validators.required, Validators.maxLength(10)]],
      fechadeinicio: ['', Validators.required],
      fechaalta: ['', Validators.required],
      fechabaja: ['', Validators.required],
      enfermedades: ['', Validators.required],
      problemasfisicos: ['', Validators.required],
      pieplano: ['', Validators.required],
      alergias: ['', Validators.required],
      describirenfermedad: ['', Validators.required]
      


    });

  }

  send(): any{
    console.log(this.formmedicos.value);
  }
  

}

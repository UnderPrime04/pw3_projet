import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroForm: FormGroup;

  constructor(private builder:FormBuilder){
      this.cadastroForm = builder.group({nome:["", [Validators.minLength(15), Validators.minLength(2)]],
    usuario:["", [Validators.minLength(15), Validators.maxLength(2)]],
    email:["",  [Validators.minLength(15), Validators.minLength(2)]],
    senha:["", Validators.required],
    confirmarsenha:[],
    aceite:[false]
  })
  }

  cadastrar(){
    console.log(this.cadastroForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContagemService } from './contagem.service';
import { Usuario } from 'src/app/usuario';
import { Contagem } from 'src/app/models/contagem.model';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'


@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.component.html',
  styleUrls: ['./contagem.component.scss']
})
export class ContagemComponent implements OnInit {

    form:FormGroup;
    numberMask: any;
    mask:any;

  constructor(private fb:FormBuilder, private service:ContagemService) {
    this.numberMask = createNumberMask({
      allowDecimal: true,
      decimalSymbol: ',',
      thousandsSeparatorSymbol: '.',
      prefix: 'R$ ',
      suffix: ''
    })

    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    }

    
    
    
    ngOnInit() {
    
    this.form = this.fb.group({
      contagemResumoId:this.fb.control(''),
      movimentoId: this.fb.control(''),
      descricao: this.fb.control('',[Validators.required]),
      valorSistema: this.fb.control(''),
      data: this.fb.control(''),
      status: this.fb.control(''),     
      usuario: this.fb.control('').disable(),
      dataAlteracao: this.fb.control(''),


    });
    


    this.service.contagemById('1').subscribe(data => {
      this.form.setValue({
        contagemResumoId:data.contagemResumoId,
        movimentoId: data.movimentoId,
        descricao: data.descricao,   
        valorSistema:data.valorSistema,
        data: data.data,
        status: data.status,
        usuario:data.usuario,
        dataAlteracao: data.dataAlteracao
       
      });
      console.log(data)
    });


    

  }


  salvar(contagem: Contagem){
 var test = contagem.valorSistema.toString().replace(/[^\d,-]/g, '');
    console.log(contagem);

    this.service.putContagem(contagem.contagemResumoId, contagem).subscribe(
data => {
  console.log(data)

}

    )

  }

}

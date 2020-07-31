import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';

import *  as sgMail from '@sendgrid/mail'
@Component({
    selector: 'assine-agora',
    templateUrl: './contratar.component.html',
    styleUrls:['./contratar.component.scss']
})
export class ContratarComponent implements OnInit{

    assinanteForm: FormGroup;
    public MASKS = MASKS;

    constructor( private fb: FormBuilder){}


    ngOnInit(): void {
       this.criarForm();
    }

    // enviarEmail(){

    //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //     let msg = {
    //         to: 'alla.4o4975@gmail.com',
    //         from: 'alla.4o4975@gmail.com',
    //         subject: 'Pedido de produto',
    //         text: 'and easy to do anywhere, even with Node.js',
    //         html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    //     }

    // }

    enviarForm(){
        console.log(this.assinanteForm.value);
    }
    criarForm(){
        this.assinanteForm = this.fb.group({

            plano: 
            [
                ''
            ],
            cep:
            [
                '',
                Validators.compose([
                    Validators.required,
                     NgBrazilValidators.cep
                ])

            ],
            endereco:
            [
                '',
              Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(50)
              ])
            ],
            numero:
            [
                '',
                Validators.required
            ],
            complemento:
            [
                '',
             Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(40)
             ])
            ],
            bairro:
            [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30)
                ])
            ],
            nome:
            [
                '',
                Validators.compose([
                    Validators.required,
                Validators.minLength(5),
                Validators.maxLength(60)
                ])
            ],
            telefone:
            [
                '',
                Validators.compose([
                    Validators.required,
                NgBrazilValidators.telefone
                ])
            ],
            email:
            [
                '',
               Validators.compose([
                Validators.required,
                Validators.email
               ])
            ]
        })
    }
}
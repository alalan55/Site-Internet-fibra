import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged, filter,
    map,
    switchMap,
    catchError,
    startWith
  } from 'rxjs/operators';
  
import *  as sgMail from '@sendgrid/mail'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
    providedIn: 'root'
})

export class MessageService{
    process: any;

    constructor(private http: HttpClient){}

    // enviarProposta(message: string): Observable<Message>{
    //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //     let msg = {
    //         to: 'alla.4o4975@gmail.com',
    //         from: 'alla.4o4975@gmail.com',
    //         subject: 'Sending with Twilio SendGrid is Fun',
    //         text: 'and easy to do anywhere, even with Node.js',
    //         html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    //     }

    //     sgMail.send(msg);
        
    //     return;
    // }

    // enviarObjToEmail(message: Observable<string>){
    //     return message.pipe(
    //         switchMap( message => this.enviarProposta(message))
    //     )

    }




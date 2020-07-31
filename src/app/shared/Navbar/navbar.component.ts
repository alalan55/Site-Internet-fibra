import { Component, AfterViewInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements AfterViewInit{
  

    constructor(){

    }

    ngAfterViewInit(): void {
        
        $('.navbar a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                    targetOffset = $(id).offset().top;
                    
            $('html, body').animate({ 
                scrollTop: targetOffset - 100
            }, 500);
            
        });
    }

   
}
/*
  AngularJS2 Directive with Ionic2
  Copyright(C) 2016 Ha Hyeon soo

*/
import {Component, Directive} from '@angular/core';
import {ElementRef, HostListener, Input, Output} from '@angular/core';


@Directive({
    selector: '[directive]', // <div directive></div>
})
export class Directive_Attribute{
    
    private el: HTMLElement;
   
    constructor(el: ElementRef){
        console.log("[+] Directive Sample Init");
        this.el = el.nativeElement;
    }
    //Input Data
    @Input('directive') color : string;
    
    //Key Evnet
    
    @HostListener('mouseenter') onMouseEnter(){
        //TODO : mouse Enter Event
        console.log("[+] Mouse Enter on Directive");
        this.colorChange("#00FF00");
    }
    
    @HostListener('mouseleave') onMouseLeave(){
        //TODO : mouse Leave Event
        console.log("[-] Mouse Leave from Directive");
        this.colorChange('#FFF');
    }
    
    private colorChange(color: string){
        console.log("[*] Directive Change Color", color);
        this.el.style.backgroundColor = color;
    }
    
}

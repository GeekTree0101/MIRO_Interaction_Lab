/*
  AngularJS2 Directive with Ionic2
  Copyright(C) 2016 Ha Hyeon soo

*/

import {Component} from '@angular/core';
import {ElementRef, HostListener, Input, Output} from '@angular/core';
import {Pipe_Sample} from '../../../pipe/pipe_sample';
import {Directive_Attribute} from './directive_attribute';

@Component({
    selector : 'directive_sample', // <directive_sample></directive_sample>
    templateUrl : 'build/pages/sample_page/directive/directive_sample.html',
    pipes : [Pipe_Sample],
    directives : [Directive_Attribute]
})
export class Directive_Sample{
    
    constructor(){
        console.log("[+] Component for Directive Sample Init");
    }
}


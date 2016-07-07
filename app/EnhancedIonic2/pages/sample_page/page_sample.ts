/*
  AngularJS2 Component with Ionic2
  Copyright(C) 2016 Ha Hyeon soo

*/

//Import Angular
import {Component} from '@angular/core';
import {OnInit, OnDestroy} from '@angular/core';
import {Input, Output} from '@angular/core'; 

//Import Ionic2
import {NavController, Events} from 'ionic-angular';

//Import Service Module
import {Service_Sample} from '../../service/service_sample';

//Import Directive Module
import {Directive_Sample} from './directive/directive_sample';



//Component Configration section
@Component({
    templateUrl : 'build/pages/sample_page/page_sample.html',
    providers : [Service_Sample],
    directives : [Directive_Sample]
    // styleUrls: [style_sheet_file_name.css]
    // selector: target_name
    //pipes : [pipe_service_name]
})

export class SamplePage implements OnInit, OnDestroy{
    
    
    //Variable Section
    private Variable_sample : any;
    
    
    //Constructor
    constructor(
        private nav : NavController,
        private service : Service_Sample
    ){
        //TODO: When start this Component who is first start!
        console.log("[+] Component Start ")
    }
    
    ngOnInit(){
        //TODO: After [Constructor] LifeCycle 
        this.Variable_sample = "Hello world";
    }
    
    ngOnDestroy(){
       
    }
    
    sampleRun(){
        console.log("[*] User click runService");
        this.service.run();
    }
    
    sampleStop(){
        console.log("[*] User click stopService");
        this.service.stop();
        
    }
    
}
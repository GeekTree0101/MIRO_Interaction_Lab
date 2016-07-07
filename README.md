# [MIRO interaction lab : Enhanced Ionic2]

Enhanced Ionic2 such as Design Pattern, build system and so on

* **Using Jade:** Jade is a clean, whitespace-sensitive template language for writing HTML.
This Adventage is more Productivity and Fast to making Template! and so easy

* **Service & Pipe Directory:** Service & Pipe module must be opened for each app pages components.

* **Insert HTTPservice on service directory:** Easy GET/POST anywhere


## Example

This is HTTPservice sample

"""js
/*

  AngularJS2 Http Protocol service with Ionic2
  Copyright(C) 2016 Ha Hyeon soo

  How to Data passing to other services?
  > Follow me!
  
  1. import {Events} from 'ionic-angular'
  2. import {HttpProtocalService} from 'this module dir'
  3. constructor(public event : Events, private http : HttpProtocalService)
  4. this.http.GET/POST(parameter insert here!);
  5. this.event.subscribe("GET/POST", (recvData) => {
      //TODO: recvData is from GET/POST
      
  })



*/
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';

@Injectable()
export class HttpProtocalService{
    
    private returnData : any;
    
    constructor(private http : Http, public event : Events){
        console.log("[+] Http Protocol service init");
    }
    
  
    GET(type : string, url :string, userToken :string){
        
        //TODO: Http Protocol GET Task
            
        let authHeader = new Headers();
        
        //Header append
        if(userToken != null){
            console.log("[+] User Authoraization Header appending!");
            authHeader.append('Authoraization', userToken);
        }
        else{
            console.log("[-] User avoid Authoraization! He is Hacker!");
        }
        
        //Response Data Type selection
        if(type == "JSON"){
            
            this.http.get(url,{
                 headers : authHeader
                })
                .map(res => res.text())
                .subscribe(
                         data => this.returnData = data,
                         err => this.returnData = err ,
                         () => this.event.publish("GET",this.returnData)
                );
        }
        else{
            
            this.http.get(url,{
                 headers : authHeader
                })
                .map(res => res.json())
                .subscribe(
                         data => this.returnData = data,
                         err => this.returnData = err ,
                         () => this.event.publish("GET",this.returnData)
                );            
        }
        
    }

    
    
    POST(userData : string, type: string, url :string){
        
        //TODO: Http Protocal POST Task 
        let header = new Headers();
        console.log("[+] User call POST");
        
        //Header append
        header.append('Content-Type',type);
  
        this.http.post(url,userData,{
            headers: header
        })
        .map(res => res.json())
        .subscribe(
            data => this.returnData = data,
            err => this.returnData = err ,
            () => this.event.publish("POST",this.returnData)
        )
        
  
        
    }

    
}
"""


This is Component Sample

"""js
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
"""

so, Just Do it!

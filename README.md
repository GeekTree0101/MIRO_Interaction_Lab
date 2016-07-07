# [MIRO interaction lab : Enhanced Ionic2]

Enhanced Ionic2 such as Design Pattern, build system and so on

* **Using Jade:** Jade is a clean, whitespace-sensitive template language for writing HTML.
This Adventage is more Productivity and Fast to making Template! and so easy

* **Service & Pipe Directory:** Service & Pipe module must be opened for each app pages components.

* **Insert HTTPservice on service directory:** Easy GET/POST anywhere


## Example

This is HTTPservice sample

"""js

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
            
        let authHeader = new Headers();
        
        if(userToken != null){
            console.log("[+] User Authoraization Header appending!");
            authHeader.append('Authoraization', userToken);
        }
        else{
            console.log("[-] User avoid Authoraization! He is Hacker!");
        }
        
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
        
        let header = new Headers();
        console.log("[+] User call POST");
        
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

import {Component} from '@angular/core';
import {OnInit, OnDestroy} from '@angular/core';
import {Input, Output} from '@angular/core'; 

import {NavController, Events} from 'ionic-angular';

import {Service_Sample} from '../../service/service_sample';

import {Directive_Sample} from './directive/directive_sample';

@Component({
    templateUrl : 'build/pages/sample_page/page_sample.html',
    providers : [Service_Sample],
    directives : [Directive_Sample]
})

export class SamplePage implements OnInit, OnDestroy{
    
    private Variable_sample : any;
    
    constructor(
        private nav : NavController,
        private service : Service_Sample
    ){
        console.log("[+] Component Start ")
    }
    
    ngOnInit(){
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

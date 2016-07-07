import {Component} from '@angular/core'
import {SamplePage} from '../sample_page/SamplePage';
import {NavController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;


  constructor(private nav : NavController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = SamplePage;

  }
  
  
}
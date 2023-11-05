import { Component, OnInit, ViewChild } from '@angular/core';
import { NavComponentComponent } from '../nav-component/nav-component.component';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.page.html',
  styleUrls: ['./lister.page.scss'],
})
export class ListerPage implements OnInit {
  @ViewChild(NavComponentComponent)
  NavComponentComponent: NavComponentComponent;

  public alertButtons = [
    {
      text: 'Cancel',
      cssClass: 'alert-button-cancel',
      
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      
    },
  ];

  public newListAlert = [
    {
      text: 'Nej',
      cssClass: 'alert-button-cancel',
      
    },
    {
      text: 'Lav Liste',
      cssClass: 'alert-button-confirm',
      
    },
  ];

  setResult(ev) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }


  constructor() { }


  ngOnInit() {
  }

}

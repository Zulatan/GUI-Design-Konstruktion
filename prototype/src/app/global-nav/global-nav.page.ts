import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.page.html',
  styleUrls: ['./global-nav.page.scss'],
})
export class GlobalNavPage implements OnInit {

  constructor(private router: Router) { }

  navigateToTilbud() {
    this.router.navigate(['/tilbud']);
  }
  navigateToIndkoeb() {
    this.router.navigate(['/indkoeb']);
  }

  ngOnInit() {
  }

}

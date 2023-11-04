
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss'],
})
export class NavComponentComponent implements OnInit {
  pageTitle: string = 'Madindkøb'; // Initial text
  activeButton: string = 'Madindkøb';

  constructor(private router: Router) {}

  navigateToTilbud() {
    this.pageTitle = 'Tilbud'; // Ændre teksten når knappen klikkes på
    this.router.navigate(['/tilbud']);
    this.activeButton = 'tilbud';
  }

  navigateToIndkoeb() {
    this.pageTitle = 'Indkøb'; // Ændre teksten når knappen klikkes på
    this.router.navigate(['/indkoeb']);
    this.activeButton = 'indkoeb';
    
  }

  navigateToLister() {
    this.pageTitle = 'Lister'; // Ændre teksten når knappen klikkes på
    this.router.navigate(['/lister']);
    this.activeButton = 'lister';
  }

  ngOnInit() {}
}
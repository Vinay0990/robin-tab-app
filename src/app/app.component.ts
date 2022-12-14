import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'robin-tab-app';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Patient',
        link: 'patient',
        index: 0,
      },
      {
        label: 'Billing',
        link: 'billing',
        index: 1,
      },
      {
        label: 'Physician',
        link: 'physician',
        index: 2,
      },
      {
        label: 'Specimen',
        link: 'specimen',
        index: 3,
      },
      {
        label: 'Review',
        link: 'review',
        index: 4,
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}

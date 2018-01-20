import { Component } from '@angular/core';

// <li><a [routerLink]="['/home-developer']">Developer Home </a></li>
// <li><a [routerLink]="['/pm-forms']">Form - Basic </a></li>
// <li><a [routerLink]="['/add-developer']">Add Edit Form 1</a></li>

@Component({
  selector: 'pm-root',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/mock-data']">Mock-Data</a></li>
                    <li><a [routerLink]="['/list-users']">list-user.component</a></li>
                    <li><a [routerLink]="['/edit-users']">edit-user.component</a></li>
                    <li><a [routerLink]="['/surveys']">surveys</a></li>
                    <li><a [routerLink]="['/events']">Events</a></li>
                    <li><a [routerLink]="['/events/new']">Create Events</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Design Tester';
}

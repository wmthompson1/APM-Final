import { Component, OnInit } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import { Hero }    from './hero';
import {Developer} from '../forms/developer';
import {DeveloperCollection} from '../forms/developer_collection';


// @Directive({
//   selector: '[email-input]',
//   providers: [{
//     provide: NG_VALIDATORS,
//     multi: true,
//     useValue: validateEmail
//   }]  
// })

@Component({
  selector: 'pm-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [DeveloperCollection]
})
export class FormsComponent implements OnInit {

  developer = new Developer();
  errorMessage: string;
  successMessage: string;
  submitted = false;
  technologies: string[] = [
    'JavaScript',
    'C',
    'C#',
    'Clojure'
  ];

  // ^^^^^^^^^^ start of Angular docs ^^^^^^^^^
// The following was from the Angular docs
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  //submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  // ^^^^^^^^^^ end of Angular docs ^^^^^^^^^


  constructor(private developers: DeveloperCollection) { }

  addDeveloper() {
    this.developer.id = this.developers.getAll().length + 1;
    this.developers.addDeveloper(this.developer);
    this.successMessage = `Developer ${this.developer.realName} was successfully added`;
    this.submitted = true;
  }

  ngOnInit() {
  }

}

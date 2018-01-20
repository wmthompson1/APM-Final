import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { EventService } from './event.service'

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  providers: [EventService],
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
  `]
})
export class CreateEventComponent {
  constructor(private eventService:EventService, private router:Router) {
    
  }

//   saveEvent(event) {
//     this.eventService.saveEvent(event)
//     this.router.navigate(['/events'])
//   }

  saveEvent(blah) {
    this.eventService.saveEvent(blah)
    this.router.navigate(['/events'])
  }

  
    
  cancel() {
    this.router.navigate(['/events'])
  }
}
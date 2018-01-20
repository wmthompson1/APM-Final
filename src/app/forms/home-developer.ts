import {Component} from '@angular/core'; 
import {DeveloperCollection} from './developer_collection'; 
 
@Component({ 
  selector: 'home-developer', 
  templateUrl: './home-developer.html' ,
  providers: [DeveloperCollection]
}) 
export class HomeDeveloper { 
  constructor(private developers: DeveloperCollection) {}
 
  getDevelopers() { 
    return this.developers.getAll(); 
  } 
} 


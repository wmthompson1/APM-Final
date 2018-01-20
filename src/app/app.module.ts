import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { MockDataComponent } from './mock-data/mock-data.component';
import { TsfFooterComponent } from './tsf-footer/tsf-footer.component';
import { FormsComponent } from './forms/forms.component';
import { AddDeveloper } from './forms/add_developer';
//import { DeveloperCollection } from './forms/developer_collection';
import { FormsModule }   from '@angular/forms';
import { HomeDeveloper }    from './forms/home-developer';

import {ControlErrors} from './forms//control_errors';
import {EmailValidator} from './forms//email_validator';
import { ListUserComponent } from './products/list-user.component';

import { UserService } from './products/user.service'
import { AppConfig } from './app.config'
import { EditUserComponent } from './products/edit-user.component'
import { AdminService } from './products/admin.service'
import { SurveyRenderComponent } from './products/survey-render.component'; 

import { ManageSurveyComponent } from './products/manage-survey.component'; 
import { CreateEventComponent } from './create-event.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MockDataComponent,
    AddDeveloper,
  //  DeveloperCollection,
    TsfFooterComponent,
    FormsComponent,
    HomeDeveloper,
    ControlErrors,
    EmailValidator,
    ListUserComponent,
    EditUserComponent,
    SurveyRenderComponent,
    ManageSurveyComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: 'mock-data', component: MockDataComponent },
        { path: 'home-developer', component: HomeDeveloper },
        { path: 'add-developer', component: AddDeveloper },
        { path: 'pm-forms', component: FormsComponent },
        { path: 'list-users', component: ListUserComponent },
        { path: 'edit-users', component: EditUserComponent},
        { path: 'surveys', component: SurveyRenderComponent},
//        { path: "survey-render", component: SurveyRenderComponent },
        { path: "surveys/:id", component: ManageSurveyComponent },
        
     //   { path: 'events', component: EventsListComponent },
        { path: 'events/new', component: CreateEventComponent },

        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule,
    FormsModule
  ],
  providers: [UserService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

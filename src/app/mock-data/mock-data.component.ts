import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.css']
})
export class MockDataComponent implements OnInit {

      surveys: any  = [
       {
           "Id": 2,
           "Name": "2006 Post-School Status Follow-Up Surveyxx",
           "Description": "2006 Post-School Status of Special Education Graduates, 2006 Follow-up Study Telephone Survey, Seattle University",
           "SurveyTypeCode": "postschool",
           "Instructions": "test",
           "IsLocked": true,
           "CloseDate": "2007-07-01T21:58:47.903",
           "CreateDate": "2007-07-01T21:58:47.903",
           "CreatedBy": "admin",
           "UpdateDate": "2014-11-02T20:01:07.613",
           "UpdatedBy": "ccts@seattleu.edu",
           "SchoolYear": "2006-07",
           "LeaverYear": "2005-06",
           "IsReported": true,
           "OpenDate": "2007-07-01T21:58:47.903"
       },
       {
           "Id": 3,
           "Name": "Post-school Status of 2016 Special Education Student Leavers: 2015-16 Grads & Non-Grads",
           "Description": "2007 Post-School Status Follow-Up Survey",
           "SurveyTypeCode": "postschool",
           "Instructions": "test",
           "IsLocked": true,
           "CloseDate": "2007-07-01T21:58:47.903",
           "CreateDate": "2007-07-01T21:58:47.903",
           "CreatedBy": "admin",
           "UpdateDate": "2014-11-02T20:01:12.137",
           "UpdatedBy": "ccts@seattleu.edu",
           "SchoolYear": "2007-08",
           "LeaverYear": "2006-07",
           "IsReported": true,
           "OpenDate": "2007-07-01T21:58:47.903"
       },       
       {
        "Id": 911,
        "Name": "Post-school Faux Test of 2016 Special Education Student Leavers: 2015-16 Grads & Non-Grads",
        "Description": "2007 Post-School Faux Test Follow-Up Survey",
        "SurveyTypeCode": "postschool",
        "Instructions": "test",
        "IsLocked": true,
        "CloseDate": "2008-08-10T21:58:47.903",
        "CreateDate": "2008-08-101T21:58:47.903",
        "CreatedBy": "admin",
        "UpdateDate": "2014-11-02T20:01:12.137",
        "UpdatedBy": "ccts@seattleu.edu",
        "SchoolYear": "2007-08",
        "LeaverYear": "2006-07",
        "IsReported": true,
        "OpenDate": "2008-08-08T21:58:47.903"
      }


    ] 

  constructor() { }

  ngOnInit() {
  }

}

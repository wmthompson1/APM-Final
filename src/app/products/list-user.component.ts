import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../products/user.service";
import { IUser} from "../products/user"
//import { PsService } from "../Post-School/ps.service";
//import { DistrictSummary } from "./DistrictSummary";
//import { ReportsService } from "../reports/reports.service";

/**************************************************************************************
PURPOSE:    

SAMPLE EXEC:

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects

**************************************************************************************/

@Component({
    selector: "list-user",
    templateUrl: "list-user.component.html",
    //styleUrls: ["app/admin/survey-render.component.css"],
    providers: [UserService],
    encapsulation: ViewEncapsulation.None
})
export class ListUserComponent implements OnInit {

    //districts: Array<DistrictSummary> = [] as Array<DistrictSummary>;
    users: Array<IUser> = [] as Array<IUser>;
    //AgencyName: string;
    //leaverYear: string;
    // the code was copied here but progress was changed to status
    //statusValue: string;
    //email: string = "stanleyd@seattleu.edu";
    //agencyId: string;
    id: number;
    errorMessage: string;
    
    //constructor(private route: ActivatedRoute, private psService: PsService, private router: Router, private reportsService: ReportsService) {
        //this.AgencyName = "CCTS";
        //this.leaverYear = this.route.snapshot.params['schoolYear'];
        //this.agencyId = this.route.snapshot.params['agencyId'];
    //}

    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
       // this.id = this.route.snapshot.params['id'];
 
        this.getData();
    }


    getData(): void {
        this.userService
            .getAll()
                .subscribe(result => {
                    this.users = result;
                },
                error => this.errorMessage = <any>error);
    }
    totalCount: number = this.users.length;
    statusValue:  number = 0

    //getmyStyles(): any  {
    //   // this.totalCount = this.surveys.length;
    //    let totalCount = this.totalCount
    //    let statusValue = 0
    //    var myStyles = {};
    //    if ((this.statusValue === 100) && (this.totalCount === 0)) {
    //        myStyles = {
    //            "width.%": 100,
    //            "background": "lightblue",
    //            "float": "left"
    //        }
    //    } else if (this.statusValue === 100) {
    //        myStyles = {
    //            "width.%": +this.statusValue,
    //            "background": "lightgreen",
    //            "float": "left"
    //        }
    //    } else if (totalCount > 0 && statusValue !== 0) {
    //        myStyles = {
    //            "width.%": +this.statusValue,
    //            "background": "orange",
    //            "float": "left"
    //        }
    //    } else if (totalCount === 0) {
    //        myStyles = {
    //            "width.%": 100,
    //            "background": "lightgray",
    //            "float": "left"
    //        }
    //    } else {
    //        myStyles = {
    //            "width.%": 100,
    //            "background": "lightgray",
    //            "float": "left"
    //        }
    //    }

    //    return myStyles
    //}

    ngOnInit() {
       // this.id = null
            this.userService
                .getAll()
                .subscribe(result => {
                        this.users = result;
                    },
                        error => this.errorMessage = <any>error);
                }
    }

    //getstatusValue(progress: number): number {
    //    var progressString = (progress * 100.00).toFixed(0);
    //    return +progressString;
    //}



    //getPercent(total: number): number {
    //    var newTotal = (total * 100).toFixed(2);
    //    return +newTotal;
    //}

    //navigateToSSID(ssid: string) {
    //    this.router.navigate(['/ps-students-list', 0, this.leaverYear, ssid, 0]);
    //}

    //async doSSIDSearch(ssid: string) {
    //    this.psService
    //        .doSSIDSearch(ssid, this.email, this.leaverYear, +'-1')
    //        .subscribe(res => {
    //            this.router.navigate(['/ps-students-list/', res.SchoolId, this.leaverYear, ssid]);
    //        });
        
            
    //}

    //getContactRateReport() {
    //    let fileName: string = this.AgencyName + "-Indicator14-Extract.xlsx";

    //    this.reportsService
    //        .getPostSchoolContactReport(this.agencyId, this.leaverYear, this.AgencyName)
    //        .subscribe(blob => {
    //            var link: any = document.createElement('a');
    //            link.href = window.URL.createObjectURL(blob);
    //            link.download = fileName;
    //            link.click();
    //        });
    //}

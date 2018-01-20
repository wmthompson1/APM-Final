import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions, RequestMethod} from "@angular/http";
import {Router} from "@angular/router";
import {Observable, BehaviorSubject} from "rxjs/Rx";
import { ISurvey } from '../mock-data/survey'
import { IUser} from '../products/user'
import { AppConfig } from '../app.config'

@Injectable()
export class UserService { //extends BehaviorSubject<GridDataResult> {
    constructor(public _http: Http, private router: Router, config: AppConfig) {
        //super(null);
        //http://localhost:55555/users/
        let uri: string = config.apiUrl
        //let uri: string = 'http://localhost:55555'
        //this.baseUrl = window.location.origin;        
        this.baseUrl = uri;        
    }

    baseUrl: string;
        
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

    // id: number
    // + '/' + id;
    getAll(): Observable<IUser[]> {
        var fullUrl = this.baseUrl + '/users' 

        return this._http.get(fullUrl)
            .catch(this.handleError)
            .map(res => res.json());
    }

    update(user: IUser): Observable<IUser[]> {
        var fullUrl = this.baseUrl + '/users' 

        return this._http.put(fullUrl,user)
            .catch(this.handleError)
            .map(res => res.json());
    }

    create(user: IUser) {
        var fullUrl = this.baseUrl + '/users'
        return this._http.post(fullUrl , user);
    }

}
//http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/
//
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class usersService {

	private http : Http;

	constructor (http:Http) {
        this.http = http;
    }

    login(username, password) {
        return this.http.post("http://localhost:8888/api/users/login", {
        	username: username,
        	password: password
        }).toPromise();
    }
 
/*    favorite(property) {
        let body = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(favoritesURL, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
*/ 
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
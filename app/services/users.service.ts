//http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/
//
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class usersService {

	constructor (http:Http) {
        this.http = http;
    }

	login() : void {}
}
import { Injectable } from '@angular/core';
import { UserAccessToken } from '../models/userAccessToken.model';
import { User } from '../models/user.model';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import {LogService} from '../services/log.service';

@Injectable()
export class SessionService{
    
    private _logger;
    private _localst;

    private _user;

    constructor(private localst: LocalStorageService, private logger: LogService) {
    	this._localst = localst;
    	this._logger = logger;
    }

    private _readStorage() : void {
    	let token = this._localst.retrieve('c_u_token');
    	this._logger.log.debug('read storage, token: ', token);

    }
}
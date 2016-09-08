import {Page, ModalController, NavController} from 'ionic-angular';
//import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {usersService} from '../../services/users.service';
import {LogService} from '../../services/log.service';
import {SessionService} from '../../services/session.service';
import { ValidationService } from '../../services/validation.service';

import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
    templateUrl: 'build/pages/login/login.html',
    providers: [usersService, LogService, SessionService]
})
export class LoginPage {
    private _user : usersService;
    private _logger : LogService;
    private _sessionSvc : SessionService;

    loginForm: any;
    
    constructor(private _nav: NavController , private user: usersService, private logger: LogService, private sessionSvc : SessionService, private formBuilder: FormBuilder, public modalCtrl: ModalController) {
        this._user = user;
        this._logger  = logger;
        this._sessionSvc = sessionSvc;

        this.loginForm = formBuilder.group({  
            'username': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
        });

        this._logger.log.debug('loginForm: ', this.loginForm);
    }

    /*private _init : void {

    }*/

    signup(event){
        this._logger.log.debug('Sign up clicked!',event);

        let signUpModal = this.modalCtrl.create(SignupPage);
        signUpModal.present();
    }

    login(value:string/*username, password*/) {
        //this._logger.log.debug('username:', username);
        //this._logger.log.debug('username: %s, password: %s', username, password);

        this._logger.log.debug('login fuc called. ');
        if(this.loginForm.valid) {
            this._logger.log.debug('Submitted value: ', value);
        }
        return;

        /*this._user.login(username, password).then(user => {
            // do something with the user,
            // and redirect to the TabsPage
            this._nav.setRoot(TabsPage);
        }).catch(err => {
            console.log(err);
            this._logger.log.info('error when login:', err);
        });*/

        /*this._auth.login(username, password).catch(err => {
            console.log(err);
        }).then(user => {
            // do something with the user,
            // and redirect to the TabsPage
            this._nav.setRoot(TabsPage);
        });*/
    }
}
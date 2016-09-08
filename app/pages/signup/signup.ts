import {Page, ViewController, LoadingController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {usersService} from '../../services/users.service';
import {LogService} from '../../services/log.service';
import {SessionService} from '../../services/session.service';
import { ValidationService } from '../../services/validation.service';


@Page({
    templateUrl: 'build/pages/signup/signup.html',
    providers: [usersService, LogService, SessionService]
})
export class SignupPage {

	signUpForm : any;

	constructor(private user: usersService, private logger: LogService, private sessionSvc : SessionService, private formBuilder: FormBuilder, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
        //this._user = user;
        //this._logger  = logger;
        //this._sessionSvc = sessionSvc;

        this.signUpForm = formBuilder.group({  
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'firstname': ['', Validators.compose([])], 
            'lastname': ['', Validators.compose([])]
        });
    }

    presentLoading() {
	    let loader = this.loadingCtrl.create({
	      content: "Please wait..."
	    });
	    loader.present();

	    setTimeout(() => {
			loader.dismiss();
		}, 5000);
  	}

    signUp(signUpData){
    	this.logger.log.info("signUp fuc cliecked." , signUpData);
    	this.presentLoading();
    }

    cancel(){
    	this.logger.log.info("cancel fuc cliecked.");
    	this.viewCtrl.dismiss();
    }

}
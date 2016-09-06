import {Page, NavController} from 'ionic-angular';
//import {AuthService} from '../auth/auth.service';
import {TabsPage} from '../tabs/tabs';

@Page({
    templateUrl: 'build/pages/login/login.html'
    //providers: [AuthService]
})
export class LoginPage {
    constructor(private _nav: NavController/*, private _auth: AuthService*/) {}

    login() {
        this._nav.setRoot(TabsPage);
        /*this._auth.login(username, password).catch(err => {
            console.log(err);
        }).then(user => {
            // do something with the user,
            // and redirect to the TabsPage
            this._nav.setRoot(TabsPage);
        });*/
    }
}
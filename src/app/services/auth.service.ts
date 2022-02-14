import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private router: Router, private fAuth: AngularFireAuth){}
    
    logout(): void{
        this.fAuth.signOut().then(
            res => {
                //console.log('Signed out');
            },
            error => {
                //console.log('Failed to sign out')
            }
        )
    }
    
    logoutHome(): void{
        this.fAuth.signOut().then(
            res => {
                //console.log('Signed out');
                this.router.navigateByUrl('/login');
            },
            error => {
                //console.log('Failed to sign out')
            }
        )
    }

    async login(email: string, password: string): Promise<any>{
        const p = this.fAuth.signInWithEmailAndPassword(email, password);
        return p;
    }

    authenticated(): boolean {
        return this.fAuth.authState !== null;
    }

    currentUserObservable(): any {
        return this.fAuth.authState;
    }

    getCurrentUser(): string {
        var user = firebase.auth().currentUser;
        var email;
        if(user != null) {
            email = user.email;
            if(email != null){
                return email;
            }
        }
        return '';
    }

    async createUser(email: string, password: string, name?: string){
        const res = await this.fAuth.createUserWithEmailAndPassword(email, password);
        return res.user;
    }
    
}
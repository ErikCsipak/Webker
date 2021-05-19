import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private fAuth: AngularFireAuth){}
    
    async logout(): Promise<void>{
        await this.fAuth.signOut();
    }

    login(email: string, password: string): Promise<any>{
        return this.fAuth.signInWithEmailAndPassword(email, password);
    }

    authenticated(): boolean {
        return this.fAuth.authState !== null;
    }

    currentUserOvservable(): any {
        return this.fAuth.authState;
    }

    async createUser(email: string, password: string, name?: string){
        const res = await this.fAuth.createUserWithEmailAndPassword(email, password);
        return res.user;
    }

    /*
    Ahol használjuk:
    constructorba paraméter: private authService: AuthService
    logout(): void {
        this.authService.logout();
    }
    */
}
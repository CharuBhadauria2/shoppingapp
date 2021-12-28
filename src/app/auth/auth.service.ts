import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable()
export class AuthService{

    constructor(private router: Router){

    }

    token: string;
    signupUser(email: string,password: string){
        const auth=firebase.getAuth();
        firebase.createUserWithEmailAndPassword(auth,email,password).catch(
            error =>console.log(error)
        )


    }


    signinUser(email: string,password: string){
        const auth=firebase.getAuth();
        firebase.signInWithEmailAndPassword(auth,email,password).then(
           response=>{
               this.router.navigate(['/']);
               firebase.getAuth().currentUser?.getIdToken().then(
                   (token: string)=> this.token=token
               )
           }
        ).catch(
            error =>console.log(error)
        );

    }


    getToken(){
        firebase.getAuth().currentUser?.getIdToken().then(
        (token: string)=> this.token=token
    );
    return this.token;
    }


    isAuthenticated(){
        return this.token!='';
    }

    logout(){
    const auth=firebase.getAuth();
        firebase.signOut(auth);
        this.token='';
        this.router.navigate(['/signin']);

    }


}
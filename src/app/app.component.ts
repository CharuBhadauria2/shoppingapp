import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shoppingapp';


  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC7aJ3Cx3EOsgQmaS0mvydXwIcO2_uQ_Mk",
  authDomain: "shoppingapp-35965.firebaseapp.com"
    });
  }

   loadedFeature='recipe';

  onNavigate(feature: string){
 this.loadedFeature=feature;

  }
}

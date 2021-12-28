import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private datastorageservice: DataStorageService,public authService: AuthService) { } 

    onsaveData() {
        this.datastorageservice.storeRecipes().subscribe(
            (response)=>{
               console.log(response);
                
            }
            
        );

    }


    onFetchData(){
        this.datastorageservice.getRecipes();

        
    }

    onLogOut(){
        this.authService.logout();
    }


}
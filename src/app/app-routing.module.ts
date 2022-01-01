import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";


import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },   
    {path:'recipes',loadChildren: ()=>import('./recipes/recipes.module').then(m=>m.RecipesModule)},
    { path: 'shoppinglist', component: ShoppingListComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]

})
export class AppRoutingModule { 

}
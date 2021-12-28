import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService,
        private authService: AuthService) { }


    storeRecipes() {
        const token=this.authService.getToken();
        return this.http.put('https://shoppingapp-35965-default-rtdb.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());


    }


    getRecipes() {
    const token=this.authService.getToken();

        this.http.get<Recipe[]>('https://shoppingapp-35965-default-rtdb.firebaseio.com/recipes.json?auth='+token).pipe(
            map(
                (response: any) => {
            const recipes: Recipe[] = response;
            for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                    console.log(recipe);
                    recipe['ingredients'] = [];
                }
            }
                return recipes;
            }
        )
        )
          .subscribe(

                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );

    }

}
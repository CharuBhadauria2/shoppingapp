import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService
{
    recipesChanged=new Subject<Recipe[]>();


   private recipes: Recipe[]=[
        new Recipe('Paneer','gravy curry','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zAG0GzcTJZKn0PTt_DrgE4NIZrO5aZc3dQ&usqp=CAU',[new Ingredient('Paneer',1),new Ingredient('vegies',50)]),
        new Recipe('Ice cream cake','dessert','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8TSE60JoFryB4cwdewd_UwFEOxNJyu7LTA&usqp=CAU',[new Ingredient('chocalate',1),new Ingredient('cream',1)]),
        new Recipe('Ice Cream','scoop','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqt8hSigctMo76rdq5UA90XEucRFh6B8GjhA&usqp=CAU',[new Ingredient('chocalate',1),new Ingredient('cream',1)]),
        new Recipe('Pizza','the famous cheeze burst','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6PdnUyLEW7XQ1pToN50F01w_DFTdC6Ayeg&usqp=CAU',[new Ingredient('bread',1),new Ingredient('cheeze',1)]),

      ];



      constructor(private slService: ShoppingListService){

      }

      getRecipes()
      {
          return this.recipes.slice();
      }


      getRecipe(id: number){
          return this.recipes[id];
      }


      addIngredientsToList(indredients: Ingredient[] )
      {
          this.slService.addIngredients(indredients);


      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());

      }


      upateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index]=newRecipe;
          this.recipesChanged.next(this.recipes.slice());


      }


      deleteRecipe(index: number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());

      }

}
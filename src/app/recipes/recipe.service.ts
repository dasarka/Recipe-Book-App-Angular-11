import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        {
            name: 'Tasty Schnitzel',
            description: ' A super tasty Schnitzel - just awesome',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            ingredients: [
                { name: 'Meat', amount: 1 },
                { name: 'French Fries', amount: 20 }
            ]
        },
        {
            name: 'Big Fat Burger',
            description: 'What else you need to say?',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            ingredients: [
                { name: 'Buns', amount: 2 },
                { name: 'Meat', amount: 1 }
            ]
        },
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipe = (): Recipe[] => {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
        this.slService.addIngredients(ingredients);
    }
}

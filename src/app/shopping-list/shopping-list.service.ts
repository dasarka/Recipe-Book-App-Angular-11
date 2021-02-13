import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<void>();

    private ingredients: Ingredient[] = [
        { name: 'Apples', amount: 5 },
        { name: 'Tomatoes', amount: 10 },
    ];

    getIngredients = (): Ingredient[] => {
        return this.ingredients.slice();
    }

    addIngredient = (name: string, amount: number): void => {
        this.ingredients.push({ name, amount });
        this.ingredientsChanged.emit();
    }

    addIngredients = (ingredients: Ingredient[]): void => {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit();
    }
}

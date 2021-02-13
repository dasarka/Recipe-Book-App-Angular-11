import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [
    RecipeService
  ],
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeSubscription = this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnDestroy(): void {
    this.recipeSubscription && this.recipeSubscription.unsubscribe();
  }
}

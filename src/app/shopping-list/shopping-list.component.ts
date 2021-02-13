import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];

  ingSubscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.fetchIngredients();
    this.ingSubscription = this.slService.ingredientsChanged.subscribe(() => {
      this.fetchIngredients();
    });
  }

  ngOnDestroy(): void {
    this.ingSubscription && this.ingSubscription.unsubscribe();
  }

  private fetchIngredients = (): void => {
    this.ingredients = this.slService.getIngredients();
  }
}

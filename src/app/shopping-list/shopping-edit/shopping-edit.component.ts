import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem = (): void => {
    const ingName = this.nameInput.nativeElement;
    const ingAmt = this.amountInput.nativeElement;
    this.slService.addIngredient(ingName.value, ingAmt.value);
  }

}

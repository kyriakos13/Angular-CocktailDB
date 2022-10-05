import { Category } from './models/category.model';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { DrinksService } from "./services/drinks.service";
import { Drink } from "./models/drink.model";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-drinks-list",
  templateUrl: "./drinks-list.component.html",
  styleUrls: ["./drinks-list.component.scss"],
})
export class DrinksListComponent implements OnInit, OnDestroy {
  public drinks: Drink[] = [];
  public categories: Category[] = [];
  public subscription: Subscription;
  public isLoading: boolean;

  public showItems = 12;

  constructor(private service: DrinksService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getDrinkByCategory("Cocktail");

    this.getAllCategories();
  }

  public getAllCategories(): void {
    this.subscription = this.service.getAllCategories().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.categories = res;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;

        if (err.status === 404) {
          this.snackBar.open("error not found", "close");
        } else {
          this.snackBar.open("error", "ok");
        }
      },
    });
  }

  public getDrinkByCategory(drinkType: string): void {
    this.subscription?.unsubscribe();

    // reset counter
    this.showItems = 12;

    this.subscription = this.service
      .getAlcoholicCocktails(drinkType)
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.drinks = res;
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;

          if (err.status === 404) {
            this.snackBar.open("error not found", "close");
          } else {
            this.snackBar.open("error", "ok");
          }
        },
      });
  }

  public loadMore(): void {
    this.showItems += 12;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

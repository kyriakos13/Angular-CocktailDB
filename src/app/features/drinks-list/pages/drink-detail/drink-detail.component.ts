import { DrinkDetail } from './../../models/drink.model';
import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { DrinksService } from "../../services/drinks.service";
import { ActivatedRoute } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-drink-detail",
  templateUrl: "./drink-detail.component.html",
  styleUrls: ["./drink-detail.component.scss"],
})
export class DrinkDetailComponent implements OnInit, OnDestroy {
  public drink: DrinkDetail;
  public ingredientsAndMeasures = [];
  public isLoading = true;

  public subscription: Subscription;

  constructor(
    private service: DrinksService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["url"];
      this.getDrink(id);
    });
  }

  getDrink(id: number) {
    this.isLoading = true;

    this.subscription?.unsubscribe();

    this.subscription = this.service.getDrinkByID(id).subscribe({
      next: (drink: DrinkDetail) => {
        this.isLoading = false;
        this.drink = drink;
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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

import { Subscription } from "rxjs";
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Drink } from "app/features/drinks-list/models/drink.model";
import { DrinksService } from "app/features/drinks-list/services/drinks.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public searchText: string = "";
  public drinks: Drink[] = [];
  public subscription: Subscription;
  public isLoading: boolean;
  @Output("searchEvent") searchEvent: EventEmitter<Drink[]> = new EventEmitter();

  constructor(private service: DrinksService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  search() {
    this.subscription?.unsubscribe();

    this.subscription = this.service.search(this.searchText).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.drinks = res;

        this.searchEvent.emit(res);
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

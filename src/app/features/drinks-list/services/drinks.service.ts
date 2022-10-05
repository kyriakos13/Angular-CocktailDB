import { Category } from './../models/category.model';
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Drink, DrinksResult } from '../models/drink.model';

@Injectable()
export class DrinksService {
  apiDrinks: string;

  constructor(private http: HttpClient) {
    this.apiDrinks = "https://www.thecocktaildb.com/api/json/v1/1/";
  }

  getAlcoholicCocktails(drinkType: string): Observable<Drink[]> {
    return this.http
      .get(this.apiDrinks + "filter.php?c=" + drinkType)
      .pipe(map((res: DrinksResult) => res.drinks));
  }

  getDrinkByID(id: number): Observable<Drink[]> {
    return this.http
      .get(this.apiDrinks + "lookup.php?i=" + id)
      .pipe(map((res: any) => res.drinks[0]));
  }

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get(this.apiDrinks + "list.php?c=list")
      .pipe(map((res: any) => res.drinks));
  }

  search(text: string): Observable<Drink[]> {
    return this.http
      .get(this.apiDrinks + "search.php?s=" + text)
      .pipe(map((res: any) => res.drinks));
  }
}

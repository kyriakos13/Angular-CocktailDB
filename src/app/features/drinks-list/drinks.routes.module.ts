import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DrinksListComponent } from "./drinks-list.component";
import { DrinkDetailComponent } from "./pages/drink-detail/drink-detail.component";

const drinksRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: DrinksListComponent },
      { path: "detail/:url", component: DrinkDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(drinksRoutes)],
  exports: [RouterModule],
})
export class DrinksRoutesModule {}

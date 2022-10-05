import { DrinksListComponent } from "./features/drinks-list/drinks-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: DrinksListComponent, pathMatch: "full" },
  { path: "404", component: NotFoundComponent, pathMatch: "full" },
  {
    path: "drinks",
    loadChildren: () =>
      import("./features/drinks-list/drinks.module").then(
        (m) => m.DrinksModule
      ),
  },

  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

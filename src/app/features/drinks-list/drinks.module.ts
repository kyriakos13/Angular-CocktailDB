import { SharedModule } from "../../shared/shared.module";
import { DrinksListComponent } from "./drinks-list.component";
import { NgModule } from "@angular/core";
import { DrinksRoutesModule } from "./drinks.routes.module";
import { DrinkDetailComponent } from "./pages/drink-detail/drink-detail.component";

@NgModule({
  imports: [SharedModule, DrinksRoutesModule],
  declarations: [DrinksListComponent, DrinkDetailComponent],
  providers: [],
})
export class DrinksModule {}

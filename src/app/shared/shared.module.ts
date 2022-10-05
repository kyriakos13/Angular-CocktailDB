import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { CustomMaterialModule } from "./custom-material.module";
import { DrinkCardComponent } from "./components/poster-card-view/poster-card.component";
import { ImgMissingDirective } from "./directives/img-missing.directive";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DrinkCardComponent,
    SearchBarComponent,
    ImgMissingDirective,
  ],
  declarations: [DrinkCardComponent, SearchBarComponent, ImgMissingDirective],
})
export class SharedModule {}

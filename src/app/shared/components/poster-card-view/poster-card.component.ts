import { Component, Input } from '@angular/core';
import { Drink } from 'app/features/drinks-list/models/drink.model';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.scss']
})
export class DrinkCardComponent {

  @Input() public drink: Drink;

  constructor () {}

}

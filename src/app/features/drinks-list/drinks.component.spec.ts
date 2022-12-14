import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksListComponent } from './drinks-list.component';

describe('DrinksComponent', () => {
  let component: DrinksListComponent;
  let fixture: ComponentFixture<DrinksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksListComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

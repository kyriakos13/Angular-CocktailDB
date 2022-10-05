import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrinkCardComponent } from './poster-card.component';

describe('DrinkCardComponent', () => {
  let component: DrinkCardComponent;
  let fixture: ComponentFixture<DrinkCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

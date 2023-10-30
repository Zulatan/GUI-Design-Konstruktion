import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TilbudPage } from './tilbud.page';

describe('TilbudPage', () => {
  let component: TilbudPage;
  let fixture: ComponentFixture<TilbudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TilbudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

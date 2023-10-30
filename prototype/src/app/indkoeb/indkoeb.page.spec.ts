import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndkoebPage } from './indkoeb.page';

describe('IndkoebPage', () => {
  let component: IndkoebPage;
  let fixture: ComponentFixture<IndkoebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndkoebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

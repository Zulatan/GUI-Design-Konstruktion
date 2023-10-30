import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalNavPage } from './global-nav.page';

describe('GlobalNavPage', () => {
  let component: GlobalNavPage;
  let fixture: ComponentFixture<GlobalNavPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GlobalNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

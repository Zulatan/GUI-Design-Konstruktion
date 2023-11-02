import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListerPage } from './lister.page';

describe('ListerPage', () => {
  let component: ListerPage;
  let fixture: ComponentFixture<ListerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

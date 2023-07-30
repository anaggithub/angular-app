import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatherComponent } from './heather.component';

describe('HeatherComponent', () => {
  let component: HeatherComponent;
  let fixture: ComponentFixture<HeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeatherComponent]
    });
    fixture = TestBed.createComponent(HeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

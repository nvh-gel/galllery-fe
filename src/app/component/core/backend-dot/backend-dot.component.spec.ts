import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDotComponent } from './backend-dot.component';

describe('BackendDotComponent', () => {
  let component: BackendDotComponent;
  let fixture: ComponentFixture<BackendDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendDotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendTextComponent } from './backend-text.component';

describe('BackendTextComponent', () => {
  let component: BackendTextComponent;
  let fixture: ComponentFixture<BackendTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

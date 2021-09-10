import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShowCaseContentComponent} from './show-case-content.component';

describe('ShowCaseContentComponent', () => {
  let component: ShowCaseContentComponent;
  let fixture: ComponentFixture<ShowCaseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCaseContentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

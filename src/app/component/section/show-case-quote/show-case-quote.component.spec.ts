import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShowCaseQuoteComponent} from './show-case-quote.component';

describe('ShowCaseQuoteComponent', () => {
  let component: ShowCaseQuoteComponent;
  let fixture: ComponentFixture<ShowCaseQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCaseQuoteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

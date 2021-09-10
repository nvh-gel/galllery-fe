import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShowCaseArticleComponent} from './show-case-article.component';

describe('ShowCaseArticleComponent', () => {
  let component: ShowCaseArticleComponent;
  let fixture: ComponentFixture<ShowCaseArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCaseArticleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

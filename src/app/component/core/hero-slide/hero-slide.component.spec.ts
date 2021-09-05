import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroSlideComponent} from './hero-slide.component';


describe('HeroSlideComponent', () => {
  let component: HeroSlideComponent;
  let fixture: ComponentFixture<HeroSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSlideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

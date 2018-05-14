import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap' ;
import { TestCarouselComponent } from './test-carousel.component';

describe('TestCarouselComponent', () => {
  let component: TestCarouselComponent;
  let fixture: ComponentFixture<TestCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [
        TestCarouselComponent,
       ],
       providers: [
        NgbCarouselConfig
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

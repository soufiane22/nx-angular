import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyNxComponentComponent } from './my-nx-component.component';

describe('MyNxComponentComponent', () => {
  let component: MyNxComponentComponent;
  let fixture: ComponentFixture<MyNxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNxComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyNxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

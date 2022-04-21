import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from './accordion/accordion.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        AccordionModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    expect(component).toBeTruthy();
  });

  it('app should have title ui-engineer-exercise', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    expect(component.title).toEqual('ui-engineer-exercise');
  });

  it('app should mount the accordion component', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const accordion = fixture.debugElement.query(By.css('.accordion'));

    expect(accordion).toBeTruthy();
  });
});

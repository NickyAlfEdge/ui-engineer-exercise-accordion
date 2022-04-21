import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Faq } from 'src/util/types';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let mockData: Array<Faq> = [
    {
        "id": "1",
        "question": "What vehicles are covered?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": "2",
        "question": "Can anyone drive a vehicle covered by a business policy?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        AccordionItemComponent
      ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the accordion', () => {
    expect(component).toBeTruthy();
  });

  it('accordion title should be Have a Question? We can help!', () => {
    component.title = 'Have a Question? We can help!';
    fixture.detectChanges();
    const accordionTitle = fixture.debugElement.query(By.css('.accordion .accordion-title')).nativeElement;

    expect(accordionTitle.textContent).toContain(fixture.componentInstance.title);
  });

  it('accordion items should be equal to ' + mockData.length, () => {
    component.faqs = of(mockData);
    fixture.detectChanges();
    const accordionItems = fixture.debugElement.queryAll(By.css('.accordion-item'));

    expect(component.accordionItems?.length).toEqual(accordionItems.length);
  });

  it('accordion displayMode should be set to single', () => {
    component.displayMode = 'single';
    component.faqs = of(mockData);
    fixture.detectChanges();
    const buttonElements = fixture.debugElement.queryAll(By.css('.accordion-item-header .accordion-item-toggle'));
    // click first button
    buttonElements[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    // click second button
    buttonElements[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    let accordionItems = fixture.debugElement.queryAll(By.css('.accordion-item-header-active'));

    expect(accordionItems.length).toEqual(1);
  });

  it('accordion displayMode should be set to multiple', () => {
    component.displayMode = 'multiple';
    component.faqs = of(mockData);
    fixture.detectChanges();
    const buttonElements = fixture.debugElement.queryAll(By.css('.accordion-item-header .accordion-item-toggle'));
    // click first button
    buttonElements[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    // click second button
    buttonElements[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    let accordionItems = fixture.debugElement.queryAll(By.css('.accordion-item-header-active'));

    expect(accordionItems.length).toEqual(2);
  });

  it('accordion title should display no title error', () => {
    component.faqs = of(mockData);
    fixture.detectChanges();
    let accordionTitleError = fixture.debugElement.query(By.css('.accordion-title-no-data .accordion-title-no-data-text')).nativeElement;

    expect(accordionTitleError.textContent).toContain('No Title Data Available');
  });

  it('accordion should display no data error', () => {
    let accordionDataError = fixture.debugElement.query(By.css('.accordion-no-data .accordion-no-data-text')).nativeElement;

    expect(accordionDataError.textContent).toContain('No Data Available');
  });
});

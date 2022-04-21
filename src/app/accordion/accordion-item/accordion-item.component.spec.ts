import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionItemComponent } from './accordion-item.component';
import { By } from '@angular/platform-browser';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccordionItemComponent
      ],
      imports: [
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an accordion item', () => {
    expect(component).toBeTruthy();
  });

  it('accordion item key should be Q1', () => {
    component.id = '1';
    fixture.detectChanges();
    const accordionItemKey = fixture.debugElement.query(By.css('.accordion-item-header .accordion-item-key')).nativeElement;

    expect(accordionItemKey.textContent).toContain('Q1');
  });

  it('accordion item title should be Test Question', () => {
    const testQuestion = 'Test Question';
    component.question = testQuestion;
    fixture.detectChanges();
    const accordionItemQuestion = fixture.debugElement.query(By.css('.accordion-item-header .accordion-item-title')).nativeElement;

    expect(accordionItemQuestion.textContent).toContain(testQuestion);
  });

  it('accordion item body should be Test Answer', () => {
    const testAnswer = 'Test Answer';
    component.answer = testAnswer;
    fixture.detectChanges();
    const accordionItemQuestion = fixture.debugElement.query(By.css('.accordion-item-body .accordion-item-body-text')).nativeElement;

    expect(accordionItemQuestion.textContent).toContain(testAnswer);
  });

  it('accordion item key should be No ID Data Available', () => {
    const accordionItemKeyError = fixture.debugElement.query(
      By.css('.accordion-item-key .accordion-item-no-data .accordion-item-no-data-text')
    ).nativeElement;

    expect(accordionItemKeyError.textContent).toContain('No ID Data Available');
  });

  it('accordion item title should be No Title Data Available', () => {
    const accordionItemTitleError = fixture.debugElement.query(
      By.css('.accordion-item-title .accordion-item-no-data .accordion-item-no-data-text')
    ).nativeElement;

    expect(accordionItemTitleError.textContent).toContain('No Title Data Available');
  });

  it('accordion item body should be No Body Data Available', () => {
    const accordionItemBodyError = fixture.debugElement.query(
      By.css('.accordion-item-body .accordion-item-no-data .accordion-item-no-data-text')
    ).nativeElement;

    expect(accordionItemBodyError.textContent).toContain('No Body Data Available');
  });

  it('should click toggle accordion body display', fakeAsync(() => {
    const toggleBodyDisplayBtn = fixture.debugElement.query(By.css('.accordion-item-header .accordion-item-toggle'));
    spyOn(component, 'toggleContentDisplay');
    toggleBodyDisplayBtn.triggerEventHandler('click', null);
    tick();

    expect(component.toggleContentDisplay).toHaveBeenCalled();
  }));

  it('should toggle the state of showBody', fakeAsync(() => {
    component.showBody = false;
    const toggleBodyDisplayBtn = fixture.debugElement.query(By.css('.accordion-item-header .accordion-item-toggle'));
    toggleBodyDisplayBtn.triggerEventHandler('click', null);
    tick();

    expect(component.showBody).toEqual(true);
  }));

  it('should set the accordion-item state to active', fakeAsync(() => {
    const toggleBodyDisplayBtn = fixture.debugElement.query(By.css('.accordion-item-header .accordion-item-toggle'));
    toggleBodyDisplayBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const accordionItemActive = fixture.debugElement.query(By.css('.accordion-item-header-active'));

    expect(accordionItemActive).toBeTruthy();
  }));
});

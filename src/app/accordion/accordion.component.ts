import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { Observable } from 'rxjs';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Faq } from 'src/util/types';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() title?: string | undefined;
  @Input() displayMode?: 'single' | 'multiple' | undefined;
  @Input() faqs?: Observable<Array<Faq>> | null;

  @ViewChildren(AccordionItemComponent) accordionItems: QueryList<AccordionItemComponent> | undefined;

  constructor() { }

  ngOnInit(): void { }

  toggleAccordionItems(accordionItem: AccordionItemComponent): void {
    if (this.accordionItems) {
      if (this.displayMode === 'single' && this.accordionItems.length > 1) {
        this.accordionItems.forEach((item) => {
          if (accordionItem != item) {
            item.showBody = false;
          }
        });
      }
    }
  }

}

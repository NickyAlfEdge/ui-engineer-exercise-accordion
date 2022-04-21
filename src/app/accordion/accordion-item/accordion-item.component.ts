import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('toggleContentDisplay', [
      state('initial', style({ 

      })),
      state('final', style({
        transform: 'rotate(45deg)'
      })),
      transition('initial<=>final', animate('250ms'))
    ])
  ]
})
export class AccordionItemComponent implements OnInit {

  @Input() id?: string;
  @Input() question?: string;
  @Input() answer?: string;
  @Output() contentDisplayed = new EventEmitter<AccordionItemComponent>();

  showBody: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleContentDisplay(accordionItem: AccordionItemComponent): void {
    this.showBody = !this.showBody;
    this.contentDisplayed.emit(accordionItem);
  }

}

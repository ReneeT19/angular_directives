import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(elementRef: ElementRef) {

  elementRef.nativeElement.style.backgroundColor = 'red';
   }

}

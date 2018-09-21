import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSytlechange]'
})
export class SytlechangeDirective {

  constructor(private elementRef:ElementRef) { }
  @Input() bgColor : string;
  @HostListener('mouseenter')onmouseenter(){
    this.elementRef.nativeElement.style.fontWeight="bold";
    this.elementRef.nativeElement.style.backgroundColor=this.bgColor;
    this.elementRef.nativeElement.style.color="black"
  }

  @HostListener('mouseleave')onmouseleave(){
    this.elementRef.nativeElement.style.fontWeight='normal';
    this.elementRef.nativeElement.style.backgroundColor="initial";
    this.elementRef.nativeElement.style.color="initial"
  }

}

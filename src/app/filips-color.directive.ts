import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFilipsColor]'
})
export class FilipsColorDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

  @Input() defaultColor: string;

  @Input('appFilipsColor') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
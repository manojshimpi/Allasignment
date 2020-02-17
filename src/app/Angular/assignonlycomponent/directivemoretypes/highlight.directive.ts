import { Directive ,ElementRef, HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public ee: ElementRef) { 

    //el.nativeElement.style.backgroundColor = 'green';

  }

  //@Input() highlightColor: string;
  
  @Input('appHighlight') highlightColor: string;
  
  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    //this.highlight('yellow');
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color:string)
  {
    this.ee.nativeElement.style.backgroundColor = color;
  }

}

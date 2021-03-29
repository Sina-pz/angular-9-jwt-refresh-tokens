import { NvColor } from './../../app/_models/view/nv-color';
import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[nvBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit, OnDestroy {
  @Input() color: NvColor;

  constructor(private renderer: Renderer2, private element: ElementRef) { }


  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, ('background-' + NvColor[this.color]) );
    
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, ('background-' + NvColor[this.color]));
  }

}

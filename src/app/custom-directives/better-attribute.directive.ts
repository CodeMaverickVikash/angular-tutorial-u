import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBetterDirective]'
})

export class BetterAttributeDirective implements OnInit {

    // @Input() defaultColor: string = 'transparent';
    // @Input() highlightColor: string = 'blue'; 
    
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterDirective') highlightColor: string = 'blue'; 

    // @HostBinding('style.color') color: string = 'trasparent'; // it will bind the property of host element
    @HostBinding('style.color') color!: string; 

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.color = this.defaultColor;
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) { // To listen the event of hosted element
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
        // this.color = 'blue';
        this.color = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
        // this.color = 'pink';
        this.color = this.defaultColor;
    }
        
}

// Better way of makeing a directive is using Renderer2
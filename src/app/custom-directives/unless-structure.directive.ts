import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})

export class UnlessStructure {
    // ViewContainerRef is the container in which we can set anything
    constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}

    @Input() set appUnless(condition: boolean) {
        if(condition) {
            this.vcRef.createEmbeddedView(this.tempRef);
        } else {
            this.vcRef.clear();
        }
    }
}

// It is structure directive same as *ngIf
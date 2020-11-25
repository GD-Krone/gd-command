import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class GdCommandService {
    constructor() { }
}
GdCommandService.ɵfac = function GdCommandService_Factory(t) { return new (t || GdCommandService)(); };
GdCommandService.ɵprov = ɵɵdefineInjectable({ token: GdCommandService, factory: GdCommandService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GdCommandService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class GdCommandComponent {
    constructor() { }
    ngOnInit() {
    }
}
GdCommandComponent.ɵfac = function GdCommandComponent_Factory(t) { return new (t || GdCommandComponent)(); };
GdCommandComponent.ɵcmp = ɵɵdefineComponent({ type: GdCommandComponent, selectors: [["lib-gd-command"]], decls: 2, vars: 0, template: function GdCommandComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " gd-command works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GdCommandComponent, [{
        type: Component,
        args: [{
                selector: 'lib-gd-command',
                template: `
    <p>
      gd-command works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class GdCommandModule {
}
GdCommandModule.ɵmod = ɵɵdefineNgModule({ type: GdCommandModule });
GdCommandModule.ɵinj = ɵɵdefineInjector({ factory: function GdCommandModule_Factory(t) { return new (t || GdCommandModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GdCommandModule, { declarations: [GdCommandComponent], exports: [GdCommandComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GdCommandModule, [{
        type: NgModule,
        args: [{
                declarations: [GdCommandComponent],
                imports: [],
                exports: [GdCommandComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of gd-command
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GdCommandComponent, GdCommandModule, GdCommandService };
//# sourceMappingURL=gd-command.js.map

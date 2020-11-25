(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('gd-command', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['gd-command'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var GdCommandService = /** @class */ (function () {
        function GdCommandService() {
        }
        return GdCommandService;
    }());
    GdCommandService.ɵfac = function GdCommandService_Factory(t) { return new (t || GdCommandService)(); };
    GdCommandService.ɵprov = i0.ɵɵdefineInjectable({ token: GdCommandService, factory: GdCommandService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GdCommandService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var GdCommandComponent = /** @class */ (function () {
        function GdCommandComponent() {
        }
        GdCommandComponent.prototype.ngOnInit = function () {
        };
        return GdCommandComponent;
    }());
    GdCommandComponent.ɵfac = function GdCommandComponent_Factory(t) { return new (t || GdCommandComponent)(); };
    GdCommandComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GdCommandComponent, selectors: [["lib-gd-command"]], decls: 2, vars: 0, template: function GdCommandComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " gd-command works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GdCommandComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-gd-command',
                        template: "\n    <p>\n      gd-command works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var GdCommandModule = /** @class */ (function () {
        function GdCommandModule() {
        }
        return GdCommandModule;
    }());
    GdCommandModule.ɵmod = i0.ɵɵdefineNgModule({ type: GdCommandModule });
    GdCommandModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GdCommandModule_Factory(t) { return new (t || GdCommandModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GdCommandModule, { declarations: [GdCommandComponent], exports: [GdCommandComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GdCommandModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [GdCommandComponent],
                        imports: [],
                        exports: [GdCommandComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of gd-command
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GdCommandComponent = GdCommandComponent;
    exports.GdCommandModule = GdCommandModule;
    exports.GdCommandService = GdCommandService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gd-command.umd.js.map

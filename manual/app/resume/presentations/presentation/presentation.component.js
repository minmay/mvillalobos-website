"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var PresentationComponent = (function () {
    function PresentationComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    PresentationComponent.prototype.ngOnInit = function () {
        this.buildVideoUrl();
        this.buildSlidesUrl();
    };
    PresentationComponent.prototype.buildVideoUrl = function () {
        this.videoUrl = this.presentation.video ? this.sanitizer.bypassSecurityTrustResourceUrl(this.presentation.video) : null;
    };
    PresentationComponent.prototype.buildSlidesUrl = function () {
        this.slidesUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.presentation.slides);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PresentationComponent.prototype, "presentation", void 0);
    PresentationComponent = __decorate([
        core_1.Component({
            selector: 'presentation',
            templateUrl: 'app/resume/presentations/presentation/presentation.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], PresentationComponent);
    return PresentationComponent;
}());
exports.PresentationComponent = PresentationComponent;
//# sourceMappingURL=presentation.component.js.map
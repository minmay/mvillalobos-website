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
var resume_service_1 = require('../resume.service');
var platform_browser_1 = require('@angular/platform-browser');
var PresentationsComponent = (function () {
    function PresentationsComponent(resumeService, sanitizer) {
        this.resumeService = resumeService;
        this.sanitizer = sanitizer;
    }
    PresentationsComponent.prototype.ngOnInit = function () {
        this.getPresentations();
    };
    PresentationsComponent.prototype.getPresentations = function () {
        var _this = this;
        this.resumeService
            .findResume()
            .then(function (resume) { return _this.presentations = resume.presentations; });
    };
    PresentationsComponent.prototype.onSelectPresentation = function (presentation) {
        this.selectedPresentation = presentation;
        this.onSelectSlides();
    };
    PresentationsComponent.prototype.onSelectSlides = function () {
        this.mediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPresentation.slides);
        this.showSlides = true;
        this.showVideo = false;
    };
    PresentationsComponent.prototype.onSelectVideo = function () {
        this.mediaUrl = this.selectedPresentation.video ? this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPresentation.video) : null;
        this.showSlides = false;
        this.showVideo = true;
    };
    PresentationsComponent = __decorate([
        core_1.Component({
            selector: 'presentations',
            templateUrl: 'app/resume/presentations/presentations.html',
            providers: [resume_service_1.ResumeService]
        }), 
        __metadata('design:paramtypes', [resume_service_1.ResumeService, platform_browser_1.DomSanitizer])
    ], PresentationsComponent);
    return PresentationsComponent;
}());
exports.PresentationsComponent = PresentationsComponent;
//# sourceMappingURL=presentations.component.js.map
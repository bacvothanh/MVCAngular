import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
let AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['appController'], { strictDi: true });
    }
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            UpgradeModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
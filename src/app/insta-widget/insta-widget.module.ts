import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaWidgetComponent } from './insta-widget.component';
import { SharedModule } from '../shared/shared.module';
import { LangRouterLinkModule } from '../lang-router-link/lang-router-link.module';
import { TranslateModule } from '@ngx-translate/core';
import { LangSelectorModule } from '../lang-selector/lang-selector.module';


@NgModule({
  declarations: [InstaWidgetComponent],
  exports: [InstaWidgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    LangRouterLinkModule,
    TranslateModule,
    LangSelectorModule
  ]
})
export class InstaWidgetModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, I18nModule, SharedModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent, FooterComponent],
})
export class ShellModule {}

import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import ar from '@angular/common/locales/ar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { IconDefinition } from '@ant-design/icons-angular';
import { FormsModule } from '@angular/forms';
import { UserOutline, VideoCameraOutline, UploadOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [UserOutline, VideoCameraOutline, UploadOutline];

registerLocaleData(en);
registerLocaleData(ar);

import {
  en_US,
  NZ_I18N,
  fr_FR,
  ar_EG,
  NzI18nService,
} from 'ng-zorro-antd/i18n';

@Component({
  standalone: true,
  imports: [RouterModule,
    NzButtonModule, NzGridModule,
    NzLayoutModule, NzMenuModule,
    NzFlexModule,
    NzRadioModule,
    FormsModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [
    {
      provide: NZ_I18N,
      useFactory: () => {
        const localId = inject(LOCALE_ID);
        switch (localId) {
          case 'en':
            return en_US;
          /** keep the same with angular.json/i18n/locales configuration **/
          case 'fr':
            return fr_FR;
          case 'ar':
            return ar_EG;
          default:
            return en_US;
        }
      },
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'myngapp';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isCollapsed: any = true;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isVertical: boolean = false;
  constructor(private i18n: NzI18nService) { }

  ngOnInit() {
    console.log("title ", this.title);

  }

  switchLanguage() {
    this.i18n.setLocale(en_US);
  }

  onCollapse(event: any) {
    console.log("event ", event);

    this.isCollapsed = true;
  }

}

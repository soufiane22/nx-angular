import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import ar from '@angular/common/locales/ar';
import { NzGridModule,  } from 'ng-zorro-antd/grid';
import { NzAlign, NzJustify } from 'ng-zorro-antd/flex';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { IconDefinition } from '@ant-design/icons-angular';
import { FormsModule } from '@angular/forms';
import { UserOutline, VideoCameraOutline, UploadOutline } from '@ant-design/icons-angular/icons';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
const icons: IconDefinition[] = [UserOutline, VideoCameraOutline, UploadOutline];
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators,
  ReactiveFormsModule 
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

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
    NzButtonModule,
    NzLayoutModule, NzMenuModule,
    NzFlexModule,
    NzRadioModule,
    FormsModule,
    NzSegmentedModule,
    NzGridModule,
    NzSpaceModule,
    ReactiveFormsModule,
    NzInputModule,
    CommonModule,
    NzFormModule
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
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  justify: NzJustify  = "space-around"

  justifySegment : NzJustify [] = [
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
    'space-evenly'
  ];
  alignSegment: NzAlign [] = ['flex-start' , 'center' ,'flex-end' , 'start' ,'end' , 'stretch' , 'normal'];
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public selectedJustification : number = 0;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public selectedAlignment : number = 0;

  confirmationValidation: ValidatorFn = (control:AbstractControl): 
  { [s: string] : boolean } => {
    if(!control.value){
      return { required:true }
    }else{
      if(control.value !== this.validateForm.controls['password'].value){
        return {confirm : true , error:true}
      }
    }
    return {};
  }

  public validateForm : FormGroup = new FormGroup({
    email : new FormControl<string>("",[Validators.required, Validators.email]),
    password : new FormControl<string>("", [Validators.required, Validators.minLength(6)]),
    checkPassword : new FormControl<string>("", [Validators.required, this.confirmationValidation]),
  });

  constructor(private i18n: NzI18nService) { }

  ngOnInit() {
    console.log("title ", this.title);

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  submitForm(){
    console.log("validateForm.get('email')?.errors?.['required']",
      this.validateForm.get('email')?.errors?.['required']);
    
    if(this.validateForm.valid){
      console.log("validateForm ",this.validateForm.value);
    }
  
    
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateConfirmValidator(){
    console.log("this.validateForm.controls?.['checkPassword'] ",this.validateForm.controls['password'].value);
    
    Promise.resolve().then(() => {
      this.validateForm.controls?.['checkPassword'].updateValueAndValidity();
      console.log("validateForm.get('checkPassword')?.errors?.['required'] ",
        this.validateForm.get('checkPassword')?.errors);
    
    }
    )
  }

  switchLanguage() {
    this.i18n.setLocale(en_US);
  }

  onCollapse(event: any) {
    console.log("event ", event);

    this.isCollapsed = true;
  }

  onClick(){
    this.justify = 'space-evenly'
  }

}

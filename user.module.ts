import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ UserComponent ],
  imports: [ CommonModule ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }

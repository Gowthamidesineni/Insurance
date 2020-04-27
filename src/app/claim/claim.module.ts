import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ClaimRoutingModule } from './claim-routing.module';
import { LossComponent } from './create/loss/loss.component';
import { DamageComponent } from './create/damage/damage.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatSelectModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ClaimComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    LossComponent,
    DamageComponent
  ],
  imports: [
    CommonModule,
    //Include claimroutingmodule 
    ClaimRoutingModule,
    TabMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectModule,FormsModule
  ]
})
export class ClaimModule { }

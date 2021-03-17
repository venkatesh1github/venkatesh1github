import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartDropDownComponent } from './core/components/smart-drop-down/smart-drop-down.component';
import { FetchCountryDataResolver } from './core/fetch-country-data.resolver';


const routes:Routes=[
 {path:"admin",
 component:SmartDropDownComponent,
 data :{ createAcess:true},
resolve:{
  cntryData:FetchCountryDataResolver
},
},
 {path:"user",
 component:SmartDropDownComponent,
 data :{ createAcess:false},
 resolve:{
  cntryData:FetchCountryDataResolver
}},
  {path:"**",redirectTo:"/user"}
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

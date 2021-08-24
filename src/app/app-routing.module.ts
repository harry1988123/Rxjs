import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { listComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path:'promise', component:PromiseComponent },
  { path:'observable', component:ObservableComponent, children:[
    {path: '', component: listComponent},
    {path: 'fromEvent', component: FromEventComponent},
  ] },
  { path:'**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

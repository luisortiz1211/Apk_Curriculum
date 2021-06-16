import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { scrollInfinite } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component:scrollInfinite,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

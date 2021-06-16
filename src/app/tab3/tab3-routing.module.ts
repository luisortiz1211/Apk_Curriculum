import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { skeleton } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: skeleton,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}

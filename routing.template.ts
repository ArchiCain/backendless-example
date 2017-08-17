import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from 'numdirscore/route.service';
import { ObjNameComponent } from './pathname.component';

const routes: Routes = Route.withMainShell([
    { path: 'camelName', component: ObjNameComponent, data: { title: 'Route Title' } }
]);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ObjNameRoutingModule { }

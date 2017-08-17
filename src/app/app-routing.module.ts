import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// probably need to make this go to a "Page not found" page
const routes: Routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }

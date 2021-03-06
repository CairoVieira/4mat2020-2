import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';

const routes: Routes = [
    { path: 'curso', component: CursoListComponent},
    { path: 'curso/novo', component: CursoFormComponent},
    { path: 'curso/:id', component: CursoFormComponent},
    { path: 'turma', component: TurmaListComponent},
    { path: 'turma/nova', component: TurmaFormComponent},
    { path: 'turma/:id', component: TurmaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';

export const ComponentsRoutes: Routes = [
    {
        path: 'generos/:genero',
        component: ListComponent
    }
]
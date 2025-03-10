import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'person', component: PersonPageComponent}
];

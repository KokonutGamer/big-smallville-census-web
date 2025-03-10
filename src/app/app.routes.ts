import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';
import { HouseholdPageComponent } from './pages/household-page/household-page.component';
import { BusinessPageComponent } from './pages/business-page/business-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'person', component: PersonPageComponent},
    {path: 'household', component: HouseholdPageComponent},
    {path: 'business', component: BusinessPageComponent},
    {path: 'property', component: PropertyPageComponent}
];

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const componentsRoute = 
[
    {
        path: '',
        component: MainComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(componentsRoute)],
    exports:[RouterModule]
})
export class ComponentsRoutingModule{}
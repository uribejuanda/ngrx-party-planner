import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { people } from './reducers/people.reducer';
import { ContainerComponent } from './components/container/container.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonInputComponent } from './components/person-input/person-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        PersonListComponent,
        PersonInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({ people: people }),
        StoreDevtoolsModule.instrument({
            maxAge: 25 //  Retains last 25 states
        })
    ],
    providers: [],
    bootstrap: [ContainerComponent]
})
export class AppModule { }

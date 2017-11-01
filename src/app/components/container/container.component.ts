import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_PERSON, REMOVE_PERSON, ADD_GUEST, REMOVE_GUEST, TOGGLE_ATTENDING } from '../../actions/people.actions';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
    public people;
    public subscription;

    constructor(private _store: Store<any>) {
        this.subscription = this._store
            .select('people')
            ;
    }

    ngOnInit() {
    }

    // all state-changing actions get dispatched to and handled by reducers.
    addPerson(name) {
        this._store.dispatch({type: ADD_PERSON, payload: {id: new Date().valueOf(), name: name}});
    }

    addGuest(id) {
        this._store.dispatch({type: ADD_GUEST, payload: id});
    }

    removeGuest(id) {
        this._store.dispatch({type: REMOVE_GUEST, payload: id});
    }

    removePerson(id) {
        this._store.dispatch({type: REMOVE_PERSON, payload: id});
    }

    toggleAttending(id) {
        this._store.dispatch({type: TOGGLE_ATTENDING, payload: id});
    }
    /*
      if you do not use async pipe and create manual subscriptions
      always remember to unsubscribe in ngOnDestroy
    */
    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

}

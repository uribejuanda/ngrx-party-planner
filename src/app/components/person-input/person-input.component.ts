import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-person-input',
  // templateUrl: './person-input.component.html',
    template: `
      <input #personName type="text" />
      <button (click)="add(personName)">Add Person</button>
    `,
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

    @Output() addPerson = new EventEmitter();

    add(personInput) {
        this.addPerson.emit(personInput.value);
        personInput.value = '';
    }

}

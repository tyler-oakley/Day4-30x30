import { Component } from '@angular/core';
import { ENTRIES } from './mock-data';
import { Entry } from '../entry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  listOfEntries = ENTRIES;
  selectedEntry = new Entry('');

  save() {

    let entryAlreadyExists = false;

    for (let entry of this.listOfEntries) {
      if (entry.content == this.selectedEntry.content) {
        entryAlreadyExists = true;
      }
    }

    if (entryAlreadyExists) {
      alert("Item saved");
      this.selectedEntry = new Entry('');
    }
    else {
      this.addEntry(this.selectedEntry.content);
    }
  }

  delete(entryToDelete: Entry) {
    const entries = [...this.listOfEntries];
    this.listOfEntries = entries.filter(entry => entry.content !== entryToDelete.content);
  }

  entrySelected(selectedEntry: Entry) {
    this.selectedEntry = selectedEntry;
  }

  addEntry(entryInfo: string) {
    if (entryInfo) {
      let newEntry = new Entry(entryInfo);
      this.listOfEntries.push(newEntry);
      this.selectedEntry = new Entry('');
    }
    else {
      alert("Error: You cannot add a blank entry.");
    }
  }

  clear() {
    this.selectedEntry = new Entry('');
  }
}

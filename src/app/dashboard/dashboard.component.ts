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
  entryAlreadyExists: boolean = false;

  save(entryInfo: string) {

    for (let entry of this.listOfEntries) {
      if (entry.content == entryInfo) {
        this.entryAlreadyExists = true;
      }
    }

    if (this.entryAlreadyExists) {
      alert("Item saved");
      this.selectedEntry = new Entry('');
    }
    else {
      this.addEntry(entryInfo);
    }

    // reset boolean to await input from next entry
    this.entryAlreadyExists = false;
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

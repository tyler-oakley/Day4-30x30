import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() entries: Entry[] = [];
  @Output() onDelete = new EventEmitter();
  @Output() onSelect = new EventEmitter();
}

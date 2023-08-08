import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() selectedEntry = new Entry('');
  @Output() onSave = new EventEmitter();
  @Output() onClear = new EventEmitter();
}

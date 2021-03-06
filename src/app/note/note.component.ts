import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Note {
  id: Number;
  title: String = '';
  content: String = '';

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}

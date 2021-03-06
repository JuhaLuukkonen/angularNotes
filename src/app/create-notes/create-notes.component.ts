import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../note';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {

  noteTitle:String;
  noteContent:String;
  constructor(private noteServ:NoteServiceService) { }

  ngOnInit() {
  }
  addNote(){
    var note = new Note();
    note.title = this.noteTitle;
    note.content = this.noteContent;
    this.noteServ.addNote(note);
  }
}

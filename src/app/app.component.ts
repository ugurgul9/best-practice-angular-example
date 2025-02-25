import { Component } from '@angular/core';
import { KanbanBoardComponent } from './shared/components/kanban-board/kanban-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [KanbanBoardComponent],
})
export class AppComponent {}

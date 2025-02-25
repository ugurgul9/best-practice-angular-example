import { DragDropModule } from 'primeng/dragdrop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

export interface Task {
  id: number;
  name: string;
  description: string;
  state: 'Ready' | 'Stopped' | 'Active' | 'Done';
  tags: string[];
  assignedUser: string;
}


/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-kanban-board',
  templateUrl: 'kanban-board.component.html',
  styleUrl: 'kanban-board.component.scss',
  imports: [CommonModule, CdkDropList, CdkDrag, DragDropModule],
})
export class KanbanBoardComponent {
  ready: Task[] = [];
  stopped: Task[] = [];
  active: Task[] = [];
  done: Task[] = [];

  ngOnInit(): void {
    // Örnek görevlerin tanımlanması
    this.ready = [
      { id: 1, name: 'Görev 1', description: 'Görev 1 açıklaması', state: 'Ready', tags: ['UI', 'Özellik'], assignedUser: 'Ahmet' },
      { id: 2, name: 'Görev 2', description: 'Görev 2 açıklaması', state: 'Ready', tags: ['Backend'], assignedUser: 'Mehmet' }
    ];
    this.stopped = [
      { id: 3, name: 'Görev 3', description: 'Görev 3 açıklaması', state: 'Stopped', tags: ['Bug'], assignedUser: 'Ayşe' }
    ];
    this.active = [
      { id: 4, name: 'Görev 4', description: 'Görev 4 açıklaması', state: 'Active', tags: ['Geliştirme'], assignedUser: 'Fatma' }
    ];
    this.done = [
      { id: 5, name: 'Görev 5', description: 'Görev 5 açıklaması', state: 'Done', tags: ['Dokümantasyon'], assignedUser: 'Zeynep' }
    ];
  }

  drop(event: CdkDragDrop<Task[]>, newState: 'Ready' | 'Stopped' | 'Active' | 'Done') {
    if (event.previousContainer === event.container) {
      // Aynı kolon içerisinde sıralamayı değiştir
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Farklı kolonlar arasında geçişte, görevin durumunu güncelle
      const task = event.previousContainer.data[event.previousIndex];
      task.state = newState;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

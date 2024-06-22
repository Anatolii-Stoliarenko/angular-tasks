import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) taskId!: string;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.taskId);
  }
}

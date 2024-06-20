import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User; // @Input({ required: true }) avatar!: string; // avatar = input.required<string>()
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); //select = output<string>()

  get imagePath() {
    // imagePath = computed(() => 'users/' + this.avatar())
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

/*
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

 selectedUser = signal(DUMMY_USERS[randomIndex]);

      onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
*/

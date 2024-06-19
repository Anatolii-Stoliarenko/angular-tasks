import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // selectedUser = DUMMY_USERS[randomIndex];

  imagePath = computed(() => 'users/' + this.selectedUser().avatar)
  // get imagePath() {
  //   return 'users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    // console.log('Clicked!')
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
    // this.selectedUser = DUMMY_USERS[randomIndex] without signal
  }
}

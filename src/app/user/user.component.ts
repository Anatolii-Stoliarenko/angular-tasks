import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) id!: string;  // id = input.required<string>()
  @Input({required: true}) avatar!: string; // avatar = input.required<string>()
  @Input({required: true}) name!: string;   // name = input.required<string>()
  @Output() select = new EventEmitter<string>() //select = output<string>()
  
  
  get imagePath() { // imagePath = computed(() => 'users/' + this.avatar())
    return 'users/' + this.avatar
  }
  

  onSelectUser(){
    this.select.emit(this.id)
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
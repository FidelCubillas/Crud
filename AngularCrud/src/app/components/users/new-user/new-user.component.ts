import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/usersInterface';
import { UsersService } from '../../../shared/services/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor(private userSrv: UsersService) {}

  public newUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  addNewUser(data: User) {
    console.log('New User', data);
    this.userSrv.createUsers(data).subscribe((res) => {
      console.log(res);
    });
  }
}

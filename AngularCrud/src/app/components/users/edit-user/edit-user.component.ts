import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/usersInterface';
import { UsersService } from '../../../shared/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  @Input() user: User;

  constructor(private userSvc: UsersService) {}

  public editUserForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }

  editUser(user: User) {
    this.userSvc.editPostById(user).subscribe((res) => console.log(res));
  }

  private initValuesForm(): void {
    this.editUserForm.patchValue({
      id: this.user.id,
      name: this.user.name,
      age: this.user.age,
      userName: this.user.username,
    });

    console.log(this.editUserForm);
  }
}

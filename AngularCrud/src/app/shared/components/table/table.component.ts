import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/usersInterface';
import { UsersService } from '../../services/user-service.service';

import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'age', 'userName', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private userSvc: UsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.all();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.userSvc
        .getUsers()
        .subscribe((user) => ((this.dataSource.data = user), console.log(user)));
  }


  onNewUser() {
    this.openDialog();
  }


  onEditUser(user: User) {
    console.log('Edit user', user);
    this.openDialog(user);
  }


  onDeleteUser(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.userSvc.deleteUserById(id).subscribe(() => this.all());
        Swal.fire('Deleted!', ' The user has been deleted.', 'success');
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire('Cancelled', 'The user is safe :)', 'error');
      }
    });
  }


  openDialog(user?: User): void {
    const config = {
      data: {
        message: user ? 'Edit User' : 'New User',
        content: user,
      },
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result ${result}`);
      this.all()
    });
  }

}

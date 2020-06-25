import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersRoutingModule } from './list-users-routing.module';
import { ListUsersComponent } from './list-users.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [ListUsersComponent, TableComponent],
  imports: [CommonModule, ListUsersRoutingModule, MaterialModule],
})
export class ListUsersModule {}

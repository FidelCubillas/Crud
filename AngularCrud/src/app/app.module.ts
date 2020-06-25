import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserModule } from './components/users/new-user/new-post.module';
import { EditUserModule } from './components/users/edit-user/edit-user.module';
//Angular Material
import { MaterialModule } from './material.module';

//Components
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerAppComponent,
    NewUserComponent,
    EditUserComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NewUserModule,
    EditUserModule,
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

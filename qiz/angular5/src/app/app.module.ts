import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { appRoutes } from './routes';
import { ComputerComponent } from './computer/computer.component';
import { OsComponent } from './os/os.component';
import { OsmainComponent } from './osmain/osmain.component';
import { ComputermainComponent } from './computermain/computermain.component';
import { ChooseComponent } from './choose/choose.component';
import { FaceComponent } from './face/face.component';
import { MoviesComponent } from './movies/movies.component';
import { DashComponent } from './dash/dash.component';
import { MoreComponent } from './more/more.component';
import { SudukoComponent } from './suduko/suduko.component';
import { WordComponent } from './word/word.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    ComputerComponent,
    OsComponent,
    OsmainComponent,
    ComputermainComponent,
    ChooseComponent,
    FaceComponent,
    MoviesComponent,
    DashComponent,
    MoreComponent,
    SudukoComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

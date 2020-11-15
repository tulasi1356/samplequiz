import {Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import {ComputerComponent} from './computer/computer.component';
import {OsmainComponent} from './osmain/osmain.component';
import {OsComponent} from './os/os.component';
import { from } from 'rxjs';
import { ComputermainComponent } from './computermain/computermain.component';
import { ChooseComponent } from './choose/choose.component';
import { FaceComponent } from './face/face.component';
import { MoviesComponent } from './movies/movies.component';
import { DashComponent } from './dash/dash.component';
import { MoreComponent } from './more/more.component';
import { SudukoComponent } from './suduko/suduko.component';
import { WordComponent } from './word/word.component';
export const appRoutes: Routes = [
    {path:'word', component: WordComponent},
    {path: 'suduko', component: SudukoComponent},
    {path: 'dash', component: DashComponent},
    {path: 'movie', component: MoviesComponent},
    {path: 'face', component: FaceComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'register/:button', component: QuizComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'choose', component: ChooseComponent},
    {path: 'choose/:id', component: ComputerComponent},

    {path: 'more', component: MoreComponent},
    // {path: 'quiz/:computer', component: OsComponent},
    {path: 'computer', component: ComputerComponent },
    {path: 'quiz/:button', component: OsComponent},
    {path: 'os', component: OsComponent},
    {path: 'osmain', component: OsmainComponent},
    {path: 'os/:id', component: OsmainComponent},
    {path: 'os/:name', component: OsmainComponent},
    {path: 'result', component: ResultComponent},
    {path: 'osmain/:score', component: ResultComponent},
    {path: 'computer/:sum', component: ComputermainComponent},
    {path: 'computermain', component: ComputermainComponent},
    {path: '', redirectTo: '/register', pathMatch: 'full'},
];
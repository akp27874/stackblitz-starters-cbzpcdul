import { Routes } from '@angular/router';
import { Of } from './rxjs/of/of';
import { From } from './rxjs/from/from';
import { Pipe } from './rxjs/pipe/pipe';
import { Filter } from './rxjs/filter/filter';
import { Map } from './rxjs/map/map';
import { ForkJoin } from './rxjs/fork-join/fork-join';
import { SwitchMap } from './rxjs/switch-map/switch-map';
import { MergeMap } from './rxjs/merge-map/merge-map';
import { ConcatMap } from './rxjs/concat-map/concat-map';
import { ExhaustMap } from './rxjs/exhaust-map/exhaust-map';
import { CombineLatest } from './rxjs/combine-latest/combine-latest';
import { ObservableVsPromise } from './concepts/observable-vs-promise/observable-vs-promise';
import { SubjectVsReplaysubjectVsBehavioursubject } from './concepts/subject-vs-replaysubject-vs-behavioursubject/subject-vs-replaysubject-vs-behavioursubject'

export const routes: Routes = [
  { path: '', component: Map, pathMatch: 'full' },
  { path: 'of', component: Of },
  { path: 'from', component: From },
  { path: 'pipe', component: Pipe },
  { path: 'filter', component: Filter },
  { path: 'map', component: Map },
  { path: 'forkjoin', component: ForkJoin },
  { path: 'switchmap', component: SwitchMap },
  { path: 'mergemap', component: MergeMap },
  { path: 'concatmap', component: ConcatMap },
  { path: 'exhaustmap', component: ExhaustMap },
  { path: 'combinelatest', component: CombineLatest },
  { path: 'observablevspromise', component: ObservableVsPromise},
  { path: 'subjectvsreplayvsbehaviour', component: SubjectVsReplaysubjectVsBehavioursubject}
];


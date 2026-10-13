import { Routes } from '@angular/router';
import { ForkJoin } from './rxjs/fork-join/fork-join';
import { SwitchMap } from './rxjs/switch-map/switch-map';
import { MergeMap } from './rxjs/merge-map/merge-map';
import { ConcatMap } from './rxjs/concat-map/concat-map';
import { ExhaustMap } from './rxjs/exhaust-map/exhaust-map';

export const routes: Routes = [
  { path: '', component: ForkJoin, pathMatch: 'full' },
  { path: 'forkjoin', component: ForkJoin },
  { path: 'switchmap', component: SwitchMap },
  { path: 'mergemap', component: MergeMap },
  { path: 'concatmap', component: ConcatMap },
  { path: 'exhaustmap', component: ExhaustMap },
];

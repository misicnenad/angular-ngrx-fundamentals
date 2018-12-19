import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export interface State extends fromRoot.State {
	users: UserState;
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
	getUserFeatureState,
	state => state.maskUserName
)
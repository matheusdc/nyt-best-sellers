import * as TYPES from '../actions/types';

import playlistsReducer, { INITIAL_STATE } from './playlists';

import { action } from '../actions';

describe('Playlist Reducer', () => {
  it('Should get loading=true and error=false when submitting a request to fetch playlists', () => {
    expect(
      playlistsReducer(
        INITIAL_STATE,
        action(
          TYPES.GET_PLAYLISTS_REQUEST,
        ),
      ),
    ).toStrictEqual({ error: false, loading: true, playlists: [] });
  });

  it('Should get loading=false and error=false when fetching playlists is sucessfull', () => {
    expect(
      playlistsReducer(
        INITIAL_STATE,
        action(
          TYPES.GET_PLAYLISTS_SUCCESS,
          { items: [] },
        ),
      ),
    ).toStrictEqual({ error: false, loading: false, playlists: [] });
  });

  it('Should get loading=false and error=true when fetching playlists is unsucessfull', () => {
    expect(
      playlistsReducer(
        INITIAL_STATE,
        action(
          TYPES.GET_PLAYLISTS_FAILURE,
        ),
      ),
    ).toStrictEqual({ error: true, loading: false, playlists: [] });
  });
});

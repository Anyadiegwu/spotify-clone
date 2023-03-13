import { reducerCases } from "./Constant";

export const initialState = {
    token: null,
    playlists: [],
    selectedPlaylistId: "789OJxWTl4g2t2E4IUfnel",
    selectedPlaylist: null,
    playing: null,
    playerState: false,
    track: null,
    userInfo: null,
};

const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_TOKEN : {
            return{
                ...state,
                token: action.token,
            };
        }
        case reducerCases.SET_PLAYLISTS : {
            return {
                ...state,
                playlists: action.playlists,
            };
        }
        case reducerCases.SET_PLAYLIST : {
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        }
        case reducerCases.SET_PLAYING : {
            return {
                ...state,
                playing: action.playing,
            };
        }
        case reducerCases.SET_PLAYER_STATE : {
            return {
                ...state,
                playerState: action.playerState,
            };
        }
        case reducerCases.SET_TRACK : {
            return {
                ...state,
                track: action.track,
            };
        }
        case reducerCases.SET_USER : {
            return {
                ...state,
                userInfo: action.userInfo,
            };
        }
        case reducerCases.SET_PLAYLIST_ID : {
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };
        }
        case reducerCases.SET_TRENDS : {
            return {
                ...state,
                trends: action.trends,
            };
        }
        default:
            return state;
    }
}
export default reducer
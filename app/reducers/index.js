import { combineReducers } from 'redux';
import VideoReducer from './reducer_video';
import VideosReducer from './reducer_videos';

const rootReducer = combineReducers({
  selected_video: VideoReducer,
  videos: VideosReducer
})

export default rootReducer

import axios from 'axios';
import CONFIG from '../config/index';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

export function searchVideos(term = "") {
  let params = {
    part: 'snippet',
    key: CONFIG.youtube_api_key,
    q: term,
    type: "video"
  }

  let request = axios.get(YOUTUBE_URL, { params: params })

  return {
    type: "VIDEOS_SEARCHED",
    payload: request
  }
}

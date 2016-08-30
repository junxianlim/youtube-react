export default function(state = null, action) {
  switch(action.type) {
  case 'VIDEOS_SEARCHED':
    if (!state) {
      return action.payload.data.items[0];
    } else {
      return state;
    }
  case 'VIDEO_SELECTED':
    return action.payload;
  }

  return state;
}

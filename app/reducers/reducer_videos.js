export default function(state = null, action) {
  switch(action.type) {
  case 'VIDEOS_SEARCHED':
    return action.payload.data.items
  }

  return state;
}

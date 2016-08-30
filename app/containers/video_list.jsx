import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item.jsx';

function VideoList({videos}) {
  if (!videos) {
    return (
      <div></div>
    )
  }

  return (
    <ul className="col-md-4 list-group">
      {
        videos.map( video => {
          return (
            <VideoListItem
              video={video}
              key={video.etag} />
          )
        })
      }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(VideoList)

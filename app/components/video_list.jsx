import React from 'react';
import VideoListItem from './video_list_item.jsx';

function VideoList({videos, onVideoSelect}) {
  return (
    <ul className="col-md-4 list-group">
      {
        videos.map( video => {
          return (
            <VideoListItem
              onVideoSelect={onVideoSelect}
              video={video}
              key={video.etag} />
          )
        })
      }
    </ul>
  )
}

export default VideoList;

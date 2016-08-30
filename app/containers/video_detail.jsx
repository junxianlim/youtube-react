import React from 'react';
import { connect } from 'react-redux';

function VideoDetail({selected_video}) {

  if (!selected_video) {
    return (
      <div></div>
    )
  }

  const videoId = selected_video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{selected_video.snippet.title}</div>
        <div>{selected_video.snippet.description}</div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    selected_video: state.selected_video
  }
}

export default connect(mapStateToProps)(VideoDetail)

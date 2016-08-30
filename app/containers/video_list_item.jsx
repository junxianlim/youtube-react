import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions/select_video';

function VideoListItem({video, selectVideo}) {
  return (
    <li onClick={() => selectVideo(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectVideo: selectVideo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem)

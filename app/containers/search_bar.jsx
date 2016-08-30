import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { setVideos } from '../actions/set_videos';
import { selectVideo } from '../actions/select_video';
import { connect } from 'react-redux';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import CONFIG from '../config/index';

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.youtubeSearch()
  }

  youtubeSearch(term = "") {
    YTSearch({ key: CONFIG.youtube_api_key, term: term }, (videos) => {
      this.props.setVideos(videos)
      if (!this.props.selected_video) {
        this.props.selectVideo(videos[0])
      }
    })
  }

  render() {
    const onInputChange = _.debounce(term => { this.youtubeSearch(term) }, 500)

    return (
      <div className="form-group search-bar">
        <input className="form-control" onChange={ e => onInputChange(e.target.value) } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    selected_video: state.selected_video
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setVideos: setVideos,
    selectVideo: selectVideo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

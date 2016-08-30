import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions/select_video';
import { searchVideos } from '../actions/search_videos';
import { connect } from 'react-redux';
import _ from 'lodash';
import CONFIG from '../config/index';

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.props.searchVideos()
  }
  
  render() {
    const onInputChange = _.debounce(term => { this.props.searchVideos(term) }, 500)

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
    searchVideos: searchVideos,
    selectVideo: selectVideo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

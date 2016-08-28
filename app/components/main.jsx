import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar.jsx';
import VideoList from './video_list.jsx';
import VideoDetail from './video_detail.jsx';

import styles from '../styles/styles.styl';
import CONFIG from '../config/index';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({ key: CONFIG.youtube_api_key, term: term }, (videos) => {
      if (!this.state.selectedVideo) {
        this.setState({selectedVideo: videos[0]});
      }
      this.setState({
        videos: videos
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

export default Main;

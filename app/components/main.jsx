import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

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

    YTSearch({ key: CONFIG.youtube_api_key, term: 'surfboards' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

export default Main;

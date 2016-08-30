import React, { Component } from 'react';

import SearchBar from '../containers/search_bar.jsx';
import VideoList from '../containers/video_list.jsx';
import VideoDetail from '../containers/video_detail.jsx';

import styles from '../styles/styles.styl';

function Main() {
  return (
    <div className="container">
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  )
}

export default Main

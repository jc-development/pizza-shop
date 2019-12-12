import React, { Component, createRef } from 'react';
import VideoControls from './VideoControls';
import _throttle from 'lodash/throttle';

if (process.env.IS_BROWSER) {
  const TweenLite = require('gsap/TweenLite');
}

export default class Video extends Component {

  constructor(props) {
    super(props);

    this.timeRanges = [];
    this.video = createRef();

    this.provideVideoTimeRange = this.provideVideoTimeRange.bind(this);
    this.videoPlayStatus = this.videoPlayStatus.bind(this);
    this.updateTimeLineProgress = this.updateTimeLineProgress.bind(this);
    this.updateVideoCurrentTime = this.updateVideoCurrentTime.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleVideoPlayEnded = this.handleVideoPlayEnded.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.handleMouseMoveThrottled = _throttle(this.handleMouseMove, 1000, { 'leading': true, 'trailing': false });


    this.state = {
      timeLineProgress: 0,
      mouseHovering: false,
      videoPlaying: false,
      mousePos: [0, 0]
    };
  }

  componentDidMount() {
    this.video.current.addEventListener('timeupdate', this.updateTimeLineProgress);
  }

  componentWillUnmount() {
    TweenLite.ticker.removeEventListener('tick', this.updateTimeLineProgress);
    this.video.current.removeEventListener('timeupdate', this.updateTimeLineProgress);
  }

  render() {
    const { caption, poster, src } = this.props.content;

    return (
      <>
        <video ref={ this.video } poster={poster} onPlay={ this.handlePlay } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave } onMouseMove={ this.handleMouseMoveThrottled } onEnded={ this.handleVideoPlayEnded }>
          <source src={src} />
        </video>
        <VideoControls
          getVideoTimeRange={ this.provideVideoTimeRange }
          playVideo={ this.videoPlayStatus }
          videoPlaying={ this.state.videoPlaying }
          mouseHoveringVideo={ this.state.mouseHovering }
          timeLineProgress={ this.state.timeLineProgress }
          setPercent={ this.updateVideoCurrentTime }
          mousePosOnVid={ this.state.mousePos }
        />
        <span className="vid-time">00:00</span>
        <p>{caption}</p>
      </>
    );
  }

  handlePlay() {
    TweenLite.ticker.addEventListener('tick', this.updateTimeLineProgress);
  }

  provideVideoTimeRange() {
    const timeRangesObject = this.video.current.seekable;
    for (let count = 0; count < timeRangesObject.length; count++) {
      this.timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
    }
    return this.timeRanges;
  }

  videoPlayStatus(bool) {
    if (bool) {
      this.video.current.play();
      this.setState({ videoPlaying: true });
    } else {
      this.video.current.pause();
      this.setState({ videoPlaying: false });
    }
  }

  updateTimeLineProgress() {
    this.setState({ timeLineProgress: (this.video.current.currentTime / this.video.current.duration) });
  }

  updateVideoCurrentTime(percent) {
    this.video.current.currentTime = ( this.timeRanges[0][1] * percent );
  }

  handleVideoPlayEnded() {
    this.setState({ videoPlaying: false });
  }

  handleMouseEnter() {
    this.setState({ mouseHovering: true });
  }

  handleMouseLeave() {
    this.setState({ mouseHovering: false });
  }


  handleMouseMove(e) {
    if (e.clientX !== null && e.clientY !== null) {
      this.setState({ mousePos: [e.clientX, e.clientY] });
    }
  }

};

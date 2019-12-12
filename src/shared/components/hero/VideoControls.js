import React, { Component, createRef } from 'react';
import './assets/css/video-controls.css';
import _throttle from 'lodash/throttle';
import _debounce from 'lodash/debounce';

if (process.env.IS_BROWSER) {
  const TweenMax = require('gsap/TweenMax');
  const TimelineMax = require('gsap/TimelineMax');
  const AttrPlugin = require('gsap/AttrPlugin');
  const Draggable = require('gsap/Draggable');
  const MorphSVGPlugin = require('./assets/utils/MorphSVGPlugin');
  const DrawSVGPlugin = require('./assets/utils/DrawSVGPlugin');
}

export default class VideoControls extends Component {

  constructor(props) {
    super(props);

    this.videoControlsWrapper = createRef();
    this.whiteCircle = createRef();
    this.progressCircle = createRef();
    this.hitArea = createRef();
    this.playButton = createRef();
    this.playText = createRef();
    this.pauseButton = createRef();
    this.pauseText = createRef();
    this.videoControls = createRef();

    this.draggable;
    this.progressCirclePath;
    this.timeRanges;
    this.showControls;
    this.hideControls;
    this.intervalId = 0;

    this.initTimeRanges = this.initTimeRanges.bind(this);
    this.seekVideo = this.seekVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.onDragEndPlay = this.onDragEndPlay.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.handleVideoControlsMouseEnter = this.handleVideoControlsMouseEnter.bind(this);
    this.handleVideoControlsMouseLeave = this.handleVideoControlsMouseLeave.bind(this);
    this.handleVidControlWrapperEnter = this.handleVidControlWrapperEnter.bind(this);
    this.handleVidControlWrapperLeave = this.handleVidControlWrapperLeave.bind(this);

    this.animateControlButton = this.animateControlButton.bind(this);
    this.handleControlButtonMouseEnter = this.handleControlButtonMouseEnter.bind(this);
    this.handleControlButtonMouseLeave = this.handleControlButtonMouseLeave.bind(this);
    this.updateControlVisibility = this.updateControlVisibility.bind(this);

    this.state = {
      dragging: false,
      timeRanges: null,
      svgWrapperHover: false
    };

  }

  componentDidMount() {

    if (process.env.IS_BROWSER) {

      this.progressCircleTl = new TimelineMax({ paused: true });
      this.hoverTl = new TimelineMax({ paused: true });

      this.hoverVidControlWrapperTl = new TimelineMax({ paused: true });

      this.playPauseSwapTl = new TimelineMax({ paused: true });
      this.hoverPlayButtonTl = new TimelineMax({ paused: true });
      this.hoverPauseButtonTl = new TimelineMax({ paused: true });

        this.progressCirclePath = MorphSVGPlugin.convertToPath(this.progressCircle.current);

        TweenMax.set(this.videoControls.current, { rotation: 0, svgOrigin: "150, 150" });
        TweenMax.set(this.pauseButton.current, { autoAlpha: 0 });

        this.draggable = Draggable.create(this.videoControls.current, {
          type: "rotation",
          bounds: { minRotation: 0, maxRotation: 360 },
          onDrag: this.seekVideo,
          onDragEnd: this.onDragEndPlay
        });

        this.progressCircleTl
          .from(this.progressCirclePath, 0.5, { drawSVG: "0%", ease: "Power0.easeNone" })
          .to(this.videoControls.current, 0.5, { rotation: 360, ease: "Power0.easeNone" }, 0);

        this.hoverTl
         .to(this.videoControls.current, 0.5, { attr: { r: 8 } });

        this.playPauseSwapTl
          .fromTo(this.playButton.current, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 })
          .fromTo(this.pauseButton.current, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 }, 0);

        this.hoverVidControlWrapperTl
          .to([this.videoControls.current, this.hitArea.current], 0.5, { attr: { r: 6 } })
          .fromTo(this.whiteCircle.current, 0.5, { css: { opacity: 0.25 } }, { css: { opacity: 1 } }, 0)

        this.showControls = () => TweenMax.to([this.videoControlsWrapper.current, this.hitArea.current], 3, { css: {opacity: 1} });
        this.hideControls = () => TweenMax.to([this.videoControlsWrapper.current, this.hitArea.current], 3, { css: {opacity: 0} });

    }

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (process.env.IS_BROWSER) {
      if ( (prevProps.timeLineProgress !== this.props.timeLineProgress) && this.props.timeLineProgress !== NaN ) {
        this.progressCircleTl.progress( this.props.timeLineProgress );
      }

      if (prevProps.videoPlaying !== this.props.videoPlaying) { // this is only going to fire once, when the video changes state from playing to paused and vice versa
        if (this.props.videoPlaying) {
          this.playPauseSwapTl.play();
        } else {
          this.showControls();
          this.playPauseSwapTl.reverse();
        }
      }

      if (prevProps.mousePosOnVid !== this.props.mousePosOnVid) {
        if (this.props.videoPlaying) { this.updateControlVisibility(); }
      }
    }
  }


  render() {

    const playPauseText = () => !this.props.videoPlaying ? <span ref={ this.playText }>PLAY</span> : <span ref={ this.pauseText }>PAUSE</span>;


    return (
      <>
      <div ref={ this.videoControlsWrapper } className="video-controls-wrapper" onMouseEnter={ this.handleVidControlWrapperEnter } onMouseLeave={ this.handleVidControlWrapperLeave }>
      <svg className="video-controls" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">

        <circle ref={ this.whiteCircle } className="st0" cx="150" cy="150" r="75" />
        <circle ref={ this.progressCircle } stroke="green" stroke-width="3" fill="none" cx="150" cy="150" r="75"  />
        <circle ref={ this.videoControls } className="video-controls-component" stroke="green" stroke-width="1" fill="green" cx="225" cy="150" r="4" onMouseOver={ this.handleVideoControlsMouseEnter } onMouseOut={ this.handleVideoControlsMouseLeave } />

      </svg>

        { this.state.dragging === false ? <p onClick={ this.playVideo }>{ playPauseText() } VIDEO</p> : <p>SEEKING</p> }
      </div>

      <div className="hit-area" ref={ this.hitArea } onMouseEnter={ this.handleControlButtonMouseEnter } onMouseLeave={ this.handleControlButtonMouseLeave } onClick={ this.playVideo }>

        <svg className="video-controls-play-button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 200 200">
        <g className="button" ref={ this.playButton }>
          <polygon class="st0" points="16.85,20.41 15.73,13.06 25.75,20.41 15.73,27.76 	"/>
          <path class="st0" d="M16.41,14.18l8.5,6.23l-8.5,6.23l0.92-6.08l0.02-0.15l-0.02-0.15L16.41,14.18 M15.06,11.95l1.28,8.46l-1.28,8.46l11.54-8.46L15.06,11.95L15.06,11.95z"/>
        </g>

        <g className="button" ref={ this.pauseButton }>
          <g>
            <rect x="13.1" y="10.91" class="st0" width="4" height="19"/>
            <path class="st0" d="M16.6,11.41v18h-3v-18H16.6 M17.6,10.41h-5v20h5V10.41L17.6,10.41z"/>
          </g>
          <g>
            <rect x="21.86" y="10.91" class="st0" width="4" height="19"/>
            <path class="st0" d="M25.36,11.41v18h-3v-18H25.36 M26.36,10.41h-5v20h5V10.41L26.36,10.41z"/>
          </g>
        </g>
        </svg>
      </div>
      </>
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  initTimeRanges() {
    this.setState({ timeRanges: this.props.getVideoTimeRange() });
  }

  playVideo() {
    this.state.timeRanges === null ? this.initTimeRanges() : null;
    this.props.playVideo(!this.props.videoPlaying);
  }

  onDragEndPlay() {
    this.props.playVideo(true);
    this.setState({ dragging: false });
  }

  seekVideo() {
    this.playVideo();
    this.setProgress( this.draggable[0].rotation / 360 );
    this.setState({ dragging: true });
  }

  setProgress(percent) {
    this.props.setPercent(percent);
  }

  handleVideoControlsMouseEnter() {
    this.hoverTl.play();
  }

  handleVideoControlsMouseLeave() {
    this.hoverTl.reverse();
  }

  handleVidControlWrapperEnter() {
    this.hoverVidControlWrapperTl.play();
    this.showControls();
    this.setState({ svgWrapperHover: true });
  }

  handleVidControlWrapperLeave() {
    this.hoverVidControlWrapperTl.reverse();
    this.setState({ svgWrapperHover: false });
  }

  animateControlButton(el) {
    return this.hoverPlayButtonTl.to(el.current, 0.5, { css: { scale: 1.75, transformOrigin: "center center" } });
  }

  handleControlButtonMouseEnter() {
    let el = this.props.videoPlaying ? this.pauseButton : this.playButton;
    this.animateControlButton(el).play();
    this.showControls();
    this.setState({ svgWrapperHover: true });
  }

  handleControlButtonMouseLeave() {
    let el = this.props.videoPlaying ? this.pauseButton : this.playButton;
    this.animateControlButton(el).reverse();
    this.setState({ svgWrapperHover: false });
  }

  updateControlVisibility() {
    var timer = 3;
    this.showControls();

    this.intervalId = setInterval(
      () => {
        if (timer > 0) {
          timer = timer - 1;
        }
      },
    1000);

    setTimeout(
      () => {
        clearInterval(this.intervalId);
        if (this.props.videoPlaying && !this.state.svgWrapperHover) {
          this.hideControls();
        } else {
          this.showControls()
        }
      },
    3500);

  }

};

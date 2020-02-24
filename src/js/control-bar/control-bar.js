/**
 * @file control-bar.js
 */
import Component from '../component.js';
// import document from 'global/document';

// Required children
import './play-toggle.js';
import './time-controls/current-time-display.js';
import './time-controls/duration-display.js';
import './time-controls/time-divider.js';
import './time-controls/remaining-time-display.js';
import './live-display.js';
import './seek-to-live.js';
import './progress-control/progress-control.js';
// import './picture-in-picture-toggle.js';
import './fullscreen-toggle.js';
import './volume-panel.js';
import './text-track-controls/chapters-button.js';
import './text-track-controls/descriptions-button.js';
import './text-track-controls/subtitles-button.js';
import './text-track-controls/captions-button.js';
import './text-track-controls/subs-caps-button.js';
import './audio-track-controls/audio-track-button.js';
import './playback-rate-menu/playback-rate-menu-button.js';
import './spacer-controls/custom-control-spacer.js';

/**
 * Container of main controls.
 *
 * @extends Component
 */
class ControlBar extends Component {
  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  createEl() {
    this.controlBarTopEl = super.createEl('div', {
      className: 'vjs-control-bar-top',
      dir: 'ltr'
    });
    this.controlBarBottomEl = super.createEl('div', {
      className: 'vjs-control-bar-bottom',
      dir: 'ltr'
    });
    this.controlBarBottomLeftEl = super.createEl('div', {
      className: 'vjs-control-bar-bottom-left',
      dir: 'ltr'
    });
    this.controlBarBottomRightEl = super.createEl('div', {
      className: 'vjs-control-bar-bottom-right',
      dir: 'ltr'
    });
    this.controlBarEl = super.createEl('div', {
      className: 'vjs-control-bar',
      dir: 'ltr'
    });
    this.controlBarEl.appendChild(this.controlBarTopEl);
    this.controlBarEl.appendChild(this.controlBarBottomEl);
    this.controlBarBottomEl.appendChild(this.controlBarBottomLeftEl);
    this.controlBarBottomEl.appendChild(this.controlBarBottomRightEl);
    return this.controlBarEl;
  }

  // Hack: add children to layout comps based on their name
  addChild(child, options = {}, index = this.children_.length) {
    const saveEl = this.el_;

    switch (child) {
    case 'progressControl':
      this.el_ = this.controlBarTopEl;
      break;
    case 'playToggle':
    case 'currentTimeDisplay':
    case 'timeDivider':
    case 'durationDisplay':
    case 'liveDisplay':
    case 'seekToLive':
    case 'remainingTimeDisplay':
    case 'customControlSpacer':
      this.el_ = this.controlBarBottomLeftEl;
      break;
    case 'volumePanel':
    case 'playbackRateMenuButton':
    case 'chaptersButton':
    case 'descriptionsButton':
    case 'subsCapsButton':
    case 'audioTrackButton':
    case 'fullscreenToggle':
    // case 'pictureInPictureToggle':
      this.el_ = this.controlBarBottomRightEl;
      break;
    default:
      // console.log('addChild', child);
    }
    const comp = super.addChild(child, options, index);

    this.el_ = saveEl;
    return comp;
  }
}

/**
 * Default options for `ControlBar`
 * The order is important. It defines the order of the ui elements
 * @type {Object}
 * @private
 */
ControlBar.prototype.options_ = {
  children: [
    'playToggle',
    'currentTimeDisplay',
    'timeDivider',
    'durationDisplay',
    'progressControl',
    'liveDisplay',
    'seekToLive',
    'remainingTimeDisplay',
    'customControlSpacer',
    'volumePanel',
    'playbackRateMenuButton',
    'chaptersButton',
    'descriptionsButton',
    'subsCapsButton',
    'audioTrackButton',
    'fullscreenToggle'
  ]
};

/*
if ('exitPictureInPicture' in document) {
  ControlBar.prototype.options_.children.splice(
    ControlBar.prototype.options_.children.length - 1,
    0,
    'pictureInPictureToggle'
  );
}*/

Component.registerComponent('ControlBar', ControlBar);
export default ControlBar;

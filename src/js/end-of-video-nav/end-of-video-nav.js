/**
 * @file end-of-video-nav.js
 */
import Component from '../component.js';
import * as Fn from '../utils/fn.js';
import * as Dom from '../utils/dom.js';

// the child comps
import './play-again-button.js';
import './play-next-button.js';
import './play-previous-button.js';

/**
 * A `Component` that handles showing the nav at the end of the video.
 *
 * @extends Component
 */
class EndOfVideoNav extends Component {
  /**
   * Create an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should attach to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  constructor(player, options) {
    super(player, options);

    this.hide();
    player.on('ended', Fn.bind(this, this.show));
    player.on(['play', 'seek', 'seeked'], Fn.bind(this, this.hide));
  }

  /**
   * Clean up and dispose of the `EndOfVideoNav`.
   */
  dispose() {
    this.player_.off('ended', this.show);
    this.player_.off(['play', 'seek', 'seeked'], this.hide);
    super.dispose();
  }

  hideEndOfNav() {
    this.hide();
  }

  /**
   * Create the `EndOfVideoNav`s DOM element.
   *
   * @return {Element}
   *         The element that gets created.
   */
  createEl() {
    const el = Dom.createEl('div', {
      className: 'vjs-end-of-video-nav',

      // Don't want to be tabbable.
      tabIndex: -1
    });

    const contentEl = Dom.createEl('div', {
      className: 'vjs-end-of-video-nav-content',

      // Don't want to be tabbable.
      tabIndex: -1
    });

    el.appendChild(contentEl);
    this.contentEl_ = contentEl;

    return el;
  }
}

/**
 * Default options for `EndOfVideoNav`
 * The order is important. It defines the order of the ui elements
 * @type {Object}
 * @private
 */
EndOfVideoNav.prototype.options_ = {
  children: ['playPreviousButton', 'playAgainButton', 'playNextButton']
};

Component.registerComponent('EndOfVideoNav', EndOfVideoNav);
export default EndOfVideoNav;

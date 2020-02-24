/**
 * @file play-previous-button.js
 */
import Button from '../button.js';
import Component from '../component.js';

/**
 * Button to play the previous video.
 *
 * @extends Button
 */
class PlayPreviousButton extends Button {

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  buildCSSClass() {
    return `vjs-play-previous-button ${this.getConfig()} ${super.buildCSSClass()}`;
  }

  getConfig() {
    try {
      return this.options_.playerOptions.endOfVideoNav.previous || 'not-available';
    } catch (err) {
      return 'not-available';
    }
  }

  /**
   * This gets called when an `PlayPreviousButton` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */
  handleClick(event) {
    this.dispatchSmashcutUiEvent('play-previous');
  }

}

/**
 * The text that should display over the `PlayPreviousButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
PlayPreviousButton.prototype.controlText_ = 'Play Previous';

Component.registerComponent('PlayPreviousButton', PlayPreviousButton);
export default PlayPreviousButton;

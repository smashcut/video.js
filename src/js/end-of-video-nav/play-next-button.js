/**
 * @file play-next-button.js
 */
import Button from '../button.js';
import Component from '../component.js';

/**
 * Button to play the next video.
 *
 * @extends Button
 */
class PlayNextButton extends Button {

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  buildCSSClass() {
    return `vjs-play-next-button ${this.getConfig()} ${super.buildCSSClass()}`;
  }

  getConfig() {
    try {
      return this.options_.playerOptions.endOfVideoNav.next || 'not-available';
    } catch (err) {
      return 'not-available';
    }
  }

  /**
   * This gets called when an `PlayNextButton` is "clicked". See
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
    this.dispatchSmashcutUiEvent('play-next');
  }

}

/**
 * The text that should display over the `PlayNextButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
PlayNextButton.prototype.controlText_ = 'Play Next';

Component.registerComponent('PlayNextButton', PlayNextButton);
export default PlayNextButton;

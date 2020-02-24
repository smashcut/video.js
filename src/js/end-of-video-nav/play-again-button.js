/**
 * @file play-again-button.js
 */
import Button from '../button.js';
import Component from '../component.js';

/**
 * Button to play the video again.
 *
 * @extends Button
 */
class PlayAgainButton extends Button {

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  buildCSSClass() {
    return `vjs-play-again-button ${this.getConfig()} ${super.buildCSSClass()}`;
  }

  getConfig() {
    try {
      return this.options_.playerOptions.endOfVideoNav.again || 'not-available';
    } catch (err) {
      return 'not-available';
    }
  }

  /**
   * This gets called when an `PlayAgainButton` is "clicked". See
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
    this.player_.play();
    this.dispatchSmashcutUiEvent('play-again');
  }

}

/**
 * The text that should display over the `PlayAgainButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
PlayAgainButton.prototype.controlText_ = 'Play Again';

Component.registerComponent('PlayAgainButton', PlayAgainButton);
export default PlayAgainButton;

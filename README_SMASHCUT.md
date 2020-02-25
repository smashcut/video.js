# Why fork?

1. added Smashcut specific events to controls, see dispatchSmashcutUiEvent
1. added preprocessHttpRequests (for url signing) to xhr and http-streaming libs
1. added styles to controls
1. added new control for endOfVideoNav

## Is there a way around forking?

1. Create a plugin for the player-ui
1. Replace built-in xhr and http-streaming libs with our version

# Demo Dependencies

Note that some deps are only used for the demo and therefore they are in dev dependencies.

* videojs-seek-buttons
* videojs-vtt-thumbnails

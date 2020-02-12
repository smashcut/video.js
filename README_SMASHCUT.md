# Errors in npm run build:test:webpack

`ERROR in ./~/mux.js/package.json
Module parse failed: /home/rbokel/workspace/smashcut/video.js/node_modules/mux.js/package.json Unexpected token (2:9)
You may need an appropriate loader to handle this file type.`

Not sure, what these errors are, but they don't seem to break the player.
They go away, when i depend on @videojs/http-streaming instead of the smashcut version.

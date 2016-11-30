# Classic arcade game
this project is a classic arcade game. The game contains enemies and player. The player need to cross the yard to reach the river. If the player collide with any one of the enemies, the game will reset and the player will be back to inital location.

## operation guide
the enemies will cross the yard from left to right and move in vary speed. The player need to aviod to meet the enemies. Player can move to left, right, up and down. Once the player reach the river, the player win and the player will be back to the initial location.
You can see the operation video by [Click Here](https://www.youtube.com/watch?v=SxeHV1kt7iU&feature=youtu.be).

## Game
[play the game](https://fieudi.github.io/Classic-Arcade-Game/index.html).

## download
[download this game](https://github.com/Fieudi/Classic-Arcade-Game).

## File
### app.js
In the file, contains the enemies and the player's object oriented. It set the enemies and player's inital location and operation code.

### engine.js
In this file, it provides the game loop functionality.
Drawing the inital game board on the screen, and then calls the update and render methods on player and enemies objects.

### Resources.js
This is an image loading utility. It eases the process of loading image files so they can be used in the game.
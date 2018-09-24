class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Returns active player
     * @return {Object} Active player object
     */
    get activePlayer(){
        return this.players.find(player => player.active);
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers(){
        const players = [new Player("Player One", 1, "#e15258", true),
                         new Player("Player Two", 2, "#e59a13")];
        return players;
    }

    /** 
     * Listens for click on `#begin-game` and calls startGame() on game object
     */
    startGame(){
        
    }
}
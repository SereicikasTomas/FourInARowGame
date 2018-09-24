class Token {
    constructor(owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    /**
     * Draws new HTML token.
     */
    drawHTMLToken(){
        const div = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(div);
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'token');
        div.style.background = this.owner.color;
    }

    get htmlToken(){
        return document.getElementbyid(this.id);
    }
}
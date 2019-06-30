class Game {
    constructor(start) {
        this.stat = new Statistics();
        this.wallet = new Wallet(start);

        // pobranie przycisku spin i uruchomienie gry
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));

        this.boards = [...document.querySelectorAll('.game .color')];
        this.inputBid = document.getElementById('bid');
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGame = document.querySelector('.score span.number');
        this.spanWin = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }

    // render(colors = [url='img/stone_01.jpg', 'gray', 'yellow'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
    render(colors = ['red', 'gray', 'yellow'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });

        this.spanWallet.textContent = money;
        if (result) result = `YOU WIN! ${wonMoney}$.`;
        else if (!result && result !== "") result = `YOU LOSS ${bid}$.`;
        this.spanResult.textContent = result;
        this.spanGame.textContent = stats[0];
        this.spanWin.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        this.inputBid.value = "";
    }

    startGame() {
        if (this.inputBid.value < 1) return alert("You set too little money!!!");

        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert("You do not have enough money or an incorrect value has been provided");
        }

        this.wallet.changeWallet(bid, "-");
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney, "+");

        this.stat.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stat.showGameStatistics(), bid, wonMoney);
    }
}
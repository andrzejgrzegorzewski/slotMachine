class Wallet {
    constructor(money) {
        let _money = money;

        //pobieranie aktualnej zawartosci portfela
        this.getWalletValue = () => _money;

        //sprawdzanie czy uzytkownik ma wystarczajaca ilosc pieniedzy
        this.checkCanPlay = (value) => {
            if (_money >= value)
                return true;
            return false;
        }

        //zmiana zawartosci portfela
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Incorrect type of operation");
                }
            } else {
                console.log(typeof value);
                throw new Error("Incorrect type of operation");
            }
        }
    }
}

// const wallet = new Wallet(100);
class Draw {
    constructor() {
        // this.options = [
        //     {
        //     color: 'img/stone_01.jpg'},
        //      {
        //          color: 'img/paper_01.jpg'},
        //       {
        //           color: 'img/scissors_01.jp'
        //       }
        // ];
        this.options = [
            'yellow',
             'green',
              'blue'
        ];
        
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let colors = [];

        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        }
        return colors;
    }
}
class Mincalcclassique {
    constructor (BgColor, op) {
        this._BgColor = BgColor;
        this._op = op;
    }
    getBgColor() {
        return this._BgColor;
    }
    setBgColor(c) {
        this._BgColor = c;
    }
    getOp() {
        return this._op;
    }
    setOp(o) {
        this._op = o;
    }
    additionner(n1, n2) {
        return (n1 + n2);
    }

    soustraire(n1, n2) {
        return (n1 - n2);
    }

    diviser (n1, n2) {
        if (n2 == 0) {
            return ("Opération impossible");
        } else {
            return (n1 / n2)
        }
    }

    multiplier (n1, n2) {
        return (n1 * n2);
    }
    calculer (n1, n2) {
        switch (this.getOp()){
        case "+":
            return (this.additionner(n1, n2));
        case "-":
            return (this.soustraire(n1, n2));
        case "*":
            return (this.multiplier(n1, n2));
        case "/":
            return (this.diviser(n1, n2));
        }
    }
}

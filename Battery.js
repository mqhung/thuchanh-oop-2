class Battery{
    constructor(_energy) {
        this._energy = _energy;
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
    decreaseEnergy(){
       if(this._energy > 0 ){
           return this.energy -= 1;
       }
}

}
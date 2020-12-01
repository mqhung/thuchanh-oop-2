class FlashLamp{
    constructor(_battery) {
        this.status = true;
        this._battery = _battery;
    }
    set battery(_battery){
        this._battery = _battery;
    }
    getBattery(_battery){
        return this._battery.energy;
    }
    getBatteryInfo(){
        return this._battery.decreaseEnergy();
    }
    light(){
        if (this.status){
            document.write("Lighting" +"<br>")
        } else {
            document.write("No lighting")
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
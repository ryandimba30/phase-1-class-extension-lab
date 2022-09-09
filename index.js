// Your code here
let integers = [5,5,5];
class Polygon {
    constructor(integers){
        this.integers = integers;
    }
    get countSides(){
        return this.integers.length;
    }
    get perimeter(){
        let perimeter=0;
        for(let i=0;i<this.integers.length; i++){
            perimeter+= this.integers[i];
        }
        return perimeter;
    }
}
class Triangle extends Polygon {
    get isValid(){
        if(this.integers[0] + this.integers[1] > this.integers[2] && this.integers[0] + this.integers[2] > this.integers[1] && this.integers[1] + this.integers[2] > this.integers[0]){
            return true;
        }else{
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid(){

        if(this.integers[0] === this.integers[1]){
            return true;
        }else{
            return false;
        }
    }
    get area(){
        return this.integers[0] ** 2;
    }
}
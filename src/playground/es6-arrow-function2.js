const add =  (a, b) => {
 //   console.log(arguments);
    return a+b;
}
console.log(add(55,1,1001))

const user = {
    name: "Andrew",
    cities: ['Moscow', "Cambridge", "Garvard"],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

/*         this.cities.forEach(element => {
            console.log( this.name + " живет и будет жить " + element );
 */         this.cities.forEach( (element) => {
                console.log( this.name + " живет и будет жить " + element );
        
        });
    }
}

user.printPlacesLived();


const multipier = {
    number: [1,2,3],
    multiplyBy: 2,
    mulliply() {
        return this.number.map( element => element * this.multiplyBy);

    }

}
console.log(multipier.mulliply());
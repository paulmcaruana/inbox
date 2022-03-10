class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;
    
beforeEach(() => {
    car = new Car();
});

describe('vehicle', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
} )

// Rinkeby API endpoint - https://rinkeby.infura.io/v3/1bb97179370a4c1aa13c272c2248ff0b
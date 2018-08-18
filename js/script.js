(function() {
    'use strict';

    var iPhone9 = new Phone('Apple', 4500, 'silver');
    var SamsungGalaxyS9 = new Phone('Samsung', 3000, 'Midnight Black');
    var HuaweiP20Pro = new Phone('Huawei', 3500, 'silver');

    function Phone(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;

        this.printInfo = function() {
            console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
        };
    };

    iPhone9.printInfo();
    SamsungGalaxyS9.printInfo();
    HuaweiP20Pro.printInfo();
})();

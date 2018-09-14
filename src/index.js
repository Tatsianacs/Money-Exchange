// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        var myObj = {};
        return myObj;
    }
    if (currency > 10000) {
        var myObjmore = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return myObjmore;
        // RETURN OBJECT  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    var h = Math.floor(currency / 50);
    currency -= h*50;
    var q = Math.floor(currency / 25);
    currency -= q*25;
    var d = Math.floor(currency / 10);
    currency -= d*10;
    var n = Math.floor(currency / 5);
    var p = currency % 5;
    var money2 = {};
    if (h != 0) {
        money2.H = h;
    }
    if (q != 0) {
        money2.Q = q;
    }
    if (d != 0) {
        money2.D = d;
    }
    if (n != 0) {
        money2.N = n;
    }
    if (p != 0){
        money2.P = p;
    }
    return money2;
}

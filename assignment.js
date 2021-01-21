
// PROBLEM-1

function kilometerToMeter(kilometer) {
    // step 1: Used to if statemant and Initialize vaiable 
    if(kilometer > -1){
        var meter = kilometer * 1000;
    }
    // step 2: else statement used because when user negetive value set than signal it is not work
    else{
        return ("Meter never cannot be a negative value");
    }
    return meter;
}





// PROBLEM-2

function budgetCalculator(watch,phone,laptop) {
    // step 1: If staement through each item in the parameter
    if((watch > -1) && (phone > -1) && (laptop > -1) ){
        var totalWatchPrice = watch * 50;
        var totalPhonePrice = phone * 100;
        var totalLaptopPrice = laptop * 500;
        var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    }
    // step 2: else used to when  user set negative value than output a signal 
    else{
        return ("Price never cannot be negative value")
       
    }
    return totalPrice;
}





// PROBLEM-3

function hotelCost(totalDay) {
    // set the variable for cost
    var cost = 0;
    // step 1 :If statement used for positive value and into the code work 
    if(totalDay > -1){
        // step 1.1 :If statement used for first ten days cost calculate
        if(totalDay <= 10){
            cost = totalDay * 100;
        }
        // step 1.2 : The statment used for second ten days cost calculate
        else if(totalDay <= 20){
            var firstTenDay = 10 * 100;
            var remaining = totalDay - 10;
            var secondTenDay = remaining * 80;
            cost = firstTenDay + secondTenDay;
        }
        // step 1.3 : The statement used for third ten days cost calculate
        else{
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var remaining = totalDay - 20;
            var thirdTenDay = remaining * 50;
            cost = firstTenDay + secondTenDay + thirdTenDay;
        }
        
    }
    // step 2: else statement used for  when user set negative value than output show the signal 
    else{
        return ("Day never cannot be negative")
    }
    return cost;
}






// PROBLEM-4

function megaFriend() {
    // Initialize variable with an array of strings.
    var friendList = ['aminul','towfik','abdur rahman', 'kobir husen']
    // Initialize variable to count the index of the string 
    var longestNmuber = 0;
    // Initialize variable to longest word
    var longestWord = 0;
    // Loop through each item in the array
    for (var i = 0; i < friendList.length; i++) {
        if (longestNmuber < friendList[i].length) {
            longestNmuber = friendList[i].length;
            longestWord = friendList[i];
        }
    }
    return longestWord;
}
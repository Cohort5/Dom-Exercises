var venue = {  //var=name, method is a function inside of an object - concert venue, purchase, sell, return, seats
    name: "CareerDevs Concert Venues",  //key, value, pair aka properties 
    ratiing: 5.0, //decimals=floating point values
    purchaseRate: 725.00,
    seatNumbersAvailable: ["101a" ,"102b" , "103c" , "104d" , "105e" , "106f"], //key to array contain a string
    seatNumbersBooked: [],
    seatType: "To the Moon", //intergers
    
    numberOfSeatsAvailable: function() { //lenght of the number of rooms available array
        return this.seatNumbersAvailable.length;  //return=intergers
       
   },
   
    numberOfSeatsBooked: function() {
        return this.seatNumbersBooked.length; //lenght-returns number of items in array as an interger
        
    },
   
    numberOfSeats: function() { //avail rooms + booked rooms
        return this.seatNumbersAvailable.length + this.seatNumbersBooked.length;
       
    },
    bookSeat: function() { // only book a room if one or more is available
        if (this.numberOfSeatsAvailable() > 0) { //select a random available room + return randomAvailRoom
        var randomSeat = this.seatNumbersAvailable[Math.floor(Math.random()*this.seatNumbersAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.seatNumbersBooked.unshift(this.seatNumbersAvailable.splice(this.seatNumbersAvailable.indexOf(randomSeat), 1)[0]); 
        }
    },  
    checkoutSeat: function() { // only book a room if one or more is available
        if (this.numberOfSeatsAvailable() > 0) { //select a random available room + return randomAvailRoom
        var checkoutRandomSeat = this.seatNumbersAvailable[Math.floor(Math.random()*this.seatNumbersAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.seatNumbersBooked.unshift(this.seatNumbersAvailable.splice(this.seatNumbersAvailable.indexOf(checkoutRandomSeat), 1)[0]);  
        }
    },
    
};
  
document.getElementById("venueName").innerText = venue.name;

//<div id="rmsAvailable"></div>
//SO UL list section
//roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"],

var seatList = "</ul>";
for (var i = 0; i < venue.seatNumbersAvailable.length; i++ ) {
        
        seatList += "<li>"+ venue.seatNumbersAvailable[i]+"</li>";
}  

seatList += "</ul>";

document.getElementById("seatsAvailable").innerHTML = seatList;

//EO UL list

//roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"],
//SO select a seat method, change from <ul> to dropp down

var selectSeatList = "<form> <select id='selctedSeat'>";
for (var i=0; i < venue.seatNumbersAvailable.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    selectSeatList += "<option value=\'"+venue.seatNumbersAvailable[i]+"\'>"+venue.seatNumbersAvailable[i]+"</option>";
}
selectSeatList += "</selcet> </form>";
document.getElementById("selectASeat").innerHTML = selectSeatList;

//EO select a seat method, change from <ul> to dropp down

// seatNumbersBooked: [],
//SO select a seat method, change from <ul> to dropp down
// // <h3 class="seats">Seats Booked</h3>
    
//     <div id="selctedSeat">
    
//     </div>

var selectedSeatList = "<form> <select id='selctedSeat'>";
for (var i=0; i < venue.seatNumbersBooked.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    selectedSeatList += "<option value=\'"+venue.seatNumbersBooked[i]+"\'>"+venue.seatNumbersBooked[i]+"</option>";
}
selectedSeatList += "</selcet> </form>";
document.getElementById("selectedSeat").innerHTML = selectedSeatList;

//EO select a seat method, change from <ul> to dropp down

// <ul>
// <li>101</li>
// <li>102</li>
// <li>103</li>
// <li>104</li>
// <li>105</li>
// <li>106</li>
//</ul>
        
        
//document.getElementById("rmsAvailable").innerText = hotel.roomNumbersAvailable[i];// 

// concert venue, purchase, sell, return, seats...

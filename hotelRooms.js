var hotel = {  //var=name, method is a function inside of an object
    name: "CareerDevs Hotel",  //key, value, pair aka properties 
    ratiing: 5.0, //decimals=floating point values
    roomRate: 325.00,
    roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"], //key to array contain a string
    roomNumbersBooked: [],
    roomType: "Queen", //intergers
    
    numberOfRoomsAvailable: function() { //lenght of the number of rooms available array
        return this.roomNumbersAvailable.length;  //return=intergers
       
   },
   
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length; //lenght-returns number of items in array as an interger
        
    },
   
    numberOfRooms: function() { //avail rooms + booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
       
    },
    bookRoom: function() { // only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
        var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]); 
    }  
    checkoutRoom: function() { // only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
        var checkoutRandomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);  
var hotel = { //var=name, method is a function inside of an object
    name: "CareerDevs Mega Hotel", //key, value, pair aka properties 
    ratiing: 5.0, //decimals=floating point values
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"], //key to array contain a string
    roomNumbersBooked: [],
    roomType: "Queen", //intergers

    numberOfRoomsAvailable: function() { //lenght of the number of rooms available array
        return this.roomNumbersAvailable.length; //return=intergers

    },

    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length; //lenght-returns number of items in array as an interger

    },

    numberOfRooms: function() { //avail rooms + booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;

    },
    // roomNumbersBooked: [], //roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"],
    bookRoom: function() { // only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
            // var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
            var selectedRoomDD = document.getElementById("selectARoom").value;
            // alert("Room "+selectedRoomDD+" has been beenooked.");
            this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));
            //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            // this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1)[0]); 
        }
    },
    //SO update the drop down list
    // unbookRoom: function() {
    //     if (this.numberOfRoomsAvailable() > 0) {
    //         var selectRoomList = "<form> <select id='selctedRoom'>";
            
    //     }
        
    // }    
    // var selectRoomList = "<form> <select id='selctedRoom'>";
    // for (var i = 0; i < this.hotel.roomNumbersAvailable.length; i++) {
    //     //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //     //Research"escaping characters+ qoutes" and concatnate using "+"
    //     selectRoomList += "<option value=" + this.hotel.roomNumbersAvailable[i] + ">" + this.hotel.roomNumbersAvailable[i] + "</option>";
    // }
    // selectRoomList += "</selcet> </form>";
    // document.getElementById("selectARoom").innerHTML = selectRoomList;
    
    //EO update the drop down list

    checkoutRoom: function() { // only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
            var checkoutRandomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
            //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(checkoutRandomRoom), 1)[0]);
        }
    },

};

document.getElementById("hotelName").innerText = hotel.name;

//<div id="rmsAvailable"></div>
//SO UL list section=======UL BEGINS
//roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"],

// var roomList = "</ul>";
// for (var i = 0; i < hotel.roomNumbersAvailable.length; i++ ) {

//         roomList += "<li>"+ hotel.roomNumbersAvailable[i]+"</li>";
// }  

// roomList += "</ul>";

// document.getElementById("rmsAvailable").innerHTML = roomList;

//EO UL list=====UL ENDS

//roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"],

//SO select a room method, change from <ul> to dropp down

//SO create intial drop down
var selectRoomList = "<form> <select id='selctedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    selectRoomList += "<option value=\'" + hotel.roomNumbersAvailable[i] + "\'>" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</selcet> </form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;

//EO create intial drop down

//EO select a room method, change from <ul> to dropp down

//SO dropDown for bookRoom method, change from <ul> to dropp down

var selectRoomList = "<form> <select id='selctedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    selectRoomList += "<option value=\'" + hotel.roomNumbersAvailable[i] + "\'>" + hotel.roomNumbersAvailable[i] + "</option>";
}

selectRoomList += "</selcet> </form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;

//EO dropDown for bookRoom methodmethod, change from <ul> to dropp down

// <ul>
// <li>101</li>
// <li>102</li>
// <li>103</li>
// <li>104</li>
// <li>105</li>
// <li>106</li>
//</ul>


//document.getElementById("rmsAvailable").innerText = hotel.roomNumbersAvailable[i];//

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
};

document.getElementById("hotelName").innerHTML = hotel.name;

////Everything below is executed automatically out side of the object method()//////        

//update the selectARoom rooms drop down

var selectARoomList = "<form> <select id='selctARoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    selectARoomList += "<option value=\'" + hotel.roomNumbersAvailable[i] + "\'>" + hotel.roomNumbersAvailable[i] + "</option>";
}

selectARoomList += "</selcet> </form>";
document.getElementById("selectARoom").innerHTML = selectARoomList;

//update the roomsBooked rooms drop down

var roomsBooked = "<form> <select id='roomsBooked'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    roomsBooked += "<option value=\'" + hotel.roomNumbersBooked[i] + "\'>" + hotel.roomNumbersBooked[i] + "</option>";
}

roomsBooked += "</selecet> </form>";
document.getElementById("roomsBooked").innerHTML = roomsBooked;

//update the selectedRooms drop down

var selectedRoomList = "<form> <select id='selctedRoom'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {
    //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
    //Research"escaping characters+ qoutes" and concatnate using "+"
    selectedRoomList += "<option value=\'" + hotel.roomNumbersBooked[i] + "\'>" + hotel.roomNumbersBooked[i] + "</option>";
}
selectedRoomList += "</selecet> </form>";
document.getElementById("selectedRoom").innerHTML = selectedRoomList;



// selectRoomList += "</selcet> </form>";
// document.getElementById("selectARoom").innerHTML = selectRoomList;  

//SO update the drop down list

//EO update the drop down list

//EO bookRoom()

//SO create intial drop down

//EO create intial drop down

//EO select a room method, change from <ul> to dropp down

//SO dropDown for bookRoom method, change from <ul> to dropp down

// checkoutRoom: function() { // only book a room if one or more is available
//         if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
//             var checkoutRandomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
//             //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
//             //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
//             this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(checkoutRandomRoom), 1)[0]);
//         }
//     },

// var roomsBooked = "<form> <select id='roomsBooked'>";
// for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {
//     //need to escape \ certain ' quotes on following lines (ie:"<option value=\'" 
//     //Research"escaping characters+ qoutes" and concatnate using "+"
//     roomsBooked += "<option value=\'" + hotel.roomNumbersBooked[i] + "\'>" + hotel.roomNumbersBooked[i] + "</option>";
// }

// roomsBooked += "</selcet> </form>";
// document.getElementById("roomsBooked").innerHTML = roomsBooked;

//EO dropDown for bookRoom methodmethod, change from <ul> to dropp down

//<div>roomsBooked</div>

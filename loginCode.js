function creditCheck() {
    console.log("creditCheck() started");
    var firstName;
    var lastName;
    var fullName;
    var badgeNum;
    var fullNameLength;

    //extracts user input for first name and displays it in the console
    firstName = document.getElementById("fName").value;
    console.log("The first name is " + firstName);

    //extracts user input for last name and displays it in the console
    lastName = document.getElementById("lName").value;
    console.log("The last name is " + lastName);

    //concatenates first name and last name fields and outputs full name
    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    //extracts user input for badge number and displays it in the console
    badgeNum = document.getElementById("badgeID").value;
    console.log("The badge number is " + badgeNum);

    //determines length of first and last name
    fullNameLength = fullName.length;
    console.log("The full name length is " + fullNameLength);

    //input validation
    //checks for proper name length (less than 20 char, but not less than 1) or lack thereof
    if (fullNameLength > 20 || fullNameLength == 1) {
        console.log("Invalid login, please try again.")
        document.getElementById("loginStatus").innerHTML = "Invalid login, please try again.";
    } else if (badgeNum > 999 || badgeNum < 1) {
        console.log("Invalid badge number, please try again.")
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again.";
    } else {
        console.log("Welcome " + fullName + ".")
        document.getElementById("loginStatus").innerHTML = "Welcome " + fullName + ".";
        alert("Welcome, " + fullName + "," + " to UATSpace!");
        location.replace("./UATSpace.html");
    }
}
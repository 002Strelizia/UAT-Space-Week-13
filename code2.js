function neatBlastoffTimer() {
    console.log("runTimer() started");
    //variable to keep time
    var currTime = 50;
    //replaces runTimer, loops the timer until Blastoff!
    for (var i = 0; i < 11; i = i + 1) {
        //this loops i number of times where i is less than 10 and increases at increments of 1
        setTimeout(function () {
            console.log("currTime = " + currTime);
            //once the timer gets to zero it changes the text to Blastoff!
            if (currTime == 0) {
                document.getElementById("blastoffDis").innerHTML = "Blastoff!!";
                //if the timer has less than 25 seconds left, this warning appears
            } else if (currTime < 25) {
                document.getElementById("blastoffDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " sec left"
            } else {
                document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
}
function startButtonClick() {
    console.log("startButtonClick() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stopButtonClick() {
    console.log("stopButtonClick() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
function startFun() {
    console.log("startFun() started");
    document.getElementById("data").rows["time_seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, timeInterval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stopFun() {
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(timer);
    //clear the clock
    document.getElementById("clockTime").innerHTML = " Press Start to display current time";
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay() {
    console.log("updateDisplay() started");
    theTime = new Date();
    //test the time before showing
    //using special if statement for below 10 seconds, conditions ? do if true : do if false
    console.log(theTime.getHours() + ":" +
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" +
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //adding the screen time
    document.getElementById("clockTime").innerHTML = (theTime.getHours() + ":" +
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" +
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //time for table updating
    var timeRead = data[index].time_seconds;

    if (timeRead > 4) {
        document.getElementById("data").rows["time_seconds"].innerHTML =
            dataRow("Time elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, "");
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, "");
        document.getElementById("data").rows["gps_altitude"].innerHTML =
            dataRow("GPS altitude", data[index].gps_altitude, "");
        document.getElementById("data").rows["bmp_altitude"].innerHTML =
            dataRow("BMP altitude", data[index].bmpSensor_altitude, "");
        document.getElementById("data").rows["bmp_pressure"].innerHTML =
            dataRow("BMP pressure", data[index].bmpSensor_pressure, "");
        document.getElementById("data").rows["bmp_temperature"].innerHTML =
            dataRow("BMP temperature", data[index].bmpSensor_temp, "");
        document.getElementById("data").rows["dig_temperature"].innerHTML =
            dataRow("Digital temperature", data[index].digSensor_temp, "");
        document.getElementById("data").rows["css_temperature"].innerHTML =
            dataRow("CSS temperature", data[index].cssSensor_temp, "");
        document.getElementById("data").rows["css_eco2"].innerHTML =
            dataRow("CSS eCO2", data[index].cssSensor_eCO2, "");
        document.getElementById("data").rows["css_tvoc"].innerHTML =
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, "");
        document.getElementById("data").rows["uv"].innerHTML =
            dataRow("UV", data[index].UV, "");
        document.getElementById("data").rows["accelx"].innerHTML =
            dataRow("Accelerometer X", data[index].accelX, "");
        document.getElementById("data").rows["accely"].innerHTML =
            dataRow("Accelerometer Y", data[index].accelY, "");
        document.getElementById("data").rows["accelz"].innerHTML =
            dataRow("Accelerometer Z", data[index].accelZ, "");
        document.getElementById("data").rows["magneticx"].innerHTML =
            dataRow("Magnetic X", data[index].magneticX, "");
        document.getElementById("data").rows["magneticy"].innerHTML =
            dataRow("Magnetic Y", data[index].magneticY, "");
        document.getElementById("data").rows["magneticz"].innerHTML =
            dataRow("Magnetic Z", data[index].magneticZ, "");
        document.getElementById("data").rows["gyrox"].innerHTML =
            dataRow("Gyro X", data[index].gyroX, "");
        document.getElementById("data").rows["gyroy"].innerHTML =
            dataRow("Gyro Y", data[index].gyroY, "");
        document.getElementById("data").rows["gyroz"].innerHTML =
            dataRow("Gyro Z", data[index].gyroZ, "");
    }

    if (index < 500) {
        index++;
    } else {
        index = 0;
    }
}
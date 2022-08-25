let newYearDate = new Date(2023, 0, 1)

function getTimeLeft(){
    let currentDate = new Date()

    let ms = Math.abs(newYearDate - currentDate)

    let day = Math.round((ms/1000) / 60 / 60 / 24)
    let hour = 24 - currentDate.getHours()
    let minute = 60 - currentDate.getMinutes()

    document.getElementById("day").innerHTML = formatChecker(day, "day")
    document.getElementById("hour").innerHTML = formatChecker(hour, "hour")
    document.getElementById("minute").innerHTML = formatChecker(minute, "minute")
}

getTimeLeft()
setInterval(() => {
    getTimeLeft()
}, 1000);


function formatChecker(time, type){
    if(type != "day" && time < 10){
        return "0" + time
    }else if(type == "day" && time < 100){
        return "0" + time
    }
    return time
}

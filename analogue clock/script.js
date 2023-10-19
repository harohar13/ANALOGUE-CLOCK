setInterval(setClock, 1000)
//additional data is added to html
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    //current time
  const currentDate = new Date()
  //60 sec,60 min,12 hours are in total 
  //after 60 sec we get one minute
  const secondsRatio = currentDate.getSeconds() / 60
  
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}
// we take a element and take the property rotationRatio
function setRotation(element, rotationRatio) {
    //set a property of --rotation 
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
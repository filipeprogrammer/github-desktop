let dayOfTheWeek = document.getElementById("weekday")
let month =  document.getElementById("month")
let day =  document.getElementById("day")
let year =  document.getElementById("year")
let timeEl = document.getElementById("time-el")

const weekday = new Date()
let displayWeekday = weekday.getDay()

switch(displayWeekday){
  case 0: 
    displayWeekday = "Dom"
    break
  case 1:
    displayWeekday = "Seg"
    break
  case 2:
    displayWeekday = "Ter"
    break
  case 3:
    displayWeekday = "Qua"
    break
  case 4:
    displayWeekday = "Qui"
    break
  case 5:
    displayWeekday = "Sex"
    break
  case 6:
    displayWeekday = "Sáb"
}

dayOfTheWeek.textContent = displayWeekday

const monthday = new Date()
let displayMonth = monthday.getMonth()

switch(displayMonth){
  case 0: 
    displayMonth = "Jan"
    break
  case 1:
    displayMonth = "Fev"
    break
  case 2:
    displayMonth = "Mar"
    break
  case 3:
    displayMonth = "Abr"
    break
  case 4:
    displayMonth = "Mai"
    break
  case 5:
    displayMonth = "Jun"
    break
  case 6:
    displayMonth = "Jul"
    break
  case 7: 
    displayMonth = "Ago"
    break
  case 8:
    displayMonth = "Set"
    break
  case 9:
    displayMonth = "Out"
    break
  case 10:
    displayMonth = "Nov"
    break
  case 11:
    displayMonth = "Dez"
}

month.textContent = displayMonth

const dayNumber = new Date()
let displayDay = dayNumber.getUTCDate()
day.textContent = displayDay

const yearNumber = new Date()
let displayYear = yearNumber.getFullYear()
year.textContent = displayYear


function displayClock() {
  const date = new Date();
  timeEl.textContent = date.toLocaleTimeString();
}

setInterval(displayClock, 1000);
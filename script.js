
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];

// Update the content of the 'currentDayOfTheWeek' element
document.getElementById("dayOfWeek").textContent = "Eze";

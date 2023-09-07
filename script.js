const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();
        const currentDayOfWeek = daysOfWeek[currentDayIndex];

        // Update the content of the 'currentDayOfTheWeek' element
        document.getElementById("dayOfWeek").textContent = currentDayOfWeek;

            // Update the current time
            function updateCurrentTime() {
            const currentTimeElement = document.getElementById("currentTime");
            const currentDate = new Date();
            const currentUTCTime = currentDate.getTime(); // Get current time in milliseconds

            // Update the content of the 'currentUTCTime' element
            currentTimeElement.textContent = currentUTCTime;
        }

        // Update the current time initially
        updateCurrentTime();
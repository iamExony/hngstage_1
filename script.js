const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();
        const currentDayOfWeek = daysOfWeek[currentDayIndex];

        // Update the content of the 'currentDayOfTheWeek' element
        document.getElementById("dayOfWeek").textContent = currentDayOfWeek;

            // Update the current time
            function updateCurrentTime() {
            const currentHourElement = document.getElementById("currentHour");
            const currentMinuteElement = document.getElementById("currentMin");
            const currentSecondsElement = document.getElementById("currentSecs");
            const currentDate = new Date();
            const currentUTCHour = currentDate.getHours(); // Get current hour
            const currentUTCMin = currentDate.getMinutes(); // Get current minutes
            const currentUTCSecs = currentDate.getSeconds(); // Get current seconds

            // Update the content of the 'currentUTCTime' element
            currentHourElement.textContent = currentUTCHour;
            currentMinuteElement.textContent = currentUTCMin;
            currentSecondsElement.textContent = currentUTCSecs;
        }

        // Update the current time initially
        updateCurrentTime();
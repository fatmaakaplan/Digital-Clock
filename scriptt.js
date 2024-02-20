document.addEventListener('DOMContentLoaded', function() {
       const body = document.querySelector("body");
       const modeSwitch = document.querySelector(".mode-switch");
       const hourHand = document.querySelector(".hour");
       const minuteHand = document.querySelector(".minute");
       const secondHand = document.querySelector(".second");
   
       // Mode switch'i dinle
       modeSwitch.addEventListener("click", () => {
           body.classList.toggle("dark");
           const isDarkMode = body.classList.contains("dark");
           modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
           localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
       });
   
       // Sayfa yüklenirken localStorage'dan modu kontrol et
       if (localStorage.getItem("mode") === "Dark Mode") {
           body.classList.add("dark");
           modeSwitch.textContent = "Light Mode";
       }
   
       // Saat işlevselliği
       const updateTime = () => {
           const date = new Date();
           const secToDeg = (date.getSeconds() / 60) * 360;
           const minToDeg = (date.getMinutes() / 60) * 360;
           const hrToDeg = ((date.getHours() % 12) / 12) * 360;
   
           secondHand.style.transform = `rotate(${secToDeg}deg)`;
           minuteHand.style.transform = `rotate(${minToDeg}deg)`;
           hourHand.style.transform = `rotate(${hrToDeg + ((date.getMinutes() / 60) * 30)}deg)`;
       };
   
       setInterval(updateTime, 1000);
       updateTime();
   });
   
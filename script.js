/*
  TRIPRIDE LAUNCH CONFIG
  Change ONLY these values before publishing.
*/
const CONFIG = {
  version: "1.0.0",

  // Use India time with +05:30.
  // Example: "2026-09-23T10:00:00+05:30"
  launchTime: "2026-09-23T10:00:00+05:30",

  // Put the real Play Store URL here when the app is live.
  playStoreUrl: "https://example.com"
};

document.getElementById("version").textContent = CONFIG.version;

const $ = id => document.getElementById(id);
const target = new Date(CONFIG.launchTime).getTime();

function pad(n){ return String(Math.max(0,n)).padStart(2,"0"); }

function launch(){
  document.title = "TripRide — Download Now";
  const url = CONFIG.playStoreUrl;

  // Prevent redirecting while the placeholder is still configured.
  if(url && !url.includes("example.com")){
    window.location.replace(url);
  }
}

function updateCountdown(){
  const diff = target - Date.now();

  if(diff <= 0){
    $("days").textContent = "00";
    $("hours").textContent = "00";
    $("minutes").textContent = "00";
    $("seconds").textContent = "00";
    launch();
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  $("days").textContent = pad(days);
  $("hours").textContent = pad(hours);
  $("minutes").textContent = pad(minutes);
  $("seconds").textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown,1000);

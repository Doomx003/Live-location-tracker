let map, marker, trackingInterval;
const startBtn = document.getElementById('startTracking');
const locationDisplay = document.getElementById('locationDisplay');

startBtn.addEventListener('click', startTracking);

function startTracking() {
  if (!map) {
    map = L.map('map').setView([-29.6097, 27.4856], 13);
    L.tileLayer('https:                                                          
  }

  locationDisplay.innerHTML = "Tracking started...";
  startBtn.textContent = '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }

  locationDisplay.innerHTML = "Tracking started...";
  startBtn.textContent = 'Stop Tracking';
  startBtn.onclick = stopTracking;

  trackingInterval = setInterval(() => {
    const lat = (Math.random() * 180 - 90).toFixed(6);
    const lon = (Math.random() * 360 - 180).toFixed(6);
    updateLocation(lat, lon);
  }, 5000);
}

function stopTracking() {
  clearInterval(trackingInterval);
  locationDisplay.innerHTML = "Tracking stopped.";
  startBtn.textContent = 'function stopTracking() {
  clearInterval(trackingInterval);
  locationDisplay.innerHTML = "Tracking stopped.";
  startBtn.textContent = 'Start Tracking';
  startBtn.onclick = startTracking;
}

function updateLocation(lat, lon) {
  locationDisplay.innerHTML = `Current Location: ${lat}, ${lon}`;
  if (marker) marker.setLatLng([lat, lon]);
  else marker = L.marker([lat, lon]).addTo(map);
  map.setView([lat, lon]);
}

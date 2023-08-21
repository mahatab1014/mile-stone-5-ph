const ipv4Address = document.getElementById("ipv4");
const ipv6Address = document.getElementById("ipv6");

// Fetch IPv4 address
fetch('https://api64.ipify.org?format=json') // This URL supports both IPv4 and IPv6
  .then(response => response.json())
  .then(data => {
    ipv4Address.textContent = data.ip;
  })
  .catch(error => {
    console.error('Error fetching IPv4 address:', error);
  });

// Fetch IPv6 address
fetch('https://api6.ipify.org?format=json') // This URL specifically fetches IPv6 address
  .then(response => response.json())
  .then(data => {
    ipv6Address.textContent = data.ip;
  })
  .catch(error => {
    console.error('Error fetching IPv6 address:', error);
});
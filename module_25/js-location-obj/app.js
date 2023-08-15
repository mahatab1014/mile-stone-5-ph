const urlSpan = document.getElementById("site-url")
const originSpan = document.getElementById("site-origin")
const hostNameSpan = document.getElementById("site-hostname")
const postSpan = document.getElementById("site-port")
const protocolSpan = document.getElementById("site-protocol")
const pathSpan = document.getElementById("site-path")


urlSpan.innerText = location.href;
originSpan.innerText = location.origin;
hostNameSpan.innerText = location.hostname;
postSpan.innerText = location.port;
protocolSpan.innerText = location.protocol;
pathSpan.innerText = location.pathname;

console.log(location)
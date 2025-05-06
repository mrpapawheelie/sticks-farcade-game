import { networkInterfaces } from "os"

const nets = networkInterfaces()
let ip = "localhost" // Default to localhost

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    // 'IPv4' is in Node <= 17, '4' is in Node >= 18
    if ((net.family === "IPv4" || net.family === 4) && !net.internal) {
      ip = `http://${net.address}:3000`
      break
    }
  }
  if (ip !== "localhost") break // Stop after finding the first external IPv4 address
}

console.log(ip)

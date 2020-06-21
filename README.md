# SpeedTest

Run a Speedtest service locally, to log DL/UL speeds throughout the day.

Speedtest binaries are avaialble [here](https://www.speedtest.net/apps/cli). They are provided directly by Ookla for measuring internet speeds.

### Routes
- `GET /data` Public route with basic logs
- `POST /webhook` Trigger a new speed test manually (Protected Route)
- `GET /detail` All logs of speedtest (Protected Route) 
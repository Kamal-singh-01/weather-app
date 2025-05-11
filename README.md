# Weather App

A modern weather application built with React and Vite that provides real-time weather information for any city around the world.

## Features

- 🌡️ Real-time temperature display
- 💨 Wind speed information
- 💧 Humidity levels
- 🎯 City search functionality
- 🌤️ Dynamic weather icons
- 📱 Responsive design
- ⌨️ Search by pressing Enter

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- OpenWeather API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kamal-singh-01/weather-app.git
cd weather-app
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeather API key:
```env
VITE_APP_ID=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

## Usage

1. Enter a city name in the search bar
2. Press Enter or click the search icon
3. View the current weather information including:
   - Temperature in Celsius
   - Humidity percentage
   - Wind speed
   - Weather condition icon

## Environment Variables

Create a `.env` file in the root directory with the following:

```env
VITE_APP_ID=your_api_key_here
```

To get an API key:
1. Sign up at [OpenWeather](https://openweathermap.org/api)
2. Go to your account
3. Generate an API key
4. Copy and paste it into your `.env` file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

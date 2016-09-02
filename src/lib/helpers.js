
export function formatForcast(data) {
  return new Promise((resolve, reject) => {
    var forcastWeek = { '0': [], '1': [], '2': [], '3': [], '4': [] }
    var weatherData = data.list
    var currentDay = 0

    // openweather api was returning less than 40 weather entries
    // for some reason, if so clone 1st and append to end until 40
    while (weatherData.length < 40) {
      var newEntry = Object.assign({}, weatherData[0])
      // console.log(weatherData)
      weatherData.push(newEntry)
    }

    // iterate over each data.list from the
    // original response from openweather api
    var weatherDataLen = weatherData.length
    for (var i = 0; i < weatherDataLen; i++) {
      // if current day === 8, 16, 24, ( 8 weather objs per day )
      // then increment the current day
      var isDenom = i / 8
      if (i !== 0 && isDenom % 1 === 0) currentDay++
      forcastWeek[currentDay].push(weatherData[i])
    }

    // to be returned in the callbacks
    // argument in .then()
    resolve(forcastWeek)
  })
}

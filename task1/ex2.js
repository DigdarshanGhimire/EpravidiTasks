let temperatures = [32, 45, 50, 84, 90, 78, 68];

function convert_to_celcius(arr_temperature){
    let celcius_temperatures = arr_temperature.map((temperature) => {
      celcius = (temperature-32)*5/9
      return celcius
    }
    )

    celcius_temperatures.sort((a, b) => a - b)
    const lowest = celcius_temperatures.slice(0,3)
    console.log(lowest)

}


convert_to_celcius(temperatures)
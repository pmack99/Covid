//Decalring the Different Variable and Objects
let NewConfirmed = document.getElementById('NewConfirmed')
let NewDeaths = document.getElementById('NewDeaths')
let TotalDeaths = document.getElementById('TotalDeaths')
let NewRecovered = document.getElementById('NewRecovered')
let TotalConfirmed = document.getElementById('TotalConfirmed')
let TotalRecovered = document.getElementById('TotalRecovered')
let table = document.getElementById('countries_stat')

//Fetching the World Data
fetch('https://api.covid19api.com/summary', {
  method: 'GET',
})
  .then(response =>
    response.json().then(data => {
      console.log(data.Global)
      TotalConfirmed.innerHTML = data.Global.TotalConfirmed
      NewConfirmed.innerHTML = data.Global.NewConfirmed
      NewDeaths.innerHTML = data.Global.NewDeaths
      TotalDeaths.innerHTML = data.Global.TotalDeaths
      NewRecovered.innerHTML = data.Global.NewRecovered
      TotalRecovered.innerHTML = data.Global.TotalRecovered
    }),
  )
  .catch(err => {
    console.log(err)
  })

//Fetching The Case by Country Data
fetch('https://api.covid19api.com/summary', {
  method: 'GET',
})
  .then(response =>
    response.json().then(data => {
      //   console.log(data.Countries);
      let countries_stat = data.Countries

      for (let i = 0; i < countries_stat.length; i++) {
        console.log(countries_stat[i])

        let row = table.insertRow(i + 1)
        let Country = row.insertCell(0)
        let TotalConfirmed = row.insertCell(1)
        let NewConfirmed = row.insertCell(2)
        let TotalDeaths = row.insertCell(3)
        let NewDeaths = row.insertCell(4)
        let TotalRecovered = row.insertCell(5)
        let NewRecovered = row.insertCell(6)

        Country.innerHTML = countries_stat[i].Country
        TotalConfirmed.innerHTML = countries_stat[i].TotalConfirmed
        NewConfirmed.innerHTML = countries_stat[i].NewConfirmed
        TotalDeaths.innerHTML = countries_stat[i].TotalDeaths
        NewDeaths.innerHTML = countries_stat[i].NewDeaths
        TotalRecovered.innerHTML = countries_stat[i].TotalRecovered
        NewRecovered.innerHTML = countries_stat[i].NewRecovered
      }
    }),
  )
  .catch(err => {
    console.log(err)
  })

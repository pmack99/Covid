//Decalring the Different Variable and Objects
let state0 = document.getElementById('state0')
let positive = document.getElementById('positive')
let negative = document.getElementById('negative')
let hospitalizedCurrently = document.getElementById('hospitalizedCurrently')
let recovered = document.getElementById('recovered')
let inIcuCurrently = document.getElementById('inIcuCurrently')
let onVentilatorCurrently = document.getElementById('onVentilatorCurrently')
let death = document.getElementById('death')
let totalTestResults = document.getElementById('totalTestResults')
let lastUpdateEt = document.getElementById('lastUpdateEt')

let state2 = document.getElementById('state2')
let positive2 = document.getElementById('positive2')
let negative2 = document.getElementById('negative2')
let hospitalizedCurrently2 = document.getElementById('hospitalizedCurrently2')
let recovered2 = document.getElementById('recovered2')
let inIcuCurrently2 = document.getElementById('inIcuCurrently2')
let onVentilatorCurrently2 = document.getElementById('onVentilatorCurrently2')
let death2 = document.getElementById('death2')
let totalTestResults2 = document.getElementById('totalTestResults2')
let lastUpdateEt2 = document.getElementById('lastUpdateEt2')

var selectedState
var selectedState2

let dropdown = document.getElementById('state')
dropdown.length = 0

let defaultOption = document.createElement('option')
defaultOption.text = 'Choose State/Province'

dropdown.add(defaultOption)
dropdown.selectedIndex = 0

let dropdown2 = document.getElementById('state9')
dropdown2.length = 0

let defaultOption2 = document.createElement('option')
defaultOption2.text = 'Choose State/Province'

dropdown2.add(defaultOption2)
dropdown2.selectedIndex = 0

start()
start2()

function start() {
  const url = 'https://covidtracking.com/api/v1/states/info.json'

  fetch(url)
    .then(function (response) {
      // Examine the text in the response
      response.json().then(function (data) {
        let option
        var selectedState = data
        console.log(data)

        for (let i = 0; i < selectedState.length; i++) {
          option = document.createElement('option')
          option.text = selectedState[i].name
          option.value = selectedState[i].state
          dropdown.add(option)
        }
      })
    })
    .catch(function (err) {
      console.error('Fetch Error -', err)
    })
}

// https://covidtracking.com/api/v1/states/ca/current.json

function myFunction() {
  var e = document.getElementById('state')
  var pick = e.options[e.selectedIndex].value
  var text1 = pick.toLowerCase()

  //Fetching the County Data
  fetch('https://covidtracking.com//api/v1/states/' + text1 + '/current.json', {
    method: 'GET',
  })
    .then((response) =>
      response.json().then((data) => {
        console.log(data)

        state0.innerHTML = data.state
        positive.innerHTML = data.positive
        negative.innerHTML = data.negative
        hospitalizedCurrently.innerHTML = data.hospitalizedCurrently
        recovered.innerHTML = data.recovered
        inIcuCurrently.innerHTML = data.inIcuCurrently
        onVentilatorCurrently.innerHTML = data.onVentilatorCurrently
        totalTestResults.innerHTML = data.totalTestResults
        death.innerHTML = data.death
        lastUpdateEt.innerHTML = data.lastUpdateEt
      }),
    )
    .catch((err) => {
      console.log(err)
    })
}

function start2() {
  const url = 'https://covidtracking.com/api/v1/states/info.json'

  fetch(url)
    .then(function (response) {
      // Examine the text in the response
      response.json().then(function (data2) {
        let option
        var selectedState2 = data2
        console.log(selectedState2)

        for (let i = 0; i < selectedState2.length; i++) {
          option = document.createElement('option')
          option.text = selectedState2[i].name
          option.value = selectedState2[i].state
          dropdown2.add(option)
        }
      })
    })
    .catch(function (err) {
      console.error('Fetch Error -', err)
    })
}

function myFunction2() {
  var e = document.getElementById('state9')
  var pick = e.options[e.selectedIndex].value
  var text2 = pick.toLowerCase()

  //covidtracking.com/api/v1/states/ca/current.json

  //Fetching the County Data
  https: fetch(
    'https://covidtracking.com//api/v1/states/' + text2 + '/current.json',
    {
      method: 'GET',
    },
  )
    .then((response) =>
      response.json().then((data) => {
        console.log(data)

        state2.innerHTML = data.state
        positive2.innerHTML = data.positive
        negative2.innerHTML = data.negative
        hospitalizedCurrently2.innerHTML = data.hospitalizedCurrently
        recovered2.innerHTML = data.recovered
        inIcuCurrently2.innerHTML = data.inIcuCurrently
        onVentilatorCurrently.innerHTML = data.onVentilatorCurrently
        totalTestResults2.innerHTML = data.totalTestResults
        death2.innerHTML = data.death
        lastUpdateEt2.innerHTML = data.lastUpdateEt
      }),
    )
    .catch((err) => {
      console.log(err)
    })
}

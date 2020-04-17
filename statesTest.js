//Decalring the Different Variable and Objects
let state = document.getElementById('state')
let positive = document.getElementById('positive')
let negative = document.getElementById('negative')
let hospitalizedCurrently = document.getElementById('hospitalizedCurrently')
let recovered = document.getElementById('recovered')
let inIcuCurrently = document.getElementById('inIcuCurrently')
let onVentilatorCurrently = document.getElementById('onVentilatorCurrently')
let death = document.getElementById('death')
let totalTestResults = document.getElementById('totalTestResults')
let lastUpdateEt = document.getElementById('lastUpdateEt')

var selectedState

myFunction()

function myFunction() {
  var e = document.getElementById('selectState')
  var selectedState = e.options[e.selectedIndex].value

  //   console.log(selectedState)

  //Fetching the County Data
  fetch('https://covidtracking.com//api/states?state=' + selectedState, {
    method: 'GET',
  })
    .then(response =>
      response.json().then(data => {
        console.log(data)

        state.innerHTML = data.state
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
    .catch(err => {
      console.log(err)
    })
}

function myFunction2() {
  var e = document.getElementById('selectState2')
  var selectedState2 = e.options[e.selectedIndex].value

  //   console.log(selectedState)

  //Fetching the County Data
  fetch('https://covidtracking.com//api/states?state=' + selectedState2, {
    method: 'GET',
  })
    .then(response =>
      response.json().then(data => {
        console.log(data)

        state.innerHTML = data.state
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
    .catch(err => {
      console.log(err)
    })
}

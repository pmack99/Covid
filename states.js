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

myFunction()
myFunction2()

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

        state2.innerHTML = data.state
        positive2.innerHTML = data.positive
        negative2.innerHTML = data.negative
        hospitalizedCurrently2.innerHTML = data.hospitalizedCurrently
        recovered2.innerHTML = data.recovered
        inIcuCurrently2.innerHTML = data.inIcuCurrently
        onVentilatorCurrently2.innerHTML = data.onVentilatorCurrently
        totalTestResults2.innerHTML = data.totalTestResults
        death2.innerHTML = data.death
        lastUpdateEt2.innerHTML = data.lastUpdateEt
      }),
    )
    .catch(err => {
      console.log(err)
    })
}

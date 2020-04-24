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
var pick

start()

function start() {
  let dropdown = document.getElementById('state')
  dropdown.length = 0

  let defaultOption = document.createElement('option')
  defaultOption.text = 'Choose State/Province'

  dropdown.add(defaultOption)
  dropdown.selectedIndex = 0

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

function myFunction() {
  var e = document.getElementById('state')
  var pick = e.options[e.selectedIndex].value

  //Fetching the County Data
  fetch('https://covidtracking.com//api/states?state=' + pick, {
    method: 'GET',
  })
    .then((response) =>
      response.json().then((data) => {
        console.log(data)

        name.innerHTML = data.name
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

  start()
}

// function myFunction2() {
//   var e = document.getElementById('selectState2')
//   var selectedState2 = e.options[e.selectedIndex].value

//   //   console.log(selectedState)

//   //Fetching the County Data
//   fetch('https://covidtracking.com//api/states?state=' + selectedState2, {
//     method: 'GET',
//   })
//     .then((response) =>
//       response.json().then((data) => {
//         // console.log(data)

//         state2.innerHTML = data.state
//         positive2.innerHTML = data.positive
//         negative2.innerHTML = data.negative
//         hospitalizedCurrently2.innerHTML = data.hospitalizedCurrently
//         recovered2.innerHTML = data.recovered
//         inIcuCurrently2.innerHTML = data.inIcuCurrently
//         onVentilatorCurrently2.innerHTML = data.onVentilatorCurrently
//         totalTestResults2.innerHTML = data.totalTestResults
//         death2.innerHTML = data.death
//         lastUpdateEt2.innerHTML = data.lastUpdateEt
//       }),
//     )
//     .catch((err) => {
//       console.log(err)
//     })
// }

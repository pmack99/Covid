//Decalring the Different Variable and Objects
let COUNTYNAME = document.getElementById('COUNTYNAME')
let CasesAll = document.getElementById('CasesAll')
let C_AgeMedian = document.getElementById('C_AgeMedian')
let C_AgeRange = document.getElementById('C_AgeRange')
let C_Age_0_4 = document.getElementById('C_Age_0_4')
let C_Age_5_14 = document.getElementById('C_Age_5_14')
let C_Age_15_24 = document.getElementById('C_Age_15_24')
let C_Age_25_34 = document.getElementById('C_Age_25_34')
let C_Age_35_44 = document.getElementById('C_Age_35_44')
let C_Age_45_54 = document.getElementById('C_Age_45_54')
let C_Age_55_64 = document.getElementById('C_Age_55_64')
let C_Age_65_74 = document.getElementById('C_Age_65_74')
let C_Age_75_84 = document.getElementById('C_Age_75_84')
let C_Age_85plus = document.getElementById('C_Age_85plus')
let C_Male = document.getElementById('C_Male')
let C_Female = document.getElementById('C_Female')
let C_RaceWhite = document.getElementById('C_RaceWhite')
let C_RaceBlack = document.getElementById('C_RaceBlack')
let C_HispanicYES = document.getElementById('C_HispanicYES')
let C_RaceOther = document.getElementById('C_RaceOther')
let T_total = document.getElementById('T_total')
let TNegative = document.getElementById('TNegative')
let TPositive = document.getElementById('TPositive')
let Deaths = document.getElementById('Deaths')

var selected

let dropdown = document.getElementById('county')
dropdown.length = 0

let defaultOption = document.createElement('option')
defaultOption.text = 'Choose FL County'

dropdown.add(defaultOption)
dropdown.selectedIndex = 0

start()

function start() {
  const url =
    'https://services1.arcgis.com/CY1LXxl9zlJeBuRZ/arcgis/rest/services/Florida_COVID19_Cases/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'

  fetch(url)
    .then(function (response) {
      // Examine the text in the response
      response.json().then(function (data) {
        let option
        var selected = data.features
        console.log(data)

        for (let i = 0; i < selected.length; i++) {
          option = document.createElement('option')
          option.text = selected[i].attributes.COUNTYNAME
          option.value = selected[i].attributes.COUNTYNAME
          dropdown.add(option)
        }
      })
    })
    .catch(function (err) {
      console.error('Fetch Error -', err)
    })
}

function myFunction() {
  var e = document.getElementById('county')
  var selectedCounty = e.options[e.selectedIndex].value

  console.log(selectedCounty)

  //Fetching the County Data
  fetch(
    'https://services1.arcgis.com/CY1LXxl9zlJeBuRZ/arcgis/rest/services/Florida_COVID19_Cases/FeatureServer/0/query?where=County_1%20%3D%20%27' +
      selectedCounty +
      '%27&outFields=*&outSR=4326&f=json',
    {
      method: 'GET',
    },
  )
    .then((response) =>
      response.json().then((data) => {
        console.log(data.features)

        let orange = data.features
        // console.log(orange[0].attributes.CasesAll)

        COUNTYNAME.innerHTML = orange[0].attributes.COUNTYNAME
        CasesAll.innerHTML = orange[0].attributes.CasesAll
        C_AgeMedian.innerHTML = orange[0].attributes.C_AgeMedian
        C_AgeRange.innerHTML = orange[0].attributes.C_AgeRange
        C_Age_0_4.innerHTML = orange[0].attributes.C_Age_0_4
        C_Age_5_14.innerHTML = orange[0].attributes.C_Age_5_14
        C_Age_15_24.innerHTML = orange[0].attributes.C_Age_15_24
        C_Age_25_34.innerHTML = orange[0].attributes.C_Age_25_34
        C_Age_35_44.innerHTML = orange[0].attributes.C_Age_35_44
        C_Age_45_54.innerHTML = orange[0].attributes.C_Age_45_54
        C_Age_55_64.innerHTML = orange[0].attributes.C_Age_55_64
        C_Age_65_74.innerHTML = orange[0].attributes.C_Age_65_74
        C_Age_75_84.innerHTML = orange[0].attributes.C_Age_75_84
        C_Age_85plus.innerHTML = orange[0].attributes.C_Age_85plus
        C_Male.innerHTML = orange[0].attributes.C_Male
        C_Female.innerHTML = orange[0].attributes.C_Female
        C_RaceWhite.innerHTML = orange[0].attributes.C_RaceWhite
        C_RaceBlack.innerHTML = orange[0].attributes.C_RaceBlack
        C_HispanicYES.innerHTML = orange[0].attributes.C_HispanicYES
        C_RaceOther.innerHTML = orange[0].attributes.C_RaceOther
        T_total.innerHTML = orange[0].attributes.T_total
        TPositive.innerHTML = orange[0].attributes.TPositive
        TNegative.innerHTML = orange[0].attributes.TNegative
        Deaths.innerHTML = orange[0].attributes.Deaths
      }),
    )
    .catch((err) => {
      console.log(err)
    })
}

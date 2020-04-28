let table = document.getElementById('usa')
let table2 = document.getElementById('counties')
let flChart = document.getElementById('flChart').getContext('2d')
let dataSet = {
  date: [],
  positive: [],
}

let pos1
let date1

fetch('https://covidtracking.com/api/states/daily?state=FL', {
  method: 'GET',
}).then((response) =>
  response.json().then((data) => {
    // console.log(data)

    //Getting all the state data using a loop
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i])
      //   console.log(data[i].date)
      //   console.log(data[i].positive)
      //   console.log(data[i].death)
      //   console.log(data[i].hospitalized)

      let date1 = data[i].date
      let pos1 = data[i].positive
      dataSet.date.push(date1)
      dataSet.positive.push(pos1)
      console.log(date1)
      console.log(pos1)

      //   data.push(labels)
      //   console.log(labels)

      //we will start by inserting the new rows inside our table
      let row = table.insertRow(i + 1)
      let date = row.insertCell(0)
      let positive = row.insertCell(1)
      let negative = row.insertCell(2)
      let pending = row.insertCell(3)
      let hospitalized = row.insertCell(4)
      let death = row.insertCell(5)
      let total = row.insertCell(6)

      date.innerHTML = data[i].date
      positive.innerHTML = data[i].positive
      negative.innerHTML = data[i].negative
      pending.innerHTML = data[i].pending
      hospitalized.innerHTML = data[i].hospitalized
      death.innerHTML = data[i].death
      total.innerHTML = data[i].total
    }
  }),
)

Chart.defaults.global.defaultFontFamily = 'Lato'
Chart.defaults.global.defaultFontSize = 18
Chart.defaults.global.defaultFontColor = 'black'

let newChart = new Chart(flChart, {
  type: 'bar',
  data: {
    labels: date1,
    datasets: [
      {
        label: 'Positive',
        data: pos1,

        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderWidth: '2',
        hoverBorderColor: 'black"',
      },
      {
        label: 'Deaths',
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          3,
          4,
          6,
          7,
          8,
          10,
          12,
          13,
          14,
          18,
          22,
          28,
          34,
          54,
          56,
          63,
          77,
          87,
          128,
          163,
          191,
          218,
          236,
          296,
          309,
          354,
          390,
          438,
          465,
          483,
          537,
          609,
          646,
          699,
          754,
          781,
          806,
          856,
          910,
          979,
          1031,
          1075,
          1094,
        ],
        type: 'line',

        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'white',
        hoverBorderWidth: '3',
        hoverBorderColor: 'black"',
      },
      {
        label: 'Hospitalized',
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          158,
          185,
          217,
          259,
          316,
          406,
          456,
          526,
          594,
          652,
          823,
          949,
          1123,
          1287,
          1462,
          1572,
          1682,
          1999,
          2062,
          2268,
          2487,
          2661,
          2772,
          2833,
          3060,
          3344,
          3460,
          3665,
          3842,
          3930,
          4010,
          4235,
          4469,
          4693,
          4888,
          5045,
          5155,
        ],
        type: 'line',

        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'grey',
        hoverBorderWidth: '3',
        hoverBorderColor: 'black"',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'FL COVID-19 Chart',
      color: 'red',
      fontSize: 25,
    },
  },
})

//Fetching The Case by Country Data
fetch(
  'https://services1.arcgis.com/CY1LXxl9zlJeBuRZ/arcgis/rest/services/Florida_COVID19_Cases/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  {
    method: 'GET',
  },
)
  .then((response) =>
    response.json().then((data) => {
      // console.log(data)
      let counties = data.features

      for (let i = 0; i < counties.length; i++) {
        // console.log(counties[i])

        let row = table2.insertRow(i + 1)
        let County_1 = row.insertCell(0)
        let PUIsTotal = row.insertCell(1)
        let CasesAll = row.insertCell(2)
        let C_Men = row.insertCell(3)
        let C_Women = row.insertCell(4)
        let TPositive = row.insertCell(5)
        let TNegative = row.insertCell(6)
        let Deaths = row.insertCell(7)

        County_1.innerHTML = counties[i].attributes.County_1
        PUIsTotal.innerHTML = counties[i].attributes.PUIsTotal
        CasesAll.innerHTML = counties[i].attributes.CasesAll
        C_Women.innerHTML = counties[i].attributes.C_Women
        C_Men.innerHTML = counties[i].attributes.C_Men
        TNegative.innerHTML = counties[i].attributes.TNegative
        TPositive.innerHTML = counties[i].attributes.TPositive
        Deaths.innerHTML = counties[i].attributes.Deaths
      }
    }),
  )
  .catch((err) => {
    console.log(err)
  })

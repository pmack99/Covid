let table = document.getElementById('usa')
let table2 = document.getElementById('state')
let myChart = document.getElementById('myChart').getContext('2d')

fetch('https://covidtracking.com/api/us/daily', {
  method: 'GET',
}).then((response) =>
  response.json().then((data) => {
    console.log(data)

    for (let i = 0; i < data.length; i++) {
      console.log(data[i])

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

fetch('https://covidtracking.com/api/states', {
  method: 'GET',
}).then((response) =>
  response.json().then((data) => {
    console.log(data)

    for (let i = 0; i < data.length; i++) {
      console.log(data[i])

      let row = table2.insertRow(i + 1)
      let lastUpdateEt = row.insertCell(0)
      let state = row.insertCell(1)
      let positive = row.insertCell(2)
      let negative = row.insertCell(3)
      let hospitalized = row.insertCell(4)
      let death = row.insertCell(5)
      let total = row.insertCell(6)

      state.innerHTML = data[i].state
      positive.innerHTML = data[i].positive
      negative.innerHTML = data[i].negative
      hospitalized.innerHTML = data[i].hospitalized
      death.innerHTML = data[i].death
      total.innerHTML = data[i].total
      lastUpdateEt.innerHTML = data[i].lastUpdateEt
    }
  }),
)

Chart.defaults.global.defaultFontFamily = 'Lato'
Chart.defaults.global.defaultFontSize = 18
Chart.defaults.global.defaultFontColor = 'black'

let usaChart = new Chart(myChart, {
  type: 'bar',
  data: {
    labels: [
      '3/4',
      '3/5',
      '3/6',
      '3/7',
      '3/8',
      '3/9',
      '3/10',
      '3/11',
      '3/12',
      '3/13',
      '3/14',
      '3/15',
      '3/16',
      '3/17',
      '3/18',
      '3/19',
      '3/20',
      '3/21',
      '3/22',
      '3/23',
      '3/24',
      '3/25',
      '3/26',
      '3/27',
      '3/28',
      '3/29',
      '3/30',
      '3/31',
      '4/1',
      '4/2',
      '4/3',
      '4/4',
      '4/5',
      '4/6',
      '4/7',
      '4/8',
      '4/9',
      '4/10',
      '4/11',
      '4/12',
      '4/13',
      '4/14',
      '4/15',
      '4/16',
      '4/17',
      '4/18',
      '4/19',
      '4/20',
      '4/21',
      '4/22',
    ],
    datasets: [
      {
        label: 'Positive',
        data: [
          118,
          176,
          223,
          341,
          417,
          584,
          778,
          1053,
          1315,
          1922,
          2450,
          3173,
          4019,
          5723,
          7730,
          11719,
          17033,
          23197,
          31879,
          42152,
          51954,
          63928,
          80735,
          99447,
          118234,
          123313,
          139061,
          160530,
          184770,
          210770,
          239009,
          271915,
          305755,
          332308,
          361331,
          392594,
          423164,
          457963,
          492678,
          523199,
          551826,
          576774,
          602473,
          632656,
          663260,
          694520,
          722182,
          749203,
          772524,
          799717,
          826936,
        ],

        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderWidth: '3',
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
          27,
          36,
          39,
          49,
          60,
          71,
          90,
          112,
          160,
          219,
          272,
          398,
          471,
          675,
          900,
          1163,
          1530,
          2211,
          2428,
          2939,
          3746,
          4700,
          5784,
          6962,
          8314,
          9498,
          10680,
          12621,
          14495,
          16399,
          18488,
          20339,
          21919,
          23369,
          25668,
          28160,
          30296,
          32365,
          34139,
          35793,
          37321,
          39995,
          42103,
        ],
        type: 'line',

        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'white',
        hoverBorderWidth: '3',
        hoverBorderColor: 'black',
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
          1964,
          2554,
          3325,
          4468,
          6136,
          10131,
          12036,
          16729,
          19730,
          22303,
          26660,
          31142,
          32649,
          35991,
          38402,
          41372,
          45168,
          45562,
          47159,
          48344,
          50683,
          51114,
          61201,
          62673,
          67547,
          69603,
          74705,
          77955,
          78839,
          80881,
          82879,
          84292,
          85465,
        ],
        type: 'line',

        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'grey',
        hoverBorderWidth: '3',
        hoverBorderColor: 'black',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'USA COVID-19 cases',
      color: 'black',
      fontSize: 25,
    },
  },
})

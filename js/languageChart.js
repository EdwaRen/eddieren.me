//
// Copyright (c) 2017 by Edward Ren. All Rights Reserved.
//

// var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var color = Chart.helpers.color;
// var horizontalBarChartData = {
//     labels: ["Swift", "Javascript", "C++", "Python", "Visual Basic", "React", "Java", "CSS", "HTML", "jQuery", "C#", "Objective-C"],
//     barThickness: 50,
//     datasets: [{
//         label: 'Proficiency',
//         backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
//         borderColor: window.chartColors.red,
//         borderWidth: 1,
//         data: [
//             9, /*Swift*/
//             9, /*JS*/
//             9, /*C++*/
//             9, /*Python*/
//             8,  /*VB*/
//             8,  /*React*/
//             7,  /*Java*/
//             7,  /*CSS*/
//             7,  /*HTML*/
//             6,  /*jQuery*/
//             6, /*c#*/
//             6,  /*Obj-C*/
//
//         ]
//     }]
//
// };
//
// window.onload = function() {
//     var ctx = document.getElementById("myChart").getContext("2d");
//     ctx.height = 200;
//     window.myHorizontalBar = new Chart(ctx, {
//         type: 'horizontalBar',
//         data: horizontalBarChartData,
//         options: {
//             // Elements options apply to all of the options unless overridden in a dataset
//             // In this case, we are setting the border of each horizontal bar to be 2px wide
//             maintainAspectRatio: false,
//             elements: {
//                 rectangle: {
//                     xAxisID: "Proficiency",
//                     borderWidth: 2,
//                 }
//             },
//             responsive: true,
//             legend: {
//                 display: false,
//             },
//             title: {
//                 display: true,
//                 text: 'Language Proficiency and Experience'
//             },
//             scales: {
//               xAxes: [{
//                   barThickness: 15,
//                   ticks: {
//                       // barPercentage: 0.4
//                       beginAtZero: true,
//                       max: 10
//                   }
//               }],
//               yAxes: [{
//                   barPercentage: 0.9,
//                   barThickness: 12,
//
//               }]
//             }
//         }
//     });
//
// };

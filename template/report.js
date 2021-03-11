

module.exports = {
    HTML: function (params, answer, Q10, Q11) {
        return `
        <!doctype html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>셀러비전</title>
            <script src="main.js"></script>
            <link rel="stylesheet" href="reportstyle.css" type="text/css">
            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        </head>
        
        <body>
            <div class="header">
                <h1>SellerVision</h1>
            </div>
            <div class="container">
                <div class="info">
                    <!--기업 정보, 토탈 점수, 날짜-->
                    <div class="grid-info-layout">
                        <div class="gird-info" style="margin: auto 0;">회사명 : ${params[0]} <br> 상품명 : ${params[1]} <br> 이메일 : ${params[3]}</div>
                        <div class="gird-info" style="margin: auto 0;"></div>
                        <div class="gird-info" id="today" style="margin: auto 0;"> <script> var day = new Date(); document.getElementById("today").innerHTML =  "날짜 : " + day.getFullYear()+"/"+day.getMonth()+"/" + day.getDate() + "<br> 시간 : " +  day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();</script> 
                        </div>
                </div>
                <div class="grid-layout">
                    <div class="grid-item span-2 grid-item-1">
                        <!-- 그래프 넣기-->
                        <canvas id="barchart"></canvas>
                        <script>
                            var ctx = document.getElementById('barchart').getContext('2d');
                            var myChart = new Chart(ctx, {
                                type: 'bar',
                                data: {
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                    datasets: [{
                                        label: '# of Votes',
                                        data: [1, 19, 3, 5, 2, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }
                            });
                        </script>
        
                        <canvas id="radarchart"></canvas>
                        <script>
                            var ctx = document.getElementById('radarchart').getContext('2d');
                            var myChart = new Chart(ctx, {
                                type: 'radar',
                                data: {
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                    datasets: [{
                                        label: '# of Votes',
                                        data: [12, 19, 3, 5, 2, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                    }]
                                },
                                options: {
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }
                            });
                        </script>
                    </div>
                    <div class="grid-item grid-item-2">
                        <!-- 분석에 대한 설명 -->
                    </div>
                    <div class="grid-item grid-item-3">
                        <!-- 분석에 대한 설명 -->
                    </div>
                    <div class="grid-item span-2 grid-item-6">
                        <canvas id="piechart"></canvas>
                        <script>
                            var ctx = document.getElementById('piechart').getContext('2d');
                            var myChart = new Chart(ctx, {
                                type: 'pie',
                                data: {
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                    datasets: [{
                                        label: '# of Votes',
                                        data: [12, 19, 3, 5, 2, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                    }]
                                },
                                options: {
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }
                            });
                        </script>
                        <canvas id="pie2chart"></canvas>
                        <script>
                            var ctx = document.getElementById('pie2chart').getContext('2d');
                            var myChart = new Chart(ctx, {
                                type: 'pie',
                                data: {
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                    datasets: [{
                                        label: '# of Votes',
                                        data: [2, 1, 13, 5, 12, 3],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                    }]
                                },
                                options: {
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }
                            });
                        </script>
                    </div>
                    <div class="grid-item grid-item-2">
                    </div>
                    <div class="grid-item grid-item-3">
                    </div>
                </div>
            </div>
        </body>
        
        </html>
    `;
    }
}
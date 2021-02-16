

module.exports = {
    HTML: function () {
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
    <div class="grid-layout">
        <div class="content span-3 grid-item-1">
            Hypertext Markup Language (HTML) is the standard markup language for
            documents designed to be displayed in a web browser. It can be assisted by technologies such as
            Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
            Web browsers receive HTML documents from a web server or from local storage and render the documents
            into multimedia web pages. HTML describes the structure of a web page semantically and originally
            included cues for the appearance of the document.
            HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such
            as interactive forms may be embedded into the rendered page. HTML provides a means to create structured
            documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes
            and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as
            directly introduce content into the page. Other tags such as <p> surround and provide information about
                document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but
                use them to interpret the content of the page.

                HTML can embed programs written in a scripting language such as JavaScript, which affects the
                behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The
                World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS
                standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[</div>
        <div class="grid-item span-2 grid-item-2">
        </div>
        <div class="grid-item grid-item-3">item 2</div>
        <div class="grid-item grid-item-4">
        </div>
        <div class="grid-item span-2 grid-item-5">
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
    </div>
</div>
    </body>
    </html>
    `;
    }
}
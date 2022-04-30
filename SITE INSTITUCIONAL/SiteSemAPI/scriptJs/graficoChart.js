
    //grafico mensal
    const labelsMes = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const dataMes = {
        labels: labelsMes,
        datasets: [{
            label: 'Média Mensal',
            backgroundColor: '#548d44',
            borderColor: '#548d44',
            data: [2.4, 2.4, 2.3, 2.3, 2.2, 2.3, 2.4, 2.3, 2.5, 2.4, 2.4, 2.5],
        }]
    };

    const configMes = {
        type: 'line',
        data: dataMes,
        options: {}
    };

    const myChartMes = new Chart(
        document.getElementById('mensal'),
        configMes
    );
    //grafico semanal

    const labelsSem = [

        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
        'Domingo'

    ];

    const dataSem = {
        labels: labelsSem,
        datasets: [{
            label: 'Média Semanal',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2.1, 2.1, 2.3, 2.2, 2.4, 2.5, 2.5],
        }]
    };

    const configSem = {
        type: 'line',
        data: dataSem,
        options: {}
    };

    const myChartSem = new Chart(
        document.getElementById('semanal'),
        configSem
    );

    //graph ultimas 24H

    const labelsDia = [
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'

    ];

    const dataDia = {
        labels: labelsDia,
        datasets: [{
            label: 'Plástico',
            backgroundColor: '#FFA1A1',
            borderColor: '#FFA1A1',
            data: [0, 0, 0, 0.3, 0.5, 1, 1.4, 1.6, 1.9, 2.3, 2.7, 3.1, 3.5, 3.7],
        },
        {
            label: 'Papel',
            backgroundColor: '#b1bbe7',
            borderColor: '#b1bbe7',
            data: [0, 0, 0, 0.5, 0.7, 0.9, 1.3, 1.7, 2, 2.4, 2.9, 3.2, 3.6, 3.7],
        },
        {
            label: 'Metal',
            backgroundColor: '#F9FFA4',
            borderColor: '#F9FFA4',
            data: [0, 0, 0, 0, 0.3, 0.5, 0.8, 1, 1.2, 1.4, 1.5, 1.8, 2, 2.1],
        },
        {
            label: 'Vidro',
            backgroundColor: '#B4FF9F',
            borderColor: '#B4FF9F',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.7, 0.9, 1, 1.2],
        }
        ]
    };

    const configDia = {
        type: 'line',
        data: dataDia,
        options: {}
    };

    const myChartDia = new Chart(
        document.getElementById('diario'),
        configDia
    );

    //gráfico pizza

    const dataPie = {
        labels: [
            'Plastico',
            'Papel',
            'Metal',
            'Vidro'
        ],
        datasets: [{
            label: 'Tipos de lixo',
            data: [30, 40, 20, 10],
            backgroundColor: [
                '#FFA1A1',
                '#b1bbe7',
                '#F9FFA4',
                '#B4FF9F'
            ],
            hoverOffset: 4
        }]
    };

    const configPie = {
        type: 'doughnut',
        data: dataPie,
    };

    const myChartPie = new Chart(
        document.getElementById('tipo_lotacao_pie'),
        configPie
    );
    //grafico barra

    const dataBar = {
        labels: [
            'Plastico',
            'Papel',
            'Metal',
            'Vidro'
        ],
        datasets: [{
            label: 'Tipos de lixo',
            data: [30, 40, 20, 10],
            backgroundColor: [
                '#FFA1A1',
                '#b1bbe7',
                '#F9FFA4',
                '#B4FF9F'
            ],
            hoverOffset: 4
        }
        ],


    };

    const configBar = {
        type: 'bar',
        data: dataBar,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    const myChartBar = new Chart(
        document.getElementById('tipo_lotacao_bar'),
        configBar
    );
    //grafico mapa
    //piso 1

    const dataPiso1 = {

        datasets: [{
            label: 'Limites',
            data: [{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 10
            }, {
                x: 10,
                y: 0
            },

            ],
            backgroundColor: 'black'
        },
        {
           
            label: 'Kits',
            data: [{
                
                x: 4,
                y: 3.4
            }, 
            ],  /* alterar ponteiro do lixo */
            backgroundColor: '#101099',
            pointRadius: 7,
 
          
        }
        ], 
    };
    const configPiso1 = {
        type: 'scatter',
        data: dataPiso1,
        options: {
            onClick: zap, 
            scales: {
                
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    };

    const myChartPiso1 = new Chart(
        document.getElementById('piso1'),
        configPiso1
    );

    //piso 2

    const dataPiso2 = {
        datasets: [{
            label: 'Limites',
            data: [{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 10
            }, {
                x: 10,
                y: 0
            },
            ],
            backgroundColor: 'black'
        },
        {
            label: 'Kits',
            data: [{
                x: 2,
                y: 3.8
            }

            ],
            backgroundColor: '#FFA1A1',
            pointRadius: 5

        }
        ],
    };
    const configPiso2 = {
        type: 'scatter',
        data: dataPiso2,
        options: {
            onClick: zap, 
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    };

    const myChartPiso2 = new Chart(
        document.getElementById('piso2'),
        configPiso2
    );

    //piso 3

    const dataPiso3 = {
        datasets: [{
            label: 'Limites',
            data: [{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 10
            }, {
                x: 10,
                y: 0
            },

            ],
            backgroundColor: 'black'
        },
        {
            label: 'Kits',
            data: [{
                x: 4,
                y: 2.5
            }

            ],
            backgroundColor: '#FFA1A1',
            pointRadius: 5
        }
        ],
    };
    const configPiso3 = {
        type: 'scatter',
        data: dataPiso3,
        options: {
            onClick: zap, 
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    };

    const myChartPiso3 = new Chart(
        document.getElementById('piso3'),
        configPiso3
    );

    //grafico tempo real
    var contextoChave = document.getElementById('chave').getContext('2d');
    contextoChave.canvas.width = 1000;
    contextoChave.canvas.height = 300;
    var chave = new Chart(
        contextoChave,
        {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Chave',
                    type: 'line',
                    borderColor: ['#ffd902'],
                    backgroundColor: ['#ffe135']
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        distribution: 'series',
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Chave'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                animation: {
                    duration: 0
                }
            }
        }
    );
    var paginacao = {};
    var tempo = {};
    function obterDados(grafico, endpoint) {
        var http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/sensores/' + endpoint, false);
        http.send(null);
        var valores = JSON.parse(http.responseText);
        if (paginacao[endpoint] == null) {
            paginacao[endpoint] = 0;
        }
        if (tempo[endpoint] == null) {
            tempo[endpoint] = 0;
        }

        if (valores > 0) {
            alert('ALERTA - AS LIXEIRAS ESTÃO LOTANDO')
            alertas.innerHTML += `<span style id="vermelho">LOTANDO - tal horas</span>`
        }

        //funçôes gerais

    }


 // joao, insere as mudancas nos graficos aqui ! comentei direitinho pra vc c:, boa sortte meu patrão

    function selecaoMudancaGrafico(){ 
        

        if(qualKit.value=="1"){ // kit 1 - cheio  
           
        }
        else if(qualKit.value=="2"){ // kit 2 - Pouco cheio  
           
        }
        else if(qualKit.value=="3"){ //kit3  - vazio 
           
        }
        else if(qualKit.value=="4"){ //kit4  - todos  
          
        }
    }
//funcao para mostrar os graficos do kit (chamada la em cima )
    function zap(){
        alert("Solteira?")
      
    }
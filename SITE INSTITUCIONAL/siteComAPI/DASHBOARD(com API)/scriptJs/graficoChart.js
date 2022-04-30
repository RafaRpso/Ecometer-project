
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



     // serve para pegar o gráfico e o click dele. addEventListener é lsitador de eventos que aconteceram dentro do myChartPiso1.canvas
myChartPiso1.canvas.addEventListener('click', (e) => {
    clickHandler(myChartPiso1, e)
}) // adiciona um novo evento no canvas que funciona com click


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
                x: 6,
                y: 6.9
            }

            ],
            backgroundColor: '#101099',
            pointRadius: 7, 

        }
        ],
    };
    const configPiso2 = {
        type: 'scatter',
        data: dataPiso2,
        options: {
          
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


    myChartPiso2.canvas.addEventListener('click', (e) => {
        clickHandler(myChartPiso2, e)
    }) // adiciona um novo evento no canvas que funciona com click
    

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
            backgroundColor: '#101099',
            pointRadius: 7, 
        }
        ],
    };
    const configPiso3 = {
        type: 'scatter',
        data: dataPiso3,
        options: {
       
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


    myChartPiso3.canvas.addEventListener('click', (e) => {
        clickHandler(myChartPiso3, e)
    }) // adiciona um novo evento no canvas que funciona com click
    
   
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


//ffuncao que pega coordenada do mapa 
function clickHandler(myChartPiso, userClick){ 

    var { canvas } = myChartPiso ;  // faz com que canvas receba todos os valores do chartpiso1
    console.log(canvas)
    var distancia = canvas.getBoundingClientRect();  // pega a distancia das bordas da tela inteira, de modo que so pega o ocmponente per si https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    var x = userClick.clientX - distancia.left; // valor x recebe o click da funcao abaixo menos a distancia da margin left
    var y = userClick.clientY - distancia.top;   // valor y recebe o click da funcao abaixo menos a distancia da margin top 
    console.log("X: "+ x)
    console.log("Y: "+ y) 
    alertKit(x,y)
}




//define o aparecimento dos gráficos no kit . 
function verKit(kit) {     // pega o valor do kit que é fornecido pela função intermediaria, ou seja, o kit dessa função é o do select
    if (kit == 1)  {        // isso acontece pq o valor do kit é chamado por outra função, essa função serve apenas pra fazer com que apareça os arquivos
        
        graphKit.style.display=  'flex'
        textoKit.innerHTML = "Kit 1"
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
            document.getElementById('kitIndividual'),
            configSem
        );

    }
    else if (kit == 2 ){ 
        
        graphKit.style.display=  'flex'
        textoKit.innerHTML = "Kit 2"
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
                data: [4.1, 1.2, 3.1, 2.2, 2.2, 1.2, 3.5],
            }]
        };
    
        const configSem = {
            type: 'line',
            data: dataSem,
            options: {}
        };
    
        const myChartSem = new Chart(
            document.getElementById('kitIndividual'),
            configSem
        );

    }


    else if (kit == 3){ 
        
        graphKit.style.display=  'flex'
        textoKit.innerHTML = "Kit 3"

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
                data: [4.1, 1.2, 3.1, 2.2, 2.2, 1.2, 3.5],
            }]
        };
    
        const configSem = {
            type: 'line',
            data: dataSem,
            options: {}
        };
    
        const myChartSem = new Chart(
            document.getElementById('kitIndividual'),
            configSem
        );
    }
}



// insere graficos aqui
function alertKit(userx, usery) {
    piso = slct_piso.value ;  // qual o piso escolhido? 
    kit = qualKit.value ; 

        // ver se as coordenadas do mapa BATEM IGUAL a do mouse, com um range para correção
        if( ( piso==1 ) && (userx>100 && userx<300) && (usery>90 && usery<190)) { 
        verKit(piso)
        }

       else if( ( piso == 2) &&  (userx>210&& userx<480) && (usery>30 && usery<170)) { 
        verKit(piso)
        }

       else if( ( piso == 3 ) &&(userx>160 && userx<300) && (usery>90 && usery<200) )  { 
        verKit(piso)
        }    
     
    
}

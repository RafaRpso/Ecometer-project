
/* cores */
var amarelo = '#FFD93D'
var azul = '#4D96FF'
var vermelho = '#FF6B6B'
var verde = '#6BCB77'






/* pegando o kit com maior valor entre os kits de dia */

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
        data: [1, 2, 2, 2, 2, 3, 4],
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

function diaMaisLixo() {
    let maiorValor = 0;
    let menorValor = dataSem.datasets[0].data[0];
    let qualDia = [menorValor, maiorValor];

    for (i = 0; i < dataSem.datasets.length; i++) {
        for (j = 0; j < dataSem.datasets[i].data.length; j++) {
            if (maiorValor < dataSem.datasets[i].data[j]) {
                maiorValor = dataSem.datasets[i].data[j];
                qualDia[1] = labelsSem[j];
            }
            if (menorValor >= dataSem.datasets[i].data[j]) {
                console.log('oii')
                menorValor = dataSem.datasets[i].data[j];
                qualDia[0] = labelsSem[j];
            }
            diaMesMenosLixo.textContent = 'Dia com menos lixo'
            diaMesMaisLixo.textContent = 'Dia com mais lixo'
            diaLixoMais.innerHTML = qualDia[1];
            diaLixoMenos.innerHTML = qualDia[0]
        }
    }

}
function mesMaisLixo() {
    let maiorValor = 0;
    let menorValor = dataMes.datasets[0].data[0];
    let qualDia = [menorValor, maiorValor];

    for (i = 0; i < dataMes.datasets.length; i++) {
        for (j = 0; j < dataMes.datasets[i].data.length; j++) {
            if (maiorValor < dataMes.datasets[i].data[j]) {
                maiorValor = dataMes.datasets[i].data[j];
                console.log(maiorValor)
                qualDia[1] = labelsMes[j];
            }
            if (menorValor >= dataMes.datasets[i].data[j]) {
                console.log('oii')
                menorValor = dataMes.datasets[i].data[j];
                qualDia[0] = labelsMes[j];
            }
            diaMesMenosLixo.textContent = 'Mês com menos lixo'
            diaMesMaisLixo.textContent = 'Mês com mais lixo'
            diaLixoMais.innerHTML = qualDia[1];
            diaLixoMenos.innerHTML = qualDia[0]
        }
    }
}

//graph ultimas 24H
// O gráfico é construído com três funções:
// 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
// 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
// 3. atualizarGrafico -> Atualiza o gráfico, trazendo novamente dados do Banco

// Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
// para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
// A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models

function obterDadosGrafico(idEmpresa) {
console.log(`fazendo conexão com o banco para obter dados; id: ${idEmpresa}`)
    fetch(`/medidas/ultimas/${idEmpresa}`, {
        cache: 'no-store'
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                plotarGrafico(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
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
        backgroundColor: vermelho,
        borderColor: vermelho,
        data: [0, 0, 0, 0.3, 0.5, 1, 1.4, 1.6, 1.9, 2.3, 2.7, 3.1, 4, 4],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0.5, 0.5, 0.7, 0.9, 1.3, 1.7, 2, 2.4, 3.2, 4, 4, 4],
    },
    {
        label: 'Metal',
        backgroundColor: amarelo,
        borderColor: amarelo,
        data: [0, 0, 0, 0, 0.3, 0.5, 0.8, 1, 1.2, 1.4, 1.5, 1.8, 2, 2.1],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.7, 0.9, 1, 2.2],
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
function plotarGrafico(resposta) {
    console.log('iniciando plotagem do gráfico...');

    

    for(index = 0; index < resposta.length; index++){
        var registro = resposta[index];
            dataDia.labels.push(registro.dataHoraSensor);
            dataDia.datasets[0].data.push(registro.tipoLixeira);
            
    }
    
};

obterDadosGrafico(sessionStorage.ID_USUARIO);


/* Busca a hora média que o kit enche */
function buscaTempoCheio() {
    let index = []
    let sumIndex = 0;
    let med = 0;
    for (i = 0; i < dataDia.datasets.length; i++) {
        for (j = 0; j < dataDia.datasets[i].data.length; j++) {
            if (dataDia.datasets[i].data[j] >= 4) {
                index.push(j + 9) // defini em qual horário se encontra as lixeiras lotadas, j+9 é para converter de 9 a 22  
            }
        }
    }

    for (i = 0; i < index.length; i++) {
        sumIndex += index[i]
    }
    med = sumIndex / index.length

    lotaMedia.innerHTML = med.toFixed(1) + "0";

}

/* procurando kit que mais enche no dia*/
function buscarKitEnche() {

    let sumArray = 0;
    let comparaMaior = 0;
    let kitMaisEnche = '';

    for (i = 0; i < dataDia.datasets.length; i++) {
        sumArray = 0;
        for (j = 0; j < dataDia.datasets[i].data.length; j++) {
            sumArray += dataDia.datasets[i].data[j];
        }
        if (comparaMaior < sumArray) {
            console.log(comparaMaior)
            comparaMaior = sumArray;
            console.log(comparaMaior)
            kitMaisEnche = dataDia.datasets[i].label;
            console.log(kitMaisEnche)

        }

    }
    kitEncheMais.innerHTML = kitMaisEnche;
}


buscarKitEnche();
buscaTempoCheio()



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
            vermelho,
            '#4D96FF',
            amarelo,
            '#6BCB77'
        ],
        circumference: 180,
        rotation: 270,
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

//grafico individual

const labelsKit1 = [
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

const dataKit1 = {
    labels: labelsKit1,
    datasets: [{
        label: 'Plástico',
        backgroundColor: vermelho,
        borderColor: vermelho,
        data: [0, 0, 0, 1, 1, 1, 2, 2, 4, 2, 3, 3, 3, 3],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3],
    },
    {
        label: 'Metal',
        backgroundColor: amarelo,
        borderColor: amarelo,
        data: [0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 2, 2, 2, 3],
    },
    {
        label: 'Vidro',
        backgroundColor: verde,
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3],
    }
    ]
};

const configKit1 = {
    type: 'line',
    data: dataKit1,
    options: {}
};

const myChartKit1 = new Chart(
    document.getElementById('kitIndividual1'),
    configKit1
);


const labelsKit2 = [
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

const dataKit2 = {
    labels: labelsKit2,
    datasets: [{
        label: 'Plástico',
        backgroundColor: vermelho,
        borderColor: vermelho,
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4]
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
    },
    {
        label: 'Metal',
        backgroundColor: amarelo,
        borderColor: amarelo,
        data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    }
    ]
};

const configKit2 = {
    type: 'line',
    data: dataKit2,
    options: {}
};

const myChartKit2 = new Chart(
    document.getElementById('kitIndividual2'),
    configKit2
);


const labelsKit3 = [
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

const dataKit3 = {
    labels: labelsKit3,
    datasets: [{
        label: 'Plástico',
        backgroundColor: vermelho,
        borderColor: vermelho,
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4],
    },
    {
        label: 'Metal',
        backgroundColor: amarelo,
        borderColor: amarelo,
        data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
    }
    ]
};

const configKit3 = {
    type: 'line',
    data: dataKit3,
    options: {}
};

const myChartKit3 = new Chart(
    document.getElementById('kitIndividual3'),
    configKit3
);

// sempre que for chamar uma lixeira no onclick ou etc, coloque a constante da lixeira do ChartJS e o número que ela é, além de adicionar
// um caso ali no switch case para o "QualKit " receber o nome dela. É Uma função de parametro que recebe o num da lixeira e sua constante
function intermedioRelatorio() {
    var valor = relatorioSelect.value;
    switch (valor) {
        case '1':
            relatorioLixeira(dataKit1, 1)
            break;
        case '2':
            relatorioLixeira(dataKit2, 2)
            break;
        case '3':
            relatorioLixeira(dataKit3, 3)
            break;
        default:
            alert("Selecione um kit válido");
            break;
    }
}
/* 
const dataKit3 = {
    labels: labelsKit3,
    datasets: [{
        label: 'Plástico',
        backgroundColor: vermelho,
        borderColor: vermelho,
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4],
    },
    {
        label: 'Metal',
        backgroundColor: amarelo,
        borderColor: amarelo,
        data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4],
    }
    ]
};
*/
function relatorioLixeira(arr, numKit) {

    let kits = []
    let situacaoLixeira = '';
    let tipoKit = '';
    let qualKit = ''
    let index = 0


    situacaoKits.innerHTML = ' '
    // ve qual lixeira é pq nao consegui pegar o nome do parametro arr
    switch (numKit) {
        case 1:
            qualKit = 'Kit 1'
            break;
        case 2:
            qualKit = 'Kit 2'
            break;
        case 3:
            qualKit = 'Kit 3'
            break;
        default:
            qualKit = 'Kit inexistente'
    }

    // recebe dados 
    for (i = 0; i < arr.datasets.length; i++) {
        for (j = 0; j < arr.datasets[i].data.length; j++) {
            if (arr.datasets[i].data[j] == 4) {
                situacaoLixeira = 'Lotado'
                tipoKit = arr.datasets[i].label;
                index = j + 9;
                kits.push(tipoKit, situacaoLixeira, index)

            }
        }
    }
    //imprime dados
    situacaoKits.innerHTML += `<span class='subtitulo'> ${qualKit} </span> <div class='alinhador'> <div class='alinhamento'> </div> </div><br>`;
    var i = 0;
    if (kits[0] == null) {
        situacaoKits.innerHTML += `Este kit não lotou nenhuma vez`
    }
    while (i < kits.length) {

        situacaoKits.innerHTML += `Tipo da lixeira: ${kits[i]} - Hora: ${kits[i + 2]}:00<br> Situação: ${kits[i + 1]} <br><br>`
        i += 3;
    }



}

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

//funções 


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
function clickHandler(myChartPiso, userClick) {

    var { canvas } = myChartPiso;  // faz com que canvas receba todos os valores do chartpiso1
    console.log(canvas)
    var distancia = canvas.getBoundingClientRect();  // pega a distancia das bordas da tela inteira, de modo que so pega o ocmponente per si https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    var x = userClick.clientX - distancia.left; // valor x recebe o click da funcao abaixo menos a distancia da margin left
    var y = userClick.clientY - distancia.top;   // valor y recebe o click da funcao abaixo menos a distancia da margin top 
    console.log("X: " + x)
    console.log("Y: " + y)
    alertKit(x, y)
}




//define o aparecimento dos gráficos no kit . 
function verKit(kit) {     // pega o valor do kit que é fornecido pela função intermediaria, ou seja, o kit dessa função é o do select
    if (kit == 1) {        // isso acontece pq o valor do kit é chamado por outra função, essa função serve apenas pra fazer com que apareça os arquivos

        graphKit.style.display = 'flex'
        textoKit.innerHTML = "Kit 1"
        kitIndividual1.style.display = 'block'
        kitIndividual2.style.display = 'none'
        kitIndividual3.style.display = 'none'
    }
    else if (kit == 2) {        // isso acontece pq o valor do kit é chamado por outra função, essa função serve apenas pra fazer com que apareça os arquivos

        graphKit.style.display = 'flex'
        textoKit.innerHTML = "Kit 2"
        kitIndividual1.style.display = 'none'
        kitIndividual2.style.display = 'block'
        kitIndividual3.style.display = 'none'
    } else if (kit == 3) {        // isso acontece pq o valor do kit é chamado por outra função, essa função serve apenas pra fazer com que apareça os arquivos

        graphKit.style.display = 'flex'
        textoKit.innerHTML = "Kit 3"
        kitIndividual1.style.display = 'none'
        kitIndividual2.style.display = 'none'
        kitIndividual3.style.display = 'block'
    }






}
function alertKit(userx, usery) {
    piso = slct_piso.value;  // qual o piso escolhido? 


    // ver se as coordenadas do mapa BATEM IGUAL a do mouse, com um range para correção
    if ((piso == 1) && (userx > 100 && userx < 300) && (usery > 90 && usery < 190)) {
        verKit(piso)
    }

    else if ((piso == 2) && (userx > 210 && userx < 480) && (usery > 30 && usery < 170)) {
        verKit(piso)
    }

    else if ((piso == 3) && (userx > 160 && userx < 300) && (usery > 90 && usery < 200)) {
        verKit(piso)
    }


}






function trocaMapa() {



    slct_piso.style.display = 'block';
    graph.style.display = 'none'
    mapa.style.display = 'block'
    mediaLocal.innerHTML = 'Localização das Lixeiras'
    mainGraph.style.width = '100%'


}

function trocaGraph() {
    slct_piso.style.display = 'none';
    graph.style.display = 'block'
    mapa.style.display = 'none'
    mediaLocal.innerHTML = 'Média de lotação'

}


function trocaPiso() {
    if (slct_piso.value == 1) {
        piso1.style.display = 'block'
        piso2.style.display = 'none'
        piso3.style.display = 'none'
    }

    if (slct_piso.value == 2) {
        piso1.style.display = 'none'
        piso2.style.display = 'block'
        piso3.style.display = 'none'
    }

    if (slct_piso.value == 3) {
        piso1.style.display = 'none'
        piso2.style.display = 'none'
        piso3.style.display = 'block'
    }
}



function trocaPie() {
    if (slct_pie.value == "invalido") {
        alert('Selecione um valor válido. Barra ou Pizza.')
    }
    else if (slct_pie.value == 1) {
        graficoPizza.style.height = "25%"
        tipo_lotacao_bar.style.display = 'block'
        tipo_lotacao_pie.style.display = 'none'
    }

    else if (slct_pie.value == 2) {
        graficoPizza.style.height = "45%"
        tipo_lotacao_bar.style.display = 'none'
        tipo_lotacao_pie.style.display = 'block'
    }
}

function amarelo() {
    alert('O local está ideal para a coleta')
    alertas.innerHTML += `<span style id="amarelo">Ideal para a coleta - tal horas</span>`
}

function vermelho() {
    alert('ALERTA - AS LIXEIRAS ESTÃO LOTANDO')
    alertas.innerHTML += `<span style id="vermelho">LOTANDO - tal horas</span>`
}




var quaisKitLotado = []
var contadorLixeirasLotadas = 0;
function kitsLotadosAssicronos(arr, idKit) {
    let a = '';
    contadorLixeirasLotadas++;
    quaisKitLotado = []

    for (i = 0; i < arr.datasets.length; i++) {
        for (j = 0; j <= arr.datasets[i].data.length; j++) {
            if (arr.datasets[i].data[j] == 4 && j == arr.datasets[i].data.length - 1) {
                a = 'Kit ' + idKit
            }
        }
    }
    if (a == 'Kit ' + idKit) {
        quaisKitLotado.push(a)
    }
    for (i = 0; i < quaisKitLotado.length; i++) {
        kitsLotados.innerHTML += `<b class='kitsCheios'> ${quaisKitLotado[i]}</b> &nbsp;&nbsp;`;
    }
    kitsLotadosNumeros.innerHTML = contadorLixeirasLotadas;



}



function ocultaKitsLotados() {
    conteudoDivLotados.style.display = 'none';
    h3KitsLotados.innerHTML = 'Kits Lotados (oculto)'
    botaoMostrarLotados.style.display = 'block';
    botaoOcultarMostrados.style.display = 'none';
}
function mostraKitsLotados() {
    conteudoDivLotados.style.display = 'block';
    h3KitsLotados.innerHTML = 'Kits Lotados: '
    botaoMostrarLotados.style.display = 'none';
    botaoOcultarMostrados.style.display = 'block';
}
// função que vê quais estão lotados 
setInterval(() => {
    // Sempre que adicionar uma lixeira nova, inserir ela aqui
    // ou seja, inserior sua constante, e logo após o seu 'id', ou seja, qual lixeira é (1,2,3,4,5)
    // depois disso, o algorítmo trata de fazer todo o trabalho sujo rsrsrs
    kitsLotadosAssicronos(dataKit1, 1)
    kitsLotadosAssicronos(dataKit2, 2)
    kitsLotadosAssicronos(dataKit3, 3)
    kitsLotados = []
    contadorLixeirasLotadas = 0;

}, 1000)

// quando selecionar o kit de lixo, demonstrar o alerta abaixo e acima 
function selecionaAutomaticoAlerta(arr, idKit) {
    for (i = 0; i < arr.datasets.length; i++) {
        for (j = 0; j <= arr.datasets[i].data.length; j++) {
            if (arr.datasets[i].data[j] == 4 && j == arr.datasets[i].data.length - 1) {
                textoKit.innerHTML = "Kit " + idKit
                alert("AVISO. ESTE KIT ESTÁ LOTADO.")
                condicaoKit.innerHTML = "<b> O Kit " + idKit + "está LOTADO! </b>"
                situacao.innerHTML = "<b> O Kit " + idKit + "está LOTADO! </b>"
                aviso1.style.display = 'none'
                aviso2.style.display = 'none'
                aviso3.style.display = 'none'
                aviso4.style.display = 'block'
            }
        }
    }
}
function ocultarNavbar() {
    menuLateral.style.display = 'none'
    //arrumar footer
    footerDash.style.marginLeft = '0%'
    footerDash.style.width = '100%'
    //arrumar main
    main.style.marginLeft = '0%'
    mostrarMenu.style.display = 'block'
}

function mostrarNavBar() {
    menuLateral.style.display = 'flex'
    //arrumar footer
    footerDash.style.marginLeft = '7%'
    footerDash.style.width = '93%'
    //arrumar main
    main.style.marginLeft = '7%'
    mostrarMenu.style.display = 'none'
}

// ocultar no botao ocultar
function ocultarKit() {
    graphKit.style.display = "none";
    qualKit.value = 0;
}

// intermediaria pra caso vc mexer na lixeira ou caso vc mexa no mapa ambos funcionem
//fornece a chave para ambas as funções efetuarem as coisas iguais, isto é: o mapa e o select button trocarem os kits
function intermediaria() {
    kit = qualKit.value;
    kitEscolhido = eval('dataKit' + kit)
    selecionaAutomaticoAlerta(kitEscolhido, kit)
    verKit(kit);

    return 0;
}






function troca(qual) {
    switch (qual) {
        case 'longo':
            mensal.style.display = 'block'
            semanal.style.display = 'none'
            diario.style.display = 'none'
            break;
        case 'medio':
            mensal.style.display = 'none'
            semanal.style.display = 'block'
            diario.style.display = 'none'
            break;
        case 'curto':
            mensal.style.display = 'none'
            semanal.style.display = 'none'
            diario.style.display = 'block'
            break;

    }

}
curtoPrazo()
function curtoPrazo() {
    troca('curto')
    mediaLocal.textContent = 'Média diária'
    graficoPizza.style.display = 'block'
    horarioMedio.style.display = 'flex'
    cardLixo.style.display = 'none'
    cardMenosLixo.style.display = 'none'
    kitEnche.style.display = 'flex'
}
function medioPrazo() {
    diaMaisLixo()
    troca('medio')
    mediaLocal.textContent = 'Média semanal'
    graficoPizza.style.display = 'block'
    horarioMedio.style.display = 'none'
    cardLixo.style.display = 'flex'
    cardMenosLixo.style.display = 'flex'
    kitEnche.style.display = 'none'
}
function longoPrazo() {
    mesMaisLixo()
    graficoPizza.style.display = 'block'
    horarioMedio.style.display = 'none'
    cardLixo.style.display = 'flex'
    cardMenosLixo.style.display = 'flex'
    kitEnche.style.display = 'none'
    mediaLocal.textContent = 'Média mensal'
    troca('longo')
}

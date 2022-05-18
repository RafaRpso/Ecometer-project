

var amarelo = '#FFD93D'
var azul = '#4D96FF'
var vermelho = '#FF6B6B'
var verde = '#6BCB77'
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
        backgroundColor: '#FF6B6B',
        borderColor: '#FF6B6B',
        data: [0, 0, 0, 0.3, 0.5, 1, 1.4, 1.6, 1.9, 2.3, 2.7, 3.1, 3.5, 3.7],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0.5, 0.7, 0.9, 1.3, 1.7, 2, 2.4, 2.9, 3.2, 3.6, 3.7],
    },
    {
        label: 'Metal',
        backgroundColor: '#FFD93D',
        borderColor: '#FFD93D',
        data: [0, 0, 0, 0, 0.3, 0.5, 0.8, 1, 1.2, 1.4, 1.5, 1.8, 2, 2.1],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
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
            '#FF6B6B',
            '#4D96FF',
            '#FFD93D',
            '#6BCB77'
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
        backgroundColor: '#FF6B6B',
        borderColor: '#FF6B6B',
        data: [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4],
    },
    {
        label: 'Metal',
        backgroundColor: '#FFD93D',
        borderColor: '#FFD93D',
        data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
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
        backgroundColor: '#FF6B6B',
        borderColor: '#FF6B6B',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
    },
    {
        label: 'Metal',
        backgroundColor: '#FFD93D',
        borderColor: '#FFD93D',
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
        backgroundColor: '#FF6B6B',
        borderColor: '#FF6B6B',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
    },
    {
        label: 'Papel',
        backgroundColor: '#4D96FF',
        borderColor: '#4D96FF',
        data: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3],
    },
    {
        label: 'Metal',
        backgroundColor: '#FFD93D',
        borderColor: '#FFD93D',
        data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2],
    },
    {
        label: 'Vidro',
        backgroundColor: '#6BCB77',
        borderColor: '#6BCB77',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
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
        selecaoKitAlerta(kit) ; 
        graphKit.style.display = 'flex'
        textoKit.innerHTML = "Kit 1"
        kitIndividual1.style.display = 'block'
        kitIndividual2.style.display = 'none'
        kitIndividual3.style.display = 'none'
}
    else if (kit == 2) {        // isso acontece pq o valor do kit é chamado por outra função, essa função serve apenas pra fazer com que apareça os arquivos
        selecaoKitAlerta(kit) ; 
        graphKit.style.display = 'flex'
        textoKit.innerHTML = "Kit 2"
        kitIndividual1.style.display = 'none'
        kitIndividual2.style.display = 'block'
        kitIndividual3.style.display = 'none'
    } else if (kit == 3) {        // isso acontece pq o valor do kit é chamado por outra função, essa função serve apenas pra fazer com que apareça os arquivos
        selecaoKitAlerta(kit) ; 
        graphKit.style.display = 'flex'
        textoKit.innerHTML = "Kit 3"
        kitIndividual1.style.display = 'none'
        kitIndividual2.style.display = 'none'
        kitIndividual3.style.display = 'block'
    }

        

   
    

}
function alertKit(userx, usery) {
        piso = slct_piso.value;  // qual o piso escolhido? 
        kit = qualKit.value;

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




function troca() {

    if (slct_graph.value == 1) {
        mensal.style.display = 'block'
        semanal.style.display = 'none'
        diario.style.display = 'none'
    }

    if (slct_graph.value == 2) {
        mensal.style.display = 'none'
        semanal.style.display = 'block'
        diario.style.display = 'none'
    }

    if (slct_graph.value == 3) {
        mensal.style.display = 'none'
        semanal.style.display = 'none'
        diario.style.display = 'block'
    }
}

function trocaMapa() {

    intervalo_exib.style.display = 'none';
    piso_exib.style.display = 'block';
    slct_graph.style.display = 'none'
    slct_piso.style.display = 'block';
    graph.style.display = 'none'
    mapa.style.display = 'block'
    mediaLocal.innerHTML = 'Localização das Lixeiras'
    mainGraph.style.width = '100%'


}

function trocaGraph() {

    intervalo_exib.style.display = 'block';
    piso_exib.style.display = 'none';
    slct_graph.style.display = 'block'
    slct_piso.style.display = 'none';
    graph.style.display = 'block'
    mapa.style.display = 'none'
    mediaLocal.innerHTML = 'Média de lotação '

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
    if (slct_pie.value == "invalido"){ 
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


// quando selecionar o kit de lixo, demonstrar o alerta abaixo e acima 

function selecaoKitAlerta(kit) { // recebe o valor do kit de outra funcao, da funcao INTERMEDIARIA, de modo que é ela quem fornece para ambos
    var kitInput = qualKit.value; 



    if (kit== "1") { // kit 1 - cheio  

        textoKit.innerHTML = "Kit 1"
        alert("AVISO. ESTE KIT ESTÁ LOTADO.")
        condicaoKit.innerHTML = "<b> O Kit 1 está LOTADO! </b>"
        situacao.innerHTML = "<b> O Kit 1 está LOTADO! </b>"
        aviso1.style.display = 'none'
        aviso2.style.display = 'none'
        aviso3.style.display = 'none'
        aviso4.style.display = 'block'
      
    }
    else if (kit== "2" ) { // kit 2 - qUASE VAZIO  
      
        textoKit.innerHTML = "Kit 2"
        condicaoKit.innerHTML = "<b> O Kit 2 está pouco cheio! </b>"
        situacao.innerHTML = "<b> O Kit 2 está pouco cheio! </b>"
        aviso1.style.display = 'none'
        aviso2.style.display = 'block'
        aviso3.style.display = 'none'
        aviso4.style.display = 'none'
   
    }
    else if (kit== "3") { //kit3  - vazio 
        graphKit.style.display=  'flex'
        textoKit.innerHTML = "Kit 3"
        condicaoKit.innerHTML = "<b> O kit 3 está vazio </b>"
        situacao.innerHTML = "<b> O Kit 3 está vazio! </b>"
        aviso1.style.display = 'block'
        aviso2.style.display = 'none'
        aviso3.style.display = 'none'
        aviso4.style.display = 'none'
  
    }
    else if (kit== "4") { //kit3  - vazio 
        condicaoKit.innerHTML = null
        aviso1.style.display = 'block'
        aviso2.style.display = 'block'
        aviso3.style.display = 'block'
        aviso4.style.display = 'block'
 
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
    graphKit.style.display = "none" ; 
    qualKit.value = 0;
}

// intermediaria pra caso vc mexer na lixeira ou caso vc mexa no mapa ambos funcionem
//fornece a chave para ambas as funções efetuarem as coisas iguais, isto é: o mapa e o select button trocarem os kits
function intermediaria(){ 
    kit = qualKit.value ; 
    selecaoKitAlerta(kit) ; 
    verKit(kit) ; 
 
    return 0 ;
}





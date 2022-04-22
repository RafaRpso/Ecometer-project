const serialport = require('serialport'); // chamo módulo serialport
const express = require('express'); //chamo módulo express
const mysql = require('mysql2'); // chamo módulo mysql2
const SERIAL_BAUD_RATE = 9600; //delay
const SERVIDOR_PORTA = 3000; //porta para localhost
const HABILITAR_OPERACAO_INSERIR = false; //proteção para inserção de dados


/*  BANCO MYSQL2 */ 
const serial = async ( 
    /* A variable that stores the values of the humidity sensor. */
    valoresDht11Umidade,
    valoresDht11Temperatura,
    valoresLuminosidade,
    valoresLm35Temperatura,
    valoresChave
) => {
    const poolBancoDados = mysql.createPool(
        {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'urubu100',
            database: 'metricas'
        }
    ).promise(); //confirmacao banco



    /* ARDUINO*/ 
    const portas = await serialport.SerialPort.list(); //busca portas do arduino 
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) { //se a porta não for encontrada, faça 
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }



    const arduino = new serialport.SerialPort( 
        {
            path: portaArduino.path, //qual o local? 
            baudRate: SERIAL_BAUD_RATE //define os valores do arduino, aqui é a constante lá em cima 
        }
    );
    arduino.on('open', () => {
         //se o arduino tá rodando, mostra no terminal que ele tá rodando
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });

/* Reading the data from the serial port and storing it in the variable `data`. */

    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
    
        const valores = data.split(';'); //guarde os valores dados pelos sensores no vetor (caixinha de dados) valores
        const dht11Umidade = parseFloat(valores[0]); // pega os valores do serial port lá do arduino e guarda numa caixinha de dados 
        const dht11Temperatura = parseFloat(valores[1]);//cada variavel vai receber um valor do vetor, basicamente tirando da caixinha e colocando na variável xd
        const luminosidade = parseFloat(valores[2]);
        const lm35Temperatura = parseFloat(valores[3]);
        const chave = parseInt(valores[4]);

/* Pushing the values of the sensors into the array. */
        valoresDht11Umidade.push(dht11Umidade); 
        valoresDht11Temperatura.push(dht11Temperatura);
        valoresLuminosidade.push(luminosidade);
        valoresLm35Temperatura.push(lm35Temperatura);
        valoresChave.push(chave);

        if (HABILITAR_OPERACAO_INSERIR) { // se voce trocar a variavel para TRUE ao inves de FALSE ele insere os valores no Banco. 
            await poolBancoDados.execute(
                'INSERT INTO sensores (dht11_umidade, dht11_temperatura, luminosidade, lm35_temperatura, chave) VALUES (?, ?, ?, ?, ?)',
                [dht11Umidade, dht11Temperatura, luminosidade, lm35Temperatura, chave]
            );
        }

    });
    arduino.on('error', (mensagem) => { //deu erro no Arduino 
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}




/* EXPRESS */ 
const servidor = ( //definicao da func. servidor com os valores dos sensores
    valoresDht11Umidade,
    valoresDht11Temperatura,
    valoresLuminosidade,
    valoresLm35Temperatura,
    valoresChave
) => {
    const app = express(); //recebe funcao express


/* A middleware that allows the server to respond to requests from other domains. */
//age como intermediario
    app.use((request, response, next) => { //resposta do servidor 
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });


    //le servidor porta e ve se ta funcionando
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    //pede o dado do sensor e retorna em um arquivo json 
    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valoresDht11Umidade);
    });
    app.get('/sensores/dht11/temperatura', (_, response) => {
        return response.json(valoresDht11Temperatura);
    });
    app.get('/sensores/luminosidade', (_, response) => {
        return response.json(valoresLuminosidade);
    });
    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    app.get('/sensores/chave', (_, response) => {
        return response.json(valoresChave);
    });
}

//ðefinicoes das constantes como vetor
/* A self-invoking function. */
(async () => {
    const valoresDht11Umidade = [];
    const valoresDht11Temperatura = [];
    const valoresLuminosidade = [];
    const valoresLm35Temperatura = [];
    const valoresChave = [];
    await serial(
        valoresDht11Umidade,
        valoresDht11Temperatura,
        valoresLuminosidade,
        valoresLm35Temperatura,
        valoresChave
    );
    servidor(
        valoresDht11Umidade,
        valoresDht11Temperatura,
        valoresLuminosidade,
        valoresLm35Temperatura,
        valoresChave
    );
})();

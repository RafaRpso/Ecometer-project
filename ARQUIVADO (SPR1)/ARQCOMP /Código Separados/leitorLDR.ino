int ldr_pin=A5; //Declaração de uma variavel em um valor HEX. A5 
int ldr_read=0; // Declaração de uma variavel, pelo nome, é a leitura de LDR
float vin=5.00; // declaração de uma variavel chamada 'vin', inteira.
float valor_ADC = 0.00480758, r_ohms = 100000;  // 1024/voltagem (valor_ADC) e r_oms

void setup(){
  Serial.begin(9600) ;  // Entrada de dados em 9600 p/segundo
}

void loop(){ 
  if(isnan(ldr_read)){ //se (ldr_read) não for um número, faça: erro! 
    Serial.print("Erro! Reveja o código!");  
  }
  else{ //se a primeira proposição for falsa, efetue o código a seguir: 
    ldr_read= analogRead(ldr_pin); //leia o valor analógico de ldrPin (0 - 1000) 
    float vout = valor_ADC * ldr_read;  //declaração variavel voltagem 
    float res_ldr = (r_ohms*(vin - vout)/vout; //resistencia_ldr? creio que seja isso. Calculo da voltagem
    float lux = 500/(res_ldr/1000);  // calculo da iluminacao presente
  // Quanto maior a incidencia de luz, menor a resistencia do sensor
  // Checando a voltagem do sensor, fŕmulas pra isso;

  }

  if(ldr_read>750){ // se o valor do pin Analogico declarado for maior do que 750, faça: 
    Serial.print(ldr_read); //imprime o valor ldr_read
    Serial.print(" Vout: ");  // imprime 'voult:'
    Serial.print(vout); ·//imprime o valor da variavel vout
    Serial.print(" R_ldr: " );  // imprime 'R_ldr:'
    Serial.print(res_ldr);  // imprive o valor de res_ldr
    Serial.print(" Lux: ");  // imprime 'Lux:'
    Serial.print(lux);  // imprime o valor de lux
    Serial.print("O ambiente está claro (:");  // imprime 'O ambiente está claro'
   else{ // se a proposição acima for falsa, faça
       Serial.print(ldr_read);  
    Serial.print(" Vout: "); 
    Serial.print(vout);
    Serial.print(" R_ldr: " ); 
    Serial.print(res_ldr); 
    Serial.print(" Lux: "); 
    Serial.print(lux); 
    Serial.print("O ambiente está escuro"); 
   }
  } 

  // explicação: O valor de luminosidade do ambiente é convertido em energia, eletricidade. Não há leitura direta da luz, há uma conversão para outro dado. ldr_read é justamente o valor dessa conversão. Caso seja >750, a conversão do dado de energia é alta, isso significa que o ambiente está claro. Caso essa proposição seja falsa, significa que está escuro (o programa não lê 'muito claro, muito escuro'.), portanto, ou **está claro** ou **está escuro** 

  // rafa
  delay(2000); 
  
}

#include <DTH.h>
#include <DTH_U.h>
#include <Adafruit_Sensor.h> //Chamado das bibliotecas


int pinoSensor = 7; //Declara a variável.

void setup(){
  pinMode(pinoSensor, INPUT); //Detecta o Sensor como  INPUT na variavel pino
  Serial.begin(9600); // detecta a quantidade de coiso por segundo 
}   // taxa de transmisssao de dados = Serial.Begin(9600)

void loop(){ // creio que seja loop porque fica repetindo

	// dentro do loop, para que repita diversas vezes, se coloca o código

	if(digitalRead(pinoSensor)==LOW){ //se ESTA ATIVADO == PESSOA DETECTADA 
    Serial.println("Objeto Detectado! (1)") ; // imprime 'OBJETO DETECTADO' 
  }
  else if(isnan(pinoSensor)) {  //se o VALOR NAO E UM NUMERO == ERRO NO SIS.
    Serial.print("Erro!"); // IMPRIME ERRO
    break; // ENCERRA O LOOP
  }
  else { // SE nenhum dos dois ifs forem verdadeiro, faça: 
    Serial.println("Objeto ausente (0)");  // imprime objeto ausente
  }
}

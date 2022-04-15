#include "DHT.h"
#define dht_type DHT11 // define qual o tipo de sensor DHT11 que está utilizando
int dht_pin= A2; 
DHT dht_1 = DHT(dht_pin, dht_type); // pode configurar sensores DHTxx

void setup() 
{
Serial.begin(9600);
dht1.begin(); 
 	// declaração da quantidade de dados que entra por segundo (serial begin) e do sensor (dht1)  
}

void loop()
{
  float umidade= dht_1.readHumidity();  // a variavel umidade recebe o valor do sensor de umidade
  float temperatura = dht_1.readTemperature();  // a variavel temperatura recebe o valor de temperatura do sensor
  if (isnan(temperatura) or isnan(umidade)) // se nao for um NUMERO, imprima ERRO
  {
    Serial.println("Erro ao ler Temperatura");
  }
  else // se a proposicao acima for falsa, faça isso: 
  {
  Serial.print("Umidade: "); 
  Serial.print(umidade);  // imprime umidade (valor do sensor) 
  Serial.print(" Temperatura: ");
  Serial.print(temperatura);  // imprime temperatura (valor do sensor) 
  Serial.println("°C") ; 
  }
delay(2000);  // delay pra não fazer 4000000 impressões em 1 segundo

}

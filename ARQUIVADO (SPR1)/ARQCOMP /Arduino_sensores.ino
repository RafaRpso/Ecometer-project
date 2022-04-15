#include <DHT.h>
#include <DHT_U.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#include "DHT.h"
#define DHTPIN A1
#define LM35PIN A5
#define LUMIPIN A0
#define CHAVPIN 7
DHT dht(DHTPIN, DHT11);
void setup() // DEFINE O SETUP 
{
pinMode(DHTPIN, INPUT);
pinMode(CHAVPIN, INPUT);
Serial.begin(9600);
dht.begin();
}
void loop() //LOOP ETERNO PARA REPETIR INFINITAMENTE
{
float dht11_umidade = dht.readHumidity(); // LE VALOR ANALOGICO UMIDADE
float dht11_temperatura = dht.readTemperature(); // LE VALOR ANALOGICO TEMPERATURA
Serial.print("  Umidade:"); 
Serial.print(dht11_umidade); //IMPRIME VALOR UMIDADE
Serial.print("  Temperatura:");
Serial.print(dht11_temperatura);
Serial.print("  Luminosidade:");
float luminosidade = analogRead(LUMIPIN);
Serial.print(luminosidade);
Serial.print("  Temperatura: ");

float lm35_temperatura = analogRead(LM35PIN); // TEMPERATURA VIA LM35
lm35_temperatura = lm35_temperatura * 0.00488;
lm35_temperatura = lm35_temperatura * 100;
Serial.print(lm35_temperatura);
Serial.print("  Proximidade:");
int chave = digitalRead(7);
if (chave == 0)  // IMPRIMA 1 PORQUE LIGOU
{ 
Serial.print("1"); 
} 
else
{  // IMPRIMA 0, POIS ESTA DESLIGADO
Serial.print("0"); 
}
Serial.println();
}

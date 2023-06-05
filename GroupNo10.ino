#include<Servo.h>
#include<LiquidCrystal.h>

Servo servo1;
Servo servo2;

int contrast=0;
int Total = 8;
int Entrance = 0;
int Exit = 0;
int Availability = 8;

LiquidCrystal lcd(12,11,5,4,3,2);

void setup()
{
Serial.begin(9600);
servo1.attach(7);

servo2.attach(8);
analogWrite(6,contrast);

lcd.begin(16,2);
  pinMode(0, INPUT);
  pinMode(13, INPUT);
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(A2, INPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(10, INPUT);
  pinMode(9, INPUT);
}

void loop()
{
if(digitalRead(0)==HIGH){
servo1.write(80);
delay(1500);
}
else{

Availability = Availability - 1;
servo1.write(0);
lcd.setCursor (0, 0);
lcd.print("Total Space: ");
lcd.print(Total);
lcd.setCursor (0, 1);
lcd.print("Free Spaces: ");
lcd.print(Availability);
}

if(digitalRead(13)==HIGH){
servo2.write(80);
delay(1500);

if(digitalRead(13)==LOW)
{

Availability = Availability + 1;

}
}
else{
//delay(1000);
servo2.write(0);
lcd.setCursor (0, 0);
lcd.print("Total Space: ");
lcd.print(Total);
lcd.setCursor (0, 1);
lcd.print("Free Spaces: ");
lcd.print(Availability);
}

//for (int sensor = 0; sensor < 8; sensor++) {
    int sensor1 = digitalRead(A0);
    int sensor2 = digitalRead(A1);
    int sensor3 = digitalRead(A2);
    int sensor4 = digitalRead(10);
    int sensor5 = digitalRead(A3);
    int sensor6 = digitalRead(A4);
    int sensor7 = digitalRead(A5);
    int sensor8 = digitalRead(9);

    String message = "";

      message = message+"{\"sensor1\": ";
      message = message+sensor1;
      message = message+",\"sensor2\": ";
      message = message+sensor2;
      message = message+",\"sensor3\": ";
      message = message+sensor3;
      message = message+",\"sensor4\": ";
      message = message+sensor4;
      message = message+",\"sensor5\": ";
      message = message+sensor5;
      message = message+",\"sensor6\": ";
      message = message+sensor6;
      message = message+",\"sensor7\": ";
      message = message+sensor7;
      message = message+",\"sensor8\": ";
      message = message+sensor8;
      message = message+"}";

      Serial.println(message);
      delay(2000);
}

}

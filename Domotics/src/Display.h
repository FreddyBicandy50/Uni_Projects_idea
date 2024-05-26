#include "Header.h"
#define DISPLAY_H

void Draw(byte Shape[], int place, int postion)
{
    lcd.createChar(0, Shape);
    lcd.home();
    lcd.setCursor(place, postion);
    lcd.write(0);
}

void Display(String message, int position)
{
    int i;

    i = 0;
    while (message[i] != '\0')
    {
        lcd.setCursor(i, position);
        lcd.print(message[i]);
        delay(10);
        i++;
    }
    cursor = i;
}
void Display_power()
{
    if (backlight)
    {
        backlight = !backlight;
        lcd.noBacklight();
    }
    else
    {
        backlight = !backlight;
        lcd.backlight();
    }
}

void Receiver_MOD(String MODE)
{
    lcd.clear();
    lcd.setCursor(0, 0);
    Display(MODE, 0);
    if (MODE == MODES[0])
    {
        Draw(Wireless_Shape, cursor, 0);
        Display("Scanning...", 1);
    }
    else if (MODE == MODES[1])
        Draw(Box, 0, 1);
}

void current_brightness()
{
    for (int i = 0; i < brightness[LED_Selector]; i++)
        Draw(Box, i, 1);
}
# Rendszerterv

## A rendszer célja

## Projektterv

## Szerepkörök

Scrum master: ???

Product owner: ???

Back-end fejlesztők:
- Csicsman Dominika
- D.Tóth Bátor
- Árvai Dániel

Front-end fejlesztők:
- Árvai Dániel
- D.Tóth Bátor

### Ütemterv

## Üzleti folyamatok modellje

## Követelmények

| MODUL | ID | NÉV	| V. | LEÍRÁS |
|--|--|--|--|--|
| Jogosultság | K1 | Regisztráció | 1.0 | A felhasználó 3 opció alapján regisztrálhat, (hallgató, dolgozó, külsős). Ezek alapján kell megadni az adatait. **Hallgató:** név, neptun kód, email cím. **Dolgozó:** név, email cím, szervezeti egység. **Külsős:** név, email cím, lakóhely. Mindegyik esetben kell megadni egy jelszót is, mely tárolása kódolva történik az adatbázisban. Hibásan bevitt adatok esetén hibaüzenetet kap a felhasználó (pl.: a követelményeknek nem megfelelő jelszó.)  |
| Jogosultság | K2 | Bejelentkezési felület | 1.0 | A felhasználó e-mail cím és jelszó segítségével bejelentkezhet, mely, ha nem megfelelő, akkor hibaüzentet kap. |
| Jogosultság | K3 | Jogosultsági szintek | 1.0 | **Adminisztrátor:** QR-kód létrehozása eseményekhez. Adatok importálása. **Vendég:** Az esemény adatinak lekérdezése és QR kódok beolvasása illetve létrehozása jegyként. |
| Jogosultság | K4 | Adminisztrációs felület | 1.0 | Az adminisztrátoroknak fenntartott felület, ahonnan ki tudják importálni az adatokat és QR kódokat generálni az eseményekhez. |
| Felület | K5 | Események | 1.0 | Felsorolva kell megjelennie az összes esemény nevének és időpontjának |
| Felület | K6 | Egy esemény részletei | 1.0 | Az esemény pontos adatainak megjelenítése (dátum, időtartam, helyszín stb.) és beolvasás fül megjelenítése. |
| Felület | K7 | Esemény QR kód beolvasásának visszaigazolása | 1.0 | Egy visszaigazoló felület, amely megköszönni a részvételt és jó szórakozást kíván az eseményhez |
| Statisztika | K8 | Résztvevők adatai | 1.0 | Könnyen kinyerhető vendég adatok. Ezeknek importálása Excel táblázat kezelő által használt formátumba (xlsx stb.). |
| Modifikáció | K9 | Vendég adatmódosítás | 1.0 | A vendég az adminisztrátorhoz tud fordulni, bármilyen adatmódosítási kéréssel.  |

## Funkcionális terv

### Admin
- Új rendezvényt írhat ki
- Meglévő rendezvény adatait módosíthatja
- Meglévő rendezvényt törölhet
- Vendég adatait módosíthatja
- Megtekintheti a rendezvényen részt venni szándékozó vendégek számát
- Exportálhatja a rendezvény adatokat (xlsx, csv)

### Vendég
- Regisztrálhat hallgatóként, dolgozóként vagy külsős vendégként
- Megtekintheti az aktuális időszakban meghirdetett rendezvények listáját
- Jelezheti egy eseményen a részvételi szándékát
- QR-kódot beolvasva a helyszínen, jelezheti, hogy megjelent

## Fizikai környezet

## Absztrakt domain modell

## Architekturális terv

## Adatbázis terv

## Implementációs terv

## Tesztterv

## Telepítési terv

## Karbantartási terv

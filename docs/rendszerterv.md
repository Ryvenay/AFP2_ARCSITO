# Rendszerterv

## A rendszer célja

## Projektterv

### Szerepkörök

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
A rendszerben két szerepkört különböztetünk meg: Admin és Vendég.

### Admin
- Új rendezvényt írhat ki
- Meglévő rendezvény adatait módosíthatja
- Meglévő rendezvényt törölhet
- Vendég adatait/jelszavát módosíthatja
- Exportálhatja a rendezvény adatokat (xlsx, csv)

### Vendég
- Regisztrálhat hallgatóként, dolgozóként vagy külsős vendégként
- Megtekintheti az aktuális időszakban meghirdetett rendezvények listáját
- QR-kódot beolvasva a helyszínen, jelezheti, hogy megjelent

## Fizikai környezet
Az alkalmazás Android, iOS és web platformra készül. Használatához internetkapcsolat szükséges.
A mobil alkalmazás QR-kód funkciója csak kamerával működik.

### Fejlesztői eszközök
| Név                | Típus                           |
| ------------------ | ------------------------------- |
| Visual Studio Code | fejlesztőkörnyezet              |
| Docker             | konténerizációs platform        |
| Postman            | REST kliens                     |
| React JS           | webes keretrendszer             |
| React Native       | mobil keretrendszer             |
| Bootstrap          | CSS keretrendszer               |
| PHPMyAdmin         | adatbázis kliens                |
| JetBrains DataGrip | adatbázis kliens                |
| Figma              | web- és mobil design szerkesztő |

## Architekturális terv

### Backend
A rendszerhez szükség van egy adatbázis szerverre, jelen esetben a MySQL-t használjuk.
A kliens oldali programokat egy PHP alapú REST API szolgálja ki, ez csatlakozik az adatbázis szerverhez.
A kliensekkel JSON objektumokkal kommunikál.

#### REST végpontok
| Erőforrás         | Method   | URL                | Eljárás                 |
| ----------------- | -------- | ------------------ | ----------------------- |
| Rendezvény        | `GET`    | `/events`          | Összes lekérdezése      |
| Rendezvény        | `GET`    | `/events/{id}`     | Lekérdezés azonosítóval |
| Rendezvény        | `POST`   | `/events`          | Új létrehozása          |
| Rendezvény        | `PUT`    | `/events/{id}`     | Módosítás               |
| Rendezvény        | `DELETE` | `/events/{id}`     | Törlés                  |
| Sportág           | `GET`    | `/sports`          | Összes lekérdezése      |
| Sportág           | `GET`    | `/sports/{id}`     | Lekérdezés azonosítóval |
| Sportág           | `POST`   | `/sports`          | Új létrehozása          |
| Sportág           | `PUT`    | `/sports/{id}`     | Módosítás               |
| Sportág           | `DELETE` | `/sports/{id}`     | Törlés                  |
| Vendég            | `GET`    | `/guests`          | Összes lekérdezése      |
| Vendég            | `GET`    | `/guests/{id}`     | Lekérdezés azonosítóval |
| Vendég            | `POST`   | `/guests`          | Új létrehozása          |
| Vendég            | `PUT`    | `/guests/{id}`     | Módosítás               |
| Vendég            | `DELETE` | `/guests/{id}`     | Törlés                  |
| Vendég típus      | `GET`    | `/guest_types`     | Összes lekérdezése      |
| Intézményi egység | `GET`    | `/department`      | Összes lekérdezése      |
| Intézményi egység | `GET`    | `/department/{id}` | Lekérdezés azonosítóval |
| Intézményi egység | `POST`   | `/department`      | Új létrehozása          |
| Intézményi egység | `PUT`    | `/department/{id}` | Módosítás               |
| Intézményi egység | `DELETE` | `/department/{id}` | Törlés                  |

### Adminisztrációs oldal
A web alkalmazás React JS keretrendszer használatával készül el.

### Mobil alkalmazás
A mobil applikáció React Native keretrendszer használatával készül el, így egyetlen alkalmazás kiadható Androidra és iOS-re is.

## Adatbázis terv

## Implementációs terv

## Tesztterv

## Telepítési terv

### Back-end

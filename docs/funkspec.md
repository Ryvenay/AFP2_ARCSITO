# Funkcionális specifikáció

## Áttekintés
A következőkben egy olyan rendszer fejlesztésén fogunk dolgozni, mely az Eszterházy Károly Katolikus Egyetem Sporttudományi Intézet munkáját könnyíti meg. Célunk ezzel a projekttel a látogatók papíralapú nyilvántartásának kiváltása.  A vendégeknek egyszeri regisztráció után egy egyszerű (az eseményhez egyedi generálású) QR kódot beolvasva további adminisztrációs feladatuk nem lesz. Több platformon való megjelentetés van tervben, a látogatóknak ingyenesen elérhető mobil alkalmazás, mely az adott platform (Android, IOs) applikációs áruházából lesz hozzáférhető, továbbá az adminisztrátor(ok)nak egy külön felület, mely lehetővé teszi nekik a gyors és átlátható munkát.
## Jelenlegi helyzet
Az EKKE Sporttudomány Intézet szeretné átláthatóbbá és könnyebben kezelhetővé tenni a rendezvényeivel kapcsolatos adminisztratív feladatokat. Kényelmesebbé és gyorsabbá szándékozzák tenni ezt a procedúrát, mind dolgozóik, mind vendégeik számára, ezzel időt és munkaerőt spórolva. Modernebb megoldásra vágynak a jelenlegi papíralapú adminisztrációnál, melyben nem csak a hibalehetőség a nagy (pl.: elkeveredik egy résztvevő papírja), de a papírfelhasználás sincs jó hatással a környezetre.
## Követelménylista
| MODUL | ID | NÉV	| V. | LEÍRÁS |
|--|--|--|--|--|
| Jogosultság | K1 | Regisztráció | 1.0 | A felhasználó 3 opció alapján regisztrálhat, (hallgató, dolgozó, külsős). Ezek alapján kell megadni az adatait. **Hallgató:** név, neptun kód, email cím. **Dolgozó:** név, email cím, szervezeti egység. **Külsős:** név, email cím, lakóhely. Mindegyik esetben kell megadni egy jelszót is, mely tárolása kódolva történik az adatbázisban. Hibásan bevitt adatok esetén hibaüzenetet kap a felhasználó (pl.: a követelményeknek nem megfelelő jelszó.)  |
| Jogosultság | K2 | Bejelentkezési felület | 1.0 | A felhasználó e-mail cím és jelszó segítségével bejelentkezhet, mely, ha nem megfelelő, akkor hibaüzentet kap. |
| Jogosultság | K3 | Jogosultsági szintek | 1.0 | **Adminisztrátor:** QR-kód létrehozása eseményekhez. Adatok exportálása. **Vendég:** Az esemény adatinak lekérdezése és QR kódok beolvasása. |
| Jogosultság | K4 | Adminisztrációs felület | 1.0 | Az adminisztrátoroknak fenntartott felület, ahonnan ki tudják exportálni az adatokat és QR kódokat generálni az eseményekhez. |
| Felület | K5 | Események | 1.0 | Felsorolva kell megjelennie az összes esemény nevének és időpontjának. |
| Felület | K6 | Egy esemény részletei | 1.0 | Az esemény pontos adatainak megjelenítése (dátum, időtartam, helyszín stb.) és beolvasás és "Részt szeretnék venni fül" megjelenítése. |
| Felület | K7 | Esemény QR kód beolvasásának visszaigazolása | 1.0 | Egy visszaigazoló felület, amely megköszönni a részvételt és jó szórakozást kíván az eseményhez. |
| Statisztika | K8 | Résztvevők adatai | 1.0 | Könnyen kinyerhető vendég adatok. Ezeknek exportálása Excel táblázat kezelő által használt formátumba (xlsx stb.). |
| Modifikáció | K9 | Vendég adatmódosítás | 1.0 | A vendég az adminisztrátorhoz tud fordulni, bármilyen adatmódosítási kéréssel.  |
## Jelenlegi üzleti folyamatok modellje
Jelenlegi állás szerint az adminisztráció minden része papír alapú. Helyhez és időhöz kötött. Ez semmiképp sem jó egyik félnek sem. Mivel aki nem ér rá a regisztrációs időszak alatt, lemarad az eseményről. Továbbá sok ügyintézőt is leterhel a feladat. Lassan működik. Sok időt elvesz míg egyesével átlolvassák a lapokat hibakeresés vagy egyéb más céllal. Hosszú távon költségesebb fenntartani ezt a modellt, mivel az állandó papír felhasználás és nyomdai költség mind terheli az ügyfelünket.
## Igényelt üzleti folyamatok modellje
Manapság az adminisztratív feladatok többsége online, interaktív felületeken keresztül történik, melyek átláthatóbbak és egyszerűbbek a hagyományos régimódinál. A mai rohanó világban sok mindenkinek nincs ideje egy adott helyre bemenni, esetlegesen sorban állni, ahhoz, hogy kitöltsön egy formanyomtatványt. Hosszú távon kifizetődőbb megoldás egy webes vagy applikációs megoldásba beruházni, mint az állandó nyomdai és nyomtatási költséget kifizetni.
Azért, hogy megkönnyítsük a dolgozók és a résztvevők feladatát is, egy olyan programot fogunk létrehozni, mely a megállja a helyét a felgyorsult 21. század világában. Az adminisztrátoroknak egyszerűbb dolga lesz, mert pár kattintással új eseményt tudnak létrehozni, illetve a meglevőket nyomon követni és modosítani. Az applikáción keresztüli visszajelzések alapján könnyen meg tudják becsülni a várható létszámot. Az adatokat bármikor exportálhatják, hogy Excelben olvasható legyen. A vendégeknek is sokkal kényelmesebb lesz, mivel bármikor és bárhonnan regisztrálhatnak. Ezek után elérhetik az összes eddigi adminisztrátorok által felvitt eseményeket, melyeket böngészhetnek. Az eseménynek, mely érdekli őket megtekinthetik a pontos részleteit. Visszajelezhetnek részvéleti szándékukról. Az esemény helyszínén pedig az eseményhez generált QR kódot beolvasva jelezhetik, hogy megérkeztek.
## Használati esetek
**ADMINISZTRÁTOR:** Az adminisztrátor(ok)nak külön átlátható felület lesz biztosítva a gördülékeny munka érdekében. Teljes körű hozzáférésük lesz a rendszer minden részéhez. Az események menedzselésén kívül, módosítani tudják szükség esetén a vendégek adatait és jelszavát. Továbbá az adatokat ki tudják exportálni Excelbe. 
**VENDÉG:** A vendég szerepkörnek regisztráció illetve bejelentkezés után hozzáférése lesz az események listájához, amit az adminisztrátorok már felvittek a rendszerbe. Később pedig az esemény helyszínén, az eseményhez generált kód alapján becsekkolni.  

![Use Case diagram](img/usecase.png)

## Képernyő tervek

### Webes adminisztrációs felület

| ![Admin felület drótváza](img/web-wireframe.png) | 
|:--:|
| **Adminisztrációs felület (drótváz)** |

### Mobil alkalmazás

| ![Mobil alkalmazás kezdő képernyője](img/mobil_fooldal.png) | ![Regisztráció hallgatóknak](img/mobil_reg_hallgato.png) |
|:--:|:--:|
| **Mobil alkalmazás kezdő képernyője** | **Regisztráció hallgatóknak**  |

| ![Regisztráció dolgozóknak](img/mobil_reg_dolgozo.png) | ![Regisztráció külsősöknek](img/mobil_reg_kulsos.png) |
|:--:|:--:|
| **Regisztráció dolgozóknak** | **Regisztráció külsősöknek**  |

| ![Rendezvény lista](img/mobil_events_list.png) | &nbsp; |
|:--:|:--:|
| **Rendezvény lista** | &nbsp; |


## Forgatókönyv
A események sorrendje ideális esetben a következőképpen zajlik: Az adminisztrátor(ok) felviszi(k) az eseményeket, melyhez a vendégek hozzáférnek listázva. Majd egy konkrét eseményt kiválasztva a pontos részleteket elolvasva vagy visszalépnek az essemények felsorolásához vagy az elkövetkezendő esemény helyszínén, a vendég beolvasva az eseményhez generált QR kódok, jelzi, hogy megérkezett, az applikáció pedig jó szórakozást kíván neki.

## Fogalomszótár

- **QR kód**: Egy 2-dimenziós vonalkód, melyet a legtöbb mobiltelefon kamerájával is beolvashatunk.

- **applikáció**: Megadott célra tervezett számítógépes program.

- **applikációs áruház**: Platformhoz kötött webáruház, melyen szoftvereket lehet letölteni és vásárolni.

- **Android**: Nyílt forráskódú okostelefonos operációs rendszer.

- **iOS**: Az Apple cég okostelefonjainak operációs rendszere.

- **Web**: Egymással úgynevezett hiperhivatkozásokkal összekötött dokumentumok rendszere.

- **Hiperhivatkozás**: Más néven link, ugrópont, kapocs, a hiperszöveges és a hipermediális rendszerek elemeit, objektumait összekötő eszköz.


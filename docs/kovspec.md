# Követelmény specifikáció
## Áttekintés
Az alkalmazás célja az EKKE sporteseményein való részvételhez szükséges papír alapú regisztráció kiváltása mind hallgatóink, kollégáink és egyéb vendégeink számára. Az alkalmazást a látogatók számára iOS és Android platformra ingyenesen letölthető mobilalkalmazásként tervezzük elérhetővé tenni. Ezzel szemben munkatársainknak egy webes adminisztrációs felületet szeretnénk biztosítani a gördülékeny munka érdekében. A webes felületen és az applikációkban értelemszerűen eltérő funkciók lesznek elérhetőek. Míg az applikációkban a felhasználók egyszeri regisztráció után a sportesemények listáját és egy ilyen esemény pontos részleteit tudják majd megtekinteni. Jelezni tudják részvételi szándékuk az appon belül, majd az alkalom eljövetelével egy QR kódot leolvasva be tudnak csekkolni. Munkatársainknak, az adminisztrátoroknak merőben más opciók lesznek elérhetők a webes felületen. Ők tudják hozzáadni, módosítani alkalomadtán törölni az eseményeket. Elsődleges szempont, hogy az adatokat (események listája, résztvevők adatai stb.) könnyen tudják exportálni XLSX kiterjesztésű fájlba, amelyet Excel táblázatkezelő programmal minden további teendő nélkül meg lehet nyitni. Továbbá az egyik legfontosabb funkció is itt lesz elérhető, mégpedig a QR kód generálás. Szeretnénk, ha adminisztrátoraink minden egyes eseményhez egy egyedi QR kódot tudnának generálni, ami a vendégek becsekkolásához szükséges.

## Jelenlegi helyzet
Az Eszterházy Károly Katolikus Egyetem Sporttudomány Intézetén jelenleg teljesen papír alapon intézzük az eseményeink regisztrációt. Több probléma is van vele. Hely és időigényes, nem túl költséghatékony és a környezetre is káros.  Helyigénye nagy, mivel tárolni kell ezeket a papírokat bizonyos ideig. Időigényes, mivel a formanyomtatványok kitöltése kézzel jelentős időt vesz igénybe, arról nem is beszélve, hogy munkatársunknak/munkatársainknak állandó jelleggel elérhetőnek kell lenni bizonyos időintervallumokban. Nem költséghatékony, hiszen a papír és nyomdai kiadásaink állandóak. A környezetre káros, tudniillik ezek a lapok iratmegsemmisítésen esnek át adott idő múlva.

## Vágyálom rendszer
A projekt célja egy mindenképpen olyan rendszer lenne, ami mind a két fél életét megkönnyíti. Szeretnénk, ha az eseményre való regisztráció nem lenne egy szűk időintervallumhoz és helyszínhez kötve. Az applikáción belül egyszeri regisztráció, majd a későbbiekben bejelentkezés útján a kedves látogató érje el az összes aktuális rendezvény listáját. Ha netán valamelyik felkeltette az érdeklődését tudja megnézni ezeknek a pontos adatait (ilyen a helyen és az idő is például).  Szükség lesz "QR kód beolvasás" opcióra is. Itt szeretnénk törekedni a lehető legjobb user experience-re. Legyen joguk létrehozni, módosítani és törölni eseményeket és felhasználói adatokat. QR kódot generálhasson az adott eseményhez, ami legyen egyedi.

## Funkcionális követelmények
Két jogosultsági kört várunk el a projektben. Egy általános felhasználót, akik a leendő vendégeink és adminisztrátorokat, akik menedzselni tudják az eseményeket és hozzáférnek a felhasználók adataihoz. A vendég képes legyen megtekinteni az események összeségét, egy konkrét rendezvény pontos adatait. Tudja leolvasni az esemény helyszínén az ahhoz tartozó QR kódot a telefonja kamerájának segítségével. Az adminisztrátor hozhasson létre új eseményt, törölhesse vagy éppen módosíthassa a már meglévőeket. Generálhasson QR kódokat és tudja kimenteni az adatokat.

![Use Case diagram](img/usecase.png)

## Rendszerre vonatkozó törvények, szabványok, ajánlások

A rendszer felhasználói adatokat tárol, amit az Európai Unió területén a GDPR (General Data Protection Regulation) nevű rendelet szabályozza. E rendelt alapján az érintett felhasználók jogai a következők:
- Átlátható tájékoztatáshoz való jog
- Hozzáféréshez való jog
- Helyesbítéshez való jog
- Törléshez és elfeledtetéshez való jog
- Korlátozáshoz való jog
- Adathordozhatósághoz való jog
- Tiltakozáshoz való jog
- Automatikus döntéshozatal elutasításához való jog
Egy weboldalnak:
- Könnyen érthetőnek és használhatónak kell lennie.
- Logikus felépítsűnek kell lennie a felhasználók számára.
- Használja az ipar legjobban bevált folyamatait.
- Stílusok használata, ami átláthatóvá teszi az egyes oldalak részleteit, ezen belül:
- Hibaüzenetek megjelenítése jól látható helyen és stílusban
- Olyan panelek létrehozása, ami az alapvető felhasználók számára nem látható, kizárólag a weboldal üzemeltetői férnek hozzá.
Kompatibilis böngészők:
- Google Chrome
- Mozilla Firefox
- Internet Explorer
Adatkezelési nyilatkozat:
Az Adatkezelési ‌Nyilatkozat kialakítása során figyelembe vettük a vonatkozó hatályos jogszabályokat, illetve a fontosabb nemzetközi ajánlásokat. Ezekre megfelel az alábbi jogszabályoknak:
Információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény;
Az elektronikus ‌hírközlésről szóló 2003. évi C. törvény;
Az elektronikus kereskedelemről szóló 2001. évi CVIII. törvény előírásainak;
Az "Online Privacy Alliance" ajánlásainak.
## Jelenlegi üzleti folyamatok modellje
Sajnos jelenleg egy elavult és nem túl fenntartható rendszert üzemeltetünk. A papíralapú regisztráció tűnhet a legegyszerűbb megoldásnak egy külső szemlélő számára, azonban ez nem így van. A környezetre káros, sok hibalehetőséget magában hordozó szisztéma ez. A papír és a nyomdai költség permanens. Állandó kiadás, mely, ha utána számolunk, hosszú távon sokkal költségesebb, mint egy új innovatív megoldásba befektetni. Ám ez csak az egyik árnyoldala. A másik, mint már említettem a hibalehetőségeben rejlik. Mivel emberek töltetik ki a regisztrációs lapokat a résztvevőkkel így nem kizárható az a rizikó faktor, hogy valami olyan hiba csúszik a rendszerbe, ami egy elektronikus megoldással kiküszöbölhető lehetne. Példának okáért tegyük fel, hogy a kedves vendég kézírása nem olyan jól olvasható. Vagy esetleg elkeverik a papír stb. Az előbbiekben szó volt a pénzről, az esetleges tévedésekről, de egy harmadik tényező is ugyanolyan fontos. Ez nem más, mint az idő. Egy ilyen regisztráció, ha papíralapú rendkívül időigényes tud lenni és számunkra nem mindegy, hogy dolgozóinkat milyen mértékben és mennyi időre terheljük le. Arról nem is beszélve, hogy ha a vendégeknek véletlen nem jó a regisztrációk időpontja, akár az eseményről is lemaradhatnak.

## Igényelt üzleti folyamatok modellje
Az előzőekben leírt folymatokat szeretnénk teljesen lecserélni és egy modernebb megoldást biztosítani dolgozóink és leendő vendégeink számára is. Olyan rendszerben gondolkodunk, amiben teljesen online lehet intézni az adminisztratív feladatokat. Két különböző jogosultsági szintet szeretnénk. Egy adminisztrátort és egy felhasználót, melynek 3 típusa lehessen. Ezek pedig a következők: hallgató, dolgozó vagy pedig külsős vendég.
Az adminisztrátorok tudjanak eseményt létrehozni, menedzselni és törölni illetve QR kódot generálni és az adatokat exportálni. A kedves vendég meg tudja tekinteni az események listáját és tudjon QR kódot beolvasni.
## Követelménylista 
| MODUL | ID | NÉV  | V. | LEÍRÁS |
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

## Fogalomtár
- **QR kód**: Egy 2-dimenziós vonalkód, melyet a legtöbb mobiltelefon kamerájával is beolvashatunk.
- **applikáció**: Megadott célra tervezett számítógépes program.
- **applikációs áruház**: Platformhoz kötött webáruház, melyen szoftvereket lehet letölteni és vásárolni.
- **Android**: Nyílt forráskódú okostelefonos operációs rendszer.
- **iOS**: Az Apple cég okostelefonjainak operációs rendszere.
- **fájl kiterjesztés**: ezek hordozzák azt az információt a számítógép számára, hogy mely alkalmazás hozta létre vagy képes megnyitni a fájlt, és mely ikont szükséges használni hozzá.
# Bibliotekskatalog

En React SPA (Single Page Application) som visar bibliotekskatalogen från det interna bibliotekssystemet.

## Hur man kör

Kräver att [Node.js](https://nodejs.org) är installerat.

Installera beroenden och starta applikationen via terminalen:
```bash
npm install
npm run dev
```

Applikationen körs på `http://localhost` och anropar CatalogService API på:
```
https://library-catalog-service.azurewebsites.net/api/Items
```

Applikationen kan köras lokalt utan några ytterligare konfigurationer då den anropar det publika API:t direkt.

## AI-användning

AI har använts som stöd under utvecklingen för att få förslag på komponentstruktur, CSS-styling och logik för filtrering och sökning. All kod har granskats, anpassats och förståtts innan den inkluderats i projektet.

## Annat

Applikationen är byggd med Vite som byggverktyg. Vite valdes eftersom det är det moderna standardsättet att skapa React-projekt och ersätter det äldre `create-react-app`. Detta ger en snabbare utvecklingsserver och enklare konfiguration.

Applikationen består av följande komponenter:
* `ItemCard` - visar ett enskilt biblioteksobjekt som ett kort
* `FilterButtons` - hanterar filtrering efter objekttyp
* `useItems` - en custom hook som ansvarar för datahämtning från API:t
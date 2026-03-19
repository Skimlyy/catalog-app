Bibliotekskatalog

Detta är en React SPA (Single Page Application) som visar bibliotekskatalogen från det interna bibliotekssystemet.

Vad gör applikationen?
Applikationen hämtar och visar objekt från CatalogService API. Användaren kan:
* Se alla tillgängliga objekt i biblioteket.
* Filtrera objekt efter typ (Bok eller Utrustning)
* Söka efter objekt via titel
* Se tillgänglighetsstatus för varje objekt

Hur körs applikationen?
Applikationen kräver att Node.js är installerat

och man startar den via terminalen med 
npm install
npm run dev

Applikationen körs via localhost och anropar CatalogService API från:
https://library-catalog-service.azurewebsites.net/api/Items

AI-användning

AI har använts som stöd under utvecklingen för att få förslag på komponentstruktur, CSS-styling och logik för filtrering och sökning.
All kod har granskats, anpassats och förståtts innan den inkluderats i projektet.

Verktyg utöver kursmaterial
Vite används som byggverktyg för att sätta upp React-projektet. Vite valdes eftersom det är det moderna standardsättet att skapa React-projekt och ersätter det äldre create-react-app.
Detta ger snabbare utvecklingsserver och enklare konfiguration.
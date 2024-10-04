# Sorty

**Sorty** er en webapplikation, der sorterer din indkøbsliste baseret på varernes placering i butikken. Ved hjælp af AI (via en ChatGPT prompt og API-kald) hjælper Sorty dig med at organisere din indkøbstur, så du sparer tid og undgår at skulle løbe frem og tilbage i butikken. **Sorty** er i øjeblikket en prototype i sin tidlige udviklingsfase.

Dette projekt blev skabt som en del af en **Informatik C** opgave på **HTX-uddannelsen**.

## Funktioner

- Indtast din usorterede indkøbsliste.
- Få en AI-sorteret liste baseret på produktkategorier og butikkens opbygning.
- Understøtter i øjeblikket nogle foruddefinerede butiksopstillinger.

## Sådan kører du det

1. Klon eller download dette repository.
2. Åbn `index.html`-filen i en webbrowser.
3. Indtast din indkøbsliste i tekstfeltet (adskil varerne med kommaer).
4. Klik på knappen "SORTER" for at få din sorterede liste.

## Opsætning af API-nøgle

For at bruge AI-sorteringsfunktionen skal du bruge en API-nøgle til OpenAI-tjenesten. Udskift den midlertidige API-nøgle i `apiAI` funktionen med din egen:

```javascript
const apiKey = "din-openai-api-nøgle";
```

Du kan få din API-nøgle fra [OpenAI](https://platform.openai.com/).

## Kontakt

Hvis du støder på problemer eller har forslag til forbedringer, er du velkommen til at oprette en issue eller kontakte mig.

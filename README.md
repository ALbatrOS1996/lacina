# Łacina dla historyka

Aplikacja do nauki łaciny w celu czytania źródeł historycznych: gramatyka recepcyjna, słownictwo z powtórkami, czytanka z glosami, łacina w inskrypcjach, obrazach i rękopisach, dyplomatyka, chronologia (daty według świąt), skróty paleograficzne, nazwy miejscowe, pułapki tłumacza.

- **Na telefonie:** otwórz stronę aplikacji i wybierz „Dodaj do ekranu głównego” (Android: menu Chrome; iPhone: Safari → Udostępnij). Działa offline.
- **Na komputerze:** plik `Lacina_dla_historyka.html` otwierany w przeglądarce.

## Budowanie

Źródła są w `src/`. Polecenie `python build.py` tworzy:
- `Lacina_dla_historyka.html` – jeden plik,
- `docs/` – wersję PWA publikowaną przez GitHub Pages (Settings → Pages → branch `main`, folder `/docs`).

Teksty oznaczone jako „model” są dydaktyczne; fragmenty źródeł przed cytowaniem należy sprawdzić w edycjach krytycznych. Zdjęcia: Wikimedia Commons (autorzy i licencje podane w aplikacji).

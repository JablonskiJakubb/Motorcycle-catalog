# Zadanie praktykowe: Projekt „Katalog motorów”

## Cel zadania
Celem zadania jest stworzenie aplikacji webowej **Katalog motorów**, która umożliwia przeglądanie, dodawanie, edytowanie i usuwanie informacji o motorach/motocyklach.

Projekt ma być podzielony na dwie główne części:
- **Frontend** — aplikacja w Vue 3
- **Backend API** — aplikacja w NestJS

Całość powinna być uruchamiana lokalnie za pomocą **Docker Compose**.

## Opis aplikacji
Aplikacja „Katalog motorów” powinna pozwalać użytkownikowi na zarządzanie listą motorów. Każdy motor powinien posiadać podstawowe informacje, takie jak:
- nazwa,
- marka,
- model,
- rok produkcji,
- pojemność silnika,
- moc,
- typ motocykla (np. sportowy, turystyczny, naked, enduro),
- opis,
- zdjęcie lub adres URL do zdjęcia.

## Wymagania funkcjonalne

### Frontend
Frontend powinien zostać napisany w **Vue 3**. Aplikacja powinna zawierać:
- Widok listy motorów.
- Widok szczegółów pojedynczego motoru.
- Formularz dodawania nowego motoru.
- Formularz edycji istniejącego motoru.
- Możliwość usunięcia motoru.
- Podstawową walidację formularzy.
- Komunikację z backendem przez REST API.
- Prosty i czytelny interfejs użytkownika.
- Można użyć dowolnej biblioteki UI, np. Bootstrap, Tailwind CSS, Vuetify lub własnych stylów CSS.

### Backend API
Backend powinien zostać napisany w **NestJS**. API powinno udostępniać endpointy REST do obsługi katalogu motorów:
- `GET /motors`
- `GET /motors/:id`
- `POST /motors`
- `PUT /motors/:id`
- `DELETE /motors/:id`

Backend powinien zawierać:
- Moduł obsługujący motory.
- Kontroler REST.
- Serwis z logiką aplikacji.
- DTO do tworzenia i aktualizacji motorów.
- Walidację danych wejściowych.
- Połączenie z bazą danych.
- Obsługę podstawowych błędów, np. brak rekordu o podanym ID.

### Baza danych
Projekt powinien korzystać z bazy danych uruchamianej w Dockerze.
- **Preferowana baza:** PostgreSQL

Tabela motorów powinna przechowywać co najmniej:
- `id`
- `name`
- `brand`
- `model`
- `year`
- `engineCapacity`
- `power`
- `type`
- `description`
- `imageUrl`
- `createdAt`
- `updatedAt`

## Wymagana struktura projektu
Projekt powinien mieć następującą strukturę katalogów:

```text
motor-catalog/
├── docker/
│   ├── database/
│   │   └── Dockerfile.yml
│   ├── api/
│   │   └── Dockerfile.yml
│   └── frontend/
│       └── Dockerfile.yml
├── src/
│   ├── api/          # źródła aplikacji NestJS
│   └── frontend/     # źródła aplikacji Vue 3
├── rules/            # rulesy dla AI
├── docker-compose.yml
└── README.md
```

## Docker
Projekt powinien posiadać katalog `docker`, w którym znajdują się osobne pliki konfiguracyjne dla:
- bazy danych,
- backendu API,
- frontendu.

W głównym katalogu projektu powinien znajdować się plik `docker-compose.yml`, który opisuje całą aplikację i umożliwia uruchomienie:
- bazy danych,
- API,
- frontendu.

Po uruchomieniu komendy:
```bash
docker compose up
```
aplikacja powinna być dostępna lokalnie. Przykładowo:
- **Frontend:** http://localhost:3000
- **API:** http://localhost:3001
- **Database:** localhost:5432

## Katalog rules
W projekcie powinien znajdować się katalog `rules/`. Należy w nim umieścić pliki z zasadami dla AI, które opisują standardy pracy nad projektem.

Przykładowe pliki:
- `rules/frontend-rules.md`
- `rules/backend-rules.md`
- `rules/docker-rules.md`
- `rules/general-rules.md`

Rulesy powinny zawierać między innymi:
- zasady nazewnictwa,
- sposób pisania komponentów,
- sposób tworzenia endpointów,
- zasady walidacji danych,
- zasady formatowania kodu,
- konwencje pracy z Dockerem,
- opis struktury projektu.

## README.md
Projekt powinien zawierać plik `README.md`, w którym należy opisać:
- Cel projektu.
- Użyte technologie.
- Strukturę katalogów.
- Instrukcję uruchomienia projektu.
- Opis dostępnych endpointów API.
- Przykładowe dane motoru.
- Krótki opis działania aplikacji.

## Technologie
- **Frontend:** Vue 3
- **Backend:** NestJS
- **Database:** PostgreSQL
- **Docker:** Docker Compose
- **API:** REST

**Dodatkowo można użyć:**
- TypeScript
- Prisma lub TypeORM
- Axios
- Pinia
- Vue Router
- Tailwind CSS

## Kryteria zaliczenia
Projekt zostanie uznany za wykonany, jeśli:
1. Aplikacja uruchamia się przez `docker compose up`.
2. Frontend działa i komunikuje się z API.
3. API obsługuje podstawowe operacje CRUD.
4. Dane są zapisywane w bazie danych.
5. Projekt ma wymaganą strukturę katalogów.
6. Kod jest czytelny i uporządkowany.
7. Projekt zawiera plik `README.md`.
8. Projekt zawiera katalog `rules` z zasadami dla AI.
9. Formularze posiadają podstawową walidację.
10. Aplikacja obsługuje podstawowe błędy.

## Dodatkowe wymagania opcjonalne
Jeżeli zostanie czas, można dodać:
- wyszukiwarkę motorów,
- filtrowanie po marce lub typie,
- sortowanie po roku produkcji,
- paginację,
- testy jednostkowe,
- Swagger dla API,
- seed przykładowych danych,
- tryb ciemny w frontendzie.

## Rezultat końcowy
Na koniec praktykant powinien dostarczyć repozytorium projektu zawierające kompletną aplikację „Katalog motorów”, możliwą do uruchomienia lokalnie za pomocą Dockera.

Projekt powinien być przygotowany tak, aby nowa osoba mogła pobrać repozytorium i uruchomić:
```bash
docker compose up
```
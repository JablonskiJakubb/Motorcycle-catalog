# Motor Catalog

Nowoczesna aplikacja webowa do zarządzania katalogiem motocykli, zbudowana w architekturze klient-serwer z wykorzystaniem konteneryzacji.

---

## 1. Cel Projektu
Głównym celem projektu jest dostarczenie intuicyjnego narzędzia dla entuzjastów jednośladów, które pozwala na:
- Gromadzenie szczegółowych informacji o motocyklach w jednym miejscu.
- Zarządzanie danymi technicznymi (moc, pojemność, rok produkcji).
- Szybkie wyszukiwanie i filtrowanie bazy danych maszyn.
- Prezentację wizualną motocykli poprzez linki do zdjęć.

---

## 2. Użyte Technologie
Projekt opiera się na nowoczesnym stosie technologicznym:
- **Backend**: NestJS (TypeScript) – skalowalny framework Node.js.
- **Frontend**: Vue 3 (Composition API, TypeScript) + Vite – szybki i reaktywny interfejs użytkownika.
- **Baza Danych**: PostgreSQL – relacyjna baza danych o wysokiej wydajności.
- **Zarządzanie Stanem**: Pinia – oficjalny magazyn stanów dla Vue.
- **Konteneryzacja**: Docker & Docker Compose – spójne środowisko deweloperskie i produkcyjne.
- **Komunikacja**: Axios & REST API.
- **Walidacja**: class-validator & class-transformer.

---

## 3. Struktura Katalogów
```text
.
├── docker/                 # Konfiguracja środowisk Docker
│   ├── API/                # Dockerfile dla backendu
│   ├── database/           # Dockerfile dla bazy danych
│   └── frontend/           # Dockerfile dla frontendu
├── docs/                   # Dokumentacja projektowa i TODO
├── rules/                  # Zasady projektowe (Naming, Components, Docker)
├── src/                    # Kod źródłowy aplikacji
│   ├── API/                # Aplikacja backendowa (NestJS)
│   └── frontend/           # Aplikacja frontendowa (Vue 3)
├── docker-compose.yml      # Orkiestracja wszystkich usług
├── .env.example            # Szablon zmiennych środowiskowych
└── README.md               # Główna dokumentacja projektu
```

---

## 4. Instrukcja Uruchomienia Projektu

### Wymagania
- Zainstalowany **Docker** oraz **Docker Compose**.

### Kroki instalacji
1. Skopiuj plik `.env.example` do `.env` i uzupełnij dane (opcjonalnie):
   ```bash
   cp .env.example .env
   ```
2. Uruchom kontenery w trybie budowania:
   ```bash
   docker compose up --build
   ```

### Dostęp do usług
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:3001](http://localhost:3001)
- **Baza danych**: `localhost:5432`

---

## 5. Opis Endpointów API (REST)

| Metoda | Endpoint | Opis |
| :--- | :--- | :--- |
| **GET** | `/motors` | Pobiera listę wszystkich motocykli |
| **GET** | `/motors/:id` | Pobiera szczegóły konkretnego motocykla |
| **POST** | `/motors` | Dodaje nowy motocykl do bazy |
| **PUT** | `/motors/:id` | Aktualizuje dane motocykla |
| **DELETE** | `/motors/:id` | Usuwa motocykl z bazy |

---

## 6. Przykładowe Dane Motoru
Obiekt przesyłany do API podczas tworzenia/edycji:
```json
{
  "name": "CBR 500R",
  "brand": "Honda",
  "model": "CBR500R",
  "year": 2024,
  "engineCapacity": 471,
  "power": 48,
  "type": "Sport",
  "description": "Sportowy motocykl idealny dla posiadaczy prawa jazdy kategorii A2.",
  "imageUrl": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc"
}
```

---

## 7. Krótki Opis Działania Aplikacji

Aplikacja składa się z trzech współpracujących ze sobą warstw:
1. **Warstwa Klienta (Frontend)**: Reaktywny interfejs pozwala na przeglądanie listy motocykli w formie kart. Użytkownik może korzystać z wyszukiwarki, otwierać szczegóły maszyn oraz zarządzać nimi poprzez dedykowane formularze (dodawanie/edycja).
2. **Warstwa Serwera (Backend)**: Serwer NestJS udostępnia bezpieczne API, waliduje dane wejściowe za pomocą DTO i komunikuje się z bazą danych przez ORM.
3. **Warstwa Danych (Database)**: PostgreSQL przechowuje trwale wszystkie informacje o motocyklach, zapewniając integralność danych.

Całość jest w pełni zdockeryzowana, co eliminuje problemy z konfiguracją środowiska ("u mnie działa").

---

## Zasady Projektowe
Szczegółowe wytyczne dotyczące rozwoju projektu znajdują się w katalogu [rules/](./rules/README.md).

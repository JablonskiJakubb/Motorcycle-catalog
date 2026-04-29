# Główne Zasady Projektu (Project Guidelines)

Ten katalog zawiera standardy i konwencje stosowane w projekcie **Motor Catalog**. Przestrzeganie tych zasad zapewnia spójność kodu i ułatwia współpracę.

## Spis treści
1. [Struktura Projektu](#struktura-projektu)
2. [Konwencje Nazewnictwa](#konwencje-nazewnictwa)
3. [Formatowanie Kodu](#formatowanie-kodu)
4. [Zasady Szczegółowe: Backend](./backend.md)
5. [Zasady Szczegółowe: Frontend](./frontend.md)
6. [Konwencje Docker](./docker.md)

---

## 1. Struktura Projektu

Projekt podzielony jest na trzy główne obszary:

- `src/API` - Backend (NestJS)
- `src/frontend` - Frontend (Vue 3 + Vite)
- `docker/` - Pliki konfiguracyjne kontenerów
- `docs/` - Dokumentacja projektowa
- `rules/` - Zasady i wytyczne (ten katalog)

### Szczegółowa struktura `src`:
```text
src/
├── API/              # Aplikacja NestJS
│   ├── src/          # Kod źródłowy backendu
│   └── test/         # Testy E2E
└── frontend/         # Aplikacja Vue 3
    ├── src/          # Kod źródłowy frontendu
    │   ├── components/ # Reużywalne komponenty
    │   ├── views/      # Widoki (strony)
    │   └── stores/     # Zarządzanie stanem (Pinia)
    └── public/       # Statyczne zasoby
```

---

## 2. Konwencje Nazewnictwa

### Pliki i Katalogi
- **Ogólne**: `kebab-case.ts` (np. `user-service.ts`)
- **Komponenty Vue**: `PascalCase.vue` (np. `MotorCard.vue`)
- **Widoki Vue**: `PascalCaseView.vue` (np. `MotorListView.vue`)
- **Katalogi**: `kebab-case`

### Kod (TypeScript/JavaScript)
- **Zmienne i funkcje**: `camelCase` (np. `getMotorById`)
- **Klasy, Interfejsy, Typy**: `PascalCase` (np. `MotorEntity`, `IMotor`)
- **Stałe**: `UPPER_SNAKE_CASE` (np. `MAX_IMAGE_SIZE`)
- **Pola prywatne**: `_camelCase` (opcjonalnie)

---

## 3. Formatowanie Kodu

Standardy wymuszane są przez **Prettier** i **ESLint**.

- **Wcięcia**: 2 spacje
- **Średniki**: Wymagane (Semicolons: true)
- **Cudzysłowy**: Pojedyncze (`'`) dla stringów w JS/TS, podwójne (`"`) w HTML/Templates.
- **Długość linii**: Max 100-120 znaków.
- **Trailing comma**: Wszędzie gdzie to możliwe (es5 standard).

---

## 4. Walidacja Danych

- **Backend**: Każdy endpoint przyjmujący dane musi używać **DTO (Data Transfer Object)** z dekoratorami z `class-validator`.
- **Frontend**: Walidacja formularzy przed wysłaniem (UI feedback) + obsługa błędów z API.
- **Typowanie**: Używamy TypeScripta do definiowania wspólnych interfejsów tam, gdzie to możliwe.

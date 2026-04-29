# Konwencje Docker

Zasady pracy z kontenerami i środowiskiem deweloperskim.

## 1. Struktura Plików

- Wszystkie `Dockerfile` znajdują się w katalogu `docker/` w odpowiednich podfolderach:
  - `docker/API/Dockerfile`
  - `docker/frontend/Dockerfile`
  - `docker/database/Dockerfile`
- Główny plik `docker-compose.yml` znajduje się w korzeniu projektu.

## 2. Środowisko Lokalne (Development)

- Używamy **Volumes** do mapowania kodu źródłowego z hosta do kontenera, co umożliwia Hot Module Replacement (HMR) i automatyczny restart serwera backendowego.
- Zależności (`node_modules`) są zarządzane wewnątrz kontenerów (używamy anonimowych wolumenów, aby uniknąć konfliktów z hostem).

## 3. Zmienne Środowiskowe

- Nigdy nie zapisujemy haseł ani kluczy API w plikach `Dockerfile` lub `docker-compose.yml`.
- Używamy pliku `.env` (który jest w `.gitignore`).
- Plik `.env.example` powinien zawierać listę wszystkich wymaganych zmiennych z przykładowymi (bezpiecznymi) wartościami.

## 4. Obrazy Bazowe

- Używamy oficjalnych obrazów (np. `node:20-alpine`, `postgres:16-alpine`).
- Wersja `-alpine` jest preferowana ze względu na mniejszy rozmiar.

## 5. Komendy Uruchamiania

- **Start**: `docker-compose up -d`
- **Zatrzymanie**: `docker-compose down`
- **Przebudowanie**: `docker-compose up --build`
- **Logi**: `docker-compose logs -f [service_name]`

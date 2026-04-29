# Zasady Frontendowe (Vue 3)

Wytyczne dotyczące tworzenia komponentów, zarządzania stanem i stylizacji.

## 1. Komponenty

- **Script Setup**: Zawsze używamy `<script setup lang="ts">`.
- **Nazewnictwo**: PascalCase (np. `MotorDetails.vue`).
- **Struktura pliku**:
  1. `<script>`
  2. `<template>`
  3. `<style>` (scoped)

### Przykład struktury:
```vue
<script setup lang="ts">
interface Props {
  id: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['update']);
</script>

<template>
  <div class="component">...</div>
</template>

<style scoped>
.component { ... }
</style>
```

## 2. Zarządzanie Stanem

- **Pinia**: Używamy Pinii do globalnego stanu aplikacji.
- **Local State**: Używamy `ref()` i `reactive()` dla stanu lokalnego komponentu.
- **Props/Emits**: Preferujemy przekazywanie danych w dół (props) i zdarzeń w górę (emits).

## 3. Komunikacja z API

- Wszystkie wywołania do API powinny znajdować się w dedykowanym folderze `src/api/` lub w akcjach Pinii.
- Używamy `axios` lub `fetch`.
- Typujemy odpowiedzi z API używając interfejsów TypeScript.

## 4. Stylizacja

- **Scoped CSS**: Stylizacja powinna być zamknięta wewnątrz komponentu.
- **Zmienne globalne**: Wspólne kolory, fonty i odstępy definiujemy w `src/style.css` jako zmienne CSS (`--primary-color`).
- **BEM**: Zalecane używanie konwencji BEM lub prostych, czytelnych klas.

## 5. Widoki (Views) vs Komponenty

- `views/`: Komponenty reprezentujące całe strony, podpięte pod router.
- `components/`: Małe, reużywalne fragmenty interfejsu.
- Widoki pobierają dane (z Pinii lub API) i przekazują je do komponentów.

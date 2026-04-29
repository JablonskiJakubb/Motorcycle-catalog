# Zasady Backendowe (NestJS)

Zasady dotyczące tworzenia API, zarządzania danymi i logiki biznesowej.

## 1. Tworzenie Endpointów

- **Standard REST**: Używamy standardowych metod HTTP (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`).
- **Kontrolery**: Kontrolery powinny być "chude". Ich zadaniem jest jedynie obsługa requestu, wywołanie odpowiedniej usługi i zwrócenie odpowiedzi.
- **Wersjonowanie**: (Jeśli wymagane) `/api/v1/...`
- **Statusy HTTP**:
  - `200 OK` - sukces (GET, PUT, PATCH)
  - `201 Created` - sukces (POST)
  - `204 No Content` - sukces (DELETE)
  - `400 Bad Request` - błąd walidacji
  - `404 Not Found` - zasób nie istnieje

## 2. Logika Biznesowa (Services)

- Cała logika biznesowa musi znajdować się w klasach oznaczonych dekoratorem `@Injectable()` (Serwisy).
- Serwisy nie powinny operować bezpośrednio na obiektach Request/Response.

## 3. Walidacja i DTO

- **DTO**: Każdy endpoint przyjmujący dane wejściowe (`@Body`, `@Query`) musi mieć zdefiniowaną klasę DTO.
- **Walidacja**: Używamy dekoratorów `class-validator` (np. `@IsString()`, `@IsInt()`, `@Min(0)`).
- **Transformacja**: Używamy `ValidationPipe` z opcją `transform: true`, aby automatycznie konwertować typy (np. string na number w parametrach URL).

Przykład DTO:
```typescript
export class CreateMotorDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsInt()
  @Min(1900)
  year: number;
}
```

## 4. Dostęp do Bazy Danych

- Używamy **TypeORM** lub **Prisma** (zależnie od aktualnej konfiguracji projektu).
- Korzystamy z wzorca **Repository**.
- Migracje są wymagane dla każdej zmiany w schemacie bazy danych.

## 5. Obsługa Błędów

- Używamy wbudowanych w NestJS `HttpException` (np. `NotFoundException`, `BadRequestException`).
- Nie zwracamy surowych błędów bazy danych do klienta.

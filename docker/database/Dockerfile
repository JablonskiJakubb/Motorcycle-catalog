FROM postgres:15-alpine

# Environment variables for default database setup
ENV POSTGRES_DB=motor_catalog
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=password

# Optional: Copy initialization scripts if needed
# COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

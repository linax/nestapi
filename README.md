# Geo-Accessibility Core Service (API) 🌍♿️

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

> **Modern backend for the Ciudad Fácil app platform.**
> This service manages the geolocation of accessible places, enabling users with disabilities to find safe routes and navigate their city with confidence.

---

## 🏗️ Architectural Decision: From Monolith to Microservice

This project represents a **complete technical modernization**, migrating a legacy monolithic architecture (Laravel/PHP) to a scalable system based on **Node.js and NestJS**.

**Migration Goals:**
* **Performance:** Reduced latency for geospatial queries.
* **Type Safety:** Adoption of TypeScript to minimize runtime errors.
* **Maintainability:** Modular architecture (Clean Architecture principles) to facilitate rapid feature development.

## 🛠️ Tech Stack & Patterns

* **Framework:** NestJS (Express adapter).
* **Database:** PostgreSQL with TypeORM.
* **Auth:** JWT Strategy & Guards.
* **API Pattern:** RESTful with validated DTOs (class-validator).
* **Deployment:** Serverless function on Vercel.

## 📂 Module Structure

The system is decoupled into functional domains:

```text
src/
├── auth/          # Authentication & JWT Strategies
├── places/        # Geospatial logic & POI management
├── users/         # Profile & Role management
└── common/        # Global Decorators, Exception Filters & Pipes

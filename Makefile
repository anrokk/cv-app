PORT ?= 8080

.PHONY: backend frontend

backend:
	cd backend && ./mvnw spring-boot:run -Dspring-boot.run.arguments=--server.port=$(PORT)

frontend:
	cd frontend && npm run dev

.PHONY: help up down logs migrate seed clean build dev prod

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Start development environment
	docker-compose up -d

down: ## Stop development environment
	docker-compose down

logs: ## Show logs from all services
	docker-compose logs -f

logs-api: ## Show API logs
	docker-compose logs -f api

logs-client: ## Show client logs
	docker-compose logs -f client

migrate: ## Run database migrations
	docker-compose exec api npm run prisma:migrate:deploy

migrate-dev: ## Create new migration
	docker-compose exec api npm run prisma:migrate:dev

seed: ## Seed database
	docker-compose exec api npm run prisma:seed

clean: ## Clean all containers and volumes
	docker-compose down -v
	docker system prune -f

build: ## Build all services
	docker-compose build

dev: ## Start development with hot reload
	docker-compose up

prod: ## Start production environment
	docker-compose -f docker-compose.prod.yml up -d

prod-build: ## Build production images
	docker-compose -f docker-compose.prod.yml build

prod-logs: ## Show production logs
	docker-compose -f docker-compose.prod.yml logs -f

restart: ## Restart all services
	docker-compose restart

ps: ## Show running containers
	docker-compose ps


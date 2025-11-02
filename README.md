# PIES · AntelopeJS Monorepo (skeleton)

Monorepo pnpm pour le back-end PIES basé sur une architecture modulaire proche d'AntelopeJS.
Ce squelette contient :
- `packages/` : interfaces partagées, utilitaires communs.
- `services/` : microservices (api-gateway, deposit, tsa, chain, cert, verify, identity, audit, admin).
- `infra/` : docker-compose de dev (PostgreSQL, MinIO), scripts.

> Objectif : démarrer rapidement un MVP (hash → TSA mock → ancrage mock → certificat PDF stub → vérification).

## Démarrage rapide

1) Installer pnpm : `npm i -g pnpm`
2) Installer : `pnpm install`
3) Démarrer l'infra dev : `docker compose -f infra/docker-compose.yml up -d`
4) Lancer tous les services en dev : `pnpm -r --filter ./services/* dev`

## Structure
Voir `pnpm-workspace.yaml` et `packages/interfaces`.

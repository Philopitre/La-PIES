Par défaut, les services choisissent un port libre. Pour un mapping fixe en dev, lancez chaque service avec:
- api-gateway: PORT=4000
- deposit: PORT=4001
- tsa: PORT=4002
- chain: PORT=4003
- cert: PORT=4004
- verify: PORT=4010
- identity: PORT=4011
- audit: PORT=4012
- admin: PORT=4013

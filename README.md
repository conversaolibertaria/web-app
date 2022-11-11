## Instruções
Pré requisitos:
* Docker
* Docker compose

Primeiro, crie uma rede docker com o seguinte comando:

```bash
docker network create conversao-libertaria
```

Na pasta raíz do projeto, suba os containers com o seguinte comando:
```bash
docker compose up
# ou
docker-compose up
```

Acesse o dashboard do Firebase local em http://localhost:4000/

O app pode ser acessado em http://localhost:3000/wep-app



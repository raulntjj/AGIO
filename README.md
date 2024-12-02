
# Ambiente Node.js com Docker

Este projeto fornece uma configuração Dockerizada para executar uma aplicação Node.js usando Docker Compose. Abaixo estão as instruções e os comandos disponíveis para gerenciar o ambiente.

## Pré-requisitos

Certifique-se de que os seguintes itens estão instalados no seu sistema:

- Docker
- Docker Compose
- Makefile

## Como começar

### Configurar ambiente de infraestrutura
Copiando sua chave ID_RSA para o ambiente
cp ~/.ssh/id_rsa ~Desktop/AGIO/infrastructure

Certifique-se de que a chave pública desta chave id_rsa esteja configurada em seu github.

### Construir e iniciar o ambiente

Para construir e iniciar o ambiente, execute:

```bash
make build
```

### Iniciar os serviços

Para iniciar os contêineres já criados sem reconstruí-los:

```bash
make start
```

### Parar os serviços

Para parar os contêineres em execução:

```bash
make stop
```

### Reiniciar os serviços

Para reiniciar os contêineres:

```bash
make restart
```

### Visualizar logs

Para visualizar os logs de todos os serviços:

```bash
make logs
```

### Acessar o shell no contêiner Node.js

Para acessar o shell do contêiner `app`:

```bash
make shell
```

### Limpar recursos do Docker

Para remover todos os objetos Docker não utilizados (contêineres, imagens, volumes e redes):

```bash
make clean
```

### Derrubar o ambiente

Para parar e remover todos os contêineres e suas redes:

```bash
make down
```

### Construir e iniciar do zero

Para construir e iniciar os contêineres do zero, removendo todos os volumes e órfãos:

```bash
make reset
```

### Configurar permissões

Para configurar permissões completas para todos os arquivos e diretórios no projeto:

```bash
make permission
```

## Problemas Comuns

### Conflito de nomes de contêineres

Se os nomes dos contêineres `app` ou `postgresql` já estiverem em uso, você pode encontrar conflitos. Pare e remova os contêineres em conflito usando:

```bash
docker stop app postgresql
docker rm app postgresql
```

### Reconstrução após alterações

Se você modificar o Dockerfile ou o `docker-compose.yml`, será necessário reconstruir os contêineres:

```bash
make up
```

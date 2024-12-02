
# API Documentation

Este projeto é uma API construída com Fastify que implementa seis endpoints diferentes para atender aos requisitos descritos no teste técnico. Cada endpoint é detalhado a seguir:

---

## Endpoints

### **1. GET `/static`**
**Descrição:**  
Retorna dados estáticos mockados. Os dados são simulados em uma variável estática dentro do código e podem representar qualquer estrutura JSON.

---

### **2. GET `/users`**
**Descrição:**  
Retorna dados de uma tabela em um banco de dados PostgreSQL. O banco pode ser configurado usando Docker ou a plataforma neon.tech. O uso do ORM Prisma foi recomendado.

---

### **3. GET `/integration`**
**Descrição:**  
Realiza uma consulta HTTP a uma API pública (por exemplo, [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) e retorna os dados da resposta em formato JSON.

---

### **4. POST `/200`**
**Descrição:**  
Retorna um status HTTP `200 OK` com uma mensagem de sucesso.

---

### **5. POST `/301`**
**Descrição:**  
Retorna um status HTTP `301 Moved Permanently` e redireciona para o site do Google.

**Exemplo de resposta:**  
Redireciona para: `https://google.com`

---

### **6. POST `/404`**
**Descrição:**  
Retorna um status HTTP `404 Not Found` com uma mensagem de erro.

---
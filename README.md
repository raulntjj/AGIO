
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
Retorna dados de uma tabela em um banco de dados PostgreSQL.

---

### **3. GET `/integration`**
**Descrição:**  
Realiza uma consulta HTTP a uma API pública JSONPlaceholder.

---

### **4. POST `/200`**
**Descrição:**  
Retorna um status HTTP `200 OK` com uma mensagem de sucesso.

---

### **5. POST `/301`**
**Descrição:**  
Retorna um status HTTP `301 Moved Permanently` e redireciona para o site do Google.

---

### **6. POST `/404`**
**Descrição:**  
Retorna um status HTTP `404 Not Found` com uma mensagem de erro.

---

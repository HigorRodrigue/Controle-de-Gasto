# 💸 Sistema de Controle de Gastos

Este é um sistema de controle de gastos pessoais, que permite aos usuários registrar, visualizar e gerenciar seus gastos de forma segura. O sistema utiliza a **API do Firebase** para autenticação de usuários e um **banco de dados SQL** para armazenar os dados financeiros.

## 🚀 Funcionalidades

- Cadastro e login de usuários com Firebase Authentication
- Registro de despesas com descrição, valor, data e categoria
- Visualização de gastos por período e por categoria
- Edição e exclusão de despesas
- Dashboard com resumo financeiro
- Armazenamento seguro em banco de dados relacional (MySQL/PostgreSQL)

---

## 🛠️ Tecnologias Utilizadas

- **Backend:**
  - Node.js / Express.js (ou outro framework)
  - Firebase Admin SDK (para autenticação)
  - Sequelize ou Knex (ORM/Query Builder)
  - Banco de dados SQL (MySQL, PostgreSQL, etc.)

- **Frontend:**
  - React.js / Vue.js (opcional, se houver interface)
  - Firebase Client SDK

---

## 🔐 Autenticação com Firebase

O sistema utiliza o **Firebase Authentication** para o controle de login e cadastro de usuários. O token JWT gerado pelo Firebase é verificado no backend usando o Firebase Admin SDK para proteger as rotas de API.

```ts
// Exemplo de middleware de autenticação
const admin = require('firebase-admin');

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

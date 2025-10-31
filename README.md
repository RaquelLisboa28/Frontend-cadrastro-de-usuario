📌 Descrição

Aplicação frontend em React + Vite para cadastrar, listar e deletar usuários.
Consumindo uma API REST em http://localhost:3000 (via axios — src/services/api.js). Projeto simples e didático, ótimo para conectar com um backend local e estudar integração cliente/servidor.

🗂 Estrutura principal do projeto
public/                 # (opcional) assets estáticos
src/
├─ assets/              # imagens (ex: delete.svg)
├─ pages/
│  └─ Home/
│     ├─ index.jsx
│     └─ style.css
├─ services/
│  └─ api.js            # axios instance (baseURL: http://localhost:3000)
├─ main.jsx
├─ index.css
index.html
package.json
vite.config.js (opcional)

🚀 Requisitos
Node.js (recomendo v16+ / v18+)
NPM ou Yarn
Backend em http://localhost:3000 (a API deve expor as rotas usadas: GET /user, POST /user, DELETE /user/:id)

Observação: o arquivo src/services/api.js já aponta para http://localhost:3000. Se seu backend estiver em outra porta/host, altere baseURL ou use variável de ambiente (ex.: import.meta.env.VITE_API_URL).

⚙️ Instalação (Vite)

Instale dependências:
npm install
# ou
yarn


Rodar em modo de desenvolvimento:
npm run dev
# ou
yarn dev

Isso abre a aplicação Vite (geralmente em http://localhost:5173). Abra no navegador.

Build de produção:
npm run build
# ou
yarn build

🔗 Integração com a API

O arquivo src/services/api.js contém:
import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:3000" });
export default api;

Certifique-se de que o backend esteja em execução e permita CORS (o seu backend já usa cors).

Se quiser definir a URL via variável de ambiente com Vite:
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000" });

e criar .env:
VITE_API_URL=http://localhost:3000

🧭 Como a interface funciona (resumo)
Tela de cadastro com 3 campos (nome, idade, e-mail) e botão Cadastrar.
Os inputs são refs (não controlados): ao clicar em Cadastrar a função createUsers faz POST /user com os valores.
Ao montar o componente (useEffect), carrega usuários com GET /user e renderiza cards.
Cada card possui botão de excluir que chama DELETE /user/:id.



Servir a pasta dist com um servidor estático (ex.: serve -s dist) ou fazer deploy.     

Back-end de um chat em tempo real para múltiplos usuários utilizando React e Socket.IO.

O front-end pode ser encontrado [aqui](https://github.com/lucasveigaf/chatclient).

## Inicialização:

```
git clone https://github.com/lucasveigaf/chatserver.git
npm install
node index.js

git clone https://github.com/lucasveigaf/chatclient.git
npm install
npm start
```

## To do:

- Implementar conceito de salas.
- Persistência de dados.
- Auth (JWT é a melhor opção com Socket.IO?)
- Mudar a lógica de duração do chat para representar a conversa e não a sessão do usuário.
- Internacionalização das mensagens do sistema (como quando um usuário se conecta ou desconecta).
- Analisar se as mensagens do sistema devem continuar no back ou se devem ser aplicadas no front.
- Testes.
- ...

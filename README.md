# :checkered_flag: SongBox

Um site focado na compartilhamento de opiniões sobre músicas, permitindo que usuários criem resenhas para músicas, criem suas próprias playlists, e interajam entre si por meio de comentários e avaliações.
## :technologist: Membros da equipe

508578 - Victor Martins Vieira - Engenharia de software

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- **Usuário logado**: Pode criar suas listas, criar resenhas de músicas, personalizar seu perfil, visualizar e comentar listas de outros usuários.
- **Usuário não logado**: Pode visualizar listas e resenhas de outros usuários sem interajir.

## :spiral_calendar: Entidades ou tabelas do sistema

- Perfil
  - descrição
  - nome de usuário
  - foto de perfil
  - foto banner
- Listas
  - descrição
  - título
  - tags
  - autor
  - músicas
  - likes
  - comentários
- Resenha
  - música
  - título
  - tags
  - texto resenha
  - nota
  - likes
  - comentários
  

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Criar playlists de músicas vinculadas ao seu perfil, estas listas poderão ter títulos e descrições definidos pelo criador - O usuário precisará estar logado para criar uma lista, editar ou deletar, mas poderá visualizar sem estar logado;
- Avaliar uma música: Um usuário poderá fazer uma resenha para uma música individual - O usuário precisará estar logado para criar, editar ou deletar uma resenha, mas poderá visualizar sem estar logado
- Usuários logados poderão comentar ou "dar like" em playlists e resenhas de outros usuários
- Usuários logados poderão editar seu perfil, adicionando um banner, foto de perfil, um nome de usuário personalizado e uma breve descrição sobre seus gostos musicais.
- Visualizar estatíticas internas sobre músicas, como média das notas, quantidade de avaliações, dentre outros - Todos os usuários poderão acessar essa funcionalidade
- Acessar informações sobre músicas: o sistema será capaz de se comunicar com a API pública do Spotify de modo a permitir que usuários logados possam acessar uma vasta lista de músicas para construir suas resenhas e playlists.

----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Entidade 1 | X |  X  |  | X |
| Entidade 2 | X |    |  X | X |
| Entidade 3 | X |    |  |  |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/entidade1/|
| POST | api/entidade2 |

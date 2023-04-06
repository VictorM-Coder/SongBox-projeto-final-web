# :checkered_flag: SongBox

Um site focado na compartilhamento de opiniões sobre músicas, permitindo que usuários criem resenhas para músicas, criem suas próprias playlists, e interajam entre si por meio de comentários e avaliações.
## :technologist: Membros da equipe

508578 - Victor Martins Vieira - Engenharia de software

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- **Usuário comun**: Pode criar suas listas, criar resenhas de músicas, personalizar seu perfil, visualizar e comentar listas de outros usuários.
- **Admin**: Pode adicionar, atualizar e remover músicas do catálogo do site.
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

- Criar playlists de músicas vinculadas ao seu perfil, estas listas poderão ter títulos e descrições definidos pelo criador - O usuário comum poderá adicionar, editar e deletar playlists de seu perfil quando estiver logado, do contrário poderá somente visualizar conteúdos.
- Avaliar uma música: Um usuário comum poderá fazer uma resenha para uma música individual - O usuário precisará estar logado para criar, editar ou deletar uma resenha, mas poderá visualizar sem estar logado.
- Usuários comuns quando estiverem logados poderão comentar ou "dar like" em playlists e resenhas de outros usuários
- Usuários comuns quando estiverem logados poderão editar seu perfil, adicionando um banner, foto de perfil, um nome de usuário personalizado e uma breve descrição sobre seus gostos musicais.
- Visualizar estatíticas internas sobre músicas, como média das notas, quantidade de avaliações, dentre outros - Todos os usuários poderão acessar essa funcionalidade
- Admins poderão adicionar, remover e atualizar o catálogo de músicas do site.
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

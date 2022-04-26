### Exercício 1

**a)** A chave estrangeira(foreign key) é uma forma de relacionar duas ou mais tabelas entre si através do id.

**b)**
```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"001",
"Ótimo filme!",
7,
"002"
);
```

**c)**
```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"002",
"Filme legalzinho!",
7,
"001"
);
```

Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha. 

**d)**
```sql
ALTER TABLE Movies DROP	COLUMN rating;
```

**e)**
```sql
DELETE FROM Movies
WHERE id = "002";
```

Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.<br><br>


### Exercício 2

**a)**
- Cria a tabela de nome MovieCast (Elenco do Filme);
- Atribui um valor de no máximo 255 caracteres ao id do filme;
- Atribui um valor de no máximo 255 caracteres ao id do ator;
- O campo movie_id (é uma chave estrangeira) da tabela MovieCast, e pode ser linkado ao campo id da tabela Movies;
- O campo actor_id (é uma chave estrangeira) da tabela MovieCast, e pode ser linkado ao campo id da tabela Actor;

**b)**
```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUES 
("005", "001"),
("005", "002"), 
("003", "003"), 
("002", "005"), 
("004", "003"), 
("004", "004");
```

**c)**
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha. 

**d)**
Erro 1451. Não é possível deletar ou atualizar uma linha pai: uma restrição de chave estrangeira falha.<br><br>


### Exercício 3

**a)**
- Fez a junção das informações das tabelas Movies e Rating através dos campos;

**b)**
```sql
SELECT name, Movies.id, Rating.rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```
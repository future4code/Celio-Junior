### Exercício 1

a) O comando DROP COLUMN neste exercício irá excluir a coluna salary.

b) O comando CHANGE neste exercício irá alterar o nome do campo "gender" para "sex". O seu tipo não será alterado, pois ele já é um VARCHAR, porém agora poderá receber o valor NULO.

c) O comando CHANGE neste exercício irá alterar novamente o nome do campo "gender" para "gender", porém agora ele irá aumentar a quantidade de caracteres no seu tipo VARCHAR para 255, antes 6. Também poderá receber o valor como NULO!

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100); | O campo agora poderá receber o valor como NULO!

### Exercício 2

a) 
```sql
UPDATE Actor
SET name = "Paolla Oliveira", 
	birth_date="1982-04-14"
WHERE id = "003";
```

b)
```sql
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c) 
```sql
UPDATE Actor
SET name = "Lima Duarte",
	salary = "900000",
    birth_date = "1930-03-29",
    gender = "male"
WHERE id = "005";
```

d) Não retornará nenhum erro, também não irá alterar nenhum dado na tabela, pois esse id não existe.
```sql
UPDATE Actor
SET name = "Lima Duarte",
	salary = "900000",
    birth_date = "1930-03-29",
    gender = "male"
WHERE id = "100";
```

### Exercício 3

a)
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
b)
```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1200000;
```

### Exercício 4

a)
```sql
SELECT MAX(salary) FROM Actor;
```

b) 
```sql
SELECT MIN(salary) FROM Actor WHERE gender="female";
```

c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) A consulta retorna a quantidade e o campo especificado.
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

b) 
```sql
SELECT id, name FROM Actor ORDER BY name DESC;
```

c) 
```sql
SELECT salary, name FROM Actor ORDER BY salary ASC;
```

d) 
```sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;   
```

e)
```sql
SELECT COUNT(*), gender, AVG(salary) FROM Actor GROUP BY gender;
```  

### Exercício 6

a)
```sql
ALTER TABLE Movies
ADD playing_limit_date DATE
```

b)
```sql
ALTER TABLE Movies
MODIFY rating FLOAT;
```

c)
```sql
UPDATE Movies
SET playing_limit_date = "2022-04-30"
WHERE id = "004";

UPDATE Movies
SET playing_limit_date = "2022-03-01"
WHERE id = "003"
```

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 | Não retornará nenhum erro, também não irá alterar nenhum dado na tabela, pois esse id não existe.
```sql
UPDATE Movies
SET synopsis = "Bananinha no Hawai"
WHERE id = "001";
```
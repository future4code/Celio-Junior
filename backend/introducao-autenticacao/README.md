### Exercício 1
#
**a)Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?**

```json
Usar strings em ids e misturar números com letras faz com que a chance do id se repetir seja bem pequena.
```

**b)A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.**


```sql
import { v4 } from 'uuid';

export const generateId = (): string => {
    return v4()
}
```

### Exercício 2
#
**a) O que a linha "as string" faz? Por que precisamos usar ela ali?**

```json
Essa string representa a chave que será usada como base para gerar o token. Usamos para proteger as informações, para não terem acessos a essa informação.
```
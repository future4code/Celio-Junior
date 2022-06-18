### Exercício 1
#
*A) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?*
``` json 
round é o parâmetro que define o tempo para execução do algoritmo.

Salt são strings aleatórias que geram hashs diferentes independente se são senhas iguais.

O valor recomendado para maioria das libs é 12.

12.


```

*B)*

![image](https://user-images.githubusercontent.com/89326652/174418608-dcde69e3-d50d-4024-ae67-c679f0d5e381.png)

*C)*

![image](https://user-images.githubusercontent.com/89326652/174418641-428e0f26-aa1d-4a29-b75c-8487588cf38f.png)


### Exercício 2
#
*A) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

``` json 
    Devemos modificar o cadastro primeiro, pois quando o usuário cadastrar sua senha, ela ja vem com o bcryptjs criado e a senha segura, se inverter a ordem, o usuário teria que atualizar a senha depois e esta ficaria sem seguranda.
```

*B)*

![image](https://user-images.githubusercontent.com/89326652/174418504-52bef4b4-57ec-47ba-9d60-76a937dcb6ec.png)

*C)*

![image](https://user-images.githubusercontent.com/89326652/174418575-d7eb825d-7af5-4848-8813-21d4f7db393c.png)


*D) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

``` json 
    Não, pois ele só pega as informações.
```


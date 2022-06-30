### Exercício 1
#
*a) Altere a sua tabela de usuários para ela possuir uma coluna role. Considere que pode assumir os valores normal  e admin. Coloque normal como valor padrão.*

```sql
ALTER TABLE Auth_users ADD COLUMN role VARCHAR(255) DEFAULT "normal"
```

*b) Altere o type AuthenticationData e a função getData() para representarem esse novo tipo no token.*

```typescript
    export type AuthenticationData = {
    id: string,
    role: string
    }

    const expiresIn = "2min";
  
    const generateToken = (input: AuthenticationData): string => {
    
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
    }

    const getData = (token: string): AuthenticationData => {
    
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    
    return result;
    } 
```

*c) Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*

```typescript
    public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      let { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      if (role !== "NORMAL" && role !== "ADMIN") {
        role = "NORMAL";
      }

      const id = generateId();
      const hashPassword = await generateHash(password);

      const user: user = {
        id,
        email,
        password: hashPassword,
        name,
        nickname,
        role,
      };

      await userDatabase.insertUser(user);
      const token = generateToken({ id, role });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
```

*d) Altere o login para criar o token com o role do usuário*

```typescript
    public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      let { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const user = await userDatabase.findUserByEmail(email);

      const hashComparison = await compareHash(password, user.password);

      if (!hashComparison) {
        throw new InvalidPassword();
      }

      const payload: AuthenticationData = { id: user.id, role: user.role };

      const token = generateToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
```


### Exercício 2
#
*a) Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint*

```typescript
public editUser = async (input: EditUserInputDTO): Promise<void> => {
    try {
      let { name, nickname, id, token } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const { role } = getTokenData(token);

      if (role !== "ADMIN") {
        throw new UnauthorizedUser();
      }

      const editedUser = {
        name,
        nickname,
        id,
      };

      await userDatabase.editUser(editedUser)
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
```
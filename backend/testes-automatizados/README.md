
# Testes automatizados com Typescript

## Exercício 1

*a)* 
``` typescript
export interface User {
    name: string,
    balance: number
}
```

*b)*
``` typescript
export function performPurchase(user: User, value: number): User | undefined {
	
    if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}

	return undefined
}
```

## Exercício 2

*a) Faça um teste com um usuário com o saldo maior do que o valor de compra*

```typescript
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrogildo",
		balance: 200
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrogildo",
		balance: 70
	})
});
```

*b) Faça um teste com um usuário com o saldo igual ao valor de compra*

```typescript
test("Testing balance to equal than value", () => {
	const user: User = {
		name: "Astrogildo",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
});
```

*c) Faça um teste com um usuário com o saldo menor do que o valor de compra*

```typescript
test("Testing balance less than value", () => {
	const user: User = {
		name: "Astrogildo",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
});
```
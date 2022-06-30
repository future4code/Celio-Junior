import { performPurchase } from "../src/function/performPurchase"
import { User } from "../src/model/User"

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrogildo",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrogildo",
		balance: 60
	})
});

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

test("Testing balance less than value", () => {
	const user: User = {
		name: "Astrogildo",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
});
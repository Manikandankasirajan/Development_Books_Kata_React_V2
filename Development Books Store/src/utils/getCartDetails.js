import createBookTitleAndCountMapObject from "./createBookTitleAndCountMapObject";
import createBookSets from "./createBookSets";
import checkOut from "./checkOut";

export default function getCartDetails(cart) {
	const bookTitleAndCountMap = createBookTitleAndCountMapObject(cart);
	const bookTitleAndCount = Object.entries(bookTitleAndCountMap);
	let bookSets = createBookSets(bookTitleAndCountMap);
	if (isOptimizationPosible(bookSets)) {
		bookSets = createOptimizedBookSets(bookSets);
	}
	let priceAfterDiscount = checkOut(bookSets);
	return [bookTitleAndCount, priceAfterDiscount];
}

function isOptimizationPosible(bookSets) {
	return bookSets.find((bookSet) => bookSet.length === 3) &&
		bookSets.find((bookSet) => bookSet.length === 5)
		? true
		: false;
}

function createOptimizedBookSets(bookSets) {
	let optimizedBookSets = bookSets;
	const bookSetOf3And5CountMap = {};
	for (const bookSet of optimizedBookSets) {
		if (bookSet.length === 3 || bookSet.length === 5) {
			bookSetOf3And5CountMap[bookSet.length] =
				(bookSetOf3And5CountMap[bookSet.length] || 0) + 1;
		}
	}
	console.log(bookSetOf3And5CountMap);

	const posibleOptimizationCount = Math.min(
		...Object.values(bookSetOf3And5CountMap)
	);
	console.log(posibleOptimizationCount);
	for (let index = 0; index < posibleOptimizationCount; index++) {
		const setOf5 = optimizedBookSets.find((bookSet) => bookSet.length === 5);
		const setOf3 = optimizedBookSets.find((bookSet) => bookSet.length === 3);
		setOf3.push(setOf5.pop());
	}
	console.log(optimizedBookSets);
	return optimizedBookSets;
}

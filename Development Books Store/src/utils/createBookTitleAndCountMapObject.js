export default function createBookTitleAndCountMapObject(cart) {
	const bookTitleAndCountMap = {};
	for (const book of cart) {
		bookTitleAndCountMap[book] = (bookTitleAndCountMap[book] || 0) + 1;
	}
	return bookTitleAndCountMap;
}

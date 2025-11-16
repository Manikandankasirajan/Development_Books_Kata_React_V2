export default function createBookSets(bookTitleAndCountMap) {
	const bookSets = [];
	while (Object.values(bookTitleAndCountMap).some((count) => count > 0)) {
		const currentSet = [];
		for (const [title, count] of Object.entries(bookTitleAndCountMap)) {
			if (count > 0) {
				currentSet.push(title);
				bookTitleAndCountMap[title]--;
			}
		}

		bookSets.push(currentSet);
	}

	return bookSets;
}

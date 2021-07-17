import { textToBinary } from './testFunctions'

describe('textToBinary', () => {
	test('Should return an object', async () => {
		expect(await textToBinary()).toBe('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001')
	})
})

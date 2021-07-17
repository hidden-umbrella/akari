import { binaryToText } from './testFunctions'

describe('textToBinary', () => {
	test('Should return an object', async () => {
		expect(await binaryToText()).toBe('Hello World!')
	})
})

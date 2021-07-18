import { API } from '../src/index'

async function binaryToText() {
	const api = new API()

	const str = '01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001'

	return await api.binaryToText(str)
}

describe('textToBinary', () => {
	test('Should return "Hello World!"', async () => {
		expect(await binaryToText()).toBe('Hello World!')
	})
})

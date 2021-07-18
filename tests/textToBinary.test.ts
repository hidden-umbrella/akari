import { API } from '../src/index'

async function textToBinary() {
	const api = new API()

	const str = 'Hello World!'

	return await api.textToBinary(str)
}

describe('textToBinary', () => {
	test('Should return a string', async () => {
		expect(await textToBinary()).toBe('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001')
	})
})

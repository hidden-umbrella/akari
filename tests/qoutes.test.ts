import { API } from '../src/index'

async function qoute() {
	const api = new API()

	return await api.qoutes()
}

describe('textToBinary', () => {
	test('Should return an object', async () => {
		expect(typeof await qoute()).toBe('object')
	})
})

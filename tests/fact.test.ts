import { API } from '../src/index'

async function qoute() {
	const api = new API()

	return await api.fact()
}

describe('textToBinary', () => {
	test('Should return an string', async () => {
		expect(typeof await qoute()).toBe('string')
	})
})

import { API } from '../src/index'

async function Animal() {
	const api = new API()

	return await api.animals('dog')
}

describe('Animals', () => {
	test('Should return an object', async () => {
		expect(typeof await Animal()).toBe('object')
	})
})

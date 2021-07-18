import { API } from '../src/index'

async function Action() {
	const api = new API()

	return await api.actions('hug')
}

describe('Animals', () => {
	test('Should return an object', async () => {
		expect(typeof await Action()).toBe('string')
	})
})

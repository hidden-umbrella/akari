import { Animal } from './testFunctions'

describe('Animals', () => {
	test('Should return an object', async () => {
		expect(typeof await Animal()).toBe('object')
	})
})

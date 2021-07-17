import { Exec } from './animal'

describe('Testing index function', () => {
	test('CERTAINLY should pass', async () => {
		expect(typeof await Exec()).toBe('object')
	})
})

import { Exec } from './animal'

describe('Animals', () => {
	test('CERTAINLY should pass', async () => {
		expect(typeof await Exec()).toBe('object')
	})
})

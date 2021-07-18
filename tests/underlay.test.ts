import { API } from '../src/index'

async function qoute() {
	const api = new API()

	let avatar = 'https://cdn.discordapp.com/avatars/389252140184633363/29dea926e406d3a8a754f0ce8ad4c4e0.png?size=2048'

	return await api.underlays('crap', avatar)
}

describe('textToBinary', () => {
	test('Should return an object', async () => {
		expect(typeof await qoute()).toBe('object')
	})
})

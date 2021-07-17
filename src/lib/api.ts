import * as c from '@aero/centra'
import constants from './constants'

export default class API {
	/**
	 * @param {string} animal Animal endpoint
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public async animals (animal: string): Promise<object> {
		if (!constants.Routes.animals.includes(animal)) throw new Error('Invalid endpoint')
		const { fact, image }: { fact: string, image: string } = await c(constants.URLs.baseURL)
			.path(`animals/${animal}`)
			.json()

		return { fact, image }
	}
}

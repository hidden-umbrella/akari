import * as c from '@aero/centra'
import constants from './Constants'
import { Animals, Actions } from './Types'

// I wanted to learn JavaScript classes :P | Also kinda based off of the no-api-key npm package too

export default class API {
	/**
	 * @param {Animals} animal Endpoint name
	 * @async
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public async animals (animal: Animals): Promise<object> {
		if (!constants.Routes.animals.includes(animal)) throw new Error('Invalid endpoint')

		const { fact, image }: { fact: string, image: string } = await c(constants.URLs.baseURL)
			.path(`animals/${animal}`)
			.json()

		return { fact, image }
	}

	/**
	 * @param {string} text Text to convert into binary
	 * @async
	 */
	public async textToBinary (text: string): Promise<string> {
		if (text.length === 0) throw new Error('No text was given')

		const { binary }: { binary: string } = await c(constants.URLs.baseURL)
			.path('binary')
			.query({ text: text })
			.json()

		return binary
	}

	/**
	 * @param {string} binary Text to convert into binary
	 * @async
	 */
	public async binaryToText (binary: string): Promise<string> {
		if (binary.length === 0) throw new Error('No text was given')

		const { text }: { text: string } = await c(constants.URLs.baseURL)
			.path('binary-text')
			.query({ binary: binary })
			.json()

		return text
	}

	/**
	 * @param {Actions} action Endpoint name
	 * @async
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public async actions (action: Actions): Promise<object> {
		if (!constants.Routes.actions.includes(action)) throw new Error('Invalid endpoint')

		const { image }: { image: string } = await c(constants.URLs.baseURL)
			.path(action)
			.json()

		return { image }
	}
}

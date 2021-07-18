import * as c from '@aero/centra'
import constants from './Constants'
import { Animals, Actions, Underlays } from './Types'

// I wanted to learn JavaScript classes :P | Also kinda based off of the no-api-key npm package too

export default class API {
	/**
	 * @param {Animals} animal Endpoint name
	 * @async
	 * @returns {Promise<Record<string, unknown>>}
	 */
	public async animals (animal: Animals): Promise<Record<string, unknown>> {
		if (!constants.Routes.animals.includes(animal)) throw new Error('Invalid endpoint')

		const { fact, image }: { fact: string, image: string } = await c(constants.URLs.V1)
			.path(`animals/${animal}`)
			.json()

		return { fact, image }
	}

	/**
	 * @param {Underlays} underlay Endpoint name
	 * @async
	 * @returns {Promise<object>}
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public async underlays (underlay: Underlays, image: string): Promise<object> {
		if (!constants.Routes.underlays.includes(underlay)) throw new Error('Invalid endpoint')
		if (image.trim().length === 0) throw new Error('No Image URL was given')

		const buffer: Buffer = await c(constants.URLs.V2)
			.path(underlay)
			.query({ image: image })
			.raw()

		return buffer
	}

	/**
	 * @param {string} text Text to convert into binary
	 * @async
	 * @returns {Promise<string>}
	 */
	public async textToBinary (text: string): Promise<string> {
		if (text.length === 0) throw new Error('No text was given')

		const { binary }: { binary: string } = await c(constants.URLs.V1)
			.path('binary')
			.query({ text: text })
			.json()

		return binary
	}

	/**
	 * @param {string} binary Text to convert into binary
	 * @async
	 * @returns {Promise<string>}
	 */
	public async binaryToText (binary: string): Promise<string> {
		if (binary.length === 0) throw new Error('No text was given')

		const { text }: { text: string } = await c(constants.URLs.V1)
			.path('binary-text')
			.query({ binary: binary })
			.json()

		return text
	}

	/**
	 * @param {Actions} action Endpoint name
	 * @async
	 * @returns {Promise<string>}
	 */
	public async actions (action: Actions): Promise<string> {
		if (!constants.Routes.actions.includes(action)) throw new Error('Invalid endpoint')

		const { image }: { image: string } = await c(constants.URLs.V1)
			.path(action)
			.json()

		return image
	}

	/**
	 * @param {string} text Text to flip
	 * @async
	 * @returns {Promise<string>}
	 */
	public async flip (text: string): Promise<string> {
		if (text.trim().length === 0) throw new Error('No text was given')

		const { message }: { message: string } = await c(constants.URLs.V1)
			.path('flip-text')
			.json()

		return message
	}

	/**
	 * @async
	 * @returns {Promise<string>}
	 */
	public async fact (): Promise<string> {
		const { fact }: { fact: string } = await c(constants.URLs.V1)
			.path('facts')
			.json()

		return fact
	}

	/**
	 * @async
	 * @returns {Promise<Record<string, unknown>>}
	 */
	public async qoutes (): Promise<Record<string, unknown>> {
		const { qoute, author }: { qoute: string, author: string } = await c(constants.URLs.V1)
			.path('qoutes')
			.json()

		return { qoute, author }
	}
}

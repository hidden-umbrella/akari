import { API } from '../src/index'

export async function Animal() {
	const api = new API()

	return await api.animals('dog')
}

export async function textToBinary() {
	const api = new API()

	const str = 'Hello World!'

	return await api.textToBinary(str)
}

export async function binaryToText() {
	const api = new API()

	const str = '01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001'

	return await api.binaryToText(str)
}
import { API } from '../src/index'

export async function Exec() {
	const api = new API()

	return await api.animals('dog')
}
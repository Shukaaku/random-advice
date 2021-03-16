import request from 'node-superfetch';

/**
 * The base url.
 * @type {string}
 */
export const baseURL = 'https://api.adviceslip.com/advice';

/**
 * The main class.
 */
export class Advice {
	/**
	 * Get a random advice!
	 * @returns {Promise<string>} The advice.
	 */
	public static async getAdvice(): Promise<string> {
		const ad = new Advice();
		const advice = await ad._handleRequest('string');
		return advice;
	}

	/**
	 * Get the raw data!
	 * @returns {Promise<Record<string, unknown>>} The raw data.
	 */
	public static async getRaw(): Promise<Record<string, unknown>> {
		const ad = new Advice();
		const raw = await ad._handleRequest('raw');
		return raw;
	}

	/** @private */
	private async _handleRequest(t: 'raw' | 'string'): Promise<any> {
		if (t === 'raw') {
			const { text } = await request.get(baseURL);
			const body = JSON.parse(text);
			const raw = body.slip;
			return raw;
		}

		const { text } = await request.get(baseURL);
		const body = JSON.parse(text);
		const advice = body.slip.advice;
		return advice;
	}
}

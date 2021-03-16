# random-advice

> API Wrapper for https://api.adviceslip.com

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/random-advice"><img src="https://img.shields.io/npm/v/random-advice.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/random-advice"><img src="https://img.shields.io/npm/dt/random-advice?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/Shukaaku/random-advice"><img src="https://david-dm.org/Shukaaku/random-advice/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/random-advice/"><img src="https://nodei.co/npm/random-advice.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Features

- Actually maintained
- Uses async/await

## Install

```bash
yarn add random-advice
```

## Documentation

https://shukaaku.github.io/random-advice

## Usage

```js
const { Advice } = require('random-advice');

(async () => {
	Advice.getAdvice(); // returns a string
	Advice.getRaw(); // returns the raw response
})();
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**random-advice** © [1chiSensei](https://github.com/1chiSensei), Released under the [Apache-2.0](https://github.com/Shukaaku/random-advice/blob/main/LICENSE) License.<br>
Authored and maintained by 1chiSensei.

> GitHub [@1chiSensei](https://github.com/1chiSensei)

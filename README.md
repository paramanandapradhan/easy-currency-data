# easy-countrydata
Library to provide all currency information

# Install 

```
npm i @cloudparker/easy-currency-data --save-dev
```

# CDN install

```
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-currency-data@main/dist/index.js" />
```

# Usage

### Nodejs
```js
import EasyCurrencyData from "@cloudparker/easy-currency-data@1.0.0";


EasyCurrencyData.getCurrencies();
// Return list of currency data 
// [ { cosw: "EUR",  symbol: "€",  name: "Euro"}, ... ]

```

### Browser
```js
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-currency-data@main/dist/index.js" />

EasyCurrencyData.getCurrencies();
// Return list of currency data 
// [ { cosw: "EUR",  symbol: "€",  name: "Euro"}, ... ]

```

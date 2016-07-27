# Angular Summit Hackathon

This is the hackathon with [Venkat](https://twitter.com/venkat_s) and [Raju](https://twitter.com/looselytyped) at [Angular Summit](https://angularsummit.com/conference/boston/2015/09/home)

## Setup

- Clone this repo
- `npm install`
- `bower install`

## Build & development

Open 2 terminals and `cd` into the directory where you cloned this repo

- In the first one run `node server.js` - This will start a express based REST-ful end-point for the backend.
- In the second one run `grunt serve` - This will open the application in your browser to [http://localhost:9000/](http://localhost:9000/)
-- If you don't have grunt install globally you can instead run `./node_modules/.bin/grunt serve`

**NOTE** This repo will see massive, and often destructive changes over time. Preferably fork this repo vs. cloning. 

## Issues to fix

- Header currently says "FIX ME!!" instead of displaying the Current Type
- The `TypeDetailsCtrl` `update` function should return the details for the selected month
- In the details listing:
-- From and To show as unix timestamps, they should instead appear in this format: `(2017) July 01 01:01 am`
-- Duration shows as a unix timestamp, it should instead appear in this format: `08:01` (Hours:Minutes)

Note: The `Work` category has no items in it.

## License

Copyright (c) 2015 Venkat Subramaniam & Raju Gandhi

Distributed under the MIT License

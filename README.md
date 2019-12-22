# yardmapper

Yardmapper is a react module that allows users to map lawn area polygons or enter lawn size manually. uses google maps api, react-google-maps, material-ui with a lottie as an instructional dialog.

## How to use
You can install this directly in your project with npm
`npm i yardmapper`

### Repo
This project can also be found / forked on [github](https://github.com/Rachio/yardmapper)


## Props

Yardmapper component props

|PROP                |REQ                          |TYPE   |  DESCRIPTION                    |
|----------------|--------------------|-----------------------------|-----------|
|`center`|yes |*Object* |``` {lat: number, lng: number}``` - Map initial center geo point
|`isMetric` |no  |*boolean* |To use metric units - default *false*
|`maxSize`|yes |*number*| in square feet, unless isMetric is true
|`googleMapsApiKey`|yes|*string*|Google Maps API key
|`onComplete`|yes|*function* | callback function called upon successful completion of mapping process. Will be called with `onCompleteEvent` object (see below)


### onCompleteEvent

Upon successful completion of yard mapping process the onComplete function will be called with the resulting object:
```
{
	isMetric: boolean,
	size: number,
	polygons: Array<features>,
	manuallyEntered: boolean
}
```
> **Note:** it is possible that the user will draw polygons and then manually enter their yard size, in this case the polygons drawn will still be included in the event and the `manuallyEntered` value will be true.

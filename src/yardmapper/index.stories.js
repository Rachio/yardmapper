import React from 'react'
import Yardmapper from '../yardmapper'

export default { title: 'Yardmapper' }

// Yard Size Route ////////////////////

/**
 * File included for testing with storybook
 */

export const map = () => {

    const center = {lat: 39.7487931, lng: -105.0011805}
    const maxSize = 11000
    const isMetric = false

    const onComplete = (event) => {
        console.log(event)
    }

    return (
    <Yardmapper
        center={center}
        maxSize={maxSize}
        onComplete={onComplete}
        isMetric={isMetric}
        googleMapsApiKey={'AIzaSyCalxCTgUYo5abA5CV-sF7GI9keCMJfMHw'}
    />)
}
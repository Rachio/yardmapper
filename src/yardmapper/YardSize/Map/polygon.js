// @flow
import React, { useRef, useCallback } from 'react'
import { Polygon } from 'react-google-maps'
// import type { AbbrGeoPoint } from '../../../../../util/location'
// import type { PolygonStyles } from '../Map'

///////// COMPONENT ///////////////////

type Props = {|
  id: string,
  options: any,
  path: any,
  polygonsEditable: boolean,
  editPolygon: (Array<any>, string) => void
|}

/**
 * Controlled Polygon
 * @summary Editable Polygon Component
 * @param {Props} props - Component properties
 * @return {JSX} - Polygon to render
 */
const MapPolygon = ({
  id,
  options,
  path,
  polygonsEditable,
  editPolygon
}: Props) => {
  /** Define refs for Polygon instance and listeners */
  const polygonRef = useRef(null)
  const listenersRef = useRef([])

  /** Call editPolygon with new edited path */
  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const path = polygonRef.current
        .getPath()
        .getArray()
        .map(latLng => {
          return { lat: latLng.lat(), lng: latLng.lng() }
        })
      editPolygon(path, id)
    }
  }, [editPolygon])

  /** Bind refs to current polygon and listeners */
  const onLoad = useCallback(
    polygon => {
      polygonRef.current = polygon
      const path = polygon.getPath()
      // flow-ignore
      listenersRef.current.push(
        path.addListener('set_at', onEdit),
        path.addListener('insert_at', onEdit),
        path.addListener('remove_at', onEdit)
      )
    },
    [onEdit]
  )

  /** Clean up refs */
  const onUnmount = useCallback(() => {
    // flow-ignore
    listenersRef.current.forEach(listener => listener.remove())
    polygonRef.current = null
  }, [])

  return (
    <Polygon
      editable={polygonsEditable}
      key={id}
      onDragEnd={onEdit}
      onLoad={onLoad}
      onMouseUp={onEdit}
      onUnmount={onUnmount}
      options={options}
      path={path}
      ref={polygonRef}
    />
  )
}

export default MapPolygon

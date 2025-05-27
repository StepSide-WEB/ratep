import { useRef, useEffect } from "react"
import mapboxgl, { Map as MapboxMap } from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPGL_TOKEN = process.env.NEXT_PUBLIC_MAPGL_TOKEN as string
const MAPGL_STYLE = "mapbox://styles/sekler/cm9plsaf1005001s5eya9dfyu"

const Map = () => {
	const mapRef = useRef<MapboxMap | null>(null)
	const mapContainerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!mapContainerRef.current) return

		mapboxgl.accessToken = MAPGL_TOKEN

		mapRef.current = new mapboxgl.Map({
			style: MAPGL_STYLE,
			container: mapContainerRef.current,
			center: [37.38312, 54.92272],
			zoom: 15.54,
			dragPan: false,
			scrollZoom: false,
			doubleClickZoom: false,
			touchZoomRotate: true,
			boxZoom: false,
			dragRotate: false,
		})

		mapRef.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "bottom-right")

		const el = document.createElement("div")
		el.innerHTML = `
      <div class="flex justify-center items-center bg-green rounded-full w-13 aspect-square">
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25.5" cy="25.5" r="25.5" fill="#EE1527"/>
          <path d="M24.1516 20.0029H20.2445C19.2701 20.0015 18.2049 20 17.9381 20C17.602 20 16.9692 20.1671 16.6262 20.6391C15.2043 22.597 10.8888 28.516 9.03575 31.0154C8.94706 31.1351 9.03367 31.3042 9.18263 31.3042C11.2947 31.3051 12.6275 31.3134 14.9478 31.3186C15.376 31.3195 15.9308 31.0269 16.1891 30.6882C17.4939 28.9789 19.3902 26.4583 21.0602 24.2037H21.0688L24.1516 20.0029Z" fill="white"/>
          <path d="M34.8742 20.0027C34.446 20.0017 33.8912 20.2944 33.6329 20.6331C31.7672 23.0772 29.9264 25.5412 28.009 28.112L28.0086 28.1131C27.1313 27.7826 27.4684 27.2164 27.8046 26.7656C28.4416 25.9323 29.2413 24.8954 29.6062 24.3526C29.904 23.9098 31.3307 22.3384 30.6799 21.1183C30.2135 20.2438 28.7645 20.0531 27.3756 20.0135L27.3833 20.0027H26.0828H25.6257L25.472 20.2173C25.4506 20.2383 25.4299 20.2607 25.4107 20.2859C25.1172 20.6705 24.8866 20.9988 24.7047 21.2846C24.1126 22.096 22.5754 24.209 22.3291 24.5614C20.8975 26.6093 19.7045 31.3157 27.8092 31.3157C27.8092 31.3157 31.3639 31.3213 31.8838 31.3213C32.2199 31.3213 32.8528 31.1542 33.1958 30.6822C34.6758 28.6443 39.2907 22.315 41.0007 20.0171C38.673 20.0171 37.324 20.0081 34.8742 20.0027Z" fill="white"/>
        </svg>
      </div>
    `
		new mapboxgl.Marker(el).setLngLat([37.38332, 54.92185]).addTo(mapRef.current)

		return () => {
			mapRef.current?.remove()
		}
	}, [])

	return <div id='map-container' className='bg-lightgray w-full h-[112vw] lg:h-[50vw]' ref={mapContainerRef} />
}

export default Map

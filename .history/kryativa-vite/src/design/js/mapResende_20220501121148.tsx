import {useMemo} from "react";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';


export default function Home() {
	const {} = useLoadScript({googleMapsApiKey:""})


	return <div>Map</div>
}
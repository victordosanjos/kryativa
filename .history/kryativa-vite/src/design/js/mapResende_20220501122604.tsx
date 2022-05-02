import {useMemo} from "react";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';


export default function Home() {
	const {} = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,});


	return <div>Map</div>
}
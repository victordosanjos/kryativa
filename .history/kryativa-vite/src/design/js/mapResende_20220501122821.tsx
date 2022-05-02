import {useMemo} from "react";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';


export default function Home() {
	const {isLoaded} = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,});

if (!isLoaded) return <div>Loading...</div>
	return <div>Map</div>
}

function Map(){
	return <div>Map</div>
}
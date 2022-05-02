import {useMemo} from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


export default function Home() {
	const {isLoaded} = useLoadScript({ googleMapsApiKey:"AIzaSyB9xZRDp6lNAnrLJbkLKlfq-_KwJyXE0Hc"});

if (!isLoaded) return 
	return <Map />;
}


function Map(){

	const center = useMemo(() => ({lat: -20.500484, 
		lng: -54.653337}),[]);

	return (
	<GoogleMap 
	zoom={10} 
	center={{lat:-20.500484 ,lng:-54.653337}} 
	mapContainerClassName=""
	>
		<Marker position= {center}/>
	</GoogleMap>
	);
}


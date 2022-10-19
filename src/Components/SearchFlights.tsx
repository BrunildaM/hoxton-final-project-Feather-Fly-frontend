import { API, Flight } from "./types"

type Props = {
    setFlights: React.Dispatch<React.SetStateAction<Flight[]>>
}


export function SearchFlights ({setFlights}: Props) {
    function handleSubmit(event: any) {
        const departure = event.target.departure.value
        const arrival =event.target.arrival.value
        const time = event.target.time.value

        if(departure && arrival && time) {
            //fetch all three
            fetch(`${API}/flights/${departure}/${arrival}/${time}`)
            .then(res => res.json())
            .then(flightsFromDb => setFlights(flightsFromDb))
        } else if (departure && arrival && time === "") {
            //fetch only 

        }
    }
    
   
    
    return (
        <div>
            
        </div>
    )
}
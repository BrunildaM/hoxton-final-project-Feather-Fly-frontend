import { useState } from "react"
import { Flight, Ticket } from "./types"

type Props = {
    availableFlights: Flight[]
}

export function Tickets ({availableFlights} : Props) {
    return (
        <div>
            {availableFlights.slice(0, 10).map(flight => (
                <ul>
                    <li>{flight.tickets.map(ticket => (
                        <ul>
                            <li>Baggage: {ticket.baggage} kg</li>
                            <li>Class: {ticket.class.name}</li>
                            <li>Price: {ticket.price} $</li>
                            <li>Seat: {ticket.seat}</li>
                        </ul>
                    ))}</li>
                </ul>
            ))}
        </div>
    )
}
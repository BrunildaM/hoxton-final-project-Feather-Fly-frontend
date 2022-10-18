export  const API = "http://localhost:4000";

export type User = {
  id:  number
  gender: string // to give the title on the ticket Mr Mrs or Ms
  age: number// only adults can have account
  firstName: string
  lastName:  string
  email: string   
  password: string
  role: string    //user or admin
  bookings:  Booking[]
}


export type Booking = {
  id:  number     
  passanger: User      
  flight:    Flight     
  userId: number
  flightId:  number
  tickets:   Ticket[]
  passangers: Passanger[]
}


export type Flight = {
    id : number
    flightNumber: string
    departsFrom: Airport   
    arrivesAt:  Airport   
    departureTime:  Date
    arrivalTime: Date
    status: string     //Ok or cancelled 
    bookings: Booking[]
    tickets: Ticket[]
    flyCompany: FlyCompany
    flyCompanyId: number
    plane: Plane     
    departureFlightId: number
    arrivalFlightId: number
    planeId: number
}


export type Passanger = {
    id: number
    firstName: string
    lastName: string
    gender: string // to give the title on the ticket Mr Mrs or Ms
    age: number
    booking:   Booking 
    bookingId: number
  }
  

  export type Ticket = {
    id: number
    price: number
    seat: string
    status: string  
    class: Class 
    baggage: string
    booking: Booking
    bookingId: number
    flight: Flight 
    flightId:  number
    classId: number
  }
  
  export type Class = {
    id: number             
    name: string //Economy, business or first class
    tickets: Ticket[]
    classCapacities: ClassCapacity[]
  }
  
  export type ClassCapacity = {
    id: number
    plane: Plane
    class: Class
    capacity: number
    planeId:  number
    classId:  number
  }
  
 
  export type Plane = {
    id: number
    capacity: number
    flyCompany: FlyCompany 
    flyCompanyId: number
    classCapacities: ClassCapacity[]
    flights: Flight[]
  }
  
  export type FlyCompany = {
    id:  number    
    logo: string
    name: string
    planes:   Plane[]
    airports: Airport[]
    flights:  Flight[]
  }
  
  export type Airport = {
    id: number      
    location: string
    name:  string
    flyCompanies:     FlyCompany[]
    departureFlights: Flight[] 
    arrivalFlights:  Flight[]  
  }
  
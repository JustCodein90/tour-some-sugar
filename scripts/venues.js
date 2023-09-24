import { getVenues, getBookings, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

document.addEventListener(
    "click",  
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {
            const [,venueId] = itemClicked.id.split("--")

            for (const venue of venues) {
                
                if (venue.id === parseInt(venueId)) {
                   const assignments = filterBands(venue)
                   const bandName = bookedBandNames(assignments)
                   
                   window.alert(` ${bandName} with be playing at ${venue.name}`)
                }
            }
        }
    }
)


const filterBands = (venue) => {
    const assignments = []

        for (const assignment of bookings) {
            if (assignment.venueId === venue.id) {
            assignments.push(assignment)
        }
    }

    return assignments
}


const bookedBandNames = (assignments) => {
    let bandNames = ""

    for (const assignment of assignments) {

        for (const band of bands) {
            if (band.id === assignment.bandId) {
                bandNames = `${bandNames} and ${band.name}`
            }
        }
    }

    return bandNames
}


export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += ` <li id="venue--${venue.id}"> ${venue.name}</li>`}

     html += "</ul>"   

     return html
}
import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")

            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    const assignment = filterVenues(band)
                    const locationName = bookedVenueNames(assignment)
                    window.alert(`Playing at ${locationName}`)

                }
            }
        }
    }
)

const filterVenues = (band) => {
    const assignments = []

    for (const assignment of bookings) {
        if (assignment.bandId === band.id) {
            assignments.push(assignment)
        }
    }

    return assignments
}

const bookedVenueNames = (assignments) => {
    let venueNames = ""

    for (const assignment of assignments) {

        for (const venue of venues) {
            if (venue.id === assignment.venueId) {
                venueNames = `${venueNames} and ${venue.name}`
            }
        }
    }

    return venueNames
}

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += ` <li id="band--${band.id}"> ${band.name}</li>`
    }

    html += "</ul>"

    return html
}
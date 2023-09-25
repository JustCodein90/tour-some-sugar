import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

const findBand = (bookings, allbands) => {
    let bookingsBand = null

    for (const band of allbands) {
        if (band.id === bookings.bandId) {
            bookingsBand = band
        }
    }

    return bookingsBand
}

const findVenues = (bookings, allVenues) => {
    let bookingVenue = null

    for (const venue of allVenues) {
        if (venue.id === bookings.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}

export const Bookings = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenues(booking, venues)
        html += ` <li id="booking--${booking.id}"> ${band.name} are playing at The ${venue.name}
        on ${booking.date}</li>`
    }

    html += "</ul>"

    return html
}
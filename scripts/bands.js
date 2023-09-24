import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

document.addEventListener(
    click,
    (clickEvent) => {
        const itemClicked = clickEvent.target 

        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")

            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    const assignment = filterVenues(band)
                    const locationName = filterNames(assignment)
                    window.alert(`Playing at ${locationName}`)

                }
            }
        } 
    }
)


export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += ` <li id="band--${band.id}"> ${band.name}</li>`}

     html += "</ul>"   

     return html
}
import { Venues } from "./venues.js"
import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="title">Tour Some Sugar On Me</h1>
<article class="bookings">
    <section id="box">
        <h2 class="listBookings">Current Bookings</h2>
        ${Bookings()}
    </section>
</article>

<article class="details">
    <section id="box"class="detail--column list details__venues">
        <h2 class="listTitle">Venues</h2>
        ${Venues()}
    </section>
    <section id="box" class="detail--column list details__bands">
        <h2 class="listTitle">Bands</h2>
        ${Bands()}
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML
const database = {

    bands: [{
        
        id: 1,
        name: "Midnight Mass",
        size: 5,
        genre: "Heavy Metal",
        yearFormed: 2000
        },
        {
        id: 2,
        name: "Black Out",
        size: 4,
        genre: "Rock",
        yearFormed: 2010
        },
        {
        id: 3,
        name: "John Wick",
        size: 1,
        genre: "Country",
        yearFormed: 2002
        },
        {
        id: 4,
        name: "Trolls",
        size: 6,
        genre: "Pop",
        yearFormed: 2009
        },
        {
        id: 5,
        name: "Black Death",
        size: 5,
        genre: "Heavy Metal",
        yearFormed: 2000
        },
    ],
    venues: [
        {
        id: 1,
        name: "Basement",
        address: "Main street",
        squareFoot: 1234,
        maxOccupy: 200
        },{
        id: 2,
        name: "Back Roads",
        address: "North street",
        squareFoot: 2345,
        maxOccupy: 300
        },{
        id: 3,
        name: "Palace",
        address: "East street",
        squareFoot: 1123,
        maxOccupy: 200
        },{
        id: 4,
        name: "Rock House",
        address: "South street",
        squareFoot: 4532,
        maxOccupy: 350
        },{
        id: 5,
        name: "Outside",
        address: "West street",
        squareFoot: 534,
        maxOccupy: 100
        },
    ],
    bookings: [{
        id: 1,
        bandId: 5,
        venueId: 1,
        date: "9/25/2023",
    },{
        id: 2,
        bandId: 4,
        venueId: 3,
        date: "9/30/2023",
    },{
        id: 3,
        bandId: 2,
        venueId: 2,
        date: "10/1/2023",
    },{
        id: 4,
        bandId: 2,
        venueId: 5,
        date: "9/30/2023",
    },{
        id: 5,
        bandId: 1,
        venueId: 4,
        date: "10/2/2023",
    },{
        id: 6,
        bandId: 5,
        venueId: 4,
        date: "9/20/2023",
    },{
        id: 7,
        bandId: 4,
        venueId: 1,
        date: "9/16/2023",
    },{
        id: 8,
        bandId: 3,
        venueId: 3,
        date: "10/5/2023",
    },{
        id: 9,
        bandId: 3,
        venueId: 2,
        date: "10/16/2023",
    },
 ]
}


export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

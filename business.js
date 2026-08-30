const business = {
    /* ============================
       BASIC BUSINESS INFORMATION
    ============================ */

    name: "FreshCut Barbers",
    shortName: "FRESHCUT",

    tagline: "Sharp Cuts. Clean Finish.",

    location: "Newcastle, KwaZulu-Natal",

    description:
        "Professional barbering, modern fades and clean grooming — made for you.",

    aboutTitle: "Your Style. Our Craft.",

    aboutText: [
        "FreshCut Barbers is a local Newcastle barbershop focused on quality cuts, attention to detail and great service.",

        "Whether you want a classic haircut, a fresh fade or a clean beard trim, we'll make sure you leave looking fresh."
    ],


    /* ============================
       CONTACT INFORMATION
    ============================ */

    phone: "+27 00 000 0000",

    whatsapp: "27000000000",

    email: "hello@freshcut.co.za",

    address: "Newcastle, KwaZulu-Natal",


    /* ============================
       OPENING HOURS
    ============================ */

    openingHours: {
        monday: "08:00 - 18:00",
        tuesday: "08:00 - 18:00",
        wednesday: "08:00 - 18:00",
        thursday: "08:00 - 18:00",
        friday: "08:00 - 18:00",
        saturday: "08:00 - 18:00",
        sunday: "Closed"
    },


    /* ============================
       SERVICES
    ============================ */

    services: [
        {
            name: "Classic Haircut",
            price: "R80",
            description:
                "A clean, professional haircut finished exactly the way you like it."
        },

        {
            name: "Fade",
            price: "R100",
            description:
                "Modern low, mid or high fades with a sharp and clean finish."
        },

        {
            name: "Beard Trim",
            price: "R50",
            description:
                "Shape, trim and clean your beard for a fresh finished look."
        },

        {
            name: "Hair + Beard",
            price: "R130",
            description:
                "Complete grooming package including your haircut and beard."
        }
    ],


    /* ============================
       GALLERY
    ============================ */

    gallery: [
        {
            image:
                "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",

            alt: "Professional barber haircut",

            title: "Fresh Fade"
        },

        {
            image:
                "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",

            alt: "Barber grooming a client",

            title: "Clean Grooming"
        },

        {
            image:
                "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",

            alt: "Modern barbershop interior",

            title: "Our Shop"
        }
    ],


    /* ============================
       REVIEWS
    ============================ */

    reviews: [
        {
            name: "Thabo",
            rating: 5,
            text:
                "Great service and the fade came out exactly how I wanted it."
        },

        {
            name: "Sibusiso",
            rating: 5,
            text:
                "Friendly barber and a really clean shop. Definitely coming back."
        },

        {
            name: "Liam",
            rating: 5,
            text:
                "Best haircut I've had in a while. Highly recommended."
        }
    ],


    /* ============================
       SOCIAL MEDIA
    ============================ */

    social: {
        instagram: "",
        facebook: "",
        tiktok: ""
    },


    /* ============================
       BRANDING
    ============================ */

    branding: {
        primaryColor: "#111111",
        accentColor: "#c89b3c",
        backgroundColor: "#ffffff",
        lightBackground: "#f7f6f2",
        textColor: "#111111"
    },


    /* ============================
       HERO IMAGE
    ============================ */

    heroImage:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1800&q=85",


    /* ============================
       GOOGLE MAPS
    ============================ */

    mapsUrl: "",


    /* ============================
       SEO
    ============================ */

    seo: {
        title: "FreshCut Barbers | Newcastle",

        description:
            "FreshCut Barbers offers professional haircuts, fades and beard grooming in Newcastle, KwaZulu-Natal."
    }
};
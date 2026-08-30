document.addEventListener("DOMContentLoaded", () => {


    /* ============================
       HELPER FUNCTIONS
    ============================ */

    const get = (selector) =>
        document.querySelector(selector);


    const getAll = (selector) =>
        document.querySelectorAll(selector);



    /* ============================
       SEO
    ============================ */

    if (business.seo) {

        document.title =
            business.seo.title;

        const description =
            get('meta[name="description"]');

        if (description) {

            description.setAttribute(
                "content",
                business.seo.description
            );

        }

    }



    /* ============================
       BUSINESS LOGO
    ============================ */

    const logo =
        get("#businessLogo");

    if (logo && business.shortName) {

        const words =
            business.shortName.trim().split(" ");

        const firstWord =
            words.shift();

        const remainingWords =
            words.join(" ");

        logo.innerHTML =
            `${firstWord}<span>${remainingWords}</span>`;

    }



    /* ============================
       HERO
    ============================ */

    const heroLocation =
        get("#heroLocation");

    if (heroLocation) {

        heroLocation.textContent =
            business.location.toUpperCase();

    }


    const heroDescription =
        get("#heroDescription");

    if (heroDescription) {

        heroDescription.textContent =
            business.description;

    }


    const hero =
        document.querySelector(".barber-hero");

    if (hero && business.heroImage) {

        hero.style.backgroundImage =
            `
            linear-gradient(
                90deg,
                rgba(0,0,0,0.9),
                rgba(0,0,0,0.55),
                rgba(0,0,0,0.2)
            ),
            url("${business.heroImage}")
            `;

    }



    /* ============================
       ABOUT
    ============================ */

    const aboutTitle =
        get("#aboutTitle");

    if (aboutTitle && business.aboutTitle) {

        const parts =
            business.aboutTitle.split(".");

        if (parts.length >= 2) {

            aboutTitle.innerHTML =
                `${parts[0]}.<br>${parts.slice(1).join(".").trim()}`;

        } else {

            aboutTitle.textContent =
                business.aboutTitle;

        }

    }


    const aboutText =
        get("#aboutText");

    if (
        aboutText &&
        Array.isArray(business.aboutText)
    ) {

        aboutText.innerHTML =
            business.aboutText
                .map(text => `<p>${text}</p>`)
                .join("");

    }



    /* ============================
       SERVICES
    ============================ */

    const servicesGrid =
        get("#servicesGrid");


    if (
        servicesGrid &&
        Array.isArray(business.services)
    ) {

        servicesGrid.innerHTML =
            business.services
                .map((service, index) => {

                    const number =
                        String(index + 1)
                            .padStart(2, "0");


                    return `
                        <div class="service-card">

                            <div class="icon">
                                ${number}
                            </div>

                            <h3>
                                ${service.name}
                            </h3>

                            <p>
                                ${service.description}
                            </p>

                            <strong>
                                ${service.price}
                            </strong>

                        </div>
                    `;

                })
                .join("");

    }



    /* ============================
       GALLERY
    ============================ */

    const galleryGrid =
        get("#galleryGrid");


    if (
        galleryGrid &&
        Array.isArray(business.gallery)
    ) {

        galleryGrid.innerHTML =
            business.gallery
                .map(item => {

                    return `
                        <div class="gallery-item">

                            <img
                                src="${item.image}"
                                alt="${item.alt || ""}"
                                loading="lazy"
                            >

                            ${
                                item.title
                                ?
                                `<div class="gallery-title">
                                    ${item.title}
                                </div>`
                                :
                                ""
                            }

                        </div>
                    `;

                })
                .join("");

    }



    /* ============================
       REVIEWS
    ============================ */

    const reviewsGrid =
        get("#reviewsGrid");


    if (
        reviewsGrid &&
        Array.isArray(business.reviews)
    ) {

        reviewsGrid.innerHTML =
            business.reviews
                .map(review => {

                    const rating =
                        Math.max(
                            0,
                            Math.min(
                                5,
                                Number(review.rating) || 0
                            )
                        );


                    const stars =
                        "★".repeat(rating) +
                        "☆".repeat(5 - rating);


                    return `
                        <div class="review-card">

                            <div class="stars">
                                ${stars}
                            </div>

                            <p>
                                "${review.text}"
                            </p>

                            <strong>
                                — ${review.name}
                            </strong>

                        </div>
                    `;

                })
                .join("");

    }



    /* ============================
       CONTACT INFORMATION
    ============================ */

    const contactLocation =
        get("#contactLocation");

    if (contactLocation) {

        contactLocation.textContent =
            `📍 ${business.address || business.location}`;

    }


    const contactPhone =
        get("#contactPhone");

    if (contactPhone) {

        contactPhone.textContent =
            `📞 ${business.phone}`;

    }


    const contactEmail =
        get("#contactEmail");

    if (
        contactEmail &&
        business.email
    ) {

        contactEmail.textContent =
            `✉️ ${business.email}`;

    }



    /* ============================
       WHATSAPP
    ============================ */

    const whatsappButton =
        get("#whatsappButton");


    if (
        whatsappButton &&
        business.whatsapp
    ) {

        const message =
            encodeURIComponent(
                `Hi, I'd like to book an appointment at ${business.name}.`
            );


        whatsappButton.href =
            `https://wa.me/${business.whatsapp}?text=${message}`;

    }



    /* ============================
       PHONE
    ============================ */

    const phoneButton =
        get("#phoneButton");


    if (
        phoneButton &&
        business.phone
    ) {

        const cleanPhone =
            business.phone
                .replace(/\s/g, "");


        phoneButton.href =
            `tel:${cleanPhone}`;

    }



    /* ============================
       OPENING HOURS
    ============================ */

    const hoursList =
        get("#hoursList");


    if (
        hoursList &&
        business.openingHours
    ) {

        const days = [
            ["Monday", business.openingHours.monday],
            ["Tuesday", business.openingHours.tuesday],
            ["Wednesday", business.openingHours.wednesday],
            ["Thursday", business.openingHours.thursday],
            ["Friday", business.openingHours.friday],
            ["Saturday", business.openingHours.saturday],
            ["Sunday", business.openingHours.sunday]
        ];


        hoursList.innerHTML =
            days
                .map(([day, hours]) => {

                    return `
                        <div class="hours-row">

                            <span>
                                ${day}
                            </span>

                            <span>
                                ${hours}
                            </span>

                        </div>
                    `;

                })
                .join("");

    }



    /* ============================
       GOOGLE MAPS
    ============================ */

    const mapContainer =
        get("#mapContainer");


    if (
        mapContainer &&
        business.mapsUrl
    ) {

        mapContainer.innerHTML = `
            <a
                href="${business.mapsUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn primary"
            >
                📍 Open Location in Google Maps
            </a>
        `;

    } else if (mapContainer) {

        mapContainer.innerHTML = "";

    }



    /* ============================
       SOCIAL MEDIA
    ============================ */

    const socialLinks = {

        instagram:
            business.social?.instagram,

        facebook:
            business.social?.facebook,

        tiktok:
            business.social?.tiktok

    };


    Object.entries(socialLinks)
        .forEach(([platform, url]) => {

            if (!url) return;


            const links =
                document.querySelectorAll(
                    `[data-social="${platform}"]`
                );


            links.forEach(link => {

                link.href = url;

                link.target = "_blank";

                link.rel =
                    "noopener noreferrer";

            });

        });



    /* ============================
       BRANDING
    ============================ */

    if (business.branding) {

        const root =
            document.documentElement;


        if (business.branding.primaryColor) {

            root.style.setProperty(
                "--dark",
                business.branding.primaryColor
            );

        }


        if (business.branding.accentColor) {

            root.style.setProperty(
                "--gold",
                business.branding.accentColor
            );

        }


        if (business.branding.backgroundColor) {

            root.style.setProperty(
                "--white",
                business.branding.backgroundColor
            );

        }


        if (business.branding.lightBackground) {

            root.style.setProperty(
                "--light",
                business.branding.lightBackground
            );

        }


        if (business.branding.textColor) {

            root.style.setProperty(
                "--text",
                business.branding.textColor
            );

        }

    }



    /* ============================
       FOOTER
    ============================ */

    const footer =
        get("#footerText");


    if (footer) {

        footer.textContent =
            `© ${new Date().getFullYear()} ${business.name}. All rights reserved.`;

    }



    /* ============================
       SMOOTH SCROLLING
    ============================ */

    getAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) return;


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });

});
document.addEventListener("DOMContentLoaded", () => {

    /*
     * ============================
     * BUSINESS INFORMATION
     * ============================
     */

    const elements = {
        title: document.querySelector("title"),
        logo: document.querySelector(".logo"),
        heroTitle: document.querySelector(".hero h1"),
        heroText: document.querySelector(".hero-text"),
        location: document.querySelector(".contact-info p:nth-child(1)"),
        phone: document.querySelector(".contact-info p:nth-child(2)"),
        hours: document.querySelector(".contact-info p:nth-child(3)")
    };


    /*
     * ============================
     * BASIC INFORMATION
     * ============================
     */

    if (elements.title) {
        elements.title.textContent =
            `${business.name} | ${business.location}`;
    }

    if (elements.logo) {
        elements.logo.innerHTML =
            `${business.shortName.split(" ")[0]}<span>${business.shortName.split(" ").slice(1).join(" ")}</span>`;
    }

    if (elements.heroText) {
        elements.heroText.textContent =
            business.description;
    }


    /*
     * ============================
     * CONTACT INFORMATION
     * ============================
     */

    if (elements.location) {
        elements.location.textContent =
            `📍 ${business.location}`;
    }

    if (elements.phone) {
        elements.phone.textContent =
            `📞 ${business.phone}`;
    }


    /*
     * ============================
     * WHATSAPP
     * ============================
     */

    const whatsappButtons =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );

    whatsappButtons.forEach(button => {

        button.href =
            `https://wa.me/${business.whatsapp}`;

    });


    /*
     * ============================
     * PHONE BUTTON
     * ============================
     */

    const phoneButtons =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );

    phoneButtons.forEach(button => {

        button.href =
            `tel:${business.phone}`;

    });


    /*
     * ============================
     * SMOOTH SCROLLING
     * ============================
     */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /*
     * ============================
     * CURRENT YEAR
     * ============================
     */

    const footer =
        document.querySelector("footer p");

    if (footer) {

        footer.textContent =
            `© ${new Date().getFullYear()} ${business.name}. All rights reserved.`;

    }

/*
 * ============================
 * DYNAMIC SERVICES
 * ============================
 */

const servicesGrid =
    document.querySelector("#servicesGrid");

if (servicesGrid && business.services) {

    servicesGrid.innerHTML =
        business.services.map((service, index) => {

            const number =
                String(index + 1).padStart(2, "0");

            return `
                <div class="service-card">

                    <div class="icon">${number}</div>

                    <h3>${service.name}</h3>

                    <p>${service.description}</p>

                    <strong>${service.price}</strong>

                </div>
            `;

        }).join("");

}

});
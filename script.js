// ===============================
// Zahra Sweet Bakery
// Contact Script
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // FORM
    // ===============================

    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const nama = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const whatsapp = form.querySelectorAll('input[type="text"]')[1].value.trim();
            const subjek = form.querySelectorAll('input[type="text"]')[2].value.trim();
            const pesan = form.querySelector("textarea").value.trim();

            if(
                nama === "" ||
                email === "" ||
                whatsapp === "" ||
                subjek === "" ||
                pesan === ""
            ){
                alert("Mohon lengkapi seluruh data terlebih dahulu.");
                return;
            }

            alert(
                "Terima kasih " +
                nama +
                "!\n\nPesan Anda berhasil dikirim ke Zahra Sweet Bakery."
            );

            form.reset();

        });

    }

    // ===============================
    // SCROLL ANIMATION
    // ===============================

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{
        threshold:0.2
    });

    document.querySelectorAll(".contact-card,.contact-form,.map-container").forEach((el)=>{

        el.style.opacity="0";
        el.style.transform="translateY(50px)";
        el.style.transition="0.7s";

        observer.observe(el);

    });

    // ===============================
    // HOVER BUTTON
    // ===============================

    const button = document.querySelector(".btn-contact");

    if(button){

        button.addEventListener("mouseenter",()=>{

            button.style.transform="scale(1.05)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="scale(1)";

        });

    }

    // ===============================
    // SOCIAL ICON
    // ===============================

    const socials = document.querySelectorAll(".social-media a");

    socials.forEach((icon)=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="translateY(-8px) rotate(8deg)";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="translateY(0) rotate(0deg)";

        });

    });

    // ===============================
    // CONTACT CARD
    // ===============================

    document.querySelectorAll(".contact-card").forEach((card)=>{

        card.addEventListener("mouseenter",()=>{

            card.style.boxShadow="0 20px 35px rgba(0,0,0,.18)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

        });

    });

});


// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =======================================
// WHATSAPP
// =======================================

const waButton = document.querySelector(".contact-card a");

if(waButton){

    waButton.addEventListener("click",()=>{

        const message =
            "Halo Zahra Sweet Bakery,%0A%0ASaya ingin memesan produk bakery.%0ATerima kasih.";

        waButton.href =
            "https://wa.me/6281234567890?text=" + message;

    });

}


// =======================================
// CURRENT YEAR (opsional)
// =======================================

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}
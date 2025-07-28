// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

// Header
const logoImg = document.getElementById("logo-img");
if (logoImg) logoImg.src = siteContent.images["logo-img"];

const navLinks = document.querySelectorAll("header nav a");
Object.values(siteContent.nav).forEach((text, i) => {
  if (navLinks[i]) {
    navLinks[i].textContent = text;
    navLinks[i].classList.add("italic");
  }
});

// CTA
const ctaH1 = document.querySelector(".cta .cta-text h1");
if (ctaH1) ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector(".cta .cta-text button");
if (ctaBtn) ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
if (ctaImg) ctaImg.src = siteContent.images["cta-img"];

// MAIN CONTENT - Top Content
const topContentTexts = document.querySelectorAll(".top-content .text-content");
if (topContentTexts.length >= 2) {
  topContentTexts[0].querySelector("h4").textContent =
    siteContent["top-content"]["left-h4"];
  topContentTexts[0].querySelector("p").textContent =
    siteContent["top-content"]["left-content"];

  topContentTexts[1].querySelector("h4").textContent =
    siteContent["top-content"]["right-h4"];
  topContentTexts[1].querySelector("p").textContent =
    siteContent["top-content"]["right-content"];
}

// Middle Image
const middleImg = document.getElementById("middle-img");
if (middleImg) middleImg.src = siteContent.images["accent-img"];

// MAIN CONTENT - Bottom Content
const bottomContentTexts = document.querySelectorAll(
  ".bottom-content .text-content"
);
if (bottomContentTexts.length >= 3) {
  bottomContentTexts[0].querySelector("h4").textContent =
    siteContent["bottom-content"]["left-h4"];
  bottomContentTexts[0].querySelector("p").textContent =
    siteContent["bottom-content"]["left-content"];

  bottomContentTexts[1].querySelector("h4").textContent =
    siteContent["bottom-content"]["middle-h4"];
  bottomContentTexts[1].querySelector("p").textContent =
    siteContent["bottom-content"]["middle-content"];

  bottomContentTexts[2].querySelector("h4").textContent =
    siteContent["bottom-content"]["right-h4"];
  bottomContentTexts[2].querySelector("p").textContent =
    siteContent["bottom-content"]["right-content"];
}

// CONTACT
const contactSection = document.querySelector(".contact");
if (contactSection) {
  const contactElements = contactSection.querySelectorAll("h4, p");
  if (contactElements.length >= 4) {
    contactElements[0].textContent = siteContent.contact["contact-h4"];
    contactElements[1].textContent = siteContent.contact.address;
    contactElements[2].textContent = siteContent.contact.phone;
    contactElements[3].textContent = siteContent.contact.email;
  }
}

// FOOTER
const footerLink = document.querySelector("footer a");
if (footerLink) {
  footerLink.textContent = siteContent.footer.copyright;
  footerLink.classList.add("bold");
}

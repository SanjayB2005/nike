import { facebook, instagram, shieldTick, support, truckFast, twitter} from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "contact-us", label: "Contact Us" },
    
    
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const shoeSize = [
    {
        size: "5.5"
    },
    {
        size: "6"
    },
    {
        size: "6.5"
    },
    {
        size: "7"
    },
    {
        size: "7.5"
    },
    {
        size: "8"
    },
    {
        size: "8.5"
    },
    {
        size: "9"
    },
    {
        size: "9.5"
    },
    {
        size: "10"
    }
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "200.20",
        discription: "The Air Jordan 1 Retro High OG 'Light Fusion Red' showcases a familiar color scheme on Michael Jordan's first signature shoe. The upper combines a white leather base with Light Fusion Red overlays, accented by black on the Swoosh, collar and Wings logo. A black nylon tongue is included for added breathability, while underfoot, the white midsole houses Air in the heel for cushioning. A concentric outsole in black and red completes the look."
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "210.20",
        discription: "The Air Jordan 10 Retro High OG 'Light Fusion Red' showcases a familiar color scheme on Michael Jordan's first signature shoe. The upper combines a white leather base with Light Fusion Red overlays, accented by black on the Swoosh, collar and Wings logo. A black nylon tongue is included for added breathability, while underfoot, the white midsole houses Air in the heel for cushioning. A concentric outsole in black and red completes the look."
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "220.20",
        discription: "The Air Jordan 100 Retro High OG 'Light Fusion Red' showcases a familiar color scheme on Michael Jordan's first signature shoe. The upper combines a white leather base with Light Fusion Red overlays, accented by black on the Swoosh, collar and Wings logo. A black nylon tongue is included for added breathability, while underfoot, the white midsole houses Air in the heel for cushioning. A concentric outsole in black and red completes the look."
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "230.20",
        discription: "The Air Jordan 001 Retro High OG 'Light Fusion Red' showcases a familiar color scheme on Michael Jordan's first signature shoe. The upper combines a white leather base with Light Fusion Red overlays, accented by black on the Swoosh, collar and Wings logo. A black nylon tongue is included for added breathability, while underfoot, the white midsole houses Air in the heel for cushioning. A concentric outsole in black and red completes the look."
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
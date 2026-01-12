export interface Project {
  title: string;
  level?: string;
  img?: string;
  tech?: Tech[];
  link?: string;
  code?: string;
  description?: string;
  active: boolean;
}
export type Tech = {
  id: string;
  name: string;
  bg: string;
  color: string;
};

export const TECH = {
  astro: { id: "astro", name: "Astro", bg: "#17191E", color: "#f9f9f9" },
  react: { id: "react", name: "React", bg: "#55BED5", color: "#030303" },
  vue: { id: "vue", name: "Vue", bg: "#42b883", color: "#030303" },
  gsap: { id: "gsap", name: "GSAP", bg: "#17191E", color: "#2fea56" },
  tailwind: {
    id: "tailwind",
    name: "Tailwind",
    bg: "#00bcff",
    color: "#030303",
  },
  panda: { id: "panda", name: "Panda CSS", bg: "#F6E458", color: "#030303" },
};
export const ALL_TECH = Object.values(TECH);

const OLD_SITE = "https://frontedchallanges.netlify.app";
const SITE = "http://localhost:4321";
const OLD_REPO = "https://github.com/jojoboomer/fronted-challanges/tree/main";
const REPO = "";

export const PROJECTS: Project[] = [
  {
    title: "NFT preview card component",
    level: "newbie",
    img: "/images/nft/desktop-preview.jpg",
    tech: [TECH.astro, TECH.panda],
    link: SITE + "/nft-card",
    code: OLD_REPO,
    description: "Simple component using ASTRO + PandaCSS",
    active: true,
  },
  {
    title: "Product list with cart",
    level: "junior",
    img: "images/cart/preview.jpg",
    tech: [TECH.astro, TECH.panda, TECH.react],
    link: SITE + "/shoping-cart",
    code: OLD_REPO,
    description:
      "A product page with cart using ASTRO + PandaCSS. Focus on the cart functionality using vanilla JS",
    active: true,
  },
  {
    title: "Intro component with sign-up form",
    level: "junior",
    img: "/images/singup-component/desktop-preview.jpg",
    tech: [TECH.astro, TECH.panda],
    link: SITE + "/singup-component",
    code: OLD_REPO,
    description: "Simple component using ASTRO + PandaCSS",
    active: true,
  },
  {
    title: "Todo app",
    level: "intermediate",
    img: "images/todo/desktop-preview.jpg",
    tech: [TECH.astro, TECH.panda, TECH.react],
    link: SITE + "/todo",
    code: OLD_REPO,
    description:
      "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    active: true,
  },
  {
    title: "IP Address Tracker",
    level: "intermediate",
    img: "images/tracker/desktop-preview.jpg",
    tech: [TECH.astro, TECH.panda, TECH.react],
    link: SITE + "/ip-tracker",
    code: OLD_REPO,
    description:
      "This project is a responsive IP address and domain geolocation tracker application. It integrates the IPify API to fetch geographic data for any entered IP address or domain and uses LeafletJS to dynamically render an interactive map pinpointing the location. The app features a clean, user-friendly interface where key information—such as IP address, location, timezone, and ISP—is displayed in a structured card layout. Upon initial page load, it automatically detects and displays the user's own IP address and location on the map. Users can search for any other IP address or domain to see updated information and map view. The interface is fully responsive, adapting its layout for optimal viewing on all device screen sizes, and includes hover states for all interactive elements like the search button and input field.",
    active: true,
  },
  {
    title: "Restaurant Landing Page",
    level: "intermediate",
    img: "images/restaurant/desktop-preview.png",
    tech: [TECH.astro, TECH.tailwind, TECH.gsap],
    link: "https://restaurant-demo-icodethis.netlify.app/",
    code: "https://github.com/jojoboomer/challenge-restaurant-website",
    description: "A responsive and modern single-page website built with a focus on bold visual hierarchy and dynamic user engagement. The site features a semantic HTML5 structure styled with custom CSS3, implementing a clean layout with strategic use of typography and space. Its core interactive experience is powered by GSAP (GreenSock Animation Platform) to create smooth, professional animations—specifically, a seamless, infinite horizontal scroll for the iconic 'Life is too short to eat just salads' mantra. The project successfully addresses key frontend challenges, including creating narrative flow on a one-page site, building a balanced testimonial grid, and integrating performant, complex animations for a polished final result.",
    active: true,
  },
  {
    title: "Multi-Step Form",
    level: "advanced",
    img: "/images/multi-step-form/desktop-preview.jpg",
    tech: [TECH.vue, TECH.tailwind],
    link: "https://vue-challange-stepper.netlify.app/",
    code: "https://github.com/jojoboomer/vue-challange-multi-step-form",
    description: "This project is a fully responsive, multi-step form interface built with Vue.js 3 and Tailwind CSS. It guides users through a sequential process with the ability to navigate back and update previous selections. The core challenges solved include implementing robust form validation for missed fields and email format, managing complex global state for user selections across steps, and dynamically rendering a detailed order summary on the final confirmation step. The UI features complete interactive states and is precisely styled with Tailwind to match the provided design specifications across all device screen sizes. The logic for step control, data persistence, and validation feedback is centrally managed within a reactive Vue component.",
    active: true,
  },
  {
    title: "Weather app",
    level: "intermediate",
    img: "/images/weather-app/desktop-preview.jpg",
    tech: [TECH.vue, TECH.tailwind],
    link: "https://weather-vue-frontedmentor.netlify.app/",
    code: "https://github.com/jojoboomer/vue-weather-app",
    description: "This project is a fully-featured, responsive weather application built with Vue.js 3 and Tailwind CSS. The app fetches real-time and forecast data from the Open-Meteo API, allowing users to search for any location and view comprehensive weather details. The interface is segmented into clear modules: a primary display for current conditions, a 7-day forecast, and an interactive hourly forecast section. A key feature is the implementation of a global unit management system, enabling seamless toggling between Imperial and Metric units for all temperature, wind, and precipitation measurements directly from a dropdown. The UI is fully reactive, with all interactive elements (search bar, day selectors, unit toggles) featuring Tailwind-styled hover and focus states, and the layout adapts optimally from mobile to desktop screens.",
    active: true,
  },
];

export const IP_API_URL = "https://geo.ipify.org/api/v2/";
// apiKey
// ipAddress
// domain
// email
// escapedUnicode



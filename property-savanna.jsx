// ============================================================================
// Savanna Bukit Jalil — property data.
//
// Load order matters: assets.jsx defines ASSETS/APPLICATION_FORM, this file
// defines PROPERTY, and sections.jsx renders PROPERTY. Each <script type=
// "text/babel"> gets its own scope, so cross-file sharing goes through window.
// ============================================================================

const PROPERTY = {
  slug: "savanna",
  name: "Savanna",
  subtitle: "Bukit Jalil",
  fullName: "Savanna Bukit Jalil",

  hero: {
    eyebrow: "Thoughtfully Designed Student Living — 5-Minute Walk to IMU Bukit Jalil",
    condoImg: "https://ik.imagekit.io/cr8hodb6q/unistay/Savanna_bukit_jalil_heroshot.png?updatedAt=1779236598065",
    condoAlt: "Savanna Bukit Jalil condominium",
    blurb:
      "Unistay Living provides purpose-managed student accommodation at Savanna Bukit Jalil, offering safe, thoughtfully designed, and well-maintained homes created specifically for IMU students — so they can live comfortably and focus fully on their studies.",
    // YouTube Short shown in the play-button modal.
    tour: { type: "youtube", src: "https://www.youtube.com/embed/vE9Er44cW-g?autoplay=1&rel=0" },
  },

  // Official IMU unit photos shown in the "View Rooms" lightbox carousel.
  // Ordered by source file name, which puts the two block floor plans after the unit photos.
  gallery: [
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Bathroom1.jpeg", label: "Bathroom" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Bedroom%201.jpeg", label: "Bedroom" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Bedroom%202.jpeg", label: "Bedroom" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Dining%20Room%20V1.jpeg", label: "Dining Room" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Dining%20Room%20V2.jpeg", label: "Dining Room" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20KitchenV1.jpeg", label: "Kitchen" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Living%20Room%20V1.jpeg", label: "Living Room" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Living%20Room%20V2.jpeg", label: "Living Room" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/IMU%20Savanna%20Overview.jpeg", label: "Unit Overview" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/Savanna%20Block%20A.jpg", label: "Block A Floor Plan" },
    { src: "https://ik.imagekit.io/cr8hodb6q/unistay/savanna/Savanna%20Block%20B.jpeg", label: "Block B Floor Plan" },
  ],

  why: {
    img: ASSETS.about,
    imgAlt: "Inside a Unistay room at Savanna Bukit Jalil",
    heading: (
      <>
        Why <em>Uni Stay</em> At<br />Savanna Bukit Jalil
      </>
    ),
    lede:
      "Unistay Living provides purpose-managed student accommodation at Savanna Bukit Jalil. Fully furnished, professionally managed, and crafted to support five distinctive study and rest needs.",
    features: [
      { icon: "Shield", title: "Official IMU Accommodation", desc: "Directly managed under IMU — exclusive same-gender student units" },
      { icon: "MapPin", title: "5-Minute Walk to IMU", desc: "400–600m walking distance to campus" },
      { icon: "Sparkle", title: <>Newly Refurbished &amp; Fully Furnished</>, desc: "Move-in ready layouts designed for study and rest" },
      { icon: "Wrench", title: "On-Site Support Team", desc: "Dedicated live-in warden and maintenance crew" },
    ],
    quote:
      "Thoughtfully designed for high-quality student living. Every Unistay unit is designed to feel like a home — from furnished layouts to comfortable study settings.",
  },

  location: {
    title: "The Ultimate Campus Proximity",
    desc: "An effortless, secure walk to campus via main gate or back-entrance shortcuts. Eliminate grueling daily commutes and instantly trade transit time for peak academic focus, restorative rest, and a vibrant student life.",
    statLabel: "walk to IMU",
    routes: {
      main: {
        img: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Main%20Entrance.png",
        label: "Main Entrance",
        time: "9 min",
        maps: "https://www.google.com/maps/dir/IMU+University+-+Bukit+Jalil+Main+Campus,+126,+Jln+Jalil+Perkasa+19,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/Savanna+Bukit+Jalil,+04-01,+Jalan+1%2F155a,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.0580767,101.6863521,18z/data=!4m13!4m12!1m5!1m1!1s0x31cc4a9309dc48d9:0x403c8863f06fcdb9!2m2!1d101.6872524!2d3.0597789!1m5!1m1!1s0x31cc4a945971eaf7:0x974b12179bfdee9!2m2!1d101.687999!2d3.0560158?entry=ttu",
      },
      back: {
        img: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Back%20Entrance%20-%20Shortcut.png",
        label: "Back Entrance",
        time: "5 min",
        maps: "https://www.google.com/maps/dir/3.0570562,101.6878005/IMU+University+-+Bukit+Jalil+Main+Campus,+126,+Jln+Jalil+Perkasa+19,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.0584329,101.6859164,18z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x31cc4a9309dc48d9:0x403c8863f06fcdb9!2m2!1d101.6872524!2d3.0597789!3e2?entry=ttu",
      },
    },
  },

  // Only the 2-room (2-tenant) unit is offered for now — Type 2 (3–5 room) removed.
  layout: {
    title: <>Practical Layout &amp; Premium Furnishing</>,
    desc: "Every official IMU unit is spatially optimized for academic productivity — featuring ergonomic study zones, custom storage, and balanced shared spaces. Explore our modern 2-tenant floor plans.",
    plans: [
      { src: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Type1.png", label: "2-room unit floor plan", hint: "2-room unit floor plan" },
    ],
  },

  rooms: {
    sub: "Schedule a private viewing — most units filled before semester intake.",
    units: [
      {
        id: "type1",
        label: "2-Room Unit",
        plans: {
          UG: [
            {
              id: "t1-ug-r1",
              img: ASSETS.room,
              tag: "Master Bedroom",
              title: "2-Room Unit · Room 1",
              desc: "Spacious master bedroom with twin beds, private study nook, and shared living area",
              bed: 2, bath: 1, sqft: 280,
              deposit: 1900, semRental: 11400, fullPayment: 13300, installment1: 8000, finalPayment: 5300,
            },
            {
              id: "t1-ug-r2",
              img: ASSETS.room,
              tag: null,
              title: "2-Room Unit · Room 2",
              desc: "Cosy single room with dedicated study desk, wardrobe, and balcony access",
              bed: 1, bath: 1, sqft: 210,
              deposit: 1700, semRental: 10200, fullPayment: 11900, installment1: 7000, finalPayment: 4900,
            },
          ],
          PreU: [
            {
              id: "t1-preu-r1",
              img: ASSETS.room,
              tag: "Master Bedroom",
              title: "2-Room Unit · Room 1",
              desc: "Spacious master bedroom with twin beds, private study nook, and shared living area",
              bed: 2, bath: 1, sqft: 280,
              deposit: 1900, semRental: 7600, fullPayment: 9500, installment1: 5500, finalPayment: 4000,
            },
            {
              id: "t1-preu-r2",
              img: ASSETS.room,
              tag: null,
              title: "2-Room Unit · Room 2",
              desc: "Cosy single room with dedicated study desk, wardrobe, and balcony access",
              bed: 1, bath: 1, sqft: 210,
              deposit: 1700, semRental: 6800, fullPayment: 8500, installment1: 5000, finalPayment: 3500,
            },
          ],
        },
      },
    ],
    bedding: [
      { type: "Type A", price: "RM 200" },
      { type: "Type B", price: "RM 400" },
    ],
  },

  facilities: [
    { i: "Pool", t: "Swimming Pool", d: "Resort-style pool for laps or unwinding after class.", feature: true, img: ASSETS.pool },
    { i: "Dumbbell", t: "Gymnasium Room", d: "Fully-equipped gym, open early to late.", feature: true, img: ASSETS.gym },
    { i: "Badminton", t: "Badminton Hall" },
    { i: "Tennis", t: "Tennis Courts" },
    { i: "Building", t: "Clubhouse" },
    { i: "Leaf", t: "Sauna" },
    { i: "Store", t: "Mini-Mart" },
    { i: "Laundry", t: "Launderette" },
    { i: "Playground", t: "Playground" },
    { i: "Fence", t: "Perimeter Fencing" },
    { i: "Shield", t: "24-Hour Security System" },
  ],

  // Overrides for the shared "Unistay Living provides" list — keyed by item title.
  providesOverrides: {},

  // Property-specific FAQ copy. Shared questions live in sections.jsx.
  faqCopy: {
    unitAssignment:
      "The University reserves the right to assign either a 3-bedroom or 2-bedroom condo unit. Room-type allocation is subject to availability, and condo unit assignments are based on the same gender.",
    applyLine: <>To apply for accommodation at Savanna Condominium, please apply through this </>,
    paymentSubject: "Savanna Accommodation Payment",
  },
};

window.PROPERTY = PROPERTY;

// ============================================================================
// Covellia Bukit Jalil — property data.
//
// Photos live in the ImageKit folder /unistay/Covellia, which mirrors the
// source folder tree. ImageKit serves "(", ")", "&" and "," literally in a
// path — percent-encoding those characters 404s — so only spaces are escaped.
// ============================================================================

const IK = "https://ik.imagekit.io/cr8hodb6q/unistay/Covellia/";
const ASPIRE = IK + "Interior%20(Aspire)/";
const STD = IK + "Interior%20(Non-Aspire)/";

const PROPERTY = {
  slug: "covellia",
  name: "Covellia",
  subtitle: "Bukit Jalil",
  fullName: "Covellia, Bukit Jalil",

  hero: {
    eyebrow: "Thoughtfully Designed Student Living — 3-Minute Walk to IMU Bukit Jalil",
    condoImg: IK + "hero_building_img.png",
    condoAlt: "Covellia Bukit Jalil condominium",
    // Portrait cut-out (0.75 w/h) — narrower than the default so it clears the title.
    condoWidth: "clamp(300px, 34vw, 520px)",
    blurb:
      "Unistay Living provides purpose-managed student accommodation at Covellia, Bukit Jalil — just 290m from the IMU Bukit Jalil Main Campus. Spacious garden-level condominium units, fully furnished and professionally managed, so students can settle in and focus on their studies.",
    // Walkthrough of the Aspire unit, served straight from ImageKit.
    tour: {
      type: "mp4",
      src: ASPIRE + "Covelia%20(Aspire).mov/ik-video.mp4?updatedAt=1787732781634",
    },
  },

  // "View Rooms" carousel — the Aspire unit tour first, then the standard unit.
  gallery: [
    { src: ASPIRE + "Living%20Room/IMG_8148.jpg", label: "Aspire Unit · Living Room" },
    { src: ASPIRE + "Kitchen%20&%20Laundry/IMG_8135.jpg", label: "Aspire Unit · Kitchen" },
    { src: ASPIRE + "Kitchen%20&%20Laundry/IMG_8136.jpg", label: "Aspire Unit · Kitchen" },
    { src: ASPIRE + "Kitchen%20&%20Laundry/IMG_8145.jpg", label: "Aspire Unit · Laundry & Utility" },
    { src: ASPIRE + "Master%20Room/IMG_8122.jpg", label: "Aspire Unit · Master Bedroom" },
    { src: ASPIRE + "Master%20Room/IMG_8123.jpg", label: "Aspire Unit · Master Bedroom" },
    { src: ASPIRE + "Room%202/IMG_8139.jpg", label: "Aspire Unit · Room 2" },
    { src: ASPIRE + "Room%202/IMG_8141.jpg", label: "Aspire Unit · Room 2" },
    { src: ASPIRE + "Room%203/IMG_8149.jpg", label: "Aspire Unit · Room 3" },
    { src: ASPIRE + "Room%203/IMG_8150.jpg", label: "Aspire Unit · Room 3" },
    { src: ASPIRE + "Room%204/IMG_9289.jpg", label: "Aspire Unit · Room 4" },
    { src: ASPIRE + "Room%204/IMG_9290.jpg", label: "Aspire Unit · Room 4" },
    { src: STD + "Common%20area/Living%20Room.jpg", label: "Standard Unit · Living Room" },
    { src: STD + "Common%20area/Common%20area.jpg", label: "Standard Unit · Common Area" },
    { src: STD + "Common%20area/Dining%20area.jpg", label: "Standard Unit · Dining Area" },
    { src: STD + "Kitchen/Kitchen%20(1).jpg", label: "Standard Unit · Kitchen" },
    { src: STD + "Kitchen/Kitchen%20(2).jpg", label: "Standard Unit · Kitchen & Laundry" },
    { src: STD + "Master%20room/Master%20room%20(1).jpg", label: "Standard Unit · Master Bedroom" },
    { src: STD + "Master%20room/Master%20room%20(2).jpg", label: "Standard Unit · Master Bedroom" },
    { src: STD + "Middle%20room/Middle%20room%20(1).jpg", label: "Standard Unit · Middle Room" },
    { src: STD + "Middle%20room/Middle%20room%20(2).jpg", label: "Standard Unit · Middle Room" },
    { src: STD + "Small%20room/Small%20room.jpg", label: "Standard Unit · Small Room" },
    { src: STD + "Bathroom/Bathroom.jpg", label: "Standard Unit · Bathroom" },
    { src: STD + "Bathroom/Shared%20toilet%202.jpg", label: "Standard Unit · Shared Bathroom" },
  ],

  why: {
    img: STD + "Common%20area/Living%20Room.jpg",
    imgAlt: "Living room of a Unistay unit at Covellia Bukit Jalil",
    heading: (
      <>
        Why <em>Uni Stay</em> At<br />Covellia Bukit Jalil
      </>
    ),
    lede:
      "Unistay Living provides purpose-managed student accommodation at Covellia, Bukit Jalil. Garden-level condominium units of 1,293–1,415 sq ft, fully furnished and professionally managed, a few minutes' walk from campus.",
    features: [
      { icon: "Shield", title: "Official IMU Accommodation", desc: "Directly managed under IMU — exclusive same-gender student units" },
      { icon: "MapPin", title: "3-Minute Walk to IMU", desc: "Approximately 290m to the Bukit Jalil Main Campus" },
      { icon: "Sparkle", title: <>Spacious &amp; Fully Furnished</>, desc: "1,293–1,415 sq ft layouts with private garden and terrace" },
      { icon: "Wrench", title: "On-Site Support Team", desc: "Dedicated live-in warden and maintenance crew" },
    ],
    quote:
      "Thoughtfully designed for high-quality student living. Every Unistay unit is designed to feel like a home — from furnished layouts to comfortable study settings.",
  },

  location: {
    title: "Three Minutes From Your Lecture Hall",
    desc: "Covellia sits roughly 290m from the IMU Bukit Jalil Main Campus — a three to four minute walk through a quiet, gated neighbourhood. No commute, no parking, no early-morning traffic: just time given back to study, rest, and student life.",
    statLabel: "walk to IMU",
    // No entrance photography for Covellia yet, so the card shows a live map.
    map: {
      time: "3 min",
      label: "Covellia Bukit Jalil",
      embed:
        "https://maps.google.com/maps?q=Covillea+Bukit+Jalil,+Jalan+Jalil+Perkasa+7,+57000+Kuala+Lumpur&z=17&output=embed",
      maps:
        "https://www.google.com/maps/dir/IMU+University+-+Bukit+Jalil+Main+Campus,+126,+Jln+Jalil+Perkasa+19,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/Covillea+Bukit+Jalil,+Covillea,+No.8,+Jalan+Jalil+Perkasa+7,+Bukit+Jalil,+57000+Kuala+Lumpur,+Wilayah+Persekutuan/@3.0592299,101.6835537,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x31cc4a9309dc48d9:0x403c8863f06fcdb9!2m2!1d101.6872524!2d3.0597789!1m5!1m1!1s0x31cc4b3906a267a1:0x9f090e7f5d2954a2!2m2!1d101.6850189!2d3.0588138!3e2?entry=ttu",
    },
  },

  layout: {
    title: <>Garden-Level Layouts &amp; Premium Furnishing</>,
    desc: "Both available unit types are ground-floor homes with a private garden and terrace — 1,293 to 1,415 sq ft of living space with separate study zones, a full kitchen, work area and yard. Tap a plan to view it full size.",
    plans: [
      // `short` keeps the plan toggle from overflowing on narrow screens; the
      // full label is what the lightbox caption shows.
      { src: IK + "Layout/Type%20AG1%20(1,293sqft).jpg", short: "Type AG/1", label: "Type AG/1 — 1,293 sq ft", hint: "Type AG/1 · 1,293 sq ft (excluding garden)" },
      // Filename reads 1,451sqft but the drawing itself says 1,415 sq ft.
      { src: IK + "Layout/Type%20BG(1,451sqft).jpg", short: "Type BG/1", label: "Type BG/1 — 1,415 sq ft", hint: "Type BG/1 · 1,415 sq ft (excluding garden)" },
    ],
  },

  rooms: {
    sub: "Two unit categories, each priced per room. Schedule a private viewing — most units fill before semester intake.",
    footnote: "Application fee: RM 1,000 (one-off). Waived for Aspire Scholarship students.",
    units: [
      {
        id: "aspire",
        label: "Uni Stay Aspire",
        note: "The Aspire unit is a five-room home — one ensuite master plus four bedrooms sharing two bathrooms.",
        plans: {
          UG: [
            {
              id: "asp-ug-master", img: ASPIRE + "Master%20Room/IMG_8123.jpg", tag: "Master Bedroom",
              title: "Master Twin (Ensuite)",
              desc: "The largest room in the unit, sleeping two, with its own private ensuite bathroom.",
              bed: 2, bathLabel: "Ensuite Bath",
              deposit: 850, semRental: 5100, fullPayment: 5950, installment1: 2000, finalPayment: 3950,
            },
            {
              id: "asp-ug-r1", img: null, tag: null,
              title: "Room 1 — Twin",
              desc: "Twin-share bedroom with two study desks and wardrobes, sharing the common bathroom.",
              bed: 2, bathLabel: "Shared Bath",
              deposit: 600, semRental: 3600, fullPayment: 4200, installment1: 2000, finalPayment: 2200,
            },
            {
              id: "asp-ug-r2", img: ASPIRE + "Room%202/IMG_8139.jpg", tag: null,
              title: "Room 2 — Single",
              desc: "Private single room with a queen bed, wardrobe and dedicated study desk.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 900, semRental: 5400, fullPayment: 6300, installment1: 2000, finalPayment: 4300,
            },
            {
              id: "asp-ug-r3", img: ASPIRE + "Room%203/IMG_8150.jpg", tag: null,
              title: "Room 3 — Twin",
              desc: "Twin-share bedroom with built-in storage and a shared study zone.",
              bed: 2, bathLabel: "Shared Bath",
              deposit: 700, semRental: 4200, fullPayment: 4900, installment1: 2000, finalPayment: 2900,
            },
            {
              id: "asp-ug-r4", img: ASPIRE + "Room%204/IMG_9289.jpg", tag: "Most Affordable",
              title: "Room 4 — Single",
              desc: "Compact private single room off the kitchen — the most affordable room in the unit.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 400, semRental: 2400, fullPayment: 2800, installment1: 1000, finalPayment: 1800,
            },
          ],
          PreU: [
            {
              id: "asp-preu-master", img: ASPIRE + "Master%20Room/IMG_8123.jpg", tag: "Master Bedroom",
              title: "Master Twin (Ensuite)",
              desc: "The largest room in the unit, sleeping two, with its own private ensuite bathroom.",
              bed: 2, bathLabel: "Ensuite Bath",
              deposit: 850, semRental: 3400, fullPayment: 4250, installment1: 1000, finalPayment: 3250,
            },
            {
              id: "asp-preu-r1", img: null, tag: null,
              title: "Room 1 — Twin",
              desc: "Twin-share bedroom with two study desks and wardrobes, sharing the common bathroom.",
              bed: 2, bathLabel: "Shared Bath",
              deposit: 600, semRental: 2400, fullPayment: 3000, installment1: 1000, finalPayment: 2000,
            },
            {
              id: "asp-preu-r2", img: ASPIRE + "Room%202/IMG_8139.jpg", tag: null,
              title: "Room 2 — Single",
              desc: "Private single room with a queen bed, wardrobe and dedicated study desk.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 900, semRental: 3600, fullPayment: 4500, installment1: 1000, finalPayment: 3500,
            },
            {
              id: "asp-preu-r3", img: ASPIRE + "Room%203/IMG_8150.jpg", tag: null,
              title: "Room 3 — Twin",
              desc: "Twin-share bedroom with built-in storage and a shared study zone.",
              bed: 2, bathLabel: "Shared Bath",
              deposit: 700, semRental: 2800, fullPayment: 3500, installment1: 1000, finalPayment: 2500,
            },
            {
              id: "asp-preu-r4", img: ASPIRE + "Room%204/IMG_9289.jpg", tag: "Most Affordable",
              title: "Room 4 — Single",
              desc: "Compact private single room off the kitchen — the most affordable room in the unit.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 400, semRental: 1600, fullPayment: 2000, installment1: 1000, finalPayment: 1000,
            },
          ],
        },
      },
      {
        id: "standard",
        label: "Uni Stay",
        note: "The standard unit is a three-room home — an ensuite master plus two single rooms sharing a bathroom.",
        plans: {
          UG: [
            {
              id: "std-ug-master", img: STD + "Master%20room/Master%20room%20(1).jpg", tag: "Master Bedroom",
              title: "Master Twin (Ensuite)",
              desc: "Spacious twin-share master with fitted wardrobes and a private ensuite bathroom.",
              bed: 2, bathLabel: "Ensuite Bath",
              deposit: 1800, semRental: 10800, fullPayment: 12600, installment1: 8600, finalPayment: 4000,
            },
            {
              id: "std-ug-r1", img: STD + "Middle%20room/Middle%20room%20(1).jpg", tag: null,
              title: "Room 1 — Single",
              desc: "Private single room with queen bed, wardrobe and study desk, sharing the common bathroom.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 1350, semRental: 8100, fullPayment: 9450, installment1: 6450, finalPayment: 3000,
            },
            {
              id: "std-ug-r2", img: STD + "Small%20room/Small%20room.jpg", tag: null,
              title: "Room 2 — Single",
              desc: "Private single room with fitted wardrobe and study desk, sharing the common bathroom.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 1350, semRental: 8100, fullPayment: 9450, installment1: 6450, finalPayment: 3000,
            },
          ],
          PreU: [
            {
              id: "std-preu-master", img: STD + "Master%20room/Master%20room%20(1).jpg", tag: "Master Bedroom",
              title: "Master Twin (Ensuite)",
              desc: "Spacious twin-share master with fitted wardrobes and a private ensuite bathroom.",
              bed: 2, bathLabel: "Ensuite Bath",
              deposit: 1800, semRental: 7200, fullPayment: 9000, installment1: 6000, finalPayment: 3000,
            },
            {
              id: "std-preu-r1", img: STD + "Middle%20room/Middle%20room%20(1).jpg", tag: null,
              title: "Room 1 — Single",
              desc: "Private single room with queen bed, wardrobe and study desk, sharing the common bathroom.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 1350, semRental: 5400, fullPayment: 6750, installment1: 4750, finalPayment: 2000,
            },
            {
              id: "std-preu-r2", img: STD + "Small%20room/Small%20room.jpg", tag: null,
              title: "Room 2 — Single",
              desc: "Private single room with fitted wardrobe and study desk, sharing the common bathroom.",
              bed: 1, bathLabel: "Shared Bath",
              deposit: 1350, semRental: 5400, fullPayment: 6750, installment1: 4750, finalPayment: 2000,
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
    { i: "Pool", t: "Swimming Pool" },
    { i: "Dumbbell", t: "Gymnasium Room" },
    { i: "Sparkle", t: "Jacuzzi" },
    { i: "Leaf", t: "Sauna" },
    { i: "Tennis", t: "Tennis Courts" },
    { i: "Badminton", t: "Squash Court" },
    { i: "Building", t: "Clubhouse" },
    { i: "Flame", t: "Barbeque Area" },
    { i: "Cup", t: "Cafés" },
    { i: "Store", t: "Mini-Mart" },
    { i: "Playground", t: "Playground" },
    { i: "Fence", t: "Perimeter Fencing" },
    { i: "Shield", t: "24-Hour Security System" },
  ],

  // The stock "gated" photo shows Savanna's own signage — use the neighbourhood
  // shot instead until Covellia exterior photography is available.
  designCardOverrides: {
    gated: {
      title: "Gated Residential Neighbourhood",
      desc: "A guarded Bukit Jalil address with 24-hour security, perimeter fencing, and visitor screening at the gate.",
      img: ASSETS.about,
    },
  },

  providesOverrides: {
    "5-Minute Walk to Class": {
      t: "3-Minute Walk to Class",
      p: "A safe, well-lit route of roughly 290m that brings you from your front door to the campus gates.",
    },
  },

  faqCopy: {
    unitAssignment:
      "The University reserves the right to assign either a five-room Uni Stay Aspire unit or a three-room Uni Stay unit. Room-type allocation is subject to availability, and condo unit assignments are based on the same gender.",
    applyLine: <>To apply for accommodation at Covellia, please apply through this </>,
    paymentSubject: "Covellia Accommodation Payment",
    // Extra question shown only on this page.
    extraFaqs: [
      {
        q: "What is the difference between a Uni Stay Aspire unit and a Uni Stay unit?",
        a: (
          <div className="faq-rich">
            <p>
              Both are fully furnished, ground-floor condominium units at Covellia with a private garden and terrace. They differ in how the space is divided:
            </p>
            <ul>
              <li>
                <strong>Uni Stay Aspire</strong> — a five-room unit: one ensuite Master Twin plus Rooms 1–4 sharing the common bathrooms. Rooms are priced individually, from RM 1,600 per semester.
              </li>
              <li>
                <strong>Uni Stay</strong> — a three-room unit: one ensuite Master Twin plus two single rooms with a shared bathroom. Fewer housemates and more space per student, priced accordingly.
              </li>
            </ul>
            <p>Use the unit toggle in Rooms &amp; Pricing above to compare the rates side by side.</p>
          </div>
        ),
      },
      {
        q: "Can I view a Covellia unit before applying?",
        a: (
          <div className="faq-rich">
            <p>Yes. A full walkthrough of the Uni Stay Aspire unit is available online:</p>
            <ul>
              <li>
                <strong>Aspire unit:</strong>{" "}
                <a
                  href="https://drive.google.com/drive/folders/1OBXLWI5rPFUf2OXWI4fHKeAaJmE-or6t?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  view the photo and video folder
                </a>
                .
              </li>
              <li>
                <strong>Uni Stay (standard) unit:</strong> the video walkthrough is being prepared — photos of the unit are in the <em>View Rooms</em> gallery above.
              </li>
            </ul>
            <p>
              To arrange an in-person viewing, use the enquiry form at the bottom of this page and our team will confirm a slot with you.
            </p>
          </div>
        ),
      },
    ],
  },
};

window.PROPERTY = PROPERTY;

// All section components for the Unistay homepage.
const { useState, useEffect, useRef } = React;

const ASSETS = {
  logo: "https://ik.imagekit.io/cr8hodb6q/unistay/logo_unistay.png?updatedAt=1779236726899",
  heroBg: "https://ik.imagekit.io/cr8hodb6q/unistay/hero_bg.png?updatedAt=1779236598160",
  heroCondo: "https://ik.imagekit.io/cr8hodb6q/unistay/Savanna_bukit_jalil_heroshot.png?updatedAt=1779236598065",
  heroModel: "https://ik.imagekit.io/cr8hodb6q/unistay/university_student_model.png?updatedAt=1779236598029",
  heroBadge: "https://ik.imagekit.io/cr8hodb6q/unistay/official_accomodation_partner.png?updatedAt=1779236598144",
  grouped: "https://ik.imagekit.io/cr8hodb6q/unistay/grouped.png?updatedAt=1779237927118",
  peace: "https://ik.imagekit.io/cr8hodb6q/unistay/student%20peace%20of%20mind%20for%20parenets.png?updatedAt=1779236598106",
  unistaff: "https://ik.imagekit.io/cr8hodb6q/unistay/unistaff.png?updatedAt=1779236598101",
  room: "https://ik.imagekit.io/cr8hodb6q/unistay/room_image1.png?updatedAt=1779236597984",
  location: "https://ik.imagekit.io/cr8hodb6q/unistay/location%20img.png?updatedAt=1779236597733",
  about: "https://ik.imagekit.io/cr8hodb6q/unistay/about_us_image.png?updatedAt=1779236597748",
  moving: "https://ik.imagekit.io/cr8hodb6q/unistay/moving_house_contact_us_img.png?updatedAt=1779236597699",
};

// ============ NAV ============
const Nav = () => {
  const [active, setActive] = useState("home");
  const links = [
    { id: "home", label: "Home" },
    { id: "rooms", label: "Rooms & Pricing" },
    { id: "why", label: "Why Unistay" },
  ];
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); setActive("home"); }}>
          <img src={ASSETS.logo} alt="Unistay" />
        </a>
        <div className="nav-pill">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? "active" : ""}`}
              onClick={() => setActive(l.id)}
            >
              {l.label}
            </a>
          ))}
          <button className="btn btn-primary nav-cta" style={{ padding: "10px 22px", fontSize: 14 }}>
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
};

// ============ HERO ============
const Hero = () => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <section className="hero" id="home" data-screen-label="01 Hero">
      <Nav />

      {/* untinted bg image */}
      <div className="hero-bg" />

      {/* badge — closer to model/condo */}
      <img
        src={ASSETS.heroBadge}
        alt="Official accommodation partner for IMU"
        className="hero-badge hover-float-a"
        draggable={false}
      />

      {/* eyebrow + display title + UNISTAY toggle (right-aligned to nav container) */}
      <div className="hero-title-block">
        <div className="hero-eyebrow-line">
          Thoughtfully Designed Student Living — 5-Minute Walk to IMU Bukit Jalil
        </div>
        <h1 className="hero-title">
          <span>SAVANNA</span>
          <span className="sub">BUKIT JALIL</span>
        </h1>
        <div className="hero-desc-anchor">
          <button
            type="button"
            className={`hero-desc-tag ${showDesc ? "open" : "pulse"}`}
            onClick={() => setShowDesc((v) => !v)}
            aria-expanded={showDesc}
            aria-controls="hero-desc-card"
          >
            <span className="ring">
              <span className="ring-pulse" />
              <span className="ring-pulse delay" />
            </span>
            UNISTAY
          </button>
          {showDesc ? (
            <div className="hero-desc-card" id="hero-desc-card">
              <p>
                Unistay Living provides purpose-managed student accommodation at Savanna Bukit Jalil, offering safe, thoughtfully designed, and well-maintained homes created specifically for IMU students — so they can live comfortably and focus fully on their studies.
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* model + condo stage — wrapped so mobile can bottom-align them as one unit */}
      <div className="hero-stage">
        <img
          src={ASSETS.heroCondo}
          alt="Savanna Bukit Jalil condominium"
          className="hero-condo"
          draggable={false}
        />
        <img
          src={ASSETS.heroModel}
          alt=""
          className="hero-model hover-float-b"
          draggable={false}
        />
      </div>

      {/* half-disc CTA pinned to bottom — desktop. Mobile reorders via CSS. */}
      <div className="hero-disc-cta" aria-label="Primary actions">
        <div className="hero-disc-arc" />
        <button className="hero-disc-pill left" data-role="book">Book A Viewing</button>
        <button className="hero-disc-play" data-role="play" aria-label="Play room tour">
          <I.Play size={26} />
          <span className="hero-disc-play-label">Play Room Tour</span>
        </button>
        <button className="hero-disc-pill right" data-role="view">View Rooms</button>
      </div>
    </section>
  );
};

// ============ WHY UNISTAY ============
const Why = () => {
  return (
    <section className="why container" id="why" data-screen-label="02 Why Unistay">
      <div className="why-grid">
        <div style={{ position: "relative" }}>
          <div className="why-dots" />
          <div className="why-img">
            <img src={ASSETS.room} alt="Inside a Unistay room at Savanna Bukit Jalil" />
            <div className="play-overlay"><I.Play size={18} /></div>
          </div>
        </div>
        <div>
          <span className="eyebrow">About</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>
            Why <em>Uni Stay</em> At<br />Savanna Bukit Jalil
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Unistay Living provides purpose-managed student accommodation at Savanna Bukit Jalil. Fully furnished, professionally managed, and crafted to support five distinctive study and rest needs.
          </p>
          <div className="why-features">
            <div className="why-feat">
              <div className="why-feat-icon"><I.Sparkle size={20} /></div>
              <div className="why-feat-text">
                <strong>Selected, fully furnished homes</strong>
                <span>Move-in ready from day one</span>
              </div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon"><I.Building size={20} /></div>
              <div className="why-feat-text">
                <strong>5-minute walk to IMU</strong>
                <span>Closest gated residence</span>
              </div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon"><I.HomeHeart size={20} /></div>
              <div className="why-feat-text">
                <strong>Safe, secure design</strong>
                <span>For student peace of mind</span>
              </div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon"><I.Wrench size={20} /></div>
              <div className="why-feat-text">
                <strong>On-site managed services</strong>
                <span>Maintenance &amp; concierge</span>
              </div>
            </div>
          </div>
          <div className="why-quote">
            Thoughtfully designed for high-quality student living. Every Unistay unit is designed to feel like a home — from furnished layouts to comfortable study settings.
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ DESIGN HELPS STUDENTS ============
const designTabs = [
  {
    id: "location",
    label: "Strategic Location for IMU Students",
    h: "A 5–10 mins walk to your university has never been easier",
    p: "Our well-known and reputable address lets students arrive at lectures, lab sessions, and study groups on foot. Save 45 minutes daily on commute — and reclaim it for what matters: deep focus, better sleep, and a real social life.",
    img: ASSETS.location,
  },
  {
    id: "furnish",
    label: "Smart Furnishing",
    h: "Move in with everything ready and waiting",
    p: "Every Unistay unit is fully furnished with quality beds, study desks, wardrobes, and kitchen essentials. No flat-pack assembly, no missing kettles — just unzip your suitcase and start the semester.",
    img: ASSETS.room,
  },
  {
    id: "light",
    label: "Good Lighting & Ventilation",
    h: "Spaces that work as hard as you do",
    p: "Floor-to-ceiling windows, dual-orientation airflow, and warm 3000K lighting keep your room bright through morning revisions and calm during late-night reading.",
    img: ASSETS.room,
  },
  {
    id: "storage",
    label: "Practical Storage",
    h: "Smart storage for every textbook and tote",
    p: "Under-bed drawers, vertical wardrobes, and a dedicated luggage zone keep your room tidy — even with a full anatomy syllabus on your desk.",
    img: ASSETS.room,
  },
  {
    id: "maint",
    label: "Consistent Maintenance",
    h: "On-site team. Real response times.",
    p: "Aircon leak at 2am? Reported by 9am, fixed by lunch. Our on-site crew runs a strict 24-hour ticket SLA so you never lose study days to a broken light bulb.",
    img: ASSETS.unistaff,
  },
  {
    id: "gated",
    label: "Gated Residential Area",
    h: "Peace of mind, written into the postcode",
    p: "Savanna Bukit Jalil is a private gated community with 24/7 guarded entry, CCTV coverage, and visitor screening — the kind of address parents Google and feel good about.",
    img: ASSETS.peace,
  },
];

const DesignSection = () => {
  const [tab, setTab] = useState(0);
  const t = designTabs[tab];
  return (
    <section className="design-section" data-screen-label="03 Design helps students">
      <div className="container">
        <div className="design-head">
          <h2 className="h-section-sans">Design That Helps Students Live, Study, and Rest Better</h2>
          <p className="lede" style={{ margin: "12px auto 0", textAlign: "center" }}>
            Six design choices that shape every Unistay unit.
          </p>
        </div>
        <div className="design-tabs">
          {designTabs.map((d, i) => (
            <button
              key={d.id}
              className={`design-tab ${tab === i ? "active" : ""}`}
              onClick={() => setTab(i)}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className="design-panel">
          <div className="design-panel-text">
            <h3>{t.h}</h3>
            <p>{t.p}</p>
            <div className="design-panel-illustration">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="1.4" opacity="0.6">
                <rect x="20" y="28" width="80" height="28" rx="2" />
                <line x1="20" y1="38" x2="100" y2="38" />
                <rect x="28" y="42" width="20" height="10" rx="1" />
                <rect x="72" y="42" width="20" height="10" rx="1" />
                <path d="M30 28 L40 18 L60 8 L80 18 L90 28" />
              </svg>
            </div>
          </div>
          <div className="design-panel-art">
            <img src={t.img} alt={t.label} key={t.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ ROOMS & PRICING ============
const rooms = {
  "1-2": [
    {
      id: "r1",
      img: ASSETS.room,
      tag: "Most Popular",
      units: "5 Units left",
      price: "RM 1,400",
      perNote: "/ month",
      title: "2-Rooms Unit (Room 1)",
      desc: "Bright corner suite with twin beds and queen wardrobe",
      bed: 2,
      bath: 1,
      sqft: 280,
    },
    {
      id: "r2",
      img: ASSETS.location,
      tag: null,
      units: "3 Units left",
      price: "RM 1,200",
      perNote: "/ month",
      title: "2-Rooms Unit (Room 2)",
      desc: "Cosy single with private study nook and balcony view",
      bed: 1,
      bath: 1,
      sqft: 210,
    },
    {
      id: "r3",
      img: ASSETS.peace,
      tag: null,
      units: "2 Units left",
      price: "RM 1,650",
      perNote: "/ month",
      title: "2-Rooms Premium Suite",
      desc: "Upgraded suite with ensuite bath and pool view",
      bed: 2,
      bath: 2,
      sqft: 340,
    },
  ],
  "3-5": [
    {
      id: "r4",
      img: ASSETS.room,
      tag: "Best Value",
      units: "4 Units left",
      price: "RM 850",
      perNote: "/ month / room",
      title: "3-Rooms Unit · Shared",
      desc: "Three private bedrooms, shared kitchen and living area",
      bed: 3,
      bath: 2,
      sqft: 920,
    },
    {
      id: "r5",
      img: ASSETS.location,
      tag: "Group Friendly",
      units: "2 Units left",
      price: "RM 780",
      perNote: "/ month / room",
      title: "5-Rooms Unit · Cohort Block",
      desc: "Built for study cohorts — quiet zone with shared lounge",
      bed: 5,
      bath: 3,
      sqft: 1480,
    },
    {
      id: "r6",
      img: ASSETS.peace,
      tag: null,
      units: "1 Unit left",
      price: "RM 950",
      perNote: "/ month / room",
      title: "4-Rooms Penthouse Block",
      desc: "Top-floor unit with skyline views and large balcony",
      bed: 4,
      bath: 3,
      sqft: 1240,
    },
  ],
};

const Rooms = () => {
  const [type, setType] = useState("1-2");
  const list = rooms[type];
  return (
    <section className="rooms container" id="rooms" data-screen-label="04 Rooms & Pricing">
      <div className="rooms-head">
        <span className="eyebrow">Inventory</span>
        <h2 className="h-section-sans" style={{ marginTop: 12 }}>Rooms &amp; Pricing</h2>
        <p>Schedule a private viewing — most units filled before semester intake.</p>
      </div>
      <div className="room-toggle-wrap">
        <div className="room-toggle">
          <button className={type === "1-2" ? "active" : ""} onClick={() => setType("1-2")}>
            Type 1 · 2 Rooms Unit
          </button>
          <button className={type === "3-5" ? "active" : ""} onClick={() => setType("3-5")}>
            Type 2 · 3–5 Rooms Unit
          </button>
        </div>
      </div>
      <div className="room-grid">
        {list.map((r) => (
          <div className="room-card" key={r.id}>
            <div className="room-card-img">
              <img src={r.img} alt={r.title} />
              <div className="room-card-tags">
                {r.tag ? <div className="room-tag popular">{r.tag}</div> : <div />}
                <div className="room-tag units">{r.units}</div>
              </div>
            </div>
            <div className="room-card-body">
              <div className="room-price">
                <strong>{r.price}</strong>
                {r.perNote}
              </div>
              <h3 className="room-title">{r.title}</h3>
              <p className="room-desc">{r.desc}</p>
              <div className="room-stats">
                <div className="room-stat"><I.Bed size={16} /> {r.bed} {r.bed > 1 ? "Beds" : "Bed"}</div>
                <div className="room-stat"><I.Bath size={16} /> {r.bath} {r.bath > 1 ? "Baths" : "Bath"}</div>
                <div className="room-stat"><I.Ruler size={16} /> {r.sqft} sqft</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============ FACILITIES ============
const facilities = [
  { i: "Wifi", t: "High-Speed Internet" },
  { i: "Pool", t: "Swimming Pool" },
  { i: "Shield", t: "24/7 Security System" },
  { i: "Leaf", t: "Sauna" },
  { i: "Building", t: "Clubhouse" },
  { i: "Dumbbell", t: "Gymnasium" },
  { i: "Tennis", t: "Tennis Court" },
  { i: "Laundry", t: "Launderette" },
];

const Facilities = () => (
  <section className="facilities" data-screen-label="05 Facilities">
    <div className="container">
      <div className="facilities-head">
        <span className="eyebrow">Welcome to Unistay Living</span>
        <h2 className="h-section-sans" style={{ marginTop: 14 }}>Facilities &amp; Amenities</h2>
        <p>Shared and private spaces designed for student life — from focused study sessions to weekend recharges, including:</p>
      </div>
      <div className="fac-grid">
        {facilities.map((f) => {
          const Icon = I[f.i];
          return (
            <div className="fac-card" key={f.t}>
              <div className="fac-icon"><Icon size={28} /></div>
              <h4 className="fac-title">{f.t}</h4>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ============ PEACE OF MIND ============
const Peace = () => (
  <section className="peace" data-screen-label="06 Peace of mind">
    <div className="peace-text">
      <span className="eyebrow" style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}>For Parents</span>
      <h2 style={{ marginTop: 16 }}>
        Peace of Mind, From Day One —<br />
        We understand the importance of knowing your child is safe and supported.
      </h2>
      <p>
        A calm, well-designed place to live. Unistay Living is not a party house or short-term rental. It is a quiet, professionally managed student residence designed for students who want a stable, comfortable environment throughout their time at IMU.
      </p>
      <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
        <button className="btn" style={{ background: "#fff", color: "var(--brand)" }}>
          Talk to a parent advisor <I.ArrowRight size={14} />
        </button>
        <button className="btn btn-ghost">Download brochure</button>
      </div>
    </div>
    <div className="peace-img">
      <img src={ASSETS.peace} alt="Students together at Unistay" />
    </div>
  </section>
);

// ============ PROVIDES ============
const provides = [
  { i: "Wrench", t: "In-House Maintenance Team", p: "We handle all jobs for you. Hassle-free." },
  { i: "Phone", t: "24/7 Emergency Contact Support", p: "We will hear you. Any day, any time." },
  { i: "Lock", t: "Safe & Secure Living", p: "Keycard and biometric entry to every common space." },
  { i: "HomeHeart", t: "Thoughtfully Designed Student Homes", p: "All rooms set up and furnished for your busy life." },
  { i: "Shield", t: "Safe and Convenient Access to Campus", p: "Well-lit, walkable, 5-minute route to IMU." },
  { i: "Money", t: "Simple & Transparent Booking", p: "No surprise fees. Get a written quote upfront." },
];

const Provides = () => (
  <section className="provides container" data-screen-label="07 Unistay Living provides">
    <div className="provides-grid">
      <div>
        <span className="eyebrow">About Unistay Living</span>
        <h2 className="h-section-sans" style={{ marginTop: 14, maxWidth: 540 }}>
          Unistay Living provides:
        </h2>
        <p className="lede" style={{ marginTop: 16 }}>
          Unistay's signature service includes 6 commitments to make Unistay your safe, thoughtful, and consistent home for the duration of your studies. We are proud to be an official accommodation partner endorsed by IMU.
        </p>
        <div className="provides-list">
          {provides.map((p) => {
            const Icon = I[p.i];
            return (
              <div className="provide-item" key={p.t}>
                <div className="provide-icon"><Icon size={20} /></div>
                <h4>{p.t}</h4>
                <p>{p.p}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="provides-img">
        <img src={ASSETS.unistaff} alt="Unistay Living staff supporting students" />
        <a href="#contact" className="provides-img-cta">
          Move in with confidence <I.ArrowRight size={14} />
        </a>
      </div>
    </div>
  </section>
);

// ============ FAQ ============
const faqs = [
  {
    q: "Room Furnishings and Amenities",
    a: (
      <div className="faq-rich">
        <div className="faq-group">
          <h5>Living Area</h5>
          <ul>
            <li>Dining table and 4 chairs</li>
            <li>Sofa set</li>
            <li>Coffee table</li>
            <li>TV cabinet (TV not provided)</li>
            <li>Air-conditioner</li>
          </ul>
        </div>
        <div className="faq-group">
          <h5>Rooms</h5>
          <ul>
            <li>Queen-sized bed with mattress and 1 pillow</li>
            <li>Wardrobe</li>
            <li>Study table, book shelf and chair</li>
            <li>Air-conditioner</li>
          </ul>
        </div>
        <div className="faq-group">
          <h5>Kitchen &amp; Laundry</h5>
          <ul>
            <li>Microwave, induction cooker, refrigerator, kettle, water filter</li>
            <li>Basic crockery, cutlery, pots and pans</li>
            <li>Washing machine, clothes drying rack</li>
          </ul>
        </div>
        <div className="faq-group">
          <h5>Common Area</h5>
          <ul>
            <li>Iron with ironing board</li>
            <li>Shoe rack</li>
          </ul>
        </div>
        <div className="faq-group">
          <h5>Bathroom</h5>
          <ul>
            <li>Clothes hangers</li>
            <li>Mirror</li>
          </ul>
        </div>
        <div className="faq-note">
          <strong>Personal items excluded:</strong> Applicants must bring their own bedding set — mattress protector (compulsory), pillowcases, duvet, bed sheets, towels, and toiletries. These can be purchased at Pavilion Bukit Jalil Mall, or duvets and bed sheets can be bought directly from Uni Stay.
        </div>
      </div>
    ),
  },
  {
    q: "Application Process",
    a: (
      <div className="faq-rich">
        <ul>
          <li>Applicants can apply for student accommodation once they have accepted either a Full Offer or a Conditional Offer of study from the University.</li>
          <li>The University reserves the right to assign either a 3-bedroom or 2-bedroom condo unit. Room-type allocation is subject to availability, and condo unit assignments are based on the same gender.</li>
          <li>
            To apply for accommodation at Savanna Condominium, please apply through this <a href="#contact">application link</a>.
          </li>
          <li>
            If you do not hear back from the University within one week of applying, please email{" "}
            <a href="mailto:booking@unistay.my">booking@unistay.my</a>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    q: "Payment Details",
    a: (
      <div className="faq-rich">
        <p>Payment can be made via online transfer or telegraphic transfer to the following bank account:</p>
        <div className="faq-bank">
          <div><span>Account Name</span><strong>IMU Education Sdn Bhd</strong></div>
          <div><span>Bank</span><strong>Malayan Banking Berhad</strong></div>
          <div><span>Branch</span><strong>Jalan Yong Shook Lin, Petaling Jaya</strong></div>
          <div><span>Account No</span><strong>5-14187-427455 (Maybank MYR A/C)</strong></div>
          <div><span>Swift Code</span><strong>MBBEMYKL</strong></div>
        </div>
        <p>
          Please email proof of payment (e.g. bank-in slip, transfer receipt) to{" "}
          <a href="mailto:findept@imu.edu.my">findept@imu.edu.my</a> and CC{" "}
          <a href="mailto:booking@unistay.my">booking@unistay.my</a> with the student's ID number, name and contact number. State <em>"Savanna Accommodation Payment"</em> in the subject line.
        </p>
        <div className="faq-note">
          <strong>International payments via Flywire:</strong> IMU has partnered with Flywire to streamline international payments — pay securely from any country and any bank, typically in your home currency. Visit{" "}
          <a href="https://flywire.com/pay/payitm" target="_blank" rel="noreferrer">flywire.com/pay/payitm</a> to get started. For help, see{" "}
          <a href="https://www.flywire.com/help" target="_blank" rel="noreferrer">flywire.com/help</a> or contact{" "}
          <a href="mailto:support@flywire.com">support@flywire.com</a>.
        </div>
      </div>
    ),
  },
  {
    q: "Airport Pick-up Services",
    a: (
      <div className="faq-rich">
        <p>
          IMU provides free airport pick-up services for international students upon arrival from KLIA to the IMU Campus or Student Accommodation.
        </p>
        <p>
          Information on this service is available <a href="#contact">here</a>.
        </p>
      </div>
    ),
  },
  {
    q: "Check-In",
    a: (
      <div className="faq-rich">
        <p>
          Uni Stay staff will coordinate with students to meet and greet them as they arrive to check in to the property, and will conduct a proper handover.
        </p>
        <p>
          Check-in occurs <strong>one week before the enrollment date</strong>. Uni Stay staff will reach out to you to assist with your check-in details.
        </p>
      </div>
    ),
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(1);
  return (
    <section className="faq container" data-screen-label="08 FAQ">
      <div className="faq-grid">
        <div>
          <span className="eyebrow">Help center</span>
          <h2 className="h-section-sans" style={{ marginTop: 14 }}>
            Frequently Asked Questions
          </h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Quick answers for students and parents. Need something specific? <a href="#contact" style={{ color: "var(--brand)", fontWeight: 600 }}>Get in touch</a>.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-icon"><I.Plus size={16} /></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTACT ============
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };
  return (
    <section className="contact" id="contact" data-screen-label="09 Contact">
      <div className="contact-text">
        <h6>Contact us today</h6>
        <h2>Ready to Move in?</h2>
        <p>
          Let our admissions team safely help you apply for the perfect home — within 48 hours of submission.
        </p>
        <div style={{ display: "flex", gap: 22, marginTop: 26, alignItems: "center" }}>
          <img src={ASSETS.moving} alt="Moving in to Unistay" style={{ width: "60%", borderRadius: "var(--r-lg)", maxWidth: 360 }} />
        </div>
      </div>
      {!sent ? (
        <form className="contact-form" onSubmit={submit}>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="full"
          />
          <textarea
            placeholder="When would you like to move in?"
            className="full"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className="submit-row">
            <button type="submit">Submit enquiry</button>
            <span style={{ fontSize: 12, opacity: 0.85 }}>We typically reply within 4 business hours.</span>
          </div>
        </form>
      ) : (
        <div className="contact-form">
          <div className="contact-success">
            <strong>Enquiry received — thanks, {form.name.split(" ")[0]}!</strong>
            <span style={{ fontSize: 14, opacity: 0.9 }}>
              An admissions advisor will be in touch within 4 business hours at {form.email}.
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

// ============ FOOTER ============
const Footer = () => (
  <footer className="footer" data-screen-label="10 Footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <img src={ASSETS.logo} alt="Unistay" className="footer-logo" />
          <p className="footer-desc">
            Purpose-managed student accommodation at Savanna Bukit Jalil. Endorsed accommodation partner of IMU University.
          </p>
          <div className="footer-socials">
            <a className="footer-soc" href="#"><I.IG size={18} /></a>
            <a className="footer-soc" href="#"><I.FB size={18} /></a>
            <a className="footer-soc" href="#"><I.TT size={18} /></a>
            <a className="footer-soc" href="#"><I.YT size={18} /></a>
          </div>
        </div>
        <div>
          <h5>Visit Us</h5>
          <ul>
            <li><a href="#"><I.MapPin size={14} /> Jalan 2A, Savanna Bukit Jalil</a></li>
            <li><a href="#"><I.MapPin size={14} /> Jalan Sentral 2</a></li>
            <li><a href="#"><I.MapPin size={14} /> Kuala Lumpur, MY</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul>
            <li><a href="#"><I.Phone size={14} /> +60 3-9012 7626</a></li>
            <li><a href="#"><I.HomeHeart size={14} /> stay@unistay.com.my</a></li>
            <li><a href="#"><I.Wrench size={14} /> Support portal</a></li>
          </ul>
        </div>
        <div>
          <h5>About Us</h5>
          <ul>
            <li><a href="#">Our story</a></li>
            <li><a href="#">IMU partnership</a></li>
            <li><a href="#">Press kit</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Unistay Sdn. Bhd. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookie preferences</a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, {
  ASSETS, Nav, Hero, Why, DesignSection, Rooms, Facilities, Peace, Provides, FAQ, Contact, Footer,
});

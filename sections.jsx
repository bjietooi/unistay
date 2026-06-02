// All section components for the Unistay homepage.
const { useState, useEffect, useRef } = React;

const ASSETS = {
  logo: "https://ik.imagekit.io/cr8hodb6q/unistay/info/brown_horizontal.png",
  logoWhite: "https://ik.imagekit.io/cr8hodb6q/unistay/info/white_horizontal.png",
  logoSquare: "https://ik.imagekit.io/cr8hodb6q/unistay/info/brown_square.png",
  heroBg: "https://ik.imagekit.io/cr8hodb6q/unistay/hero_bg.jpg",
  heroCondo: "https://ik.imagekit.io/cr8hodb6q/unistay/Savanna_bukit_jalil_heroshot.png?updatedAt=1779236598065",
  heroModel: "https://ik.imagekit.io/cr8hodb6q/unistay/university_student_model.png?updatedAt=1779236598029",
  heroBadge: "https://ik.imagekit.io/cr8hodb6q/unistay/official_accomodation_partner.png?updatedAt=1779236598144",
  grouped: "https://ik.imagekit.io/cr8hodb6q/unistay/grouped.png?updatedAt=1779237927118",
  peace: "https://ik.imagekit.io/cr8hodb6q/unistay/student%20peace%20of%20mind%20for%20parenets.png?updatedAt=1779236598106",
  unistaff: "https://ik.imagekit.io/cr8hodb6q/unistay/unistaff.png?updatedAt=1779236598101",
  room: "https://ik.imagekit.io/cr8hodb6q/unistay/room_image1.png?updatedAt=1779236597984",
  location: "https://ik.imagekit.io/cr8hodb6q/unistay/location%20img.png?updatedAt=1779236597733",
  about: "https://ik.imagekit.io/cr8hodb6q/unistay/environment.webp",
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
          <img src={ASSETS.logoWhite} alt="Unistay" />
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
            <img src={ASSETS.about} alt="Inside a Unistay room at Savanna Bukit Jalil" />
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
const MAP_ROUTES = {
  main: {
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Main%20Entrance.png",
    label: "Main Entrance",
    time: "9 min",
  },
  back: {
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Back%20Entrance%20-%20Shortcut.png",
    label: "Back Entrance",
    time: "5 min",
  },
};

const FLOOR_PLANS = {
  type1: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Type1.png",
  type2: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Type2.png",
};

const STATIC_DESIGN_CARDS = [
  {
    id: "light",
    icon: "Sparkle",
    eyebrow: "Environment",
    title: "Good Lighting & Ventilation",
    desc: "Floor-to-ceiling windows and dual-orientation airflow keep rooms bright and fresh.",
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/goodlight_ventilation.webp",
  },
  {
    id: "storage",
    icon: "HomeHeart",
    eyebrow: "Furnished",
    title: "Practical Storage",
    desc: "Under-bed drawers, tall wardrobes, and a dedicated luggage zone for a tidy room.",
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/practical%20storage.webp",
  },
  {
    id: "maint",
    icon: "Wrench",
    eyebrow: "Service",
    title: "Consistent Maintenance",
    desc: "On-site crew with a strict 24-hour ticket SLA — issues fixed before they cost you study days.",
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/maintainence.webp",
  },
  {
    id: "gated",
    icon: "Shield",
    eyebrow: "Security",
    title: "Gated Residential Area",
    desc: "A private gated community with 24/7 guarded entry, CCTV, and visitor screening.",
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/gated.webp",
  },
];

const LocationCard = () => {
  const [route, setRoute] = useState("main");
  const active = MAP_ROUTES[route];
  return (
    <div className="df-feature">
      <div className="df-feature-media">
        <img src={active.img} alt={active.label} />
        <div className="df-feature-stat">
          <strong>{active.time}</strong>
          <span>walk to IMU</span>
        </div>
        <div className="df-route-toggle">
          {Object.entries(MAP_ROUTES).map(([k, v]) => (
            <button
              key={k}
              className={"df-route-btn" + (route === k ? " active" : "")}
              onClick={(e) => { e.stopPropagation(); setRoute(k); }}
            >
              <I.MapPin size={12} /> {v.label}
            </button>
          ))}
        </div>
      </div>
      <div className="df-feature-body">
        <span className="df-eyebrow">Location</span>
        <h3 className="df-feature-title">Strategic Location for IMU Students</h3>
        <p className="df-feature-desc">A 5–10 minute walk to campus — through the main gate or the back-entrance shortcut. Save 45 minutes daily on commute and reclaim it for deep focus, better sleep, and a real social life.</p>
      </div>
    </div>
  );
};

const LayoutCard = () => {
  const [plan, setPlan] = useState("type1");
  return (
    <div className="df-feature">
      <div className="df-feature-media df-feature-media-dark">
        <img src={FLOOR_PLANS[plan]} alt={"Floor plan " + plan} />
        <div className="df-plan-toggle">
          {[
            { k: "type1", label: "Type 1 · 2-Room" },
            { k: "type2", label: "Type 2 · 3–5 Room" },
          ].map((p) => (
            <button
              key={p.k}
              className={"df-plan-btn" + (plan === p.k ? " active" : "")}
              onClick={(e) => { e.stopPropagation(); setPlan(p.k); }}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="df-feature-hint">Tap to compare floor plans</div>
      </div>
      <div className="df-feature-body">
        <span className="df-eyebrow">Layout</span>
        <h3 className="df-feature-title">Practical Layout & Furnishing</h3>
        <p className="df-feature-desc">Every unit is mapped for student life — study desk, wardrobe, kitchen, and shared living exactly where they belong. Compare the 2-room and 3–5 room floor plans side by side.</p>
      </div>
    </div>
  );
};

const DesignSection = () => (
  <section className="design-section" data-screen-label="03 Design helps students">
    <div className="container">
      <div className="design-head">
        <h2 className="h-section-sans">Design That Helps Students Live, Study, and Rest Better</h2>
        <p className="lede" style={{ margin: "12px auto 0", textAlign: "center" }}>
          Two things matter most — where you live and how it's laid out. Everything else supports them.
        </p>
      </div>
      <div className="df-featured-grid">
        <LocationCard />
        <LayoutCard />
      </div>
      <div className="df-support-grid">
        {STATIC_DESIGN_CARDS.map((card) => {
          const Icon = I[card.icon];
          return (
            <div className="df-support-card" key={card.id}>
              <div className="df-support-media">
                <img src={card.img} alt={card.title} />
                <div className="df-support-icon"><Icon size={16} /></div>
              </div>
              <div className="df-support-body">
                <span className="df-eyebrow">{card.eyebrow}</span>
                <h4 className="df-support-title">{card.title}</h4>
                <p className="df-support-desc">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ============ ROOMS & PRICING ============
const roomsData = {
  type1: {
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
    bedding: [
      { type: "Type A", price: "RM 200" },
      { type: "Type B", price: "RM 400" },
    ],
  },
  type2: [
    {
      id: "t2-master",
      img: ASSETS.room,
      tag: "Premium",
      title: "Master Twin (Ensuite)",
      desc: "Ensuite twin room with private bathroom — ideal for privacy-conscious students",
      bed: 2, bath: 1, sqft: 320,
      deposit: 550, semRental: 3300, fullPayment: 3850, installment1: 1000, finalPayment: 2850,
    },
    {
      id: "t2-middle",
      img: ASSETS.room,
      tag: "Best Value",
      title: "Middle Twin",
      desc: "Shared twin room in the heart of the unit, close to kitchen and living areas",
      bed: 2, bath: 1, sqft: 260,
      deposit: 450, semRental: 2700, fullPayment: 3150, installment1: 1000, finalPayment: 2150,
    },
    {
      id: "t2-single",
      img: ASSETS.room,
      tag: null,
      title: "Single Room 3 / 4 / 5",
      desc: "Single-occupancy room in a 3–5 room unit — quiet, private, ideal for focused study",
      bed: 1, bath: 1, sqft: 200,
      deposit: 680, semRental: 4080, fullPayment: 4760, installment1: 1500, finalPayment: 2580,
    },
  ],
};

const fmtRM = (n) => "RM " + n.toLocaleString();

const RoomCard = ({ room, showBedding, bedding }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="room-card">
      <div className="room-card-img">
        <img src={room.img} alt={room.title} />
        <div className="room-card-tags">
          {room.tag ? <div className="room-tag popular">{room.tag}</div> : <div />}
        </div>
      </div>
      <div className="room-card-body">
        <div className="rp-hero-price">
          <span className="rp-price-eyebrow">1 Semester Rental</span>
          <div className="rp-price-row">
            <strong className="rp-price-num">{fmtRM(room.semRental)}</strong>
            <span className="rp-price-per">/ sem</span>
          </div>
        </div>
        <h3 className="room-title">{room.title}</h3>
        <p className="room-desc">{room.desc}</p>
        <div className="room-stats">
          <div className="room-stat"><I.Bed size={15} /> {room.bed} {room.bed > 1 ? "Beds" : "Bed"}</div>
          <div className="room-stat"><I.Bath size={15} /> {room.bath} Bath</div>
          <div className="room-stat"><I.Ruler size={15} /> {room.sqft} sqft</div>
        </div>
        <div className="rp-accordion">
          <button
            className={"rp-accordion-btn" + (open ? " open" : "")}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span>View Payment Plan</span>
            <span className={"rp-chevron" + (open ? " open" : "")}>
              <I.ChevronDown size={15} />
            </span>
          </button>
          <div className={"rp-accordion-body" + (open ? " open" : "")}>
            <div className="rp-payment-plan">
              <div className="rp-pay-row">
                <span>Accommodation Deposit</span>
                <strong className="rp-pay-val deposit">{fmtRM(room.deposit)}</strong>
              </div>
              <div className="rp-pay-row full-pay">
                <span>Full Payment</span>
                <strong className="rp-pay-val full">{fmtRM(room.fullPayment)}</strong>
              </div>
              <div className="rp-pay-or">
                <span>or pay by instalment</span>
              </div>
              <div className="rp-pay-row">
                <span>1st Instalment</span>
                <strong className="rp-pay-val">{fmtRM(room.installment1)}</strong>
              </div>
              <div className="rp-pay-row">
                <span>Final Payment (Prior Check-in)</span>
                <strong className="rp-pay-val">{fmtRM(room.finalPayment)}</strong>
              </div>
              {showBedding && bedding && (
                <div className="rp-bedding">
                  <div className="rp-bedding-hd">
                    <I.Sparkle size={11} /> Bedding Add-ons (Optional)
                  </div>
                  <div className="rp-bedding-opts">
                    {bedding.map((b) => (
                      <div key={b.type} className="rp-bedding-chip">
                        <span>{b.type}</span>
                        <span className="rp-bedding-price">{b.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="rp-cta-btn">
          Enquire Now <I.ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const Rooms = () => {
  const [type, setType] = useState("type1");
  const [stuType, setStuType] = useState("UG");

  const activeRooms = type === "type1" ? roomsData.type1[stuType] : roomsData.type2;

  return (
    <section className="rooms container" id="rooms" data-screen-label="04 Rooms & Pricing">
      <div className="rooms-head">
        <span className="eyebrow">Inventory</span>
        <h2 className="h-section-sans" style={{ marginTop: 12 }}>Rooms &amp; Pricing</h2>
        <p>Schedule a private viewing — most units filled before semester intake.</p>
      </div>

      <div className="rp-controls">
        <div className="rp-seg-track">
          {[
            { key: "type1", label: "Type 1 · 2-Room Units", badge: "2 Rooms" },
            { key: "type2", label: "Type 2 · 3–5 Room Units", badge: "3–5 Rooms" },
          ].map((t) => (
            <button
              key={t.key}
              className={"rp-seg-btn" + (type === t.key ? " active" : "")}
              onClick={() => setType(t.key)}
            >
              <span className="rp-seg-badge">{t.badge}</span>
              {t.label}
            </button>
          ))}
        </div>

        {type === "type1" && (
          <div className="rp-type1-controls">
            <div className="rp-sub-toggle">
              {[
                { key: "UG", label: "Undergraduate" },
                { key: "PreU", label: "Pre-University" },
              ].map((s) => (
                <button
                  key={s.key}
                  className={"rp-sub-btn" + (stuType === s.key ? " active" : "")}
                  onClick={() => setStuType(s.key)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            {stuType === "PreU" && (
              <p className="rp-preu-note">
                <I.Sparkle size={11} /> Pre-University programmes have a shorter semester duration — pricing reflects this.
              </p>
            )}
          </div>
        )}
      </div>

      <div className={"room-grid" + (type === "type1" ? " grid-2" : "")}>
        {activeRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            showBedding={type === "type1"}
            bedding={roomsData.type1.bedding}
          />
        ))}
      </div>
    </section>
  );
};

// ============ FACILITIES ============
const facilities = [
  { i: "Pool", t: "Swimming Pool", d: "Resort-style pool for laps or unwinding after class.", feature: true,
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/swimmingpool.webp" },
  { i: "Dumbbell", t: "Gymnasium Room", d: "Fully-equipped gym, open early to late.", feature: true,
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/gym.webp" },
  { i: "Badminton", t: "Badminton Hall" },
  { i: "Tennis", t: "Tennis Courts" },
  { i: "Building", t: "Clubhouse" },
  { i: "Leaf", t: "Sauna" },
  { i: "Store", t: "Mini-Mart" },
  { i: "Laundry", t: "Launderette" },
  { i: "Playground", t: "Playground" },
  { i: "Fence", t: "Perimeter Fencing" },
  { i: "Shield", t: "24-Hour Security System" },
];

const Facilities = () => {
  const featured = facilities.filter((f) => f.feature);
  const rest = facilities.filter((f) => !f.feature);
  return (
    <section className="facilities" data-screen-label="05 Facilities">
      <div className="container">
        <div className="facilities-head">
          <span className="eyebrow">Welcome to Unistay Living</span>
          <h2 className="h-section-sans" style={{ marginTop: 14 }}>Facilities &amp; Amenities</h2>
          <p>Shared and private spaces designed for student life — from focused study sessions to weekend recharges.</p>
        </div>
        <div className="fac-featured">
          {featured.map((f) => {
            const Icon = I[f.i];
            return (
              <div className="fac-hero" key={f.t}>
                <img src={f.img} alt={f.t} />
                <div className="fac-hero-overlay" />
                <div className="fac-hero-content">
                  <div className="fac-hero-icon"><Icon size={20} /></div>
                  <div>
                    <h4>{f.t}</h4>
                    <p>{f.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="fac-grid">
          {rest.map((f) => {
            const Icon = I[f.i];
            return (
              <div className="fac-card" key={f.t}>
                <div className="fac-icon"><Icon size={24} /></div>
                <h4 className="fac-title">{f.t}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

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
  {
    i: "Plane",
    t: "Airport Transfer",
    p: "IMU provides free airport pick-up for international students upon arrival from KLIA to the IMU Campus / Student Accommodation.",
    link: { label: "View service details", href: "#contact" },
  },
  {
    i: "Bus",
    t: "Shuttle Service",
    p: "Free shuttle service running to and from the student accommodation and IMU Main Campus.",
  },
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
          Unistay's signature service includes a full set of commitments to make Unistay your safe, thoughtful, and consistent home for the duration of your studies. We are proud to be an official accommodation partner endorsed by IMU.
        </p>
        <div className="provides-list">
          {provides.map((p) => {
            const Icon = I[p.i];
            return (
              <div className="provide-item" key={p.t}>
                <div className="provide-icon"><Icon size={20} /></div>
                <h4>{p.t}</h4>
                <p>{p.p}</p>
                {p.link && (
                  <a className="provide-link" href={p.link.href}>
                    {p.link.label} <I.ArrowRight size={12} />
                  </a>
                )}
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
    q: "How do I know which payment category applies to me?",
    a: (
      <div className="faq-rich">
        <p>
          Your payment scheme is based on your level of study. <strong>Foundation students</strong> should refer to the <strong>Pre-U</strong> category, while <strong>Degree students</strong> should follow the <strong>Undergraduate (UG)</strong> rates and schedules.
        </p>
      </div>
    ),
  },
  {
    q: "Can I pay my accommodation fees in installments?",
    a: (
      <div className="faq-rich">
        <p>
          Yes. If you prefer not to pay the full amount upfront, you may pay the <strong>1st Installment</strong> (as indicated in the pricing table) to secure your booking.
        </p>
        <p>
          Please note that the remaining balance must be settled at least <strong>two weeks prior to your check-in date</strong>, to allow our team sufficient time for payment verification and room preparation.
        </p>
      </div>
    ),
  },
  {
    q: "Can I choose a specific room after a site visit?",
    a: (
      <div className="faq-rich">
        <p>To ensure a smooth experience for all applicants, we follow a structured viewing and allocation process:</p>
        <ul>
          <li><strong>In-person viewings:</strong> You are welcome to tour our facilities. Due to operational limits, we can show a maximum of <strong>2 units per visit</strong>, depending on current availability.</li>
          <li><strong>Remote viewings (video):</strong> For those unable to visit in person, we can provide a representative video of <strong>one unit per category</strong>. We do not provide individual videos for every specific room number.</li>
          <li><strong>Preferences:</strong> You may indicate your preferred room or floor on your application form. While we cannot guarantee a specific room, we fulfil these requests on a best-effort basis.</li>
        </ul>
      </div>
    ),
  },
  {
    q: "What if I want to change my room after I move in?",
    a: (
      <div className="faq-rich">
        <p>We want you to be comfortable in your new home. If you are unsatisfied with your assigned unit after payment and move-in:</p>
        <ul>
          <li>You may request a <strong>one-time room change</strong>.</li>
          <li>Approval is strictly subject to <strong>room availability</strong>.</li>
          <li>Additional administrative fees or rent differences may apply depending on the new unit category.</li>
        </ul>
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

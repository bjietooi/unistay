// All section components for the Unistay homepage.
const { useState, useEffect, useRef } = React;

const ASSETS = {
  logo: "https://ik.imagekit.io/cr8hodb6q/unistay/info/brown_horizontal.png",
  logoWhite: "https://ik.imagekit.io/cr8hodb6q/unistay/info/white_horizontal.png",
  logoSquare: "https://ik.imagekit.io/cr8hodb6q/unistay/info/brown_square.png",
  heroBg: "https://ik.imagekit.io/cr8hodb6q/unistay/hero_bg.jpg",
  heroCondo: "https://ik.imagekit.io/cr8hodb6q/unistay/Savanna_bukit_jalil_heroshot.png?updatedAt=1779236598065",
  heroModel: "https://ik.imagekit.io/cr8hodb6q/unistay/university_student_model.png?updatedAt=1779236598029",
  imuLogo: "https://imu.edu.my/wp-content/uploads/2025/01/cropped-IMU_Logo_Icon-512.png",
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
          <a
            className="btn btn-primary nav-cta"
            style={{ padding: "10px 22px", fontSize: 14 }}
            href={APPLICATION_FORM}
            target="_blank"
            rel="noreferrer"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

// Official accommodation application form (Google Form, from IMU's page).
const APPLICATION_FORM = "https://forms.gle/jyZn6WNKR3A63SCf8";

// ============ HERO ============
// Room tour video (YouTube Short) shown in the play-button modal.
const ROOM_TOUR_VIDEO = "https://www.youtube.com/embed/vE9Er44cW-g?autoplay=1&rel=0";

// Official IMU unit photos shown in the "View Rooms" lightbox carousel.
const ROOM_GALLERY = [
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Overview.jpeg", label: "Unit Overview" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Living-Room-V1.jpeg", label: "Living Room" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Living-Room-V2.jpeg", label: "Living Room" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-KitchenV1.jpeg", label: "Kitchen" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Dining-Room-V1.jpeg", label: "Dining Room" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Dining-Room-V2.jpeg", label: "Dining Room" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Bedroom-1.jpeg", label: "Bedroom" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Bedroom-2.jpeg", label: "Bedroom" },
  { src: "https://imu.edu.my/wp-content/uploads/2025/11/IMU-Savanna-Bathroom1.jpeg", label: "Bathroom" },
];

// Quick eased scroll — faster than native smooth scrolling.
const fastScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const start = window.scrollY;
  const target = el.getBoundingClientRect().top + start;
  const dur = 450;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  let t0 = null;
  const step = (ts) => {
    if (t0 === null) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    window.scrollTo(0, start + (target - start) * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// Shared modal behaviour: lock page scroll, close on Escape.
// Scroll lock must go on <html> — it is the scrolling element here, and its
// `overflow-x: clip` stops body overflow from propagating to the viewport.
const useModalBehaviour = (onClose, onKey) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      else if (onKey) onKey(e);
    };
    window.addEventListener("keydown", handler);
    const docEl = document.documentElement;
    const prevDoc = docEl.style.overflow;
    const prevBody = document.body.style.overflow;
    docEl.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      docEl.style.overflow = prevDoc;
      document.body.style.overflow = prevBody;
    };
  }, []);
};

// Render modals at document.body — escapes the hero's `isolation: isolate`
// stacking context, which otherwise lets later sections paint over the overlay.
const ModalPortal = ({ children }) => ReactDOM.createPortal(children, document.body);

const VideoModal = ({ onClose }) => {
  useModalBehaviour(onClose);
  return (
    <ModalPortal>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Room tour video">
        <button className="modal-close" onClick={onClose} aria-label="Close video"><I.X size={22} /></button>
        <div className="video-modal" onClick={(e) => e.stopPropagation()}>
          <iframe
            src={ROOM_TOUR_VIDEO}
            title="Unistay room tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </ModalPortal>
  );
};

// Generic image lightbox — `items` is [{src, label}], `initial` picks the start photo.
const Lightbox = ({ items, initial = 0, onClose }) => {
  const [idx, setIdx] = useState(initial);
  const count = items.length;
  const next = () => setIdx((i) => (i + 1) % count);
  const prev = () => setIdx((i) => (i - 1 + count) % count);
  useModalBehaviour(onClose, (e) => {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });
  const item = items[idx];
  return (
    <ModalPortal>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Room photo gallery">
        <button className="modal-close" onClick={onClose} aria-label="Close gallery"><I.X size={22} /></button>
        <div className="lightbox" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-nav prev" onClick={prev} aria-label="Previous photo"><I.ChevronLeft size={24} /></button>
          <figure className="lightbox-stage">
            <img src={item.src} alt={item.label} key={item.src} />
            <figcaption>
              <strong>{item.label}</strong>
              <span>{idx + 1} / {count}</span>
            </figcaption>
          </figure>
          <button className="lightbox-nav next" onClick={next} aria-label="Next photo"><I.ChevronRight size={24} /></button>
        </div>
        <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
          {items.map((g, i) => (
            <button
              key={g.src}
              className={"lightbox-thumb" + (i === idx ? " active" : "")}
              onClick={() => setIdx(i)}
              aria-label={`Photo ${i + 1}: ${g.label}`}
            >
              <img src={g.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </ModalPortal>
  );
};

const Hero = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [modal, setModal] = useState(null); // null | "video" | "rooms"
  return (
    <section className="hero" id="home" data-screen-label="01 Hero">
      <Nav />

      {/* untinted bg image */}
      <div className="hero-bg" />

      {/* full-bleed navy band — extends from the badge across the hero,
          passing behind the title (desktop) / down behind the condo (mobile) */}
      <div className="hero-band" aria-hidden="true" />

      {/* partner badge — composed card with slow staggered reveal */}
      <div
        className="hero-badge hover-float-a"
        role="img"
        aria-label="Official Accommodation Partner — IMU University"
      >
        <div className="hero-badge-card">
          <span className="hb-sheen" aria-hidden="true" />
          <div className="hb-icon">
            <img src={ASSETS.imuLogo} alt="" draggable={false} />
          </div>
          <div className="hb-text">
            <span className="hb-official">Official</span>
            <strong className="hb-title">Accommodation<br />Partner</strong>
            <span className="hb-uni">IMU University</span>
          </div>
        </div>
      </div>

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
        <button className="hero-disc-pill left" data-role="book" onClick={() => fastScrollTo("contact")}>
          Book A Viewing
        </button>
        <button className="hero-disc-play" data-role="play" aria-label="Play room tour" onClick={() => setModal("video")}>
          <I.Play size={26} />
          <span className="hero-disc-play-label">Play Room Tour</span>
        </button>
        <button className="hero-disc-pill right" data-role="view" onClick={() => setModal("rooms")}>
          View Rooms
        </button>
      </div>

      {modal === "video" && <VideoModal onClose={() => setModal(null)} />}
      {modal === "rooms" && <Lightbox items={ROOM_GALLERY} onClose={() => setModal(null)} />}
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
              <div className="why-feat-icon"><I.Shield size={20} /></div>
              <div className="why-feat-text">
                <strong>Official IMU Accommodation</strong>
                <span>Directly managed under IMU — exclusive same-gender student units</span>
              </div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon"><I.MapPin size={20} /></div>
              <div className="why-feat-text">
                <strong>5-Minute Walk to IMU</strong>
                <span>400–600m walking distance to campus</span>
              </div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon"><I.Sparkle size={20} /></div>
              <div className="why-feat-text">
                <strong>Newly Refurbished &amp; Fully Furnished</strong>
                <span>Move-in ready layouts designed for study and rest</span>
              </div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon"><I.Wrench size={20} /></div>
              <div className="why-feat-text">
                <strong>On-Site Support Team</strong>
                <span>Dedicated live-in warden and maintenance crew</span>
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
    maps: "https://www.google.com/maps/dir/IMU+University+-+Bukit+Jalil+Main+Campus,+126,+Jln+Jalil+Perkasa+19,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/Savanna+Bukit+Jalil,+04-01,+Jalan+1%2F155a,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.0580767,101.6863521,18z/data=!4m13!4m12!1m5!1m1!1s0x31cc4a9309dc48d9:0x403c8863f06fcdb9!2m2!1d101.6872524!2d3.0597789!1m5!1m1!1s0x31cc4a945971eaf7:0x974b12179bfdee9!2m2!1d101.687999!2d3.0560158?entry=ttu",
  },
  back: {
    img: "https://ik.imagekit.io/cr8hodb6q/unistay/info/Back%20Entrance%20-%20Shortcut.png",
    label: "Back Entrance",
    time: "5 min",
    maps: "https://www.google.com/maps/dir/3.0570562,101.6878005/IMU+University+-+Bukit+Jalil+Main+Campus,+126,+Jln+Jalil+Perkasa+19,+Bukit+Jalil,+57000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.0584329,101.6859164,18z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x31cc4a9309dc48d9:0x403c8863f06fcdb9!2m2!1d101.6872524!2d3.0597789!3e2?entry=ttu",
  },
};

// Only the 2-room (2-tenant) unit is offered for now — Type 2 (3–5 room) removed.
const FLOOR_PLAN = "https://ik.imagekit.io/cr8hodb6q/unistay/info/Type1.png";

const STATIC_DESIGN_CARDS = [
  {
    id: "light",
    icon: "Sparkle",
    eyebrow: "Environment",
    title: "Optimized Light & Airflow",
    desc: "Floor-to-ceiling windows and dual-orientation layouts designed to maximize mental energy and everyday well-being.",
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
    title: "Professional On-Site Management",
    desc: "Backed by a live-in warden and a maintenance crew operating on a strict SLA.",
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
        <a
          className="df-map-link"
          href={active.maps}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${active.label} walking route to IMU in Google Maps`}
        >
          <img src={active.img} alt={active.label} />
          <span className="df-map-open">
            <I.MapPin size={13} /> Open in Google Maps <I.ArrowRight size={12} />
          </span>
        </a>
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
        <h3 className="df-feature-title">The Ultimate Campus Proximity</h3>
        <p className="df-feature-desc">An effortless, secure walk to campus via main gate or back-entrance shortcuts. Eliminate grueling daily commutes and instantly trade transit time for peak academic focus, restorative rest, and a vibrant student life.</p>
      </div>
    </div>
  );
};

const LayoutCard = () => (
  <div className="df-feature">
    <div className="df-feature-media df-feature-media-dark">
      <img src={FLOOR_PLAN} alt="2-room unit floor plan" />
      <div className="df-feature-hint">2-room unit floor plan</div>
    </div>
    <div className="df-feature-body">
      <span className="df-eyebrow">Layout</span>
      <h3 className="df-feature-title">Practical Layout &amp; Premium Furnishing</h3>
      <p className="df-feature-desc">Every official IMU unit is spatially optimized for academic productivity — featuring ergonomic study zones, custom storage, and balanced shared spaces. Explore our modern 2-tenant floor plans.</p>
    </div>
  </div>
);

const DESIGN_GALLERY = STATIC_DESIGN_CARDS.map((c) => ({ src: c.img, label: c.title }));

const DesignSection = () => {
  const [zoom, setZoom] = useState(null); // index of the enlarged card, or null
  return (
    <section className="design-section" data-screen-label="03 Design helps students">
      <div className="container">
        <div className="design-head">
          <h2 className="h-section-sans">Designed to Help You Live, Study, and Thrive</h2>
          <p className="lede" style={{ margin: "12px auto 0", textAlign: "center" }}>
            As IMU's official accommodation, we provide the ideal location and layout so you can focus on thriving.
          </p>
        </div>
        <div className="df-featured-grid">
          <LocationCard />
          <LayoutCard />
        </div>
        <div className="df-support-grid">
          {STATIC_DESIGN_CARDS.map((card, i) => {
            const Icon = I[card.icon];
            return (
              <button
                type="button"
                className="df-support-card"
                key={card.id}
                onClick={() => setZoom(i)}
                aria-label={`Enlarge photo: ${card.title}`}
              >
                <div className="df-support-media">
                  <img src={card.img} alt={card.title} />
                  <div className="df-support-icon"><Icon size={16} /></div>
                  <div className="df-support-zoom"><I.Expand size={13} /></div>
                </div>
                <div className="df-support-body">
                  <span className="df-eyebrow">{card.eyebrow}</span>
                  <h4 className="df-support-title">{card.title}</h4>
                  <p className="df-support-desc">{card.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {zoom !== null && <Lightbox items={DESIGN_GALLERY} initial={zoom} onClose={() => setZoom(null)} />}
    </section>
  );
};

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
  // Type 2 (3–5 room units) removed — not offered for now.
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
        <a className="rp-cta-btn" href={APPLICATION_FORM} target="_blank" rel="noreferrer">
          Enquire Now <I.ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

const Rooms = () => {
  const [stuType, setStuType] = useState("UG");
  const activeRooms = roomsData.type1[stuType];

  return (
    <section className="rooms container" id="rooms" data-screen-label="04 Rooms & Pricing">
      <div className="rooms-head">
        <span className="eyebrow">Inventory</span>
        <h2 className="h-section-sans" style={{ marginTop: 12 }}>Rooms &amp; Pricing</h2>
        <p>Schedule a private viewing — most units filled before semester intake.</p>
      </div>

      <div className="rp-controls">
        <div className="rp-sub-toggle">
          {[
            { key: "UG", label: "Undergraduate (UG)" },
            { key: "PreU", label: "Pre-University (Pre-U)" },
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

      <div className="room-grid grid-2">
        {activeRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            showBedding
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
  { i: "Wrench", t: "Live-In Warden & Maintenance", p: "A dedicated live-in warden and our responsive in-house maintenance team keep your home running hassle-free." },
  { i: "Phone", t: "24/7 Emergency Contact Support", p: "Our on-site support team is just a call away — any time of day or night." },
  { i: "Lock", t: "Secure Student Living", p: "Modern keycard and biometric access across all common spaces for ultimate safety." },
  { i: "HomeHeart", t: "Thoughtfully Designed Student Homes", p: "All rooms set up and furnished for your busy life." },
  {
    i: "Plane",
    t: "Airport Transfer",
    p: "IMU provides free airport pick-up for international students upon arrival from KLIA to the IMU Campus / Student Accommodation.",
    link: { label: "View service details", href: "https://imu.edu.my/support-services/airport-pickup/" },
  },
  {
    i: "Bus",
    t: "Free Campus Shuttle",
    p: "Enjoy a free, reliable shuttle service connecting the residence directly to the IMU Campus.",
  },
  { i: "Shield", t: "5-Minute Walk to Class", p: "A safe, vibrant, and well-lit neighborhood walking route that brings you right to campus gates." },
  { i: "Money", t: "Simple & Transparent Booking", p: "No surprise fees. Get a written quote upfront." },
];

const Provides = () => (
  <section className="provides container" data-screen-label="07 Unistay Living provides">
    <div className="provides-grid">
      <div>
        <span className="eyebrow">About Unistay Living</span>
        <h2 className="h-section-sans" style={{ marginTop: 14, maxWidth: 540 }}>
          Everything You Need to Feel at Home
        </h2>
        <p className="lede" style={{ marginTop: 16 }}>
          As an official accommodation partner endorsed directly by IMU, Unistay pairs seamless university living with dedicated, round-the-clock care. We handle all the details so you can focus on making the most of your student journey.
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
                  <a
                    className="provide-link"
                    href={p.link.href}
                    {...(p.link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
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
            To apply for accommodation at Savanna Condominium, please apply through this{" "}
            <a href={APPLICATION_FORM} target="_blank" rel="noreferrer">application link</a>.
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
          Information on this service is available{" "}
          <a href="https://imu.edu.my/support-services/airport-pickup/" target="_blank" rel="noreferrer">here</a>.
        </p>
      </div>
    ),
  },
  {
    q: "How do I know which payment category applies to me?",
    a: (
      <div className="faq-rich">
        <p>
          Your payment scheme is based on your level of study. <strong>Foundation students</strong> should refer to the <strong>Pre-U</strong> category, while <strong>Degree &amp; Master students</strong> should follow the <strong>Undergraduate (UG)</strong> rates and schedules.
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
            University-Appointed Official Accommodation Provider
          </p>
          <div className="footer-socials">
            <a className="footer-soc" href="#"><I.IG size={18} /></a>
            <a className="footer-soc" href="#"><I.FB size={18} /></a>
            <a className="footer-soc" href="#"><I.TT size={18} /></a>
            <a className="footer-soc" href="#"><I.YT size={18} /></a>
          </div>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul>
            <li><a href="tel:+60143887225"><I.Phone size={14} /> +60 14-388 7225</a></li>
            <li><a href="mailto:booking@unistay.my"><I.HomeHeart size={14} /> booking@unistay.my</a></li>
          </ul>
        </div>
        <div>
          <h5>About Us</h5>
          <ul>
            <li><a href="#">Our story</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Unistay Living Sdn Bhd. All rights reserved.</span>
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

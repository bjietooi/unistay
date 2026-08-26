// All section components for a Unistay property page.
//
// Everything here is property-agnostic: the copy, photography and pricing come
// from PROPERTY, defined by the property-*.jsx file the page loads. Load order
// is assets.jsx → property-*.jsx → this file (see index.html / covellia.html).
// Each <script type="text/babel"> has its own scope, so files share via window.
const { useState, useEffect, useRef } = React;

const P = PROPERTY;

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
        {/* Property switcher — stays visible on mobile, where .nav-pill is hidden. */}
        <div className="nav-props" aria-label="Choose a residence">
          {PROPERTIES.map((p) => (
            <a
              key={p.slug}
              href={p.href}
              className={"nav-prop" + (p.slug === P.slug ? " active" : "")}
              aria-current={p.slug === P.slug ? "page" : undefined}
            >
              {p.label}
            </a>
          ))}
        </div>
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

// ============ HERO ============
const ROOM_TOUR = P.hero.tour;
const ROOM_GALLERY = P.gallery;

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
          {ROOM_TOUR.type === "mp4" ? (
            // Portrait walkthrough served from ImageKit — letterboxed, not cropped.
            <video src={ROOM_TOUR.src} controls autoPlay playsInline controlsList="nodownload" />
          ) : (
            <iframe
              src={ROOM_TOUR.src}
              title="Unistay room tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
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
  const multi = count > 1; // single-photo views drop the arrows and thumb strip
  // Long galleries overflow the thumb strip — keep the active thumb in view
  // when navigating with the arrows or arrow keys.
  const thumbsRef = useRef(null);
  useEffect(() => {
    const strip = thumbsRef.current;
    if (!strip) return;
    const active = strip.children[idx];
    if (active) active.scrollIntoView({ block: "nearest", inline: "center" });
  }, [idx]);
  return (
    <ModalPortal>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Photo viewer">
        <button className="modal-close" onClick={onClose} aria-label="Close gallery"><I.X size={22} /></button>
        <div className="lightbox" onClick={(e) => e.stopPropagation()}>
          {multi && (
            <button className="lightbox-nav prev" onClick={prev} aria-label="Previous photo"><I.ChevronLeft size={24} /></button>
          )}
          <figure className="lightbox-stage">
            <img src={item.src} alt={item.label} key={item.src} />
            <figcaption>
              <strong>{item.label}</strong>
              {multi && <span>{idx + 1} / {count}</span>}
            </figcaption>
          </figure>
          {multi && (
            <button className="lightbox-nav next" onClick={next} aria-label="Next photo"><I.ChevronRight size={24} /></button>
          )}
        </div>
        {multi && (
          <div className="lightbox-thumbs" ref={thumbsRef} onClick={(e) => e.stopPropagation()}>
            {items.map((g, i) => (
              <button
                key={`${g.src}-${i}`}
                className={"lightbox-thumb" + (i === idx ? " active" : "")}
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}: ${g.label}`}
              >
                <img src={g.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
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
        <div className="hero-eyebrow-line">{P.hero.eyebrow}</div>
        <h1 className="hero-title">
          <span>{P.name.toUpperCase()}</span>
          <span className="sub">{P.subtitle.toUpperCase()}</span>
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
              <p>{P.hero.blurb}</p>
            </div>
          ) : null}
        </div>
      </div>

      {/* model + condo stage — wrapped so mobile can bottom-align them as one unit */}
      <div className="hero-stage">
        {/* condoWidth lets each building cut-out sit at a sensible height —
            the artwork ranges from landscape blocks to tall towers. */}
        <img
          src={P.hero.condoImg}
          alt={P.hero.condoAlt}
          className="hero-condo"
          style={P.hero.condoWidth ? { width: P.hero.condoWidth } : undefined}
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
            <img src={P.why.img} alt={P.why.imgAlt} />
          </div>
        </div>
        <div>
          <span className="eyebrow">About</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>{P.why.heading}</h2>
          <p className="lede" style={{ marginTop: 18 }}>{P.why.lede}</p>
          <div className="why-features">
            {P.why.features.map((f, i) => {
              const Icon = I[f.icon];
              return (
                <div className="why-feat" key={i}>
                  <div className="why-feat-icon"><Icon size={20} /></div>
                  <div className="why-feat-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="why-quote">{P.why.quote}</div>
        </div>
      </div>
    </section>
  );
};

// ============ DESIGN HELPS STUDENTS ============
const STATIC_DESIGN_CARDS = [
  {
    id: "light",
    icon: "Sparkle",
    eyebrow: "Environment",
    title: "Optimized Light & Airflow",
    desc: "Floor-to-ceiling windows and dual-orientation layouts designed to maximize mental energy and everyday well-being.",
    img: ASSETS.light,
  },
  {
    id: "storage",
    icon: "HomeHeart",
    eyebrow: "Furnished",
    title: "Practical Storage",
    desc: "Under-bed drawers, tall wardrobes, and a dedicated luggage zone for a tidy room.",
    img: ASSETS.storage,
  },
  {
    id: "maint",
    icon: "Wrench",
    eyebrow: "Service",
    title: "Professional On-Site Management",
    desc: "Backed by a live-in warden and a maintenance crew operating on a strict SLA.",
    img: ASSETS.maintenance,
  },
  {
    id: "gated",
    icon: "Shield",
    eyebrow: "Security",
    title: "Gated Residential Area",
    desc: "A private gated community with 24/7 guarded entry, CCTV, and visitor screening.",
    img: ASSETS.gated,
  },
  // Some of this photography carries a property's own signage, so each page can
  // swap a card's image or copy for one that matches its residence.
].map((card) => ({ ...card, ...((P.designCardOverrides || {})[card.id] || {}) }));

// Two shapes of location media: photographed entrance routes the visitor can
// toggle between (Savanna), or a single embedded map (properties with no
// route photography yet).
const LocationCard = () => {
  const routes = P.location.routes;
  const keys = routes ? Object.keys(routes) : [];
  const [route, setRoute] = useState(keys[0]);
  const active = routes ? routes[route] : P.location.map;
  return (
    <div className="df-feature">
      <div className="df-feature-media">
        {routes ? (
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
        ) : (
          <div className="df-map-embed">
            <iframe
              src={active.embed}
              title={`Map of ${P.fullName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="df-map-embed-cta" href={active.maps} target="_blank" rel="noreferrer">
              <I.MapPin size={13} /> Walking route to IMU <I.ArrowRight size={12} />
            </a>
          </div>
        )}
        <div className="df-feature-stat">
          <strong>{active.time}</strong>
          <span>{P.location.statLabel}</span>
        </div>
        {routes && keys.length > 1 && (
          <div className="df-route-toggle">
            {keys.map((k) => (
              <button
                key={k}
                className={"df-route-btn" + (route === k ? " active" : "")}
                onClick={(e) => { e.stopPropagation(); setRoute(k); }}
              >
                <I.MapPin size={12} /> {routes[k].label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="df-feature-body">
        <span className="df-eyebrow">Location</span>
        <h3 className="df-feature-title">{P.location.title}</h3>
        <p className="df-feature-desc">{P.location.desc}</p>
      </div>
    </div>
  );
};

const LayoutCard = () => {
  const plans = P.layout.plans;
  const [plan, setPlan] = useState(0);
  const [zoom, setZoom] = useState(false);
  const active = plans[plan];
  return (
    <div className="df-feature">
      <div className="df-feature-media df-feature-media-dark">
        <button
          type="button"
          className="df-plan-btn"
          onClick={() => setZoom(true)}
          aria-label={`Enlarge floor plan: ${active.label}`}
        >
          <img src={active.src} alt={active.label} />
          <span className="img-zoom-chip"><I.Expand size={13} /></span>
        </button>
        <div className={"df-feature-hint" + (plans.length > 1 ? " with-toggle" : "")}>{active.hint}</div>
        {plans.length > 1 && (
          <div className="df-route-toggle">
            {plans.map((pl, i) => (
              <button
                key={pl.src}
                className={"df-route-btn" + (plan === i ? " active" : "")}
                onClick={(e) => { e.stopPropagation(); setPlan(i); }}
              >
                <I.Ruler size={12} /> {pl.short || pl.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {zoom && (
        <Lightbox
          items={plans.map((pl) => ({ src: pl.src, label: pl.label }))}
          initial={plan}
          onClose={() => setZoom(false)}
        />
      )}
      <div className="df-feature-body">
        <span className="df-eyebrow">Layout</span>
        <h3 className="df-feature-title">{P.layout.title}</h3>
        <p className="df-feature-desc">{P.layout.desc}</p>
      </div>
    </div>
  );
};

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
const fmtRM = (n) => "RM " + n.toLocaleString();

const RoomCard = ({ room, showBedding, bedding }) => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  // Rooms awaiting photography render a branded placeholder rather than a broken tile.
  const hasPhoto = Boolean(room.img);
  return (
    <div className="room-card">
      {hasPhoto ? (
        <button
          type="button"
          className="room-card-img"
          onClick={() => setZoom(true)}
          aria-label={`Enlarge photo: ${room.title}`}
        >
          <img src={room.img} alt={room.title} />
          <div className="room-card-tags">
            {room.tag ? <div className="room-tag popular">{room.tag}</div> : <div />}
          </div>
          <div className="img-zoom-chip"><I.Expand size={13} /></div>
        </button>
      ) : (
        <div className="room-card-img room-card-img-empty">
          <img src={ASSETS.logoSquare} alt="" className="room-card-empty-mark" />
          <span className="room-card-empty-text">Photo coming soon</span>
          <div className="room-card-tags">
            {room.tag ? <div className="room-tag popular">{room.tag}</div> : <div />}
          </div>
        </div>
      )}
      {zoom && hasPhoto && (
        <Lightbox items={[{ src: room.img, label: room.title }]} onClose={() => setZoom(false)} />
      )}
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
          <div className="room-stat"><I.Bath size={15} /> {room.bathLabel || `${room.bath} Bath`}</div>
          {room.sqft && <div className="room-stat"><I.Ruler size={15} /> {room.sqft} sqft</div>}
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
  const units = P.rooms.units;
  const [unitIdx, setUnitIdx] = useState(0);
  const [stuType, setStuType] = useState("UG");
  const unit = units[unitIdx];
  const activeRooms = unit.plans[stuType];

  return (
    <section className="rooms container" id="rooms" data-screen-label="04 Rooms & Pricing">
      <div className="rooms-head">
        <span className="eyebrow">Inventory</span>
        <h2 className="h-section-sans" style={{ marginTop: 12 }}>Rooms &amp; Pricing</h2>
        <p>{P.rooms.sub}</p>
      </div>

      <div className="rp-controls">
        {/* Unit-category toggle only appears for properties offering more than one. */}
        {units.length > 1 && (
          <div className="rp-sub-toggle rp-unit-toggle">
            {units.map((u, i) => (
              <button
                key={u.id}
                className={"rp-sub-btn" + (unitIdx === i ? " active" : "")}
                onClick={() => setUnitIdx(i)}
              >
                {u.label}
              </button>
            ))}
          </div>
        )}
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
        {unit.note && (
          <p className="rp-preu-note">
            <I.HomeHeart size={11} /> {unit.note}
          </p>
        )}
        {stuType === "PreU" && (
          <p className="rp-preu-note">
            <I.Sparkle size={11} /> Pre-University programmes have a shorter semester duration — pricing reflects this.
          </p>
        )}
      </div>

      <div className={"room-grid" + (activeRooms.length <= 2 ? " grid-2" : "")}>
        {activeRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            showBedding
            bedding={P.rooms.bedding}
          />
        ))}
      </div>

      {P.rooms.footnote && (
        <p className="rp-footnote">
          <I.Money size={13} /> {P.rooms.footnote}
        </p>
      )}
    </section>
  );
};

// ============ FACILITIES ============
const Facilities = () => {
  const featured = P.facilities.filter((f) => f.feature);
  const rest = P.facilities.filter((f) => !f.feature);
  const [zoom, setZoom] = useState(null); // index of the enlarged facility photo
  const gallery = featured.map((f) => ({ src: f.img, label: f.t }));
  return (
    <section className="facilities" data-screen-label="05 Facilities">
      <div className="container">
        <div className="facilities-head">
          <span className="eyebrow">Welcome to Unistay Living</span>
          <h2 className="h-section-sans" style={{ marginTop: 14 }}>Facilities &amp; Amenities</h2>
          <p>Shared and private spaces designed for student life — from focused study sessions to weekend recharges.</p>
        </div>
        {featured.length > 0 && (
        <div className="fac-featured">
          {featured.map((f, i) => {
            const Icon = I[f.i];
            return (
              <button
                type="button"
                className="fac-hero"
                key={f.t}
                onClick={() => setZoom(i)}
                aria-label={`Enlarge photo: ${f.t}`}
              >
                <img src={f.img} alt={f.t} />
                <div className="fac-hero-overlay" />
                <div className="img-zoom-chip"><I.Expand size={13} /></div>
                <div className="fac-hero-content">
                  <div className="fac-hero-icon"><Icon size={20} /></div>
                  <div>
                    <h4>{f.t}</h4>
                    <p>{f.d}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        )}
        {zoom !== null && (
          <Lightbox items={gallery} initial={zoom} onClose={() => setZoom(null)} />
        )}
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
].map((item) => ({ ...item, ...(P.providesOverrides[item.t] || {}) }));

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
          <li>{P.faqCopy.unitAssignment}</li>
          <li>
            {P.faqCopy.applyLine}
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
          <a href="mailto:booking@unistay.my">booking@unistay.my</a> with the student's ID number, name and contact number. State <em>"{P.faqCopy.paymentSubject}"</em> in the subject line.
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
  ...(P.faqCopy.extraFaqs || []),
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
          Let our admissions team safely help you apply for the perfect home — within 24 hours of submission.
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
            <span style={{ fontSize: 12, opacity: 0.85 }}>We typically reply within 24 hours.</span>
          </div>
        </form>
      ) : (
        <div className="contact-form">
          <div className="contact-success">
            <strong>Enquiry received — thanks, {form.name.split(" ")[0]}!</strong>
            <span style={{ fontSize: 14, opacity: 0.9 }}>
              An admissions advisor will be in touch within 24 hours at {form.email}.
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
  Nav, Hero, Why, DesignSection, Rooms, Facilities, Peace, Provides, FAQ, Contact, Footer,
});

// Brand-level images shared by every property page.
// Property-specific photography lives in the property-*.jsx file instead.
const ASSETS = {
  logo: "https://ik.imagekit.io/cr8hodb6q/unistay/info/brown_horizontal.png",
  logoWhite: "https://ik.imagekit.io/cr8hodb6q/unistay/info/white_horizontal.png",
  logoSquare: "https://ik.imagekit.io/cr8hodb6q/unistay/info/brown_square.png",
  heroBg: "https://ik.imagekit.io/cr8hodb6q/unistay/hero_bg.jpg",
  heroModel: "https://ik.imagekit.io/cr8hodb6q/unistay/university_student_model.png?updatedAt=1779236598029",
  imuLogo: "https://imu.edu.my/wp-content/uploads/2025/01/cropped-IMU_Logo_Icon-512.png",
  grouped: "https://ik.imagekit.io/cr8hodb6q/unistay/grouped.png?updatedAt=1779237927118",
  peace: "https://ik.imagekit.io/cr8hodb6q/unistay/student%20peace%20of%20mind%20for%20parenets.png?updatedAt=1779236598106",
  unistaff: "https://ik.imagekit.io/cr8hodb6q/unistay/unistaff.png?updatedAt=1779236598101",
  room: "https://ik.imagekit.io/cr8hodb6q/unistay/room_image1.png?updatedAt=1779236597984",
  location: "https://ik.imagekit.io/cr8hodb6q/unistay/location%20img.png?updatedAt=1779236597733",
  about: "https://ik.imagekit.io/cr8hodb6q/unistay/environment.webp",
  moving: "https://ik.imagekit.io/cr8hodb6q/unistay/moving_house_contact_us_img.png?updatedAt=1779236597699",
  // Generic design/amenity photography reused across properties.
  light: "https://ik.imagekit.io/cr8hodb6q/unistay/goodlight_ventilation.webp",
  storage: "https://ik.imagekit.io/cr8hodb6q/unistay/practical%20storage.webp",
  maintenance: "https://ik.imagekit.io/cr8hodb6q/unistay/maintainence.webp",
  gated: "https://ik.imagekit.io/cr8hodb6q/unistay/gated.webp",
  pool: "https://ik.imagekit.io/cr8hodb6q/unistay/swimmingpool.webp",
  gym: "https://ik.imagekit.io/cr8hodb6q/unistay/gym.webp",
};

// Every property links to the same IMU accommodation application form.
const APPLICATION_FORM = "https://forms.gle/jyZn6WNKR3A63SCf8";

// Nav entry for each published property page — drives the property switcher.
const PROPERTIES = [
  { slug: "savanna", label: "Savanna", href: "index.html" },
  { slug: "covellia", label: "Covellia", href: "covellia.html" },
];

Object.assign(window, { ASSETS, APPLICATION_FORM, PROPERTIES });

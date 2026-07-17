const products = [
  {
    id: "aura-one-x",
    name: "AURA One X",
    category: "phones",
    finish: "Titanium Black",
    price: 1299,
    badge: "New Release",
    description: "Titanium frame, 200MP triple camera, ProMotion display.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRLwVLWkMNfk8AL412nA3V5_GqvySfdv1cXgJYq7i6nwb_a9lQebpxJhzt-czncddC-OloznY1oHW7gO9Qeh1EXqvcvQq5iLo3xYo8IQ91fpmCEKE2-VUkIGQ7SPaxvlgqG3f_PTGvz8-FXlPF2U9cEfdvKf00b8_5KZtGxfVGBSex7MOT78sG5v7fUi1mqMWdI57vAGafB8HNgy4isyKoZtVeypJ1mdsopFx0UjRyP0wV1FLwgXtcUQ",
  },
  {
    id: "aura-one-pro",
    name: "AURA One Pro",
    category: "phones",
    finish: "Graphite",
    price: 1199,
    badge: "Pro",
    description: "Cinematic capture with a sculpted graphite enclosure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAecig4ofn2Role7Ihr34sdJPQU0fs3g1DSkg8aVRLGfWGBEoIbotx8LgOUrYXX1d5ZIIzXg_lOaHVD9RY7aB6TR6lhkBkddE04ef0x4hdIJcgwTEgEkkK7wXkZC0JIi5uPCn3Temm5xyb6hgbgjLsl7R27NEPV0tjf0diCa0mPxlMJaxPuX8RX0IqwZP1VOejZbob1Mtvc4IXtA_CXNds7UtnMpaBKU03n0GbVOjc9J2slOXeZSJAvA",
  },
  {
    id: "aura-one",
    name: "AURA One",
    category: "phones",
    finish: "Ceramic White",
    price: 999,
    badge: "Essential",
    description: "Clean glass, fast neural engine, all-day battery life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQdWBWseybpuw_GmsTNzR0AE1cUfQpHvckmS54An9F6YL4sHLJuzUuIs5PRQhAUopff6QJQ0dXsSHgQbHNhn0iatDASm2RVd0G9rIj1hmUQxOIgMaphL77r45GS3nMERRKAi0R88AA1aPIjv9eQf6yKTyw_tjlPFosCYbAhIBkIEUGDzY-0x5oBSVrl3Q1LF7Ijfq7Ex_dxqwPV7K7w7mQO1ljl5SP5EUm16weNos1f0KEq1S0KcHX3w",
  },
  {
    id: "aura-studio-m2",
    name: "AURA Studio M2",
    category: "computing",
    finish: "Midnight Aluminum",
    price: 1899,
    badge: "Creator",
    description: "Silent power for editing, design, and everyday work.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpuue4yvvjzBQuCUqfep0nVo9k32IaEu6qMtoht6vsccu-khfyadaumX4QmXczneJUN0h8k5CtAPhMR0pEFP9Gp3uhTSD8WASsyU3AZ8S9PovUB5tT0ANdAZ4dm8I-yrMNClG8q9Vb2RI8N7s8-yYhyhEaAwNAnBwL6Tjig_cUpSmc13nL2YYCGqDQnUTcKnuhduPBy6f1gkVYiuMWLju1Dngq5BoYUprODDThPml2R8ewaljFZUVqMQ",
  },
  {
    id: "sonic-air",
    name: "Sonic Air",
    category: "audio",
    finish: "Space Black",
    price: 349,
    badge: "Spatial",
    description: "Wireless over-ear audio with adaptive quiet control.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCt-WLsVkgBjTLX7yyIVXOIslkPRvSjiRWIOO_52Caa5flNwj1dJ5LW6Bp7z8owval48gWHp-H2bZPQMc1NZ85M-dob7t2g7Ttw3fjZfPeOXN1nb0zAR2gT1kA6qP7ENhZcjCd8R3C7GvBHTC6HMTwpq5vEjV8WHO6i-BZe6afff7fpeh47usXLnSwkMR-MKRMJ7pbzV08qSFuT4xK2pe5-PZPaUHmPtwvMcfwdBrpxxuW0EHDOwjjSpw",
  },
  {
    id: "aura-watch-ultra",
    name: "AURA Watch Ultra",
    category: "wearables",
    finish: "Titanium Orange",
    price: 799,
    badge: "Outdoor",
    description: "Rugged sensors, bright display, and deep fitness metrics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCquwDCQdLR52-moCFxMANgNHhMgcNm5S1ChJFfhk1H4HLp8f0_LlUJX3KSW0xZnIIi1Hb57A1CP-fzxQ1pl9hKIpaXFcX-xkxwC3bv2tJ6eW5hP0ng6Di8_YbokeMd7sEnoOlwx6fcT2HSMM4VRD6B4O4CrD0jfAHuYgsw5KrB8VYZldFTpcdaCMpIDiB0uS6vDCidM_OhGdohe2mgN8LXZWG86gMcKpJYiB2HO-MSYFfFJnv6WEKSlw",
  },
  {
    id: "aura-pulse-x",
    name: "AURA Pulse X",
    category: "wearables",
    finish: "Titanium Silver",
    price: 299,
    badge: "Daily",
    description: "A lighter watch for health, messages, and quick checkout.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH3F4DpBUIgg_g6QpeBzBjwPUWR8WLu7R0BVz5B3Ao_91V8S1sNLNCKL2BQH061_4voX2BVPIzMkocCIcIuchmrIUTSM8BdNLu5YRRPL60d3kZqf2UH7VE4IG5vO8EmyO9iQuKMk7VgjmSDKaJRZIt2y5XVFJOYsd_CcsafanjWmgkB7Kd9lp7f5HZbicaqTZJ-Bxl0Zzet0OFQREjs_VW309QAGO8Mb9DvKgCcAg5ZLnv-YDVGxOHCw",
  },
  {
    id: "aura-accessory-kit",
    name: "AURA Accessory Kit",
    category: "accessories",
    finish: "Soft White",
    price: 149,
    badge: "Bundle",
    description: "Wireless charger, case, and precision stylus in one kit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb3cgDnSghM-PsvfBEEzTatD5ynUd3FgSVUItw6Iq7mdq76OQLCilJKETHaQYbyhiOhyGcVMmFwAotUaA43JMrvNFeaLHGySvKlawUKgRtrmTDKZoEdxadh1h1zmwb3BMwiPBPfn9PRqbgpsVT7RHHd_YkVaOjzVUNHxY5MhnYaLmjuxcHDBand_Fe6TnljTV-DlIYIj1ChgLF2tCKGddSbSnhKifB5CplTbRpr22XOVDGeLf6_mvWrQ",
  },
];

const state = {
  category: "all",
  search: "",
  sort: "featured",
  detailProductId: "aura-one-x",
  detailBasePrice: 1299,
  detailFinish: "Titanium Black",
  detailStorage: "256GB",
  detailStorageExtra: 0,
};

const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const sortInput = document.querySelector("#product-sort");
const productCount = document.querySelector("#product-count");
const clearFiltersButton = document.querySelector(".clear-filters");
const categoryTabs = document.querySelectorAll(".category-tab");
const siteHeader = document.querySelector(".site-header");
const heroSection = document.querySelector(".hero-section");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const detailConfig = document.querySelector("#detail-config");
const detailPrice = document.querySelector("#detail-price");
const detailDescription = document.querySelector("#detail-description");
const scrollProgress = document.createElement("span");
let revealObserver;
let ticking = false;
let depthItems = [];
let depthImageItems = [];

document.body.classList.add("motion-ready");
scrollProgress.className = "scroll-progress";
scrollProgress.setAttribute("aria-hidden", "true");
siteHeader.append(scrollProgress);

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function getFilteredProducts() {
  const query = state.search.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.finish.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return filteredProducts.sort((a, b) => {
    if (state.sort === "price-low") {
      return a.price - b.price;
    }

    if (state.sort === "price-high") {
      return b.price - a.price;
    }

    if (state.sort === "name") {
      return a.name.localeCompare(b.name);
    }

    return products.indexOf(a) - products.indexOf(b);
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  updateProductMeta(visibleProducts.length);

  if (!visibleProducts.length) {
    grid.innerHTML = '<div class="empty-state">No AURA products match your search.</div>';
    return;
  }

  grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card reveal-item">
          <div class="product-media">
            <span class="product-badge">${product.badge}</span>
            <img src="${product.image}" alt="${product.name} in ${product.finish}" />
          </div>
          <div class="product-body">
            <div class="product-topline">
              <div>
                <h3>${product.name}</h3>
                <p>${product.finish}</p>
              </div>
              <span class="price">${formatCurrency(product.price)}</span>
            </div>
            <p>${product.description}</p>
            <div class="product-actions">
              <button class="mini-button primary" type="button" data-view="${product.id}">View details</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
  hydrateMotionTargets(grid);
}

function updateDetailSummary() {
  const price = state.detailBasePrice + state.detailStorageExtra;
  detailConfig.textContent = `${state.detailFinish}, ${state.detailStorage}`;
  detailPrice.textContent = formatCurrency(price);
}

function openMenu() {
  document.body.classList.add("menu-open");
  mobileMenu.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  window.setTimeout(() => {
    if (!document.body.classList.contains("menu-open")) {
      mobileMenu.hidden = true;
    }
  }, motionQuery.matches ? 0 : 260);
}

function updateProductMeta(count) {
  const total = products.length;
  const noun = count === 1 ? "product" : "products";
  const hasFilters = state.category !== "all" || state.search || state.sort !== "featured";

  productCount.textContent = `Showing ${count} of ${total} ${noun}`;
  clearFiltersButton.hidden = !hasFilters;
}

function resetFilters() {
  state.category = "all";
  state.search = "";
  state.sort = "featured";
  searchInput.value = "";
  sortInput.value = "featured";
  categoryTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.category === "all"));
  renderProducts();
}

function scrollToDetail(product) {
  const detailTitle = document.querySelector("#detail-title");
  const detailImage = document.querySelector("#detail-image");
  const detailMedia = document.querySelector(".detail-media");

  detailMedia.classList.add("is-swapping");
  window.setTimeout(
    () => {
      detailTitle.textContent = product.name;
      detailDescription.textContent = product.description;
      detailImage.src = product.image;
      detailImage.alt = `${product.name} in ${product.finish}`;
      state.detailProductId = product.id;
      state.detailBasePrice = product.price;
      state.detailFinish = product.finish;
      state.detailStorage = "256GB";
      state.detailStorageExtra = 0;
      document
        .querySelectorAll(".storage-option")
        .forEach((button) => button.classList.toggle("active", button.dataset.storage === "256GB"));
      document
        .querySelectorAll(".swatch")
        .forEach((button) => button.classList.toggle("active", button.dataset.finish === product.finish));
      updateDetailSummary();
      detailMedia.classList.remove("is-swapping");
    },
    motionQuery.matches ? 0 : 180,
  );
  document.querySelector("#detail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateScrollMotion() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  const heroRect = heroSection.getBoundingClientRect();
  const heroProgress = Math.min(Math.max((0 - heroRect.top) / heroRect.height, 0), 1);

  siteHeader.classList.toggle("is-scrolled", scrollTop > 12);
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));

  if (!motionQuery.matches) {
    heroSection.style.setProperty("--hero-drift", (heroProgress * 42).toFixed(2));
    heroSection.style.setProperty("--hero-text-drift", (heroProgress * -16).toFixed(2));
    updateDepthMotion();
  }

  ticking = false;
}

function requestScrollMotion() {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(updateScrollMotion);
  }
}

function setupRevealMotion() {
  const revealItems = document.querySelectorAll(
    ".category-band a, .section-heading, .feature-tile, .detail-media, .detail-copy, .craft-copy, .craft-section > img, .craft-section > .craft-video, .support-grid article, .site-footer",
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
  });

  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-item").forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  );

  document.querySelectorAll(".reveal-item").forEach((item) => revealObserver.observe(item));
}

function getElementMotionProgress(element) {
  const rect = element.getBoundingClientRect();
  const viewport = window.innerHeight;
  const elementCenter = rect.top + rect.height / 2;
  const viewportCenter = viewport / 2;
  return Math.max(Math.min((viewportCenter - elementCenter) / (viewport + rect.height), 1), -1);
}

function setupDepthMotion() {
  const categoryCards = [...document.querySelectorAll(".category-band a")];
  const featureTiles = [...document.querySelectorAll(".feature-tile")];
  const headings = [...document.querySelectorAll(".section-heading")];
  const supportCards = [...document.querySelectorAll(".support-grid article")];

  depthItems = [
    ...categoryCards.map((element, index) => ({
      element,
      x: index % 2 === 0 ? -18 : 18,
      y: index % 2 === 0 ? 28 : 18,
      rotate: index % 2 === 0 ? -0.5 : 0.5,
      scale: 0.012,
    })),
    ...headings.map((element) => ({
      element,
      x: 0,
      y: -58,
      rotate: 0,
      scale: 0,
    })),
    ...featureTiles.map((element, index) => ({
      element,
      x: index % 2 === 0 ? -26 : 26,
      y: index % 2 === 0 ? -46 : 38,
      rotate: index % 2 === 0 ? -0.8 : 0.8,
      scale: 0.018,
    })),
    { element: document.querySelector(".detail-media"), x: -24, y: -54, rotate: -0.5, scale: 0.01 },
    { element: document.querySelector(".detail-copy"), x: 18, y: 34, rotate: 0.4, scale: 0 },
    { element: document.querySelector(".craft-copy"), x: -16, y: -34, rotate: 0, scale: 0 },
    { element: document.querySelector(".craft-section > img, .craft-section > .craft-video"), x: 26, y: 52, rotate: 0.8, scale: 0.014 },
    ...supportCards.map((element, index) => ({
      element,
      x: (index - 1) * 18,
      y: index % 2 === 0 ? -30 : 24,
      rotate: (index - 1) * 0.45,
      scale: 0.01,
    })),
  ].filter((item) => item.element);

  depthImageItems = [
    ...document.querySelectorAll(".feature-tile img"),
    document.querySelector(".detail-media img"),
    document.querySelector(".craft-section > img, .craft-section > .craft-video"),
  ].filter(Boolean).map((element, index) => ({
    element,
    x: index % 2 === 0 ? 18 : -18,
    y: index % 2 === 0 ? -62 : 54,
    scale: element.closest(".feature-tile") ? 1.08 : 1.04,
  }));

  depthItems.forEach(({ element }) => element.classList.add("scroll-depth"));
  depthImageItems.forEach(({ element }) => element.classList.add("scroll-image"));
  updateDepthMotion();
}

function updateDepthMotion() {
  depthItems.forEach(({ element, x, y, rotate, scale }) => {
    const progress = getElementMotionProgress(element);
    const visibility = Math.max(0, 1 - Math.abs(progress) * 1.6);
    element.style.setProperty("--motion-x", `${(progress * x).toFixed(2)}px`);
    element.style.setProperty("--motion-y", `${(progress * y).toFixed(2)}px`);
    element.style.setProperty("--motion-rotate", `${(progress * rotate).toFixed(3)}deg`);
    element.style.setProperty("--motion-scale", (1 + visibility * scale).toFixed(4));
  });

  depthImageItems.forEach(({ element, x, y, scale }) => {
    const progress = getElementMotionProgress(element);
    element.style.setProperty("--image-x", `${(progress * x).toFixed(2)}px`);
    element.style.setProperty("--image-y", `${(progress * y).toFixed(2)}px`);
    element.style.setProperty("--image-scale", scale.toFixed(3));
  });
}

function hydrateMotionTargets(scope = document) {
  const cards = scope.querySelectorAll(".product-card");

  cards.forEach((card, index) => {
    card.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 70}ms`);

    if (revealObserver && !card.classList.contains("is-visible")) {
      revealObserver.observe(card);
    } else if (motionQuery.matches) {
      card.classList.add("is-visible");
    }

    card.addEventListener("pointermove", (event) => {
      if (motionQuery.matches || event.pointerType === "touch") {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", (x * 5).toFixed(2));
      card.style.setProperty("--tilt-y", (y * 5).toFixed(2));
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0");
      card.style.setProperty("--tilt-y", "0");
    });
  });
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const searchTrigger = event.target.closest(".search-trigger");
  const swatch = event.target.closest(".swatch");
  const storageOption = event.target.closest(".storage-option");
  const mobileMenuLink = event.target.closest(".mobile-menu a");

  if (event.target.closest(".menu-toggle")) {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (viewButton) {
    const product = findProduct(viewButton.dataset.view);
    if (product) {
      scrollToDetail(product);
    }
  }

  if (searchTrigger) {
    closeMenu();
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => searchInput.focus(), 400);
  }

  if (mobileMenuLink) {
    closeMenu();
  }

  if (swatch) {
    document.querySelectorAll(".swatch").forEach((button) => button.classList.toggle("active", button === swatch));
    state.detailFinish = swatch.dataset.finish;
    updateDetailSummary();
  }

  if (storageOption) {
    document
      .querySelectorAll(".storage-option")
      .forEach((button) => button.classList.toggle("active", button === storageOption));
    state.detailStorage = storageOption.dataset.storage;
    state.detailStorageExtra = Number(storageOption.dataset.extra);
    updateDetailSummary();
  }
});

categoryTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    categoryTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    renderProducts();
  });
});

sortInput.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderProducts();
});

clearFiltersButton.addEventListener("click", resetFilters);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

renderProducts();
updateDetailSummary();
setupRevealMotion();
setupDepthMotion();
hydrateMotionTargets(grid);
updateScrollMotion();
window.addEventListener("scroll", requestScrollMotion, { passive: true });
window.addEventListener("resize", requestScrollMotion);

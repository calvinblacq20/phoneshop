const products = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "phones",
    finish: "256GB · In box",
    price: 9500,
    priceText: "GHc 9,500",
    badge: "In stock",
    description: "Apple iPhone 15 Pro, 256GB titanium — brand new and boxed.",
    image: "img/products/iphone-15-pro.jpg",
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    category: "phones",
    finish: "256GB",
    price: 6900,
    priceText: "GHc 6,900",
    badge: "Popular",
    description: "iPhone 13 Pro Max, 256GB — flagship camera and battery life.",
    image: "img/products/iphone-13-pro-max.jpg",
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    category: "phones",
    finish: "128GB · In box",
    price: 3300,
    priceText: "GHc 3,300",
    badge: "Best value",
    description: "iPhone 12, 128GB — clean, boxed, and great value.",
    image: "img/products/iphone-12.jpg",
  },
  {
    id: "ps5-controllers",
    name: "PlayStation 5 & Controllers",
    category: "gaming",
    finish: "New & pre-owned",
    price: 0,
    priceText: "Contact for price",
    badge: "Gaming",
    description: "Original PS5 consoles and DualSense controllers — new and used.",
    image: "img/products/ps5.jpg",
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    category: "gaming",
    finish: "2TB",
    price: 5500,
    priceText: "GHc 5,500",
    badge: "Limited",
    description: "Xbox Series X 2TB limited edition console.",
    image: "img/products/xbox-series-x.jpg",
  },
  {
    id: "ps-portal",
    name: "PlayStation Portal",
    category: "gaming",
    finish: "Limited edition",
    price: 2800,
    priceText: "GHc 2,800",
    badge: "New",
    description: "PlayStation Portal remote player — stream your PS5 anywhere.",
    image: "img/products/ps-portal.jpg",
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "accessories",
    finish: "2025 model",
    price: 5999,
    priceText: "GHc 5,999",
    badge: "Audio",
    description: "Apple AirPods Max (2025) — high-fidelity over-ear sound.",
    image: "img/products/airpods-max.jpg",
  },
  {
    id: "iphone-cases",
    name: "Premium iPhone Cases",
    category: "accessories",
    finish: "BAPE · Nike & more",
    price: 0,
    priceText: "Contact for price",
    badge: "Accessories",
    description: "Designer iPhone cases — durable, stylish, and affordable.",
    image: "img/products/iphone-cases.jpg",
  },
  {
    id: "starlink-gen4",
    name: "Starlink Gen v4",
    category: "accessories",
    finish: "Brand new",
    price: 4999,
    priceText: "GHc 4,999",
    badge: "Internet",
    description: "Starlink Gen v4 high-speed satellite internet kit.",
    image: "img/products/starlink.jpg",
  },
];

const state = {
  category: "all",
  search: "",
  sort: "featured",
  detailProductId: "iphone-15-pro",
  detailBasePrice: 9500,
  detailFinish: "Natural Titanium",
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
  return "GHc " + Number(amount).toLocaleString("en-US");
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
              <span class="price">${product.priceText}</span>
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
  detailPrice.textContent = price > 0 ? formatCurrency(price) : "Contact for price";
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

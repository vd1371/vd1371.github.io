/**
 * Homepage sections — projects, notebooks, papers
 */
(function () {
  "use strict";

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function workLinkAttrs(item) {
    if (item.external) {
      return ' target="_blank" rel="noopener"';
    }
    return "";
  }

  function renderProjectCard(item) {
    const href = escapeHtml(item.link);
    const tag = item.tag
      ? `<span class="work-tag">${escapeHtml(item.tag)}</span>`
      : "";
    return `
      <a href="${href}" class="work-card"${workLinkAttrs(item)}>
        <div class="work-card-head">
          <i class="bi ${escapeHtml(item.icon)}" aria-hidden="true"></i>
          ${tag}
        </div>
        <h3 class="work-card-title">${escapeHtml(item.title)}</h3>
        <p class="work-card-desc">${escapeHtml(item.description)}</p>
      </a>
    `;
  }

  function renderListItem(item) {
    const category = item.category
      ? `<span class="work-list-cat">${escapeHtml(item.category)}</span>`
      : "";
    return `
      <li>
        <a href="${escapeHtml(item.link)}" class="work-list-link">
          <i class="bi ${escapeHtml(item.icon)}" aria-hidden="true"></i>
          <span class="work-list-text">
            <span class="work-list-title">${escapeHtml(item.title)}</span>
            <span class="work-list-desc">${escapeHtml(item.description)}</span>
          </span>
          ${category}
        </a>
      </li>
    `;
  }

  function renderPaperItem(item) {
    return `
      <li>
        <a href="${escapeHtml(item.link)}" class="work-list-link">
          <i class="bi ${escapeHtml(item.icon)}" aria-hidden="true"></i>
          <span class="work-list-text">
            <span class="work-list-title">${escapeHtml(item.title)}</span>
            <span class="work-list-desc">${escapeHtml(item.description)}</span>
          </span>
        </a>
      </li>
    `;
  }

  function initProjects() {
    const root = document.getElementById("featured-projects");
    const items = window.featuredProjects;
    if (!root || !items?.length) return;
    root.innerHTML = items.map(renderProjectCard).join("");
  }

  function initNotebooks() {
    const root = document.getElementById("notebooks-list");
    const toggle = document.getElementById("notebooks-toggle");
    const notebooks = window.quantNotebooks;
    if (!root || !notebooks?.length) return;

    const previewCount = 5;
    const collapsed = notebooks.slice(0, previewCount);
    const rest = notebooks.slice(previewCount);

    root.innerHTML = collapsed.map(renderListItem).join("");

    if (!toggle || rest.length === 0) return;

    toggle.hidden = false;
    toggle.textContent = `Show all ${notebooks.length} notebooks`;

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        root.innerHTML = collapsed.map(renderListItem).join("");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = `Show all ${notebooks.length} notebooks`;
      } else {
        root.innerHTML = notebooks.map(renderListItem).join("");
        toggle.setAttribute("aria-expanded", "true");
        toggle.textContent = "Show fewer";
      }
    });
  }

  function initPapers() {
    const root = document.getElementById("papers-list");
    const papers = window.researchPapers;
    if (!root || !papers?.length) return;
    root.innerHTML = papers.map(renderPaperItem).join("");
  }

  function init() {
    initProjects();
    initNotebooks();
    initPapers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

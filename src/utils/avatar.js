// If a photo file is missing from /public/images, show an offline-safe initials avatar.
export function fallbackAvatar(name) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => Array.from(part)[0].toUpperCase())
    .join("") || "?";
  const escapedInitials = initials.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[character]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#272b38"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="#ece8df" font-family="sans-serif" font-size="120" font-weight="700">${escapedInitials}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function handleImgError(event, name) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") return;

  image.dataset.fallbackApplied = "true";
  image.src = fallbackAvatar(name);
}

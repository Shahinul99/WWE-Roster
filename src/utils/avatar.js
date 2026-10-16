// If a photo file is missing from /public/images, show an initials avatar instead.
export function fallbackAvatar(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=272b38&color=ece8df`;
}

export function handleImgError(event, name) {
  event.currentTarget.onerror = null; // stop an infinite loop if the fallback fails too
  event.currentTarget.src = fallbackAvatar(name);
}

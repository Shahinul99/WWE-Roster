// Fake API: fetch + async/await against /public/wrestlers.json.
// The small delay lets you actually see the loading spinner.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchRoster() {
  await wait(700);
  const res = await fetch("/wrestlers.json");
  if (!res.ok) {
    throw new Response("Could not load the roster.", { status: res.status });
  }
  return res.json();
}

export async function getWrestlers() {
  return fetchRoster();
}

export async function getWrestler(id) {
  const roster = await fetchRoster();
  const wrestler = roster.find((w) => String(w.id) === String(id));
  if (!wrestler) {
    throw new Response("We couldn't find that wrestler.", { status: 404 });
  }
  return wrestler;
}

import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function WrestlerDetails() {
  const wrestler = useLoaderData(); // loaded by the route's loader
  const { wrestlerId } = useParams(); // the :wrestlerId from the URL
  const navigate = useNavigate();

  const stats = [
    ["Weight", `${wrestler.weight} lbs`],
    ["Height", wrestler.height],
    ["Hometown", wrestler.hometown],
    ["Style", wrestler.style],
    ["Finisher", wrestler.finisher],
    ["Record", `${wrestler.wins}-${wrestler.losses}`],
    ["Title reigns", wrestler.titleReigns],
  ];

  return (
    <article>
      <button className="btn btn-ghost btn-sm mb-4" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="grid gap-8 md:grid-cols-[320px_1fr]">
        <img
          src={wrestler.image}
          alt={wrestler.name}
          className="aspect-square w-full rounded-box border border-base-300 object-cover"
        />

        <div>
          <p className="text-sm opacity-60">Wrestler #{wrestlerId}</p>
          <h1 className="text-5xl font-bold">{wrestler.name}</h1>
          <p className="mt-1 opacity-70">"{wrestler.nickname}"</p>

          <div className="mt-3">
            {wrestler.championship ? (
              <span className="badge badge-secondary badge-lg">{wrestler.championship}</span>
            ) : (
              <span className="badge badge-outline badge-lg">Contender</span>
            )}
          </div>

          <p className="mt-5 max-w-prose opacity-90">{wrestler.bio}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-box bg-base-200 p-3">
                <dt className="text-sm opacity-60">{label}</dt>
                <dd className="font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-8 text-2xl font-bold">Key points</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {wrestler.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

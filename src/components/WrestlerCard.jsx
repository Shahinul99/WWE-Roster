import { Link } from "react-router-dom";
import { handleImgError } from "../utils/avatar";

function StatusBadge({ wrestler }) {
  if (wrestler.championship) {
    return <span className="badge badge-secondary w-fit">{wrestler.championship}</span>;
  }
  if (wrestler.status === "Hall of Famer") {
    return <span className="badge badge-accent w-fit">Hall of Fame {wrestler.hallOfFameYear}</span>;
  }
  return <span className="badge badge-outline w-fit">Superstar</span>;
}

export default function WrestlerCard({ wrestler }) {
  const { id, name, nickname, weight, height, image, points } = wrestler;

  return (
    <Link
      to={`/wrestlers/${id}`}
      className="card bg-base-200 border border-base-300 transition hover:border-secondary"
    >
      <figure className="aspect-square bg-base-300">
        <img
          src={image}
          alt={name}
          onError={(e) => handleImgError(e, name)}
          className="h-full w-full object-cover object-top"
        />
      </figure>
      <div className="card-body gap-2 p-5">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-sm opacity-70">"{nickname}"</p>

        <StatusBadge wrestler={wrestler} />

        <dl className="mt-1 flex gap-6 text-sm">
          <div>
            <dt className="opacity-60">Weight</dt>
            <dd className="font-semibold">{weight} lbs</dd>
          </div>
          <div>
            <dt className="opacity-60">Height</dt>
            <dd className="font-semibold">{height}</dd>
          </div>
        </dl>

        <p className="text-sm opacity-80">{points[0]}</p>
      </div>
    </Link>
  );
}

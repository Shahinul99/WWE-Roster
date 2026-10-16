import { Link } from "react-router-dom";

export default function WrestlerCard({ wrestler }) {
  const { id, name, nickname, weight, championship, image, wins, losses, points } = wrestler;

  return (
    <Link
      to={`/wrestlers/${id}`}
      className="card bg-base-200 border border-base-300 transition hover:border-secondary"
    >
      <figure className="aspect-square bg-base-300">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body gap-2 p-5">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-sm opacity-70">"{nickname}"</p>

        {championship ? (
          <span className="badge badge-secondary w-fit">{championship}</span>
        ) : (
          <span className="badge badge-outline w-fit">Contender</span>
        )}

        <dl className="mt-1 flex gap-6 text-sm">
          <div>
            <dt className="opacity-60">Weight</dt>
            <dd className="font-semibold">{weight} lbs</dd>
          </div>
          <div>
            <dt className="opacity-60">Record</dt>
            <dd className="font-semibold">
              {wins}-{losses}
            </dd>
          </div>
        </dl>

        <p className="text-sm opacity-80">{points[0]}</p>
      </div>
    </Link>
  );
}

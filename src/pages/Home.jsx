import { Link, useLoaderData } from "react-router-dom";
import WrestlerCard from "../components/WrestlerCard";

export default function Home() {
  const wrestlers = useLoaderData();
  const champions = wrestlers.filter((w) => w.championship);

  return (
    <section>
      <h1 className="text-5xl font-bold md:text-6xl">The Current Champions</h1>
      <p className="mt-3 max-w-xl opacity-80">
        {champions.length} titles, {champions.length} champions. Pick a card to see their full profile.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {champions.map((w) => (
          <WrestlerCard key={w.id} wrestler={w} />
        ))}
      </div>

      <Link to="/wrestlers" className="btn btn-primary mt-10">
        See the full roster
      </Link>
    </section>
  );
}

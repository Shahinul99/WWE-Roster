import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import WrestlerCard from "../components/WrestlerCard";

const FILTERS = ["All", "Champions", "Superstars", "Hall of Famers"];

export default function Wrestlers() {
  const wrestlers = useLoaderData();
  const [filter, setFilter] = useState("All");

  const visible = wrestlers.filter((w) => {
    if (filter === "Champions") return w.status === "Champion";
    if (filter === "Superstars") return w.status === "Superstar";
    if (filter === "Hall of Famers") return w.status === "Hall of Famer";
    return true;
  });

  return (
    <section>
      <h1 className="text-4xl font-bold">Full Roster</h1>

      <div role="tablist" className="tabs tabs-border mt-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            className={`tab ${filter === f ? "tab-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((w) => (
          <WrestlerCard key={w.id} wrestler={w} />
        ))}
      </div>
    </section>
  );
}

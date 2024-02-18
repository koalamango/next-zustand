"use client";

import { useEffect, useState } from "react";
import { useBearStore } from "@/contexts/store";
import Link from "next/link";

const BearPage = () => {
  const bears = useBearStore((state) => state.bears);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="wrapper">
      <div className="box">
        <h1>Bear Component</h1>
        <p>
          How many bears in the forest? <span>{bears}</span>
        </p>
        <p>
          <Link href="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default BearPage;

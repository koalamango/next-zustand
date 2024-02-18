"use client";

import { useEffect, useState } from "react";
import { useBearStore } from "@/contexts/store";
import Link from "next/link";

const BearBox = () => {
  const bears = useBearStore((state) => state.bears);
  const addBears = useBearStore((state) => state.increaseBears);
  const subtractsBears = useBearStore((state) => state.decreaseBears);
  const removeBears = useBearStore((state) => state.removeAllBears);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="box">
      <div>
        <p>
          How many bears in the forest? <span>{bears}</span>
        </p>
        <p>Click the buttons below to change the number of bears.</p>
        <p>
          Check <Link href="/bears">another page</Link> to see the persis state
          shared between components.
        </p>
      </div>
      <div>
        <button onClick={addBears}>Add bear</button>
        <button onClick={subtractsBears}>Subtracts bear</button>
        <button onClick={removeBears}>Remove all bears</button>
      </div>
    </div>
  );
};

export default BearBox;

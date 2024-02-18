"use client";

import * as React from "react";
import { useBearStore } from "@/contexts/store";

const Hydration = () => {
  React.useEffect(() => {
    useBearStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;

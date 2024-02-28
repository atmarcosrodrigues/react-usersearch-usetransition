import { useState } from "react";
import "./styles.css";

export default function Loading({ loadingStyle }) {
  const [loadStyle] = useState(`loader-${loadingStyle}`);

  return (
    <>
      <div className={loadStyle}> </div>
    </>
  );
}

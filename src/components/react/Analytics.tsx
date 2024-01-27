import { Analytics as AnalyticsVercel } from "@vercel/analytics/react";
import { useState } from "react";

const Analytics = () => {
  const [state, setState] = useState({
    // your state variables here
  });

  return <div>{<AnalyticsVercel />}</div>;
};

export default Analytics;

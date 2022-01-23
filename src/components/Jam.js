import React, { useState } from "react";

export default function Jam() {
  const [timeX, setTimeX] = useState(
    new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  setInterval(() => {
    setTimeX(
      new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, 1000);
  return (
    <div className="font-nauti text-9xl mb-12 tracking-widest">
      <Clock timeDito={timeX} />
    </div>
  );
}

function Clock({ timeDito }) {
  return <p className="tracking-widest">{timeDito}</p>;
}

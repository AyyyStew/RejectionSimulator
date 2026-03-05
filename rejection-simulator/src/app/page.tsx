"use client";
import { useState, useEffect } from "react";
import { generate } from "@/utils/generation";

export default function Home() {
  const [rejection, setRejection] = useState(null);

  useEffect(() => {
    setRejection(generate());
  }, []);

  if (!rejection) return null;

  console.log(rejection.body);

  return (
    <div>
      <p>From: {rejection.email_address}</p>
      <p>Subject: {rejection.subject}</p>
      <p>Body:</p>
      <div dangerouslySetInnerHTML={{ __html: rejection.body }} />
      <button onClick={() => setRejection(generate())}>Regenerate</button>
    </div>
  );
}

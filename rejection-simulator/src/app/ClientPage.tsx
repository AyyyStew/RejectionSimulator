"use client";

import { useState } from "react";
import { generate } from "@/utils/generation";

type RejectionData = {
  email_address: string;
  subject: string;
  body: string;
};

export default function ClientPage({
  initialRejection,
}: {
  initialRejection: RejectionData;
}) {
  const [rejection, setRejection] = useState(initialRejection);

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-3">
            Your Rejection
          </h1>
          <div className="space-y-1 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-700">From:</span>{" "}
              {rejection.email_address}
            </p>
            <p>
              <span className="font-medium text-gray-700">To:</span>{" "}
              you@example.com
            </p>
            <p>
              <span className="font-medium text-gray-700">Subject:</span>{" "}
              {rejection.subject}
            </p>
          </div>
        </div>

        <div
          className="px-6 py-6 text-sm text-gray-800 leading-relaxed min-h-[40vh]"
          dangerouslySetInnerHTML={{ __html: rejection.body }}
        />

        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={() => setRejection(generate())}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
          >
            Get Rejected Again
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <h1 className="text-center text-3xl mt-10">Archieved Notificaton Dahboard</h1>
      <Link
        href="/Dashboard"
        className="mt-20 text-xl text-blue-500 text-center"
      >
        Default Notification
      </Link>
    </>
  );
}

export default page;

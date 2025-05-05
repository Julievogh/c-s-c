// app/events/[eventId]/page.jsx

import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/events";

// Tell Next.js what eventId values to pre‑render at build time
export function generateStaticParams() {
  return events.map((e) => ({ eventId: e.id }));
}

// Optional: dynamic page title & metadata
export function generateMetadata({ params }) {
  const event = events.find((e) => e.id === params.eventId);
  return {
    title: event ? event.title : "Event Not Found",
    description: event ? event.description : "",
  };
}

// The page component itself
export default function EventPage({ params }) {
  const { eventId } = params;
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <section className="px-6 py-12 text-center">
        <h1 className="text-2xl font-semibold">Event Not Found</h1>
        <p className="mt-4">Sorry, we couldn’t find that event.</p>
        <Link
          href="/calendar"
          className="mt-6 inline-block text-green-600 underline"
        >
          Back to Calendar
        </Link>
      </section>
    );
  }

  // Format date nicely
  const eventDate = new Date(event.date).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="px-6 py-12 max-w-3xl mx-auto space-y-8">
      <Link href="/calendar" className="text-sm text-green-600 hover:underline">
        ← Back to Calendar
      </Link>

      <h1 className="font-display text-4xl">{event.title}</h1>
      <p className="text-gray-600">{eventDate}</p>

      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="font-body leading-relaxed">{event.description}</p>

      {event.status === "sold out" ? (
        <button
          disabled
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg"
        >
          Sold Out
        </button>
      ) : (
        <button className="w-full bg-green-600 text-white py-3 rounded-lg">
          Sign Up
        </button>
      )}
    </section>
  );
}

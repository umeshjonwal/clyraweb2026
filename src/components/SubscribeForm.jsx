import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function SubscribeForm() {
  const [state, handleSubmit] = useForm("myzdopgg"); // Same Formspree ID

  if (state.succeeded) {
    return <p className="text-green-600">✅ Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="rounded-xl flex-1 px-3 py-2 bg-white/70 dark:bg-gray-900/50 
                   border border-gray-300 dark:border-gray-700 
                   backdrop-blur-md shadow-inner focus:ring-2 focus:ring-accent-500 outline-none"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary rounded-xl shadow-lg shadow-accent-600/20"
      >
        {state.submitting ? "Joining..." : "Join"}
      </button>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </form>
  );
}

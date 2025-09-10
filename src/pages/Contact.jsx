import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovnrwll"); // <-- replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <p className="text-green-600 mt-6 text-lg font-semibold">
        ✅ Thanks! We’ll get back to you soon.
      </p>
    );
  }

  return (
    <div className="py-16 max-w-2xl">
      <h1 className="text-4xl font-extrabold mb-4">Let’s talk</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 card">
        <label className="grid gap-2">
          <span>Name</span>
          <input
            id="name"
            type="text"
            name="name"
            className="rounded-xl p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
            placeholder="Your name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>

        <label className="grid gap-2">
          <span>Email</span>
          <input
            id="email"
            type="email"
            name="email"
            className="rounded-xl p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
            placeholder="you@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label className="grid gap-2">
          <span>Budget</span>
          <select
            id="budget"
            name="budget"
            className="rounded-xl p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
          >
            <option>₹50k–₹1L</option>
            <option>₹1L–₹3L</option>
            <option>₹3L+</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span>Project details</span>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="rounded-xl p-2 bg-white text-black dark:bg-gray-800 dark:text-white"
            placeholder="Tell us about your goals, timeline, and constraints."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>

        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send"}
        </motion.button>
      </form>
    </div>
  );
}

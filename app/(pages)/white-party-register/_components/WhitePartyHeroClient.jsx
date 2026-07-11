"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import PagesBanner from "../../../../components/PagesBanner/PagesBanner";

/* ───────────────────────────────────────────
   HERO IMAGES — (بدّلهم بصور الحفلة لما تجهز)
   ─────────────────────────────────────────── */
const heroImages = [
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447627/eo5sxlh0gym8drgtc32j_qiznnz.jpg",
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767447622/f76djjyilyjfpzpjmryl_puk2vj.webp",
];

/* ───────────────────────────────────────────
   DATA
   ─────────────────────────────────────────── */
const WHAT_TO_EXPECT = [
  {
    icon: "🎵",
    title: "Live Afro-Arabic DJ",
    text: "Enjoy live music all afternoon with carefully curated Afro-Arabic vibes.",
  },
  {
    icon: "☕",
    title: "Exclusive Coffee & Matcha Specials",
    text: "Limited-edition drinks available only during White Party.",
  },
  {
    icon: "🎡",
    title: "Spin & Win",
    text: "Spin the wheel for the chance to win exclusive prizes, desserts and vouchers.",
  },
  {
    icon: "📸",
    title: "Content Corner",
    text: "A beautifully designed content space perfect for photos and videos.",
  },
  {
    icon: "📱",
    title: "Content Challenge",
    text: "Post your drink on your Instagram Story and tag @NourMaison. One winner receives a Golden Ticket — complimentary dinner for two.",
  },
  {
    icon: "🤍",
    title: "Best Dressed in White",
    text: "Wear your best all-white outfit. The winner receives a complimentary brunch or dessert box.",
  },
  {
    icon: "🏆",
    title: "Golden Cup",
    text: "One lucky drink will have a hidden golden sticker underneath. Find it and win an exclusive surprise prize.",
  },
  {
    icon: "🧾",
    title: "Lucky Receipt Draw",
    text: "At the end of the evening, one receipt will be randomly selected to win a Nour Maison voucher.",
  },
  {
    icon: "🎥",
    title: "Live Content Host",
    text: "Our content creator will be capturing guest reactions, outfits, drinks and games throughout the event.",
  },
];

const SCHEDULE = [
  { time: "3:00 PM", label: "Doors Open & Welcome Drinks" },
  { time: "3:30 PM", label: "Live Afro-Arabic DJ Begins" },
  { time: "4:00 PM", label: "Spin & Win Opens" },
  { time: "4:30 PM", label: "Content Challenge Begins" },
  { time: "5:00 PM", label: "Limited Edition Coffee & Matcha Specials" },
  { time: "5:30 PM", label: "Live Content & Guest Interviews" },
  { time: "6:00 PM", label: "Best Dressed in White Judging" },
  { time: "6:30 PM", label: "Lucky Receipt Draw" },
  { time: "7:00 PM", label: "Golden Cup Reveal" },
  { time: "7:00 PM+", label: "Sunset Vibes, Music & Good Energy" },
];

const FAQS = [
  {
    q: "Is the event ticketed?",
    a: "Yes, the White Party is a ticketed event. You can book your ticket through our website.",
  },
  {
    q: "Can I bring friends?",
    a: "Absolutely! Bring a friend and follow @NourMaison on Instagram to receive a complimentary drink.",
  },
  {
    q: "Is there parking nearby?",
    a: "Yes, there is parking available near Nour Maison in Milton Keynes.",
  },
  {
    q: "Can I attend without booking?",
    a: "We highly recommend booking in advance as spaces are limited. Walk-ins are subject to availability.",
  },
  {
    q: "Are food and drinks included?",
    a: "The ticket grants you entry to the event. Food and drinks are available for purchase with exclusive White Party specials.",
  },
];

/* ───────────────────────────────────────────
   REUSABLE PIECES
   ─────────────────────────────────────────── */
const SectionWrapper = ({ children, id, className = "" }) => (
  <section id={id} className={`scroll-mt-28 py-14 md:py-20 ${className}`}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const SectionTag = ({ children }) => (
  <p className="font-oswald text-xs uppercase tracking-[0.28em] text-logoGold">
    {children}
  </p>
);

const SectionTitle = ({ children, as: Tag = "h2" }) => (
  <Tag className="mt-2 font-seasons text-3xl md:text-4xl italic text-[#1F1A17]">
    {children}
  </Tag>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-[24px] border border-[#edece8] bg-white p-6 md:p-8 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const GoldButton = ({
  children,
  href,
  scrollTo,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full bg-logoGold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";

  if (scrollTo) {
    return (
      <ScrollLink
        to={scrollTo}
        smooth
        duration={500}
        offset={-120}
        className={`${base} cursor-pointer ${className}`}
      >
        {children}
      </ScrollLink>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={`${base} ${className}`}>
      {children}
    </button>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

/* ───────────────────────────────────────────
   MAIN COMPONENT
   ─────────────────────────────────────────── */
export default function WhitePartyContent() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    tickets: 1,
    bringingFriend: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API / email service
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-[#1F1A17]">
      {/* ──────────────────── HERO ──────────────────── */}
      <PagesBanner
        useH1={true}
        bottomBg={false}
        title="White Party"
        slogan={
          <>
            <span className="block text-base sm:text-lg md:text-2xl xl:text-3xl px-2 leading-relaxed">
              An exclusive afternoon of specialty coffee, matcha,
              <br className="hidden sm:block" />
              live Afro-Arabic music and unforgettable experiences.
            </span>
            <span className="mt-4 block text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] text-logoGold px-2">
              26 July &bull; Starts at 3:00 PM &bull; Nour Maison
            </span>
          </>
        }
        scrollTo="event-intro"
        images={heroImages}
      />

      {/* ──────────────────── INTRO ──────────────────── */}
      <SectionWrapper id="event-intro" className="bg-white">
        <Card>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* left */}
            <div>
              <SectionTag>White Party &bull; 26 July</SectionTag>
              <SectionTitle>An exclusive afternoon at Nour Maison</SectionTitle>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#6f685f]">
                Join us for a premium white-party experience with specialty
                coffee, matcha, curated Afro-Arabic music, interactive games,
                prizes and elegant summer vibes. Dress in white, bring your
                energy, and create unforgettable memories.
              </p>
              <div className="mt-6">
                <GoldButton scrollTo="ticket-booking">
                  Book Your Ticket
                </GoldButton>
              </div>
            </div>

            {/* right — quick details */}
            <Card className="!bg-[#fdfcf9]">
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { dot: "bg-logoGold", label: "Date:", value: "26 July" },
                  {
                    dot: "bg-sageGreen",
                    label: "Time:",
                    value: "Starts at 3:00 PM",
                  },
                  {
                    dot: "bg-logoGold",
                    label: "Location:",
                    value: "Nour Maison, Milton Keynes",
                  },
                  {
                    dot: "bg-sageGreen",
                    label: "Dress Code:",
                    value: "White 🤍",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`}
                    />
                    <span>
                      <strong>{item.label}</strong> {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Card>
      </SectionWrapper>

      {/* ──────────────────── TICKET BOOKING ──────────────────── */}
      <SectionWrapper id="ticket-booking" className="bg-[#fdfcf9]">
        <div className="text-center">
          <SectionTag>Reserve Your Spot</SectionTag>
          <SectionTitle>Ticket Booking</SectionTitle>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#6f685f]">
            Fill in your details below to secure your place at the White Party.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-2xl">
          {submitted ? (
            <div className="py-10 text-center">
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 font-seasons text-2xl italic">
                You&apos;re In!
              </h3>
              <p className="mt-2 text-[#6f685f]">
                We&apos;ve received your booking. See you at the White Party!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#e5e2dc] bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-logoGold focus:ring-1 focus:ring-logoGold/30"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-[#e5e2dc] bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-logoGold focus:ring-1 focus:ring-logoGold/30"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Phone Number{" "}
                  <span className="text-[#a09a91]">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+44 7XXX XXXXXX"
                  className="w-full rounded-xl border border-[#e5e2dc] bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-logoGold focus:ring-1 focus:ring-logoGold/30"
                />
              </div>

              {/* Tickets */}
              <div>
                <label
                  htmlFor="tickets"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Number of Tickets <span className="text-red-400">*</span>
                </label>
                <select
                  id="tickets"
                  name="tickets"
                  required
                  value={form.tickets}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#e5e2dc] bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-logoGold focus:ring-1 focus:ring-logoGold/30"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Ticket" : "Tickets"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bringing a friend */}
              <div className="flex items-center gap-3">
                <input
                  id="bringingFriend"
                  name="bringingFriend"
                  type="checkbox"
                  checked={form.bringingFriend}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-[#e5e2dc] text-logoGold focus:ring-logoGold/30"
                />
                <label htmlFor="bringingFriend" className="text-sm">
                  I&apos;m bringing a friend
                </label>
              </div>

              <GoldButton type="submit" className="w-full mt-2">
                Reserve Your Spot
              </GoldButton>
            </form>
          )}
        </Card>
      </SectionWrapper>

      {/* ──────────────────── BRING A FRIEND ──────────────────── */}
      <SectionWrapper id="bring-a-friend" className="bg-white">
        <Card className="text-center !bg-gradient-to-br !from-white !to-[#f8f6f1] !border-logoGold/20">
          <span className="text-4xl">🎁</span>
          <SectionTitle>Bring a Friend &amp; Get a Free Drink</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6f685f]">
            Bring a friend with you, follow{" "}
            <a
              href="https://www.instagram.com/nourmaison"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-logoGold underline underline-offset-2 hover:text-[#b5731f]"
            >
              @NourMaison
            </a>{" "}
            on Instagram, and receive one complimentary drink. Simply show both
            tickets and your Instagram follow to your server on arrival.
          </p>
          <div className="mt-6">
            <GoldButton
              href="https://www.instagram.com/nourmaison"
              className="gap-2"
            >
              Follow @NourMaison
            </GoldButton>
          </div>
        </Card>
      </SectionWrapper>

      {/* ──────────────────── WHAT TO EXPECT ──────────────────── */}
      <SectionWrapper id="what-to-expect" className="bg-[#fdfcf9]">
        <div className="text-center">
          <SectionTag>What Awaits You</SectionTag>
          <SectionTitle>What to Expect</SectionTitle>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#6f685f]">
            From live music to surprise prizes — here&apos;s everything
            happening at the White Party.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_TO_EXPECT.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
            >
              <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-seasons text-lg italic text-[#1F1A17]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6f685f]">
                  {item.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ──────────────────── EVENT SCHEDULE ──────────────────── */}
      <SectionWrapper id="event-schedule" className="bg-white">
        <div className="text-center">
          <SectionTag>The Agenda</SectionTag>
          <SectionTitle>Event Schedule</SectionTitle>
        </div>

        <Card className="mx-auto mt-10 max-w-2xl !p-0 overflow-hidden">
          <ul className="divide-y divide-[#f0ede7]">
            {SCHEDULE.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={i}
                className="flex items-center gap-4 px-6 py-4 md:px-8 md:py-5"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                    i % 2 === 0 ? "bg-logoGold" : "bg-sageGreen"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-logoGold">
                    {item.time}
                  </p>
                  <p className="text-sm md:text-base text-[#1F1A17]">
                    {item.label}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </Card>
      </SectionWrapper>

      {/* ──────────────────── DRESS CODE ──────────────────── */}
      <SectionWrapper id="dress-code" className="bg-[#fdfcf9]">
        <Card className="text-center">
          <span className="text-5xl">🤍</span>
          <SectionTitle>Dress Code</SectionTitle>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#6f685f]">
            White outfits are highly encouraged. Wear your best all-white look
            and you could win a complimentary brunch or dessert box in our{" "}
            <strong>Best Dressed in White</strong> competition.
          </p>
        </Card>
      </SectionWrapper>

      {/* ──────────────────── FAQ ──────────────────── */}
      <SectionWrapper id="faq" className="bg-white">
        <div className="text-center">
          <SectionTag>Got Questions?</SectionTag>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <Card key={i} className="!p-0 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium md:text-base transition hover:bg-[#fdfcf9]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`ml-4 shrink-0 text-logoGold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    ＋
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-7 text-[#6f685f]">
                    {faq.a}
                  </p>
                </motion.div>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ──────────────────── FINAL CTA ──────────────────── */}
      <SectionWrapper id="final-cta" className="bg-[#fdfcf9]">
        <Card className="text-center !bg-gradient-to-br !from-[#1F1A17] !to-[#2c2520] !border-0">
          <SectionTitle as="h2">
            <span className="text-white">
              Ready to Experience the White Party?
            </span>
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/70">
            Secure your spot now and join us for an unforgettable afternoon of
            specialty coffee, matcha, live Afro-Arabic music and exclusive
            surprises.
          </p>
          <div className="mt-8">
            <GoldButton scrollTo="ticket-booking">Book Your Ticket</GoldButton>
          </div>
        </Card>
      </SectionWrapper>

      {/* ──────────────────── SURPRISE TEASER ──────────────────── */}
      <SectionWrapper id="surprise" className="bg-white">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-4xl">✨</span>
            <h2 className="mt-3 font-seasons text-2xl md:text-3xl italic text-[#1F1A17]">
              And that&apos;s not all&hellip;
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#6f685f]">
              Some surprises will only be revealed on the day of the event.
              <br />
              Be there to find out.
            </p>
            <div className="mt-6">
              <GoldButton scrollTo="ticket-booking">
                Book Your Ticket
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}

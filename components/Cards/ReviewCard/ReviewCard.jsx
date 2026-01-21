"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import cx from "classnames";

const safeNum = (v, fallback = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

const clampText = (text = "", max = 190) => {
  const t = String(text || "");
  if (t.length <= max) return { short: t, isLong: false };
  return { short: t.slice(0, max).trim() + "…", isLong: true };
};

const pctFrom5 = (v) => Math.max(0, Math.min(100, (safeNum(v, 0) / 5) * 100));

const StarRow = ({ value = 5 }) => {
  const rating = Math.max(0, Math.min(5, safeNum(value, 5)));
  const full = Math.floor(rating);
  const frac = rating - full;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const fill = i < full ? 100 : i === full ? Math.round(frac * 100) : 0;

        return (
          <span key={i} className="relative inline-flex">
            <FaStar className="text-gray-200" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill}%` }}
            >
              <FaStar className="text-yellow-400" />
            </span>
          </span>
        );
      })}
    </div>
  );
};

const MetricBar = ({ label, value }) => {
  const pct = pctFrom5(value);

  return (
    <div className="flex items-center gap-3">
      <span className="w-[92px] text-xs font-semibold text-gray-600">
        {label}
      </span>

      <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <span className="w-8 text-right text-xs font-semibold text-gray-500">
        {safeNum(value, 0).toFixed(1)}
      </span>
    </div>
  );
};

export default function ReviewCard({ data }) {
  const [expanded, setExpanded] = useState(false);

  const rating = useMemo(() => safeNum(data?.rating ?? 5, 5), [data?.rating]);
  const { short, isLong } = useMemo(
    () => clampText(data?.review, 200),
    [data?.review]
  );

  const hasTags = Array.isArray(data?.tags) && data.tags.length;
  const hasBreakdown = !!data?.breakdown;
  const hasDishes =
    Array.isArray(data?.recommendedDishes) && data.recommendedDishes.length;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="relative mx-auto w-full max-w-md h-full"
    >
      {/* subtle gradient border (no background) */}
      {/* <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-yellow-300/70 via-orange-300/50 to-emerald-300/60 opacity-60 blur-[6px]" />
      <div className="absolute -inset-[1px]  rounded-2xl bg-gradient-to-br from-yellow-300 via-orange-300 to-emerald-300 opacity-35" /> */}

      <div className="relative rounded-2xl bg-gradient-to-tr from from-softMintGreen/20 to-logoGold/10  backdrop-blur-sm  border border-logoGold  shadow-[0_18px_55px_rgba(0,0,0,0.10)]">

        <div className="p-5">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-emerald-300 blur-[2px] opacity-70" />
              <div className="relative rounded-full p-[2px] bg-gradient-to-br from-yellow-300 via-orange-300 to-emerald-300">
                <div className="rounded-full bg-white p-[2px]">
                  <img
                    onClick={() => console.log(data.image)}
                    src={data?.image}
                    alt={data?.name || "Reviewer"}
                    className="h-24 w-24 rounded-full object-cover"
                    loading="lazy"
                  // sizes="56px"
                  />
                </div>
              </div>


            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-lg font-bold text-gray-900">
                  {data?.name}
                </h3>

                {data?.source ? (
                  <span className="shrink-0 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-[11px] font-semibold text-gray-600">
                    {data.source}
                  </span>
                ) : null}
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <StarRow value={rating} />
                <span className="text-xs font-semibold text-gray-500">
                  {rating.toFixed(1)}
                </span>
                {data?.date ? (
                  <span className="text-xs text-gray-400">• {data.date}</span>
                ) : null}
              </div>
            </div>
          </div>

          {/* Tags */}
          {hasTags ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.tags.map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {/* Review text */}
          <div className="mt-4">
            <p
              className={cx(
                "text-[14.5px] leading-7 text-gray-800",
                !expanded && "line-clamp-4"
              )}
            >
              {expanded ? data?.review : short}
            </p>

            {isLong ? (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 text-xs font-bold text-orange-600 hover:text-orange-500 transition"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            ) : null}
          </div>

          {/* Breakdown + Dishes */}
          {(hasBreakdown || hasDishes) ? (
            <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4">
              {hasBreakdown ? (
                <div className="space-y-3">
                  <MetricBar label="Food" value={data?.breakdown?.food} />
                  <MetricBar label="Service" value={data?.breakdown?.service} />
                  <MetricBar
                    label="Atmosphere"
                    value={data?.breakdown?.atmosphere}
                  />
                </div>
              ) : null}

              {hasDishes ? (
                <div className={cx("mt-4", { "mt-0": !hasBreakdown })}>
                  <p className="text-xs font-bold text-gray-700 mb-2">
                    Recommended dishes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.recommendedDishes.map((dish, i) => (
                      <span
                        key={`${dish}-${i}`}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-400">
              {data?.location ? data.location : ""}
            </div>

            {data?.link ? (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-500 transition"
              >
                View source →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

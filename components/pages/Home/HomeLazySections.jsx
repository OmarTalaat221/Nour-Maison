"use client";

import React, { memo } from "react";
import LazyHomeImport from "../../LazyHomeImport/LazyHomeImport";

const loadAboutUsSection = () =>
    import("./AboutUsSection/AboutUsSection");

const loadHomaRoastMenu = () =>
    import("./HomaRoastMenu");

const loadInstagramFeeds = () =>
    import("./InstagramFeeds/InstagramFeeds");

const loadBookTableSection = () =>
    import("./BookTableSection/BookTableSection");

const loadNourKidsMenuHero = () =>
    import("./KidsSection");

const loadAfternoonTea = () =>
    import("./AfternoonTea/AfternoonTea");

const loadGoogleReviews = () =>
    import("./GoogleReviews/GoogleReviews");

const loadChefsSection2 = () =>
    import("./ChefsSection/ChefsSection2");

const HomeLazySections = () => {
    return (
        <main className="bg-s-700 overflow-hidden">
            <LazyHomeImport
                loader={loadAboutUsSection}
                minHeight={780}
                mobileRootMargin="-120px 0px"
                className="flex flex-col mb-[40px] mt-[20px] md:mb-[100px] relative z-20"
            />

            <LazyHomeImport
                loader={loadHomaRoastMenu}
                minHeight={720}
                mobileRootMargin="60px 0px"
            />

            <LazyHomeImport
                loader={loadInstagramFeeds}
                minHeight={700}
                mobileRootMargin="60px 0px"
            />

            <LazyHomeImport
                loader={loadBookTableSection}
                minHeight={650}
                mobileRootMargin="60px 0px"
            />

            <LazyHomeImport
                loader={loadNourKidsMenuHero}
                minHeight={650}
                mobileRootMargin="60px 0px"
                props={{
                    title: "Roasted to Perfection. Crafted to Impress",
                    subTitle: (
                        <>
                            Discover our signature roast lineup , bold flavors, slow{" "}
                            <span className="font-lato">-</span> cooked artistry.
                        </>
                    ),
                    cta: "Roast Menu",
                    ctaLink: "/roast-menu",
                    src: "/images/nour-reverse-720p.mp4",
                    poster: "/images/nour-reverse-poster.webp",
                }}
            />

            <LazyHomeImport
                loader={loadAfternoonTea}
                minHeight={780}
                mobileRootMargin="60px 0px"
            />

            <LazyHomeImport
                loader={loadGoogleReviews}
                minHeight={700}
                mobileRootMargin="60px 0px"
            />

            <LazyHomeImport
                loader={loadChefsSection2}
                minHeight={700}
                mobileRootMargin="60px 0px"
            />
        </main>
    );
};

export default memo(HomeLazySections);
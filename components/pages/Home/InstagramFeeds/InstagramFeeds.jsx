import React, { memo } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import InstagramFeedsClient from "./instagramFeeds(client)";

const feeds = [
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768822186/download_duff6a.jpg",
    link: "https://www.instagram.com/reel/DTSjsRgjMWj/",
    text: `Craving something fresh, tasty, and full of flavour? 🌯💚

Say hello to the Poulet Wrap at Nour Maison Milton Keynes.. tender chicken breast, a mix of crisp vegetables, wrapped in a soft flatbread, and drizzled with our signature Algerian sauce.

Looking for the best brunch in Milton Keynes, a quick lunch in Milton Keynes, or a cosy café in Milton Keynes to enjoy wholesome and delicious food? This wrap is the perfect pick!

From breakfast and brunch in Milton Keynes to indulgent desserts, speciality coffees, and all day dining, Nour Maison is your go-to spot for flavour, vibes, and comfort.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am to 10pm
🔗 https://www.nourmaison.co.uk/booking
🌐 https://www.nourmaison.co.uk`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768822279/download_mjewcj.jpg",
    link: "https://www.instagram.com/p/DRpT562Es6p/",
    text: `Sunday just got upgraded — an apple-wood–smoked, Middle Eastern–spiced, French-finished roast that slaps every time.”

🍽️ “Warning: cravings incoming. Slow-roasted, apple-wood smoke, crispy + juicy in every bite.”

😮‍💨 “A British roast reimagined with Middle Eastern spice + French finesse.”
🍽️ “Where French technique meets Middle Eastern flavour — the roast, reinvented.”
✨ “Your new weekend obsession: apple-wood smoked, perfectly roasted, and impossible to resist.”

🤤 “Taste the roast everyone’s talking about — smoky, aromatic, and next-level delicious.”

📍 “Milton Keynes’ roast royalty — one bite and you’ll see why.”

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #MiltonKeynesCafe #HalalFoodMiltonKeynes #FoodAsArt #MKFoodie #AestheticCafeMK #DessertsMiltonKeynes #RoastDinnerMiltonKeynes #GourmetCafeMK`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768817773/download_euqvcg.jpg",
    link: "https://www.instagram.com/p/DRaJERvgmlm/",
    text: `There’s a reason the experience at Nour Maison feels different… a reason every visit leaves a subtle mark on your day.

From the atmosphere to the flavours to the little details you love ,everything is crafted to make each moment worth coming back for.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #CafeVibesMiltonKeynes #DessertsMiltonKeynes #BrunchMiltonKeynes #HalalCafeMiltonKeynes #MKFoodie #TasteTheMagic #FoodAsArt`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768817392/download_z1ihon.jpg",
    link: "https://www.instagram.com/p/DTI9TmqgiMs/",
    text: `Let’s make today tasty with our French Toast at Nour Maison Milton Keynes 🍞💚

Sweet, fluffy, and perfectly golden.. topped with fresh fruits, drizzles, and a touch of magic that makes breakfast and brunch unforgettable.

If you’re on the hunt for the best brunch in Milton Keynes, the best breakfast in Milton Keynes, or simply a cosy café to enjoy amazing flavours, this French Toast is a must-try.

From indulgent sweets to speciality coffee, desserts, and all-day dining, Nour Maison is your go-to spot for flavour, vibes, and comfort in Milton Keynes.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am to 10pm
🔗 https://www.nourmaison.co.uk/booking
🌐 https://www.nourmaison.co.uk

#NourMaison #MiltonKeynesCafe #BestCafeMiltonKeynes #MiltonKeynesFood
#FrenchToastMiltonKeynes #ComfortFoodMK #MiltonKeynesBrunch #BestBrunchMiltonKeynes #MiltonKeynesBreakfast #BestBreakfastMiltonKeynes #CoffeeMiltonKeynes #AfternoonTeaMiltonKeynes #UKCafe #OpenDailyMK #CosyCafeMK`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768817501/download_ph4xru.jpg",
    link: "https://www.instagram.com/reel/DTQk0zkiTTY/",
    text: `Winter vibes are calling 💚

Warm up at Nour Maison Milton Keynes with our creamy, indulgent hot chocolate.. the perfect treat to cosy up with on a chilly day.

Whether you’re craving the best brunch in Milton Keynes, a comforting breakfast in Milton Keynes, or a relaxing moment in the best café in Milton Keynes, our drinks and winter treats are here to make every moment unforgettable.

From speciality coffees in Milton Keynes to desserts, all-day dining, and cosy café vibes, Nour Maison is your ultimate winter escape.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am to 10pm
🔗 https://www.nourmaison.co.uk/booking
🌐 https://www.nourmaison.co.uk

#NourMaison #MiltonKeynesCafe #BestCafeMiltonKeynes #MiltonKeynesFood #ComfortFoodMK #MiltonKeynesBrunch #BestBrunchMiltonKeynes
#BestHotChocolateMiltonKeynes
#MiltonKeynesBreakfast #BestBreakfastMiltonKeynes #CoffeeMiltonKeynes #AfternoonTeaMiltonKeynes #UKCafe #OpenDailyMK #CosyCafeMK`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768822377/download_jcuad8.jpg",
    link: "https://www.instagram.com/p/DS2sbHDjD0h/",
    text: `One of our favourite venues just got even better 😍 @nourmaisonuk now serve roasts 🤤

These are just any roast dinners either, they do it nour style, if you know, you know 😉`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768822064/download_nayng8.jpg",
    link: "https://www.instagram.com/p/DRKklnfk0Hj/",
    text: `A rainbow of flavours awaits… 🌈
Step into Nour Maison Milton Keynes and discover our irresistible macarons colourful, playful, and packed with taste that will make you come back for more. 💚

Will you dare to try them all?
📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk
#NourMaison #MacaronsMiltonKeynes #DessertsMiltonKeynes #HalalDessertsMiltonKeynes #CafeVibesMiltonKeynes #MKFoodie #FoodAsArtMiltonKeynes #GourmetCafeMK #MiltonKeynesEats #HalalCafeMiltonKeynes`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768817302/download_cwwhwn.jpg",
    link: "https://www.instagram.com/p/DRZKipVE_hS/",
    text: `Feeling good starts here at Nour Maison! 💚
From fresh drinks to tasty desserts, your perfect cafe escape in Milton Keynes awaits. 😉

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #CafeVibesMiltonKeynes #BrunchMiltonKeynes #DessertsMiltonKeynes #HalalCafeMiltonKeynes #MKFoodie #TasteTheMagic #FoodAsArt`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768817645/download_trvl5m.jpg",
    link: "https://www.instagram.com/p/DQ2MBQmjLWI/",
    text: `Which one are you picking today? 💚
Blue Moon Latte, Rose Latte, Strawberry Matcha, or the creamy classic Spanish Latte? ☕
Whichever you choose it’s always made fresh, halal, and full of flavour at Nour Maison Café Milton Keynes

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #CafeVibesMiltonKeynes #HalalCafeMiltonKeynes #CoffeeMiltonKeynes #MocktailsMiltonKeynes #BrunchMiltonKeynes #BestCafeInMiltonKeynes #MKFoodie #HalalFoodMiltonKeynes #DessertsMiltonKeynes #FoodAsArtMiltonKeynes`,
  },
  {
    mediaUrl:
      "https://res.cloudinary.com/dhebgz7qh/image/upload/v1768822118/download_mmoi6y.jpg",
    link: "https://www.instagram.com/p/DQ4jFm9De63/",
    text: `Breakfast, lunch, dinner, or dessert every moment tastes better at Nour Maison Café Milton Keynes 💚
From fresh brunch plates to decadent halal desserts and artisan coffee, it’s always the right time to treat yourself at Milton Keynes’ most aesthetic halal café.
Come for the food, stay for the vibes ✨

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #HalalCafeMiltonKeynes #BrunchMiltonKeynes #HalalFoodMiltonKeynes #DessertsMiltonKeynes #CoffeeMiltonKeynes #CafeVibesMiltonKeynes #MKFoodie #FoodAsArt`,
  },
];

const InstagramFeeds = () => {
  return (
    <div data-aos="zoom-in">
      <SectionTitle>Nour Maison: Latest Instagram Feeds</SectionTitle>

      <div className="flex justify-center items-center mt-20">
        <Marquee
          className="py-5 gap-10"
          direction="left"
          style={{ width: "100%", overflow: "visible" }}
          speed={70}
          pauseOnHover={true}
          loop={0}
        >
          <InstagramFeedsClient feeds={feeds} />
        </Marquee>
      </div>
    </div>
  );
};

export default memo(InstagramFeeds);

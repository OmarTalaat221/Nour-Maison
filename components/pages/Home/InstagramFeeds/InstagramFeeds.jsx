import React from "react";
import Marquee from "react-fast-marquee";
import Instagram_feed_card from "./instagram_feed_card";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import InstagramFeedsClient from "./instagramFeeds(client)";

const InstagramFeeds = () => {
  const feeds = [
    {
      mediaUrl: `https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/612129397_18041055956711558_4607840721475191243_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzgwNjI2MTYwOTE2NjA2MzAxMTE4MDQxMDU1OTUzNzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjQ4MHg4NTQuc2RyLkMzIn0%3D&_nc_ohc=1hCnkQuSx28Q7kNvwHyQwtF&_nc_oc=AdkqWUzIJm4aV0xarypnLvZ67Lz0G9a5d_WuFCifyMaxiAqBzduXsD0PXSpIE3TMRHg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=1hIzNQC80n7nQvwxu5BRsg&oh=00_AfoyWXav0Cx2aKhO1e1zQ3JFPZd9p-q296yN6xtMGzVSTQ&oe=696943FE`,
      link: "https://www.instagram.com/reel/DTSjsRgjMWj/",
      text: `Craving something fresh, tasty, and full of flavour? 🌯💚

Say hello to the Poulet Wrap at Nour Maison Milton Keynes.. tender chicken breast, a mix of crisp vegetables, wrapped in a soft flatbread, and drizzled with our signature Algerian sauce.

Looking for the best brunch in Milton Keynes, a quick lunch in Milton Keynes, or a cosy café in Milton Keynes to enjoy wholesome and delicious food? This wrap is the perfect pick!

From breakfast and brunch in Milton Keynes to indulgent desserts, speciality coffees, and all day dining, Nour Maison is your go-to spot for flavour, vibes, and comfort.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am to 10pm
🔗 https://nourmaison.co.uk/booking
🌐 https://nourmaison.co.uk`,
    },

    {
      mediaUrl: `https://instagram.fcai21-2.fna.fbcdn.net/v/t51.82787-15/588411340_18036709514711558_3585474062818430790_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=Mzc3NjYzNzMwNTYwNDk4NDQ4OTE4MDM2NzA5NTExNzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=OIgFg8dZABQQ7kNvwEJqv4c&_nc_oc=Adlh79j9Ygj7isIhomwrtzkdDp5p42WZZXeRmibQIDYjLTXUBFPsvxnAG7SNuul6grU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-2.fna&_nc_gid=cKCBhxC9Y2yvSPkE_-Fhkg&oh=00_AfqhsWw-6gJRHh_CC3pLsrepuelE-5mZa75sym8HQFB5mA&oe=69694259`,
      link: "https://www.instagram.com/p/DRpT562Es6p/",
      text: `
       
       Sunday just got upgraded — an apple-wood–smoked, Middle Eastern–spiced, French-finished roast that slaps every time.”

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

#NourMaison #MiltonKeynesCafe #HalalFoodMiltonKeynes #FoodAsArt #MKFoodie #AestheticCafeMK #DessertsMiltonKeynes #RoastDinnerMiltonKeynes #GourmetCafeMK     
      `,
    },
    {
      mediaUrl: `https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/586875927_18036129878711558_1355817042983601441_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=Mzc3MjM2NzUxNDIyMzQwNTQxNDE4MDM2MTI5ODc1NzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=eFtDkK2w3MIQ7kNvwGvdjX9&_nc_oc=Adk4hpWVPGILjbZR7poQige8eSwVXP9_ouQOMYEXeJalorBvdusQ5x841xrkYO2h0ZQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=tv59Z8svxgWr5Kx_zY1_IQ&oh=00_Afqdh6nl6spqZLDfgOruTfjSgYUgItJLrdZO3idE9-1WGA&oe=696945FF`,
      link: "https://www.instagram.com/p/DRaJERvgmlm/",
      text: `
      There’s a reason the experience at Nour Maison feels different… a reason every visit leaves a subtle mark on your day.

From the atmosphere to the flavours to the little details you love ,everything is crafted to make each moment worth coming back for.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #CafeVibesMiltonKeynes #DessertsMiltonKeynes #BrunchMiltonKeynes #HalalCafeMiltonKeynes #MKFoodie #TasteTheMagic #FoodAsArt
`,
    },
    {
      mediaUrl: `https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/607447941_18040700237711558_7982610344003225589_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzgwMzU1OTUxMzMzNjk4MDI2ODE4MDQwNzAwMjM0NzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=mtPpBR1Y1ZUQ7kNvwFRZeQf&_nc_oc=AdlM0zZMsh8jav_ia6-WeD083dcNjG1BYnX3OKbAfDTi6oQITA7DxUjMTrtNfTf346M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=Kv_L3eCPVLjUKLBU-_IZoA&oh=00_Afr9rSrpEkv0WDn6Ywjj2IK7zds7yHtlnMFwZIQwQlYdYg&oe=6969535C`,
      link: "https://www.instagram.com/p/DTI9TmqgiMs/",
      text: `
        Let’s make today tasty with our French Toast at Nour Maison Milton Keynes 🍞💚

Sweet, fluffy, and perfectly golden.. topped with fresh fruits, drizzles, and a touch of magic that makes breakfast and brunch unforgettable.

If you’re on the hunt for the best brunch in Milton Keynes, the best breakfast in Milton Keynes, or simply a cosy café to enjoy amazing flavours, this French Toast is a must-try.

From indulgent sweets to speciality coffee, desserts, and all-day dining, Nour Maison is your go-to spot for flavour, vibes, and comfort in Milton Keynes.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am to 10pm
🔗 https://nourmaison.co.uk/booking
🌐 https://nourmaison.co.uk

#NourMaison #MiltonKeynesCafe #BestCafeMiltonKeynes #MiltonKeynesFood
#FrenchToastMiltonKeynes #ComfortFoodMK #MiltonKeynesBrunch #BestBrunchMiltonKeynes #MiltonKeynesBreakfast #BestBreakfastMiltonKeynes #CoffeeMiltonKeynes #AfternoonTeaMiltonKeynes #UKCafe #OpenDailyMK #CosyCafeMK
      `,
    },
    {
      mediaUrl: `https://instagram.fcai21-2.fna.fbcdn.net/v/t51.82787-15/611627682_18040985777711558_8134443371468982453_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzgwNTcwMzY0MzU4OTA2Mzg5NjE4MDQwOTg1Nzc0NzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=DKJtHvSFW9UQ7kNvwFjm60e&_nc_oc=AdkAFykMtcm4bbaCwVigY8LBXpr9WlJWE-iBuCcRRz4jSg_cfTnKJYS17yGy6lsJzes&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-2.fna&_nc_gid=1hIzNQC80n7nQvwxu5BRsg&oh=00_AfrkkriEwLQ01PQqrIiba15-kK6TMeZhKD2XUXcN0ZE1Pw&oe=696948CB`,
      link: "https://www.instagram.com/reel/DTQk0zkiTTY/",
      text: `Winter vibes are calling 💚

Warm up at Nour Maison Milton Keynes with our creamy, indulgent hot chocolate.. the perfect treat to cosy up with on a chilly day.

Whether you’re craving the best brunch in Milton Keynes, a comforting breakfast in Milton Keynes, or a relaxing moment in the best café in Milton Keynes, our drinks and winter treats are here to make every moment unforgettable.

From speciality coffees in Milton Keynes to desserts, all-day dining, and cosy café vibes, Nour Maison is your ultimate winter escape.

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am to 10pm
🔗 https://nourmaison.co.uk/booking
🌐 https://nourmaison.co.uk

#NourMaison #MiltonKeynesCafe #BestCafeMiltonKeynes #MiltonKeynesFood #ComfortFoodMK #MiltonKeynesBrunch #BestBrunchMiltonKeynes
#BestHotChocolateMiltonKeynes
#MiltonKeynesBreakfast #BestBreakfastMiltonKeynes #CoffeeMiltonKeynes #AfternoonTeaMiltonKeynes #UKCafe #OpenDailyMK #CosyCafeMK`,
    },
    {
      mediaUrl: `https://instagram.fcai21-4.fna.fbcdn.net/v/t51.71878-15/607026908_2462436824170969_6477313579808374369_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=Mzc5ODQxODcxMjc4MTY2NzYxNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=Xnzlyc2Eh7UQ7kNvwFSlSZr&_nc_oc=AdnFi1eDHyKdb-L0tpTuAYEe72qdF6QTOqwQd0kFdD68CbrGYSnSZf_eoxWIbZDhJA4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=hrhmVmx726MTHmbCBichgQ&oh=00_AfofWHE_2GnpOh-Ps33NUd21lZJg0dxxSU6DRw1BTms1VA&oe=69693918`,
      link: "https://www.instagram.com/p/DS2sbHDjD0h/",
      text: `
       
        One of our favourite venues just got even better 😍 @nourmaisonuk now serve roasts 🤤

These are just any roast dinners either, they do it nour style, if you know, you know 😉
      
      `,
    },
    {
      mediaUrl: `https://instagram.fcai21-3.fna.fbcdn.net/v/t39.30808-6/585187290_859274813349604_7116673527338570534_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzc2Nzk4NDk1Mjk0OTU1NTY4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjh4MTI4NS5zZHIuQzMifQ%3D%3D&_nc_ohc=NwN_7TO-2fcQ7kNvwEZnpyJ&_nc_oc=AdlWER3J00gV07Whb5gwKC_AragrAnqw-MtNM5jIYlhHpuNwnT8SJStJnndek7rN56w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-3.fna&_nc_gid=NVgvLdCPm5eh5TkZOERyEw&oh=00_AfpFdhMZ8FYjWWdra6ECcAOrUvDQrVAo-mdv4RUhynuidA&oe=696963C2`,
      link: "https://www.instagram.com/p/DRKklnfk0Hj/",
      text: `
       
        A rainbow of flavours awaits… 🌈
Step into Nour Maison Milton Keynes and discover our irresistible macarons colourful, playful, and packed with taste that will make you come back for more. 💚

Will you dare to try them all?
📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk
#NourMaison #MacaronsMiltonKeynes #DessertsMiltonKeynes #HalalDessertsMiltonKeynes #CafeVibesMiltonKeynes #MKFoodie #FoodAsArtMiltonKeynes #GourmetCafeMiltonKeynes #MiltonKeynesEats #HalalCafeMiltonKeynes
      `,
    },
    {
      mediaUrl: `https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/585404886_18036079856711558_8667530296300680332_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc3MjA5MjUyNDIwMzg2NjE5NDE4MDM2MDc5ODUwNzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=gZHh845hMnAQ7kNvwHPNHRd&_nc_oc=Adl-No3kDSPIksIEfaT3QuL9cNve4i7Fd4yh4CAaaKAQuR1JbWt8GSqiE20qZUp06UM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=NVgvLdCPm5eh5TkZOERyEw&oh=00_AfrgGlwUXoe8iWl6yOQoBR5w91Z3gW9gL1uvwXJgln6Ajw&oe=6969560B`,
      link: "https://www.instagram.com/p/DRZKipVE_hS/",
      text: `
       Feeling good starts here at Nour Maison! 💚
From fresh drinks to tasty desserts, your perfect cafe escape in Milton Keynes awaits. 😉

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #CafeVibesMiltonKeynes #BrunchMiltonKeynes #DessertsMiltonKeynes #HalalCafeMiltonKeynes #MKFoodie #TasteTheMagic #FoodAsArt
             `,
    },
    {
      mediaUrl: `https://instagram.fcai21-2.fna.fbcdn.net/v/t51.82787-15/575973160_18034759643711558_5727867810138839203_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzc2MjI0NzQwMTgxODg2Mjk4NDE4MDM0NzU5NjM3NzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=8ei7OhFNS3oQ7kNvwEoieKT&_nc_oc=AdkHMZgW6ei-kmRRgIKvsRmnNmAcOMNszttkdZj7Z-XC6d5ZWTcDSGgdxqmDBnYI5qY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-2.fna&_nc_gid=ZLBcno9eh6pzB1ACbVwebQ&oh=00_Afoco1ymgae_vyE_L7J9PfAkiK-vKXunkMzETgqA5w1UKA&oe=69694499`,
      link: "https://www.instagram.com/p/DQ2MBQmjLWI/",
      text: `Which one are you picking today? 💚
Blue Moon Latte, Rose Latte, Strawberry Matcha, or the creamy classic Spanish Latte? ☕
Whichever you choose it’s always made fresh, halal, and full of flavour at Nour Maison Café Milton Keynes

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #CafeVibesMiltonKeynes #HalalCafeMiltonKeynes #CoffeeMiltonKeynes #MocktailsMiltonKeynes #BrunchMiltonKeynes #BestCafeInMiltonKeynes #MKFoodie #HalalFoodMiltonKeynes #DessertsMiltonKeynes #FoodAsArtMiltonKeynes             `,
    },
    {
      mediaUrl: `https://instagram.fcai21-3.fna.fbcdn.net/v/t51.82787-15/579687148_18034849649711558_5860426118741665625_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=Mzc2MjkxMTgwNTcxOTgzNDI5NTE4MDM0ODQ5NjQ2NzExNTU4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CUVZXp7mTYAQ7kNvwFGpX6H&_nc_oc=Adnz3T2-zbDQfCqC82mnIckYtHuiaUFHF0IkWiJF37Rc1hs_TidLfntedPdjsYDaxQk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-3.fna&_nc_gid=ZLBcno9eh6pzB1ACbVwebQ&oh=00_AfqlgK4ppzph-71jhkAYNxEVIT362n9nAqUdiNNrW7mnOg&oe=696933EA`,
      link: "https://www.instagram.com/p/DQ4jFm9De63/",
      text: `
      
      Breakfast, lunch, dinner, or dessert every moment tastes better at Nour Maison Café Milton Keynes 💚
From fresh brunch plates to decadent halal desserts and artisan coffee, it’s always the right time to treat yourself at Milton Keynes’ most aesthetic halal café.
Come for the food, stay for the vibes ✨

📍 149 Grafton Gate, Milton Keynes, MK9 1AE
🕘 Open daily: 9am–10pm
🔗 nourmaison.co.uk/booking
🌐 nourmaison.co.uk

#NourMaison #HalalCafeMiltonKeynes #BrunchMiltonKeynes #HalalFoodMiltonKeynes #DessertsMiltonKeynes #CoffeeMiltonKeynes #CafeVibesMiltonKeynes #MKFoodie #FoodAsArt
      
      `,
    },

    // {
    //   mediaUrl:
    //     "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/iqhclykglpbdcggm4hcn_e31rmw.jpg",
    //   link: "https://www.instagram.com/p/DCpc0k1sL4A/?img_index=2",
    //   text: " A huge thank you to everyone who joined us for the VIP grand opening of Nour Maison!",
    // },
    // {
    //   mediaUrl:
    //     "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/iqhclykglpbdcggm4hcn_e31rmw.jpg",
    //   link: "https://www.instagram.com/p/DCpc0k1sL4A/?img_index=2",
    //   text: " A huge thank you to everyone who joined us for the VIP grand opening of Nour Maison!",
    // },
    //     {
    //       mediaUrl:
    //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443796/omzzqoihwdbgjfqc0lhm_ksik2s.jpg",
    //       link: "https://www.instagram.com/p/DCpc0k1sL4A/?img_index=1",
    //       text: " A huge thank you to everyone who joined us for the VIP grand opening of Nour Maison!",
    //     },
    //     {
    //       mediaUrl:
    //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443792/h7kizulgt2eapp7w027d_lxeyhb.jpg",
    //       link: "https://www.instagram.com/p/DFw6SjPsu1u/",
    //       text: "At Nour Maison, every dish tells a story of passion and precision. 🌿 From the finest ingredients to artful plating,",
    //     },
    //     {
    //       mediaUrl:
    //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443797/s6juqgcui3lzu8kdjrmt_yxqzrl.jpg",
    //       link: "https://www.instagram.com/p/DF43J7dMg6w/",
    //       text: `
    // Nour Maison ✨️
    // “Where East Meets West Under One `,
    //     },
    //     {
    //       mediaUrl:
    //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/q5ccc9oqexswwudxiwcm_mxd1wp.jpg",
    //       link: "https://www.instagram.com/p/DFe3SPVMY_b/",
    //       text: `Celebrate Love the Nour Maison Way!
    // `,
    //     },
    //     {
    //       mediaUrl:
    //         "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/u4otupy2jgvif8buuly3_bg6wad.jpg",
    //       link: "https://www.instagram.com/p/DFpJojGMRu6/",
    //       text: `Milton Keynes get ready! 🚨 The city’s FIRST EVER ☕️ Coffee & 🍵 Matcha Party is finally here—and you do NOT want to miss this!`,
    //     },
  ];

  return (
    <div data-aos={"zoom-in"}>
      <SectionTitle>Nour Maison: Latest Instagram Feeds</SectionTitle>
      <div className="flex justify-center items-center mt-20">
        <Marquee
          className="py-5 gap-10"
          direction="left"
          style={{ width: "100%", overflow: "visible" }}
          speed={70}
          pauseOnHover={true}
          loop={0}
          // play={false}
        >
          <InstagramFeedsClient feeds={feeds} />
        </Marquee>
      </div>
    </div>
  );
};

export default InstagramFeeds;

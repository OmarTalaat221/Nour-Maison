export const fallbackNourMaisonBlogContent = `<div class="prose prose-lg max-w-none">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .nm-blog-fallback {
          font-family: 'Lato', sans-serif;
          color: #2b2b2b;
          line-height: 1.75;
        }
        
        .nm-blog-fallback h1,
        .nm-blog-fallback h2,
        .nm-blog-fallback h3 {
          font-family: "EB Garamond", serif !important;
          line-height: 1.25 !important;
        }
        
        .nm-blog-fallback h1 {
          font-size: 42px;
          font-weight: 700;
          font-style: italic;
          color: #CA852D;
          margin: 0 0 18px 0;
        }
        
        .nm-blog-fallback h2 {
          font-size: 30px;
          font-weight: 700;
          color: #CA852D;
          margin: 34px 0 12px 0;
        }
        
        .nm-blog-fallback h3 {
          font-size: 24px;
          font-weight: 700;
          color: #84B067;
          margin: 26px 0 10px 0;
        }
        
        .nm-blog-fallback p {
          font-size: 16px;
          margin: 12px 0;
          color: #333;
        }
        
        .nm-blog-hero {
          width: 100%;
          height: auto;
          max-height: 540px;
          object-fit: cover;
          border-radius: 18px;
          margin: 24px 0;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.16);
        }
        
        .nm-section-card {
          border: 1px solid rgba(132, 176, 103, 0.35);
          border-radius: 18px;
          padding: 26px;
          margin: 26px 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.96), rgba(250,247,241,0.86));
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.06);
        }
        
        .nm-listing {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          padding: 0;
          margin: 18px 0 0 0;
          list-style: none;
        }
        
        .nm-listing li {
          background: rgba(132, 176, 103, 0.08);
          border-left: 4px solid #84B067;
          border-radius: 12px;
          padding: 13px 15px;
          color: #2f2f2f;
          font-weight: 600;
        }
        
        .nm-table-wrap {
          width: 100%;
          overflow-x: auto;
          margin-top: 18px;
        }
        
        .nm-table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
        }
        
        .nm-table th,
        .nm-table td {
          border: 1px solid rgba(132, 176, 103, 0.28);
          padding: 14px;
          text-align: left;
          vertical-align: top;
          font-size: 15px;
        }
        
        .nm-table th {
          background: rgba(132, 176, 103, 0.15);
          color: #4e7037;
          font-weight: 700;
        }
        
        .global-shimmer-btn {
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
          will-change: transform;
        }
        
        .global-shimmer-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          transform: translateX(-100%);
          animation: shimmer 1.5s ease-in-out infinite;
          z-index: 1;
          pointer-events: none;
          will-change: transform;
        }
        
        .cta-nm-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          padding: 32px;
          margin: 30px 0;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          border: 2px solid rgba(132, 176, 103, 0.6);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          font-family: 'Lato', sans-serif;
        }
        
        .cta-nm-content {
          position: relative;
          z-index: 10;
          text-align: left;
        }
        
        .cta-nm-title {
          font-family: "EB Garamond", serif !important;
          font-style: italic !important;
          font-size: 32px !important;
          font-weight: bold !important;
          margin: 0 0 8px 0 !important;
          line-height: 1.2 !important;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
          color: #dd9933 !important;
        }
        
        .cta-nm-subtitle {
          font-family: 'Lato', sans-serif !important;
          font-size: 16px !important;
          color: #84B067 !important;
          margin: 0 0 24px 0 !important;
          font-weight: 600 !important;
        }
        
        .cta-nm-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .cta-nm-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          color: white !important;
          text-decoration: none !important;
          font-family: "EB Garamond", serif !important;
          font-size: 18px;
          font-weight: bold;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .cta-nm-btn-gold {
          background-color: #CA852D !important;
          box-shadow: 0 10px 15px -3px rgba(202, 133, 45, 0.4);
        }
        
        .cta-nm-btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(202, 133, 45, 0.6);
        }
        
        .cta-nm-btn-green {
          background-color: #84B067 !important;
          box-shadow: 0 10px 15px -3px rgba(132, 176, 103, 0.4);
        }
        
        .cta-nm-btn-green:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(132, 176, 103, 0.6);
        }
        
        .cta-nm-btn-text {
          position: relative;
          z-index: 10;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 640px) {
          .nm-blog-fallback h1 {
            font-size: 34px;
          }
        
          .nm-blog-fallback h2 {
            font-size: 26px;
          }
        
          .nm-listing,
          .cta-nm-buttons {
            grid-template-columns: 1fr;
          }
        
          .cta-nm-card,
          .nm-section-card {
            padding: 22px;
          }
        }
    </style>

    <article class="nm-blog-fallback">
        <h1><span style="color: #CA852D;">Nour Maison Milton Keynes: Café, Brunch, Halal Dining and Dessert in CMK</span></h1>

        <p>
            Nour Maison is a warm and elegant destination for guests searching for Nour Maison, Nour Maison Milton Keynes, Nour Maison MK or Nour Maison CMK. Whether you want to explore the Nour Maison menu, enjoy Nour Maison brunch, relax inside Nour Maison café or plan a refined Nour Maison afternoon tea, the experience is designed around comfort, flavour and memorable hospitality.
        </p>

        <img class="nm-blog-hero" src="https://xdsoft.net/jodit/finder/files/download.jpg" alt="Nour Maison Milton Keynes café, brunch and halal dining experience" width="1200" height="720" loading="lazy" style="width: 1200px; height: 720px; margin: 0px;">

        <p>
            This guide is for guests looking for a café Milton Keynes experience that feels polished without being stiff. Nour Maison brings together coffee, brunch, halal food, Middle Eastern inspiration, Mediterranean flavour, Arabic desserts, French pastries and family dining in a way that feels modern, welcoming and easy to enjoy.
        </p>

        <div class="cta-nm-card global-shimmer-btn">
            <div class="cta-nm-content">
                <h3 class="cta-nm-title">Ready to Experience Nour Maison?</h3>
                <p class="cta-nm-subtitle">Book your table or explore our menu</p>

                <div class="cta-nm-buttons">
                    <a href="/booking" class="cta-nm-btn cta-nm-btn-gold global-shimmer-btn">
                        <span class="cta-nm-btn-text">Book Now</span>
                    </a>

                    <a href="/menu" class="cta-nm-btn cta-nm-btn-green global-shimmer-btn">
                        <span class="cta-nm-btn-text">View Menu</span>
                    </a>
                </div>
            </div>
        </div>

        <section class="nm-section-card">
            <h2>A Café Milton Keynes Guests Can Visit for Coffee, Brunch and More</h2>

            <p>
                For anyone searching for best café Milton Keynes, best cafe Milton Keynes, coffee shop Milton Keynes or best coffee shop Milton Keynes, Nour Maison offers more than a quick drink. It is a place where guests can enjoy coffee and brunch Milton Keynes style, meet friends, work for a while or slow down with something beautifully prepared.
            </p>

            <p>
                If you are typing café near me Milton Keynes, modern café Milton Keynes or luxury café Milton Keynes, the idea behind Nour Maison is simple: create a café that feels stylish, comfortable and useful for different moments of the day. Families looking for family café Milton Keynes, halal café Milton Keynes or halal coffee shop Milton Keynes can also enjoy the space with confidence.
            </p>

            <ul class="nm-listing">
                <li>Fresh coffee in a calm and modern setting</li>
                <li>Brunch dishes designed for relaxed dining</li>
                <li>Halal-friendly choices for confident visits</li>
                <li>Elegant interiors for meetings and social moments</li>
                <li>Family-friendly seating and welcoming service</li>
                <li>A refined café atmosphere in Milton Keynes</li>
            </ul>
        </section>

        <section class="nm-section-card">
            <h2>Brunch Milton Keynes: Breakfast, All Day Dining and Relaxed Café Moments</h2>

            <p>
                Nour Maison is a strong choice for brunch Milton Keynes because the menu supports both slow weekend visits and casual weekday meals. Guests searching for best brunch Milton Keynes, brunch near me Milton Keynes, brunch café Milton Keynes or brunch menu Milton Keynes can find a comfortable place to enjoy a flavour-led brunch experience.
            </p>

            <p>
                The same relaxed approach works for breakfast Milton Keynes, best breakfast Milton Keynes, breakfast near me Milton Keynes and all day breakfast Milton Keynes. Whether you are starting early, meeting friends before shopping or planning a longer café visit, Nour Maison gives breakfast and brunch a polished local identity.
            </p>

            <div class="nm-table-wrap">
                <table class="nm-table">
                    <thead>
                        <tr>
                            <th>Dining Moment</th>
                            <th>Why Nour Maison Works</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Breakfast</td>
                            <td>Ideal for guests searching for breakfast Milton Keynes or all day breakfast Milton Keynes with coffee and comfort.</td>
                        </tr>
                        <tr>
                            <td>Brunch</td>
                            <td>A relaxed option for brunch Milton Keynes, best brunch Milton Keynes and brunch café Milton Keynes searches.</td>
                        </tr>
                        <tr>
                            <td>Café Visit</td>
                            <td>Useful for guests looking for café near me Milton Keynes, coffee shop Milton Keynes or modern café Milton Keynes.</td>
                        </tr>
                        <tr>
                            <td>Family Meal</td>
                            <td>Suitable for people looking for family café Milton Keynes, family brunch Milton Keynes and family dining Milton Keynes.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="nm-section-card">
            <h2>Halal Restaurant Milton Keynes for Breakfast, Lunch, Dinner and Brunch</h2>

            <p>
                Guests who want halal restaurant Milton Keynes, best halal restaurant Milton Keynes, halal food Milton Keynes or halal dining Milton Keynes need a place that feels reliable, welcoming and enjoyable. Nour Maison supports that need with a dining experience that is suitable for everyday meals, family plans and special catch-ups.
            </p>

            <p>
                The restaurant is also relevant for halal brunch Milton Keynes, halal breakfast Milton Keynes, halal dinner Milton Keynes, halal lunch Milton Keynes and halal menu Milton Keynes. Instead of making halal dining feel like a limited choice, Nour Maison presents it as part of a wider café and restaurant experience.
            </p>

            <ul class="nm-listing">
                <li>Halal-friendly dining for different times of day</li>
                <li>Breakfast, brunch, lunch and dinner occasions</li>
                <li>Comfortable setting for families and groups</li>
                <li>Menu variety for casual and special visits</li>
            </ul>
        </section>

        <div class="cta-nm-card global-shimmer-btn">
            <div class="cta-nm-content">
                <h3 class="cta-nm-title">Plan Your Next Visit</h3>
                <p class="cta-nm-subtitle">Reserve your table or browse the full Nour Maison menu</p>

                <div class="cta-nm-buttons">
                    <a href="/booking" class="cta-nm-btn cta-nm-btn-gold global-shimmer-btn">
                        <span class="cta-nm-btn-text">Book a Table</span>
                    </a>

                    <a href="/menu" class="cta-nm-btn cta-nm-btn-green global-shimmer-btn">
                        <span class="cta-nm-btn-text">Explore Menu</span>
                    </a>
                </div>
            </div>
        </div>

        <section class="nm-section-card">
            <h2>Middle Eastern, Mediterranean, Arabic and French Arabic Fusion Flavours</h2>

            <p>
                Nour Maison speaks to guests searching for Middle Eastern restaurant Milton Keynes, Middle Eastern food Milton Keynes and Middle Eastern brunch Milton Keynes by offering a flavour direction that feels generous, warm and comforting. It also appeals to people looking for Mediterranean restaurant Milton Keynes, Mediterranean food Milton Keynes and Mediterranean brunch Milton Keynes.
            </p>

            <p>
                For visitors interested in Arabic restaurant Milton Keynes, Arabic food Milton Keynes or Arabic brunch Milton Keynes, Nour Maison creates a bridge between familiar Arabic hospitality and modern café presentation. The concept also fits searches such as Arabic French fusion café Milton Keynes and French Arabic fusion restaurant Milton Keynes, especially for guests who enjoy a menu with layered cultural influence.
            </p>

            <ul class="nm-listing">
                <li>Middle Eastern warmth with modern presentation</li>
                <li>Mediterranean-inspired comfort and freshness</li>
                <li>Arabic food influences in a refined café setting</li>
                <li>French Arabic fusion details across desserts and café moments</li>
            </ul>
        </section>

        <section class="nm-section-card">
            <h2>Pistachio Desserts, Arabic Desserts and French Pastries in Milton Keynes</h2>

            <p>
                Dessert is a major part of the Nour Maison experience. Guests searching for pistachio desserts Milton Keynes, pistachio café Milton Keynes or pistachio latte Milton Keynes can enjoy a sweet café moment that feels distinctive. Pistachio is one of those flavours that quietly walks in and steals the meeting agenda.
            </p>

            <p>
                Nour Maison also fits searches for pistachio croissant Milton Keynes, pistachio pastries Milton Keynes and pistachio cake Milton Keynes. For guests who prefer regional and European dessert inspiration, the experience connects naturally with Arabic desserts Milton Keynes, French pastries Milton Keynes and dessert café Milton Keynes.
            </p>

            <ul class="nm-listing">
                <li>Pistachio-led drinks, pastries and dessert moments</li>
                <li>Arabic dessert inspiration for richer flavour</li>
                <li>French pastry style for a polished café experience</li>
                <li>Sweet options that pair well with coffee and brunch</li>
            </ul>
        </section>

        <section class="nm-section-card">
            <h2>Family Restaurant Milton Keynes with Kids-Friendly Café Comfort</h2>

            <p>
                Nour Maison is not only for coffee dates and brunch plans. It is also suitable for families searching for family restaurant Milton Keynes, family brunch Milton Keynes and family dining Milton Keynes. The setting is calm enough for adults and welcoming enough for younger guests.
            </p>

            <p>
                Parents looking for kids menu Milton Keynes, kids friendly café Milton Keynes or kids friendly restaurant Milton Keynes can choose Nour Maison for a relaxed visit where food, service and atmosphere work together. No chaos, no drama, just a proper family plan with good taste.
            </p>
        </section>

        <section class="nm-section-card">
            <h2>Restaurants Milton Keynes: Places to Eat for Lunch, Dinner and Everyday Food Near You</h2>

            <p>
                When people search restaurants Milton Keynes, best restaurants Milton Keynes or places to eat Milton Keynes, they usually want somewhere that feels dependable and enjoyable. Nour Maison answers that need with a café and restaurant experience that works for casual food, relaxed dining and special moments.
            </p>

            <p>
                It is also relevant for food near me Milton Keynes, restaurant near me Milton Keynes, lunch Milton Keynes and dinner Milton Keynes. Whether the visit is a quick lunch, a longer dinner or a spontaneous café stop, Nour Maison gives guests a flexible place to eat in Milton Keynes.
            </p>

            <div class="nm-table-wrap">
                <table class="nm-table">
                    <thead>
                        <tr>
                            <th>Search Intent</th>
                            <th>How Nour Maison Matches It</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Food near me Milton Keynes</td>
                            <td>A convenient café and restaurant option for guests looking for quality food locally.</td>
                        </tr>
                        <tr>
                            <td>Lunch Milton Keynes</td>
                            <td>A comfortable choice for midday dining, meetings and casual catch-ups.</td>
                        </tr>
                        <tr>
                            <td>Dinner Milton Keynes</td>
                            <td>A warm setting for evening halal dining and relaxed restaurant visits.</td>
                        </tr>
                        <tr>
                            <td>Places to eat Milton Keynes</td>
                            <td>A flexible destination for coffee, brunch, desserts, lunch, dinner and family dining.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="nm-section-card">
            <h2>Central Milton Keynes, CMK, MK9 and The Hub Milton Keynes Restaurants</h2>

            <p>
                Location matters when choosing where to eat. Nour Maison is relevant for guests searching for Central Milton Keynes café, Central Milton Keynes brunch and Central Milton Keynes halal restaurant. It gives visitors a refined place to pause, eat and enjoy a café experience in the heart of Milton Keynes.
            </p>

            <p>
                The same applies to CMK café, CMK brunch, CMK halal restaurant, MK9 café, MK9 brunch and MK9 halal restaurant. For people comparing The Hub Milton Keynes restaurants, Nour Maison offers a strong mix of café comfort, halal dining, brunch, desserts and family-friendly hospitality.
            </p>
        </section>

        <div class="cta-nm-card global-shimmer-btn">
            <div class="cta-nm-content">
                <h3 class="cta-nm-title">Discover Nour Maison in Milton Keynes</h3>
                <p class="cta-nm-subtitle">Coffee, brunch, halal dining, desserts and family moments in one elegant place</p>

                <div class="cta-nm-buttons">
                    <a href="/booking" class="cta-nm-btn cta-nm-btn-gold global-shimmer-btn">
                        <span class="cta-nm-btn-text">Reserve Now</span>
                    </a>

                    <a href="/menu" class="cta-nm-btn cta-nm-btn-green global-shimmer-btn">
                        <span class="cta-nm-btn-text">View Menu</span>
                    </a>
                </div>
            </div>
        </div>
    </article>
</div>`;

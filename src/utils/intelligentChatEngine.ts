/**
 * Intelligent Celebration AI Engine for Shruti Lanjewar's 21st Birthday
 * Created & Engineered by Bhupesh Indurkar (Full Stack Developer)
 */

export interface ChatAnswer {
  reply: string;
  category?: string;
  suggestions?: string[];
}

export function generateIntelligentCelebrationResponse(
  userQuery: string,
  history: Array<{ role: string; text: string }> = []
): string {
  const query = userQuery.trim();
  const q = query.toLowerCase();

  // Helper to test multiple regex / substring matches
  const matchAny = (patterns: (string | RegExp)[]): boolean => {
    return patterns.some((p) => (typeof p === 'string' ? q.includes(p) : p.test(q)));
  };

  // 1. DEVELOPER & CREATOR: Bhupesh Indurkar
  if (
    matchAny([
      'bhupesh',
      'indurkar',
      'develop',
      'creator',
      'created this',
      'made this',
      'who made',
      'who coded',
      'who designed',
      'who built',
      'kisne banaya',
      'kisne banayi',
      'kone banavli',
      'kisne develop',
      'developer kaun',
      'kiska idea',
      'full stack',
      'tech stack',
    ])
  ) {
    return (
      `✨ **Designed & Developed by Bhupesh Indurkar — Professional Full Stack Developer** ✨\n\n` +
      `This bespoke celebration web application was lovingly engineered from the ground up by **Bhupesh Indurkar** exclusively for **Shruti Lanjewar** on her milestone 21st birthday! 🌸\n\n` +
      `**About the Craftsmanship:**\n` +
      `• **Developer:** Bhupesh Indurkar (Full Stack Developer)\n` +
      `• **Tech Stack:** React 19, TypeScript, Three.js (3D WebGL Pastel Dreamscape & 3D Interactive Cake), Tailwind CSS, Canvas Confetti, and jsPDF.\n` +
      `• **Vision:** To create a digital masterpiece worthy of Shruti — a truly valuable, cherished person — blending cutting-edge modern design, fluid animations, and heartfelt sentiment.\n\n` +
      `Bhupesh poured his heart and engineering expertise into every detail to make sure Shruti's special day shines bright! 💖🥂`
    );
  }

  // 2. WHO IS SHRUTI / HER QUALITIES / BIRTHDAY PERSON
  if (
    matchAny([
      'who is shruti',
      'about shruti',
      'shruti kaun hai',
      'shruti kon ahe',
      'tell me about shruti',
      'valuable person',
      'birthday girl',
      'lanjewar',
      'who are you celebrating',
      'who is this for',
      'kiski birthday',
      'kiska janamdin',
    ])
  ) {
    return (
      `🌸 **Meet Shruti Lanjewar — The Queen of the Day!** ✨\n\n` +
      `Shruti is the radiant, kind-hearted, and inspiring soul being celebrated here! Today marks her **21st Milestone Birthday** (born 22 October 2005) — entering her golden chapter of life.\n\n` +
      `**What makes Shruti so truly valuable & special:**\n` +
      `• **Radiant Smile:** A smile that effortlessly brightens every room and lifts up everyone around her.\n` +
      `• **Pure Heart:** Full of genuine compassion, warmth, and graceful kindness.\n` +
      `• **Boundless Spirit:** Ambitious, creative, poised, and destined for great achievements in her 20s!\n\n` +
      `This entire website was specially handcrafted by Full Stack Developer **Bhupesh Indurkar** to honor her elegance and celebrate every beautiful memory of her 21 years! 🎂💖`
    );
  }

  // 3. AGE / BIRTHDATE / COUNTDOWN / TIMELINE DETAILS
  if (
    matchAny([
      'how old',
      'her age',
      'age of shruti',
      'shruti ki age',
      'kitne saal',
      'kitni umar',
      'birth date',
      'birthday date',
      'when is her birthday',
      'janamdin kab',
      'koni tareekh',
      '22 october',
      '2005',
      '2026',
      '21 years',
      '21st',
    ])
  ) {
    return (
      `🎂 **Shruti Lanjewar's Milestone Details:**\n\n` +
      `• **Date of Birth:** 22 October 2005 🌟\n` +
      `• **Milestone Celebration:** 22 October 2026 🥂\n` +
      `• **Current Milestone:** Turning **21 Years Old** (The Golden Chapter!)\n` +
      `• **Journey:** 21 years of growing into an extraordinary, graceful, and intelligent person.\n\n` +
      `Check out the **Interactive Milestone Card & Live Countdown** section on the homepage to see the time ticking toward her golden moment! ⏳✨`
    );
  }

  // 4. SHAYARI / HINDI POETRY / URDU GHAZAL
  if (
    matchAny([
      'shayari',
      'shayri',
      'hindi poem',
      'urdu',
      'sher',
      'romantic',
      'hindi wish',
      'hindi me',
      'hindi mai',
    ])
  ) {
    const shayaris = [
      `🌹 **श्रुति के लिए विशेष जन्मदिन शायरी:** 🌹\n\n` +
        `*खिलती हुई कलियों सी मुस्कान रहे हमेशा,*\n` +
        `*आँखों में खुशियों का जहाँ रहे हमेशा!*\n` +
        `*21वें साल की हर सुबह लाये नई रोशनी,*\n` +
        `*सपनों की हर उड़ान पर आपका नाम रहे हमेशा!* ✨\n\n` +
        `जन्मदिन की ढेर सारी मुबारकबाद, प्यारी श्रुति! 💖🎂`,

      `🌸 **एक और दिलकश शायरी श्रुति के लिए:** 🌸\n\n` +
        `*चाँद से भी प्यारी वो मुस्कान तुम्हारी है,*\n` +
        `*हर दिन खुशियों से सजे, यह दुआ हमारी है!*\n` +
        `*21 की उम्र में कदम रखा है आपने,*\n` +
        `*यह जिंदगी अब आपकी और भी प्यारी है!* 🥂✨\n\n` +
        `*Happy 21st Birthday, Shruti Lanjewar!* ❤️`,

      `✨ **खास 21वें जन्मदिन का तोहफा शब्दों में:** ✨\n\n` +
        `*खुदा से क्या मांगू तेरे वास्ते श्रुति,*\n` +
        `*सदा खुशियों से भरे रहें तेरे रास्ते!*\n` +
        `*हँसी तेरे लबों पे खिले हर पल यूँ ही,*\n` +
        `*दुआ है मेरी, जहाँ में रोशन हो नाम तेरा यूँ ही!* 🌸💫`,
    ];
    return shayaris[Math.floor(Math.random() * shayaris.length)];
  }

  // 5. ENGLISH POEM / POETRY
  if (matchAny(['poem', 'poetry', 'rhyme', 'verse', 'sonnet', 'stanza'])) {
    const poems = [
      `📜 **A 21st Birthday Ode for Shruti** ✨\n\n` +
        `*Twenty-one years of poise and grace,*\n` +
        `*A gentle glow upon your face.*\n` +
        `*With every smile, the world turns bright,*\n` +
        `*A spirit dancing in the light.*\n\n` +
        `*May every dream you dare to chase,*\n` +
        `*Unfold with warmth and sweet embrace.*\n` +
        `*Here's to your future, brave and new,*\n` +
        `*Happy Birthday, Shruti — here's to you!* 🥂💖`,

      `🌸 **The Golden Horizon — For Shruti Lanjewar** 🌸\n\n` +
        `*A blossom blooming in October air,*\n` +
        `*With kindness deep and beauty rare.*\n` +
        `*Twenty-one candles cast their glow,*\n` +
        `*On all the paths you yet will go.*\n\n` +
        `*Walk boldly forward, pure and true,*\n` +
        `*The best of life awaits for you!* ✨🎂`,
    ];
    return poems[Math.floor(Math.random() * poems.length)];
  }

  // 6. WISHES / BLESSINGS / TOASTS / SPEECHES
  if (
    matchAny([
      'wish',
      'wishes',
      'toast',
      'speech',
      'blessing',
      'dua',
      'badhai',
      'greeting',
      'congratulat',
    ])
  ) {
    return (
      `🥂 **A Heartfelt 21st Birthday Toast to Shruti:**\n\n` +
      `"May your 21st year be your most magical chapter yet! May you laugh until your stomach hurts, collect memories you cherish forever, and find immense success in every endeavor you pursue.\n\n` +
      `May you always stay as warm, genuine, and luminous as you are today. You are cherished, respected, and deeply valued!\n\n` +
      `**Happy 21st Birthday, Shruti! Cheers to you and your limitless tomorrow!** 🎂🌸✨"`
    );
  }

  // 7. ZODIAC / ASTROLOGY / LIBRA
  if (
    matchAny([
      'zodiac',
      'rashi',
      'horoscope',
      'libra',
      'astrology',
      'star sign',
      'kundli',
      'traits',
      'personality',
    ])
  ) {
    return (
      `⚖️ **Shruti's Zodiac Sign: The Enchanting Libra (Born 22 October)** 🌸\n\n` +
      `Shruti is born on the cusp of **Libra ♎**, ruled by **Venus** — the planet of beauty, love, harmony, and art!\n\n` +
      `**Her Key Astrological Gifts:**\n` +
      `• **Natural Grace & Aesthetic Eye:** Libras have an innate sense of beauty, elegance, and balanced style.\n` +
      `• **Warmth & Empathy:** A peacemaker with a deeply compassionate, gentle, and understanding heart.\n` +
      `• **Charming Presence:** Naturally charismatic, she brings calm and joy to the people around her.\n\n` +
      `Turning 21 brings a powerful Venusian cycle of self-confidence, abundance, and creative fulfillment! ✨💖`
    );
  }

  // 8. 3D CAKE & HOW TO CUT CAKE / BLOW CANDLES
  if (
    matchAny([
      'cake',
      'candle',
      'candles',
      'blow',
      'cut cake',
      'flame',
      'pastry',
      'cake kaise',
      'mom batti',
    ])
  ) {
    return (
      `🎂 **Interactive 3D Celebration Cake Guide:**\n\n` +
      `Right here on this website is a real-time **3D WebGL Celebration Cake** built by Bhupesh Indurkar!\n\n` +
      `**How to interact with it:**\n` +
      `1. **360° Drag & Rotate:** Click/touch and drag across the cake to view it from all angles.\n` +
      `2. **Flavor Themes:** Switch between *Princess Rosette*, *Champagne Gold*, and *Berry Blossom*.\n` +
      `3. **Make a Wish & Blow Candles:** Click the **'Blow Out Candles 💨'** button to blow out the flickering 3D flames and trigger celebratory confetti!\n` +
      `4. **Relight:** You can relight them anytime to make another wish!\n\n` +
      `Scroll up to the **3D Cake Centerpiece** section to try it now! ✨`
    );
  }

  // 9. MUSIC & AUDIO PLAYER
  if (
    matchAny([
      'music',
      'song',
      'audio',
      'gana',
      'sound',
      'volume',
      'listen',
      'play music',
      'pause',
      'track',
    ])
  ) {
    return (
      `🎵 **Celebration Music & Audio Player:**\n\n` +
      `The website features an acoustic, ambient celebratory soundtrack with soothing celesta and piano notes tailored for Shruti's birthday!\n\n` +
      `**How to control it:**\n` +
      `• Look at the **top-right corner** of your screen.\n` +
      `• Tap the **'♪ Music On / Music Off'** pill button to toggle the music.\n` +
      `• Tap the sliders icon beside it to adjust the volume from 0% to 100%.\n\n` +
      `Turn it on for the ultimate immersive birthday atmosphere! 🎶🌸`
    );
  }

  // 10. GALLERY & PHOTOS (21 MEMORIES FOR 21 YEARS)
  if (
    matchAny([
      'photo',
      'photos',
      'picture',
      'pictures',
      'gallery',
      'image',
      'images',
      'memories',
      'tasveer',
      'pic',
    ])
  ) {
    return (
      `📸 **Shruti's 21 Milestone Memories Gallery:**\n\n` +
      `To honor her **21st Birthday**, the website features a collection of **21 treasured photos of Shruti**, each accompanied by poetic captions!\n\n` +
      `**Features:**\n` +
      `• **Filter by categories:** Filter through Portraits, Candid moments, and Celebration spirit.\n` +
      `• **Full-Screen Lightbox:** Tap any photo to open it in high resolution with smooth next/prev arrow navigation.\n` +
      `• **Keyboard Navigation:** On laptops/desktops, use Left/Right arrow keys and Escape to browse effortlessly.\n\n` +
      `Head down to the **Beautiful Moments** section to experience the full gallery! 🌸✨`
    );
  }

  // 11. PDF KEEPSAKE CARD / DOWNLOAD
  if (
    matchAny([
      'pdf',
      'card',
      'download',
      'keepsake',
      'print',
      'certificate',
      'greeting card',
    ])
  ) {
    return (
      `📜 **Download Official Keepsake PDF Birthday Card:**\n\n` +
      `Bhupesh integrated a high-resolution, vector-crisp printable PDF generator right into the site!\n\n` +
      `**How to get it:**\n` +
      `1. Scroll down to the **Final Card Section** or click the **Surprise 🎁** button in the header.\n` +
      `2. Click **'Download Keepsake PDF Card 📜'**.\n` +
      `3. An ultra-luxury A4 landscape commemorative card customized for Shruti Lanjewar with gold filigree and royal seals will instantly download to your device!\n\n` +
      `It's ready to print, frame, or save as a lifelong keepsake! 💖🎁`
    );
  }

  // 12. GIFT & SURPRISE IDEAS
  if (
    matchAny([
      'gift',
      'present',
      'surprise',
      'ideas',
      'kya du',
      'kya gift',
      'suggestion',
      'tofa',
      'tohfa',
    ])
  ) {
    return (
      `🎁 **Thoughtful 21st Birthday Gift Ideas for Shruti:**\n\n` +
      `Turning 21 is a once-in-a-lifetime milestone! Here are the most meaningful gift ideas:\n\n` +
      `1. **Keepsake Memory Book:** A printed photo book of her 21 moments with sweet personal notes from loved ones.\n` +
      `2. **Custom Gold/Rose-Gold Pendant:** A dainty necklace with her initial 'S' or birthstone (Opal / Tourmaline / Rose Quartz for October).\n` +
      `3. **Framed Commemorative PDF Card:** Download the custom PDF card from this website and frame it in gold foil!\n` +
      `4. **A Star Map of 22 Oct 2005:** Showing how the constellations aligned on the day Shruti was born.\n` +
      `5. **A Signature Perfume or Luxury Watch:** Celebrating the beginning of her golden adult era! ✨🌸`
    );
  }

  // 13. JOKES / FUN / WITTY REMARKS
  if (
    matchAny([
      'joke',
      'funny',
      'hasao',
      'hasi',
      'laugh',
      'fun',
      'mazak',
      'chutkula',
    ])
  ) {
    const jokes = [
      `😄 **Here's a 21st Birthday Joke for Shruti:**\n\n` +
        `*At 21, you are officially old enough to make your own life decisions... and young enough to still blame them on being in your early twenties!* 😉\n\n` +
        `Enjoy the golden age, Shruti — no curfew, maximum fun! 🥂✨`,

      `😆 **Birthday Fun Fact:**\n\n` +
        `*Scientific research shows that people who celebrate more birthdays live longer!* So keep glowing and celebrating, Shruti! 🎂🎉`,
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // 14. ADVICE / FUTURE INSPIRATION FOR 21ST YEAR
  if (
    matchAny([
      'advice',
      'future',
      'career',
      'success',
      'motivation',
      'inspiration',
      'salah',
      'tips',
      '20s',
    ])
  ) {
    return (
      `🌟 **Words of Wisdom for Shruti's Golden 21st Chapter:**\n\n` +
      `1. **Trust Your Intuition:** Your twenties will present exciting new doors. Believe in your talent and step boldly through them.\n` +
      `2. **Cherish Genuine Friendships:** Invest in the people who bring out your best smile.\n` +
      `3. **Celebrate Small Wins:** Big milestones like turning 21 are wonderful, but everyday joys make life truly sweet.\n` +
      `4. **Never Lose Your Kindness:** In a busy world, a heart like yours is a rare and precious gem.\n\n` +
      `Go conquer the world, Shruti! The stage is all yours. 💫💖`
    );
  }

  // 15. GREETINGS & CASUAL HELLO / HI / NAMASTE
  if (
    matchAny([
      /\bhi\b/,
      /\bhey\b/,
      'hello',
      'namaste',
      'hola',
      'kaise ho',
      'how are you',
      'good morning',
      'good evening',
      'wassup',
    ])
  ) {
    return (
      `Hello! 🌸 It's wonderful to connect with you! ✨\n\n` +
      `I am **Shruti's Celebration Concierge**, crafted by Full Stack Developer **Bhupesh Indurkar** to make Shruti Lanjewar's 21st birthday unforgettable.\n\n` +
      `You can ask me to:\n` +
      `• Write custom poems or Hindi shayaris for Shruti ✍️\n` +
      `• Learn about developer Bhupesh Indurkar & the tech stack 💻\n` +
      `• Explore the 3D Cake, Music, and 21 Photos Gallery 🎂\n` +
      `• Draft heartfelt toasts, blessings, or gift ideas 🎁\n\n` +
      `What would you like to explore today? 💖`
    );
  }

  // 16. THANK YOU / COMPLIMENTS TO CHATBOT / DEVELOPER
  if (
    matchAny([
      'thank',
      'shukriya',
      'dhanyawad',
      'awesome',
      'great',
      'nice',
      'superb',
      'cool',
      'love it',
      'mast',
      'sundar',
      'shandar',
    ])
  ) {
    return (
      `Aww, thank you so much! 💖✨\n\n` +
      `That means the world! Full Stack Developer **Bhupesh Indurkar** put so much passion into every single pixel and line of code so that **Shruti Lanjewar** gets the royal, luxurious birthday celebration she deserves.\n\n` +
      `Feel free to download her **Keepsake PDF Card** or try blowing the 3D candles on the cake! 🎂🥂`
    );
  }

  // 17. CONTEXTUAL DYNAMIC INTENT FALLBACK
  return (
    `Happy 21st Birthday to the incredible **Shruti Lanjewar**! 🌸✨\n\n` +
    `Every moment of this milestone is dedicated to celebrating her kindness, radiance, and grace. Designed with love and cutting-edge web craftsmanship by Full Stack Developer **Bhupesh Indurkar**, this site brings together:\n\n` +
    `• An interactive **3D Celebration Cake** with real-time candles you can blow out.\n` +
    `• A **21-photo Memory Gallery** representing each precious year of her life.\n` +
    `• Acoustic background music and a downloadable **commemorative PDF card**.\n\n` +
    `Feel free to ask for a custom poem, a Hindi shayari, a celebratory toast, or any details about Shruti and this website! 🥂💖`
  );
}

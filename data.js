// Portfolio content. Every text field has an English (en) and Arabic (ar) version.
// To add a project: copy one object in PROJECTS, give it a new id, and put its
// images in img/ as <id>-01.jpg, <id>-02.jpg …
window.PORTFOLIO = {
  person: {
    name: { en: "Abdelrahman Shaapan", ar: "عبد الرحمن شعبان" },
    role: { en: "Product & Industrial Designer", ar: "مصمم منتجات صناعية" },
    base: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    email: "abdelrahmanshaapan@gmail.com",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/abdelrahmanshaapanpd/" },
      { label: "Behance", url: "https://www.behance.net/Abdelrahman_Shaapan" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abdelrahman-shaapan/" },
    ],
    intro: {
      en: "I design physical products, furniture and cars, and take them from the first sketch to renders, films and the built object.",
      ar: "أصمم المنتجات والأثاث والسيارات، وأتابع الفكرة من أول اسكتش لحد الريندر والفيلم والقطعة المنفذة."
    },
    bio: {
      en: [
        "Ten years taking products from research to files a factory can cut steel from. I'm Lead Designer at ELARABY Group in Cairo, directing and signing off everything the design team ships. My work is on shelves under Tornado, Heller and Sharp, and more than fifteen of those products have made it all the way: manufactured, on sale, and in people's homes.",
        "I also build complete design languages, systems a brand keeps running for years rather than single objects: Kajito, the SEMPLEX machine range and BRAVO writing instruments.",
        "I think with my hands: paper sketches, foam and cardboard mock-ups and printed prototypes come before the final CAD and renders. Freelance, I have designed pieces that were built and installed in Egypt and Saudi Arabia, like Midmar for the AlUla camel race and The Arrival for artist Ali Kamel."
      ],
      ar: [
        "عشر سنين باخد المنتج من البحث لحد الملفات اللي المصنع بيقطع منها الصلب. أنا Lead Designer في مجموعة العربي بالقاهرة، بوجّه وبعتمد كل حاجة بيطلعها فريق التصميم. شغلي موجود على الرفوف تحت اسم Tornado وHeller وSharp، وأكتر من 15 منتج منهم كملوا الطريق للآخر: اتصنعوا، واتباعوا، ودخلوا بيوت الناس.",
        "وكمان ببني لغات تصميم كاملة، أنظمة البراند بيفضل ماشي بيها سنين مش مجرد منتج واحد: Kajito، وماكينات SEMPLEX، وأقلام BRAVO.",
        "بفكر بإيدي: اسكتشات على الورق، وموك أب فوم وكرتون، وبروتوتايب مطبوع، قبل الـ CAD النهائي والريندر. وفي الفريلانس صممت قطع اتنفذت واتركبت في مصر والسعودية، زي المضمار لسباق الهجن بالعُلا وThe Arrival للفنان علي كامل."
      ]
    },
    services: [
      { en: "Product & industrial design", ar: "تصميم منتجات صناعية" },
      { en: "Furniture & interior pieces", ar: "تصميم أثاث وقطع داخلية" },
      { en: "3D visualisation & renders", ar: "تصور ثلاثي الأبعاد وريندر" },
      { en: "Product films & motion", ar: "أفلام منتجات وموشن" },
      { en: "Exhibition & competition boards", ar: "بوسترات المعارض والمسابقات" }
    ],
    tools: ["Rhino · Fusion 360", "KeyShot · Blender", "Photoshop · Illustrator", "InDesign · Figma", "Premiere · After Effects"],
    experience: [
      { en: "ELARABY Group — Lead Designer, 2020–now", ar: "مجموعة العربي — Lead Designer، 2020 للآن" },
      { en: "Freelance product designer, 2016–now", ar: "مصمم منتجات فريلانس، 2016 للآن" },
      { en: "BlueBox — Industrial Designer, 2016–2019", ar: "BlueBox — مصمم صناعي، 2016–2019" },
      { en: "October 6 University — Teaching Assistant, 2016–2017", ar: "جامعة 6 أكتوبر — معيد، 2016–2017" },
      { en: "BA Applied Arts, Product Design, 2012–2016 · Grade A", ar: "بكالوريوس فنون تطبيقية، قسم تصميم المنتجات، 2012–2016 · امتياز" }
    ]
  },

  // kind: market | built | prototype | client | competition | exhibition | concept
  PROJECTS: [
    {
      id: "gamila",
      title: { en: "Ramses Gamila", ar: "رمسيس جميلة" },
      line: {
        en: "What if Ramses never stopped? An electric city car for an Egyptian family of four.",
        ar: "ماذا لو رمسيس ما وقفتش؟ عربية كهربا للمدينة لأسرة مصرية من أربعة أفراد."
      },
      year: "2026",
      kind: "competition",
      field: { en: "Automotive", ar: "سيارات" },
      role: { en: "Exterior design", ar: "تصميم الشكل الخارجي" },
      team: {
        en: "Concept & creative direction: Youssef El Araby · Interior & customisation: Lina Abdelraouf · PHOTONX",
        ar: "الفكرة والتوجيه الإبداعي: يوسف العربي · الداخلية والتخصيص: لينا عبد الرؤوف · PHOTONX"
      },
      specs: [
        { k: { en: "Size", ar: "المقاس" }, v: "4700 × 1780 × 1445 mm" },
        { k: { en: "Battery", ar: "البطارية" }, v: "36 kWh · 60 / 40" },
        { k: { en: "Swap", ar: "التبديل" }, v: "6 × 2.4 kWh · < 5 min" },
        { k: { en: "Range", ar: "المدى" }, v: "≈ 260 km WLTP" }
      ],
      story: {
        en: [
          "Ramses was Egypt's own car, built at the foot of the Giza pyramids from 1960. Gamila asks what it would look like today if production had never stopped: an evolved design, not a retro copy.",
          "The face is an eye. Each lamp is left open, and the turn signal draws a kohl line that becomes an amber lash, after the painted Eye of Horus. One line wraps the whole body and ends in light.",
          "60% of the battery sits under the floor and charges at home. The other 40% is six small packs under the boot floor, swapped at an ordinary fuel station in under five minutes, for families without a charger at home.",
          "Inside, pegboards on the dash and seat backs take clip-on accessories. You can buy the car without a screen and add one later through the same socket."
        ],
        ar: [
          "رمسيس كانت عربية مصر، اتصنعت عند سفح الأهرامات من 1960. جميلة بتسأل: كانت هتبقى شكلها إيه النهارده لو الإنتاج ما وقفش؟ تصميم متطور، مش نسخة قديمة.",
          "الوش عبارة عن عين. كل فانوس مفتوح من ناحية، والإشارة بترسم خط كحل بيتحول لرمش كهرماني، مستوحى من عين حورس. خط واحد بيلف العربية كلها وبيخلص في نور.",
          "60% من البطارية تحت الأرضية وبتتشحن في البيت. الـ 40% الباقية ست بطاريات صغيرة تحت أرضية الشنطة، بتتبدل في أي بنزينة في أقل من خمس دقايق، للأسر اللي معندهاش شاحن في البيت.",
          "جوه، فيه ألواح مثقبة في التابلوه وضهر الكراسي بتركب عليها إكسسوارات. تقدر تشتري العربية من غير شاشة وتضيفها بعدين في نفس المكان."
        ]
      },
      images: [
        { f: "gamila-01", c: { en: "Gamila, front three-quarter", ar: "جميلة، منظر أمامي" } },
        { f: "gamila-her1", c: { en: "Research: Ramses in the press, \"the first Arab car\"", ar: "البحث: رمسيس في الجرايد، \"أول سيارة عربية\"" } },
        { f: "gamila-her2", c: { en: "Research: the original Gamila", ar: "البحث: جميلة الأصلية" } },
        { f: "gamila-hand", c: { en: "Process: pen on paper, the eye and the single line", ar: "البروسيس: قلم على ورق، العين والخط الواحد" } },
        { f: "gamila-ipad", c: { en: "Process: iPad sketch of the body side", ar: "البروسيس: اسكتش آيباد لجنب العربية" } },
        { f: "gamila-03", c: { en: "Sketch board: the eye, the lash and the single line", ar: "لوحة الاسكتشات: العين والرمش والخط الواحد" } },
        { f: "gamila-04", c: { en: "Headlamp: the open eye with its amber lash", ar: "الفانوس: العين المفتوحة برمشها الكهرماني" } },
        { f: "gamila-06", c: { en: "Battery split: 60% fixed, 40% swappable", ar: "تقسيم البطارية: 60% ثابتة و40% بتتبدل" } },
        { f: "gamila-05", c: { en: "Dash pegboard with clip-on accessories", ar: "لوح التابلوه المثقب والإكسسوارات" } },
        { f: "gamila-07", c: { en: "Seat-back module, exploded", ar: "موديول ضهر الكرسي مفكوك" } },
        { f: "gamila-08", c: { en: "Ramses meets Gamila at Giza", ar: "رمسيس وجميلة عند الأهرامات" } },
        { f: "gamila-02", c: { en: "Salt flats at dusk", ar: "السبخات وقت الغروب" } }
      ],
      note: { en: "Scene images are AI-assisted visualisations built from the design references.", ar: "صور المشاهد تصوّر بمساعدة الذكاء الاصطناعي مبني على مرجع التصميم." }
    },
    {
      id: "midmar",
      title: { en: "Midmar", ar: "المضمار" },
      line: {
        en: "A screen table for the VIP lounge at the AlUla camel race. Built and installed in 2024.",
        ar: "ترابيزة شاشات لصالة كبار الزوار في سباق الهجن بالعُلا. اتنفذت واتركبت في 2024."
      },
      year: "2024",
      kind: "built",
      field: { en: "Furniture", ar: "أثاث" },
      role: { en: "Design, with Mohamed Agag", ar: "التصميم، مع محمد عجاج" },
      team: { en: "Built by FATCO, Riyadh · Installed April 2024", ar: "التنفيذ: FATCO، الرياض · التركيب: أبريل 2024" },
      specs: [
        { k: { en: "Size", ar: "المقاس" }, v: "716 × 1091 × 620 mm" },
        { k: { en: "Screens", ar: "الشاشات" }, v: "3" },
        { k: { en: "Finish", ar: "التشطيب" }, v: { en: "Espresso veneer, white shell", ar: "قشرة إسبريسو وجسم أبيض" } },
        { k: { en: "Site", ar: "المكان" }, v: { en: "AlUla, Saudi Arabia", ar: "العُلا، السعودية" } }
      ],
      story: {
        en: [
          "Guests in the royal lounge sit in a U-shaped majlis and need to follow a race that happens far away. The table brings the race to the middle of the room.",
          "The body is one continuous band that loops like a race track. Its raked, trapezoid profile carries the speed of the race, and a floating tray on top stays at normal table height for serving.",
          "The screens are angled toward the three sides of the majlis so every seat sees the race. The centre screen is double-sided."
        ],
        ar: [
          "الضيوف في الصالة الملكية قاعدين في مجلس على شكل U، ومحتاجين يتابعوا سباق بيحصل بعيد عنهم. الترابيزة بتجيب السباق لنص الأوضة.",
          "الجسم شريط واحد متصل بيلف زي حلبة السباق. البروفايل المايل بيحمل سرعة السباق، وفوقه صينية طايرة على ارتفاع الترابيزة العادي للضيافة.",
          "الشاشات متوجهة لجوانب المجلس التلاتة عشان كل كرسي يشوف السباق. الشاشة اللي في النص بوشين."
        ]
      },
      images: [
        {"f": "midmar-cover", "c": {"en": "Midmar tables in the royal lounge, AlUla", "ar": "ترابيزات المضمار في الصالة الملكية بالعُلا"}},
        { f: "midmar-01", c: { en: "Midmar in the as-built finish", ar: "المضمار بالتشطيب المنفذ" } },
        { f: "midmar-pen", c: { en: "Process: the first pen sketch, a raked loop", ar: "البروسيس: أول اسكتش بالقلم، شريط مايل بيلف" } },
        { f: "midmar-03", c: { en: "Process: refined sketch, inspired by a race-track layout", ar: "البروسيس: الاسكتش بعد التظبيط، مستوحى من شكل حلبة سباق" } },
        { f: "midmar-05", c: { en: "Line drawing: one looping band", ar: "رسم خطي: شريط واحد بيلف" } },
        { f: "midmar-04", c: { en: "Exploded: shell, tray and screen modules", ar: "مفكوك: الجسم والصينية وموديولات الشاشات" } },
        { f: "midmar-shop1", c: { en: "Workshop: the shell takes shape at FATCO, Riyadh", ar: "الورشة: الجسم بيتشكل في FATCO بالرياض" } },
        { f: "midmar-angle", c: { en: "Workshop: checking the raked angle against the drawing", ar: "الورشة: مراجعة زاوية الميل على الرسمة" } },
        { f: "midmar-shop2", c: { en: "Workshop: nearly finished", ar: "الورشة: قرب يخلص" } },
        { f: "midmar-site", c: { en: "Race day in the lounge", ar: "يوم السباق في الصالة" } },
        { f: "midmar-02", c: { en: "In the gallery", ar: "في الجاليري" } },
        { f: "midmar-06", c: { en: "Studio render", ar: "ريندر استوديو" } }
      ]
    },
    {
      "id": "hcook",
      "title": {
        "en": "Heller Freestanding Cooker",
        "ar": "Heller Freestanding Cooker"
      },
      "line": {
        "en": "A matte black cooker for Heller, designed for the German market and launched at IFA Berlin.",
        "ar": "بوتاجاز أسود مطفي لـ Heller، متصمم للسوق الألماني واتعرض لأول مرة في IFA برلين."
      },
      "year": "2025",
      "kind": "market",
      "field": {
        "en": "Kitchen appliances",
        "ar": "أجهزة مطبخ"
      },
      "role": {
        "en": "Industrial design",
        "ar": "التصميم الصناعي"
      },
      "team": {
        "en": "ELARABY Group · Heller",
        "ar": "مجموعة العربي · Heller"
      },
      "specs": [
        {
          "k": {
            "en": "Market",
            "ar": "السوق"
          },
          "v": {
            "en": "Germany, global",
            "ar": "ألمانيا والعالم"
          }
        },
        {
          "k": {
            "en": "Debut",
            "ar": "أول ظهور"
          },
          "v": {
            "en": "IFA Berlin 2025",
            "ar": "IFA برلين 2025"
          }
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "Heller is ELARABY's brand for the global market, and this cooker was made with German households in mind: a bold step for the group and for the brand.",
          "Clean geometric lines say precision and reliability, and the matte black finish gives it a modern, premium feel that sits well in a contemporary kitchen. It made its first appearance at IFA Berlin, and it is the work of a whole team of engineers, marketers and designers who shaped it at every stage."
        ],
        "ar": [
          "Heller هو براند العربي للسوق العالمي، والبوتاجاز ده اتعمل وفي دماغنا البيت الألماني: خطوة جريئة للمجموعة وللبراند.",
          "الخطوط الهندسية النضيفة بتقول دقة واعتمادية، والتشطيب الأسود المطفي بيديله إحساس حديث وبريميوم يناسب المطبخ العصري. أول ظهور ليه كان في IFA برلين، وهو شغل فريق كامل من مهندسين وتسويق ومصممين شاركوا في كل مرحلة."
        ]
      },
      "images": [
        {
          "f": "hcook-01",
          "c": {
            "en": "Front",
            "ar": "من قدام"
          }
        },
        {
          "f": "hcook-02",
          "c": {
            "en": "Matte black, clean geometric lines",
            "ar": "أسود مطفي وخطوط هندسية نضيفة"
          }
        },
        {
          "f": "hcook-03",
          "c": {
            "en": "Hob and control panel",
            "ar": "السطح ولوحة التحكم"
          }
        },
        {
          "f": "hcook-04",
          "c": {
            "en": "Detail",
            "ar": "تفصيلة"
          }
        },
        {
          "f": "hcook-05",
          "c": {
            "en": "Control knobs",
            "ar": "زراير التحكم"
          }
        },
        {
          "f": "hcook-06",
          "c": {
            "en": "On display",
            "ar": "في العرض"
          }
        },
        {
          "f": "hcook-07",
          "c": {
            "en": "On display",
            "ar": "في العرض"
          }
        },
        {
          "f": "hcook-08",
          "c": {
            "en": "On display",
            "ar": "في العرض"
          }
        },
        {
          "f": "hcook-09",
          "c": {
            "en": "On display",
            "ar": "في العرض"
          }
        }
      ]
    },
    {
      "id": "tremote",
      "title": {
        "en": "Tornado Smart TV Remote",
        "ar": "Tornado Smart TV Remote"
      },
      "line": {
        "en": "One universal remote for every new Tornado TV, designed from scratch and found by touch.",
        "ar": "ريموت واحد لكل شاشات Tornado الجديدة، متصمم من الصفر وبتعرف زراره باللمس."
      },
      "year": "2025",
      "kind": "market",
      "field": {
        "en": "Consumer electronics",
        "ar": "إلكترونيات"
      },
      "role": {
        "en": "Industrial design, ergonomics, prototyping",
        "ar": "التصميم الصناعي، الإرجونومكس، البروتوتايب"
      },
      "team": {
        "en": "ELARABY Group",
        "ar": "مجموعة العربي"
      },
      "specs": [
        {
          "k": {
            "en": "Process",
            "ar": "المراحل"
          },
          "v": {
            "en": "Sketch, foam mock-up, silicone 3D-printed prototype",
            "ar": "اسكتش، ماكيت فوم، بروتوتايب سيليكون مطبوع 3D"
          }
        },
        {
          "k": {
            "en": "For",
            "ar": "لـ"
          },
          "v": {
            "en": "All upcoming Tornado TVs",
            "ar": "كل شاشات Tornado الجاية"
          }
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "The goal was a universal remote that works across every upcoming Tornado TV model: simple, intuitive, and in line with Google's interface requirements.",
          "It went from a paper sketch to a hand-carved foam mock-up for ergonomics, then a silicone 3D-printed prototype to test how the buttons feel. Home and Search are concave so your thumb finds them without looking, and the other buttons are convex so they are easy to learn. Braille marks sit next to the essential controls, for visually impaired users and for everyone else in a dark room."
        ],
        "ar": [
          "الهدف كان ريموت واحد يشتغل مع كل موديلات شاشات Tornado الجاية: بسيط وسهل ومتوافق مع متطلبات واجهة Google.",
          "بدأ اسكتش على ورق، وبعدين ماكيت فوم محفور باليد عشان الإرجونومكس، وبعدين بروتوتايب سيليكون مطبوع 3D عشان نجرب إحساس الزراير. زرار Home وزرار Search مقعرين عشان صباعك يلاقيهم من غير ما تبص، وباقي الزراير بارزة عشان تحفظها بسهولة. وفيه علامات برايل جنب الزراير الأساسية، لضعاف النظر ولأي حد في أوضة ضلمة."
        ]
      },
      "images": [
        {
          "f": "tremote-02",
          "c": {
            "en": "Home and Search are concave, found by touch",
            "ar": "Home وSearch مقعرين وبتلاقيهم باللمس"
          }
        },
        {
          "f": "tremote-01",
          "c": {
            "en": "The remote",
            "ar": "الريموت"
          }
        },
        {
          "f": "tremote-v",
          "v": "tremote-v",
          "c": {
            "en": "In the hand",
            "ar": "في الإيد"
          }
        },
        {
          "f": "tremote-03",
          "c": {
            "en": "Detail",
            "ar": "تفصيلة"
          }
        },
        {
          "f": "tremote-04",
          "c": {
            "en": "Button layout",
            "ar": "توزيع الزراير"
          }
        },
        {
          "f": "tremote-05",
          "c": {
            "en": "Hand-carved foam mock-up, to test the grip",
            "ar": "موك أب فوم محفور باليد، لتجربة المسكة"
          }
        },
        {
          "f": "tremote-06",
          "c": {
            "en": "Silicone 3D-printed prototype, to test how the buttons feel",
            "ar": "بروتوتايب سيليكون مطبوع 3D، لتجربة إحساس الزراير"
          }
        },
        {
          "f": "tremote-07",
          "c": {
            "en": "The final remote",
            "ar": "الريموت النهائي"
          }
        }
      ]
    },
    {
      "id": "ttwin",
      "title": {
        "en": "Tornado Twin-Tub",
        "ar": "Tornado Twin-Tub"
      },
      "line": {
        "en": "An affordable twin-tub washing machine for Tornado, made to reach every Egyptian home.",
        "ar": "غسالة نص أوتوماتيك اقتصادية لـ Tornado، معمولة توصل لكل بيت مصري."
      },
      "year": "2025",
      "kind": "market",
      "field": {
        "en": "Home appliances",
        "ar": "أجهزة منزلية"
      },
      "role": {
        "en": "Industrial design",
        "ar": "التصميم الصناعي"
      },
      "team": {
        "en": "ELARABY Group",
        "ar": "مجموعة العربي"
      },
      "specs": [
        {
          "k": {
            "en": "Market",
            "ar": "السوق"
          },
          "v": {
            "en": "Egypt",
            "ar": "مصر"
          }
        },
        {
          "k": {
            "en": "Principles",
            "ar": "المبادئ"
          },
          "v": {
            "en": "Simplicity, curve continuity, brand identity",
            "ar": "البساطة، استمرارية المنحنيات، هوية البراند"
          }
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "Simplicity, curve continuity and Tornado's visual identity were the principles behind this design.",
          "As an affordable machine it had to say so: fewer parts and simple materials. It is meant for every Egyptian home, so it had to feel as simple as the household it goes into and suit every taste."
        ],
        "ar": [
          "البساطة واستمرارية المنحنيات وهوية Tornado كانوا المبادئ اللي ورا التصميم ده.",
          "ولأنها غسالة اقتصادية كان لازم ده يبان: أجزاء أقل وخامات بسيطة. هي معمولة لكل بيت مصري، فكان لازم تبقى بسيطة زي البيت اللي داخلاه وتناسب كل الأذواق."
        ]
      },
      "images": [
        {
          "f": "ttwin-01",
          "c": {
            "en": "The twin-tub",
            "ar": "الغسالة"
          }
        },
        {
          "f": "ttwin-02",
          "c": {
            "en": "Colour option",
            "ar": "لون تاني"
          }
        },
        {
          "f": "ttwin-03",
          "c": {
            "en": "Front",
            "ar": "من قدام"
          }
        },
        {
          "f": "ttwin-04",
          "c": {
            "en": "Lid and controls",
            "ar": "الغطا والزراير"
          }
        },
        {
          "f": "ttwin-05",
          "c": {
            "en": "Three-quarter view",
            "ar": "زاوية جانبية"
          }
        },
        {
          "f": "ttwin-06",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        },
        {
          "f": "ttwin-07",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        }
      ]
    },
    {
      "id": "twash",
      "title": {
        "en": "Tornado Twin-Tub II",
        "ar": "Tornado Twin-Tub II"
      },
      "line": {
        "en": "My second washing machine for Tornado: a stronger take on the brand's language that still had to be easy to make.",
        "ar": "تاني غسالة أصممها لـ Tornado: قراءة أقوى للغة البراند ولازم تفضل سهلة في التصنيع."
      },
      "year": "2025",
      "kind": "market",
      "field": {
        "en": "Home appliances",
        "ar": "أجهزة منزلية"
      },
      "role": {
        "en": "Industrial design",
        "ar": "التصميم الصناعي"
      },
      "team": {
        "en": "ELARABY Group",
        "ar": "مجموعة العربي"
      },
      "specs": [
        {
          "k": {
            "en": "Market",
            "ar": "السوق"
          },
          "v": {
            "en": "Egypt",
            "ar": "مصر"
          }
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "The challenge was to give Tornado a stronger identity while keeping the design distinctive and manufacturable.",
          "It took several rounds to find a fresh interpretation of the brand language. This is the second washing machine I have designed for the Egyptian market."
        ],
        "ar": [
          "التحدي كان إن Tornado ياخد هوية أقوى والتصميم يفضل مميز وسهل في التصنيع.",
          "أخدت كذا محاولة لحد ما وصلت لقراءة جديدة للغة البراند. دي تاني غسالة أصممها للسوق المصري."
        ]
      },
      "images": [
        {
          "f": "twash-04",
          "c": {
            "en": "Lid and controls",
            "ar": "الغطا والزراير"
          }
        },
        {
          "f": "twash-01",
          "c": {
            "en": "The washer",
            "ar": "الغسالة"
          }
        },
        {
          "f": "twash-02",
          "c": {
            "en": "Front",
            "ar": "من قدام"
          }
        },
        {
          "f": "twash-v",
          "v": "twash-v",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        },
        {
          "f": "twash-03",
          "c": {
            "en": "Colour option",
            "ar": "لون تاني"
          }
        },
        {
          "f": "twash-05",
          "c": {
            "en": "Dark finish",
            "ar": "التشطيب الغامق"
          }
        },
        {
          "f": "twash-06",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        },
        {
          "f": "twash-07",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        }
      ]
    },
    {
      "id": "hhob",
      "title": {
        "en": "Heller Hob & Hood",
        "ar": "Heller Hob & Hood"
      },
      "line": {
        "en": "A built-in gas hob and a chimney hood for Heller, both now in market.",
        "ar": "سطح غاز بلت إن وشفاط لـ Heller، الاتنين نزلوا السوق."
      },
      "year": "2026",
      "kind": "market",
      "field": {
        "en": "Kitchen appliances",
        "ar": "أجهزة مطبخ"
      },
      "role": {
        "en": "Industrial design",
        "ar": "التصميم الصناعي"
      },
      "team": {
        "en": "ELARABY Group · Heller",
        "ar": "مجموعة العربي · Heller"
      },
      "specs": [
        {
          "k": {
            "en": "Products",
            "ar": "المنتجات"
          },
          "v": {
            "en": "Gas hob, chimney hood",
            "ar": "سطح غاز، شفاط"
          }
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "Two products that reached the market together, built on Heller's strong, clean design identity, which two colleagues laid the foundation for. The hob's knobs, one of its key details, are a teammate's design.",
          "Like every product here, they came out of many discussions, comments and iterations with the whole team."
        ],
        "ar": [
          "منتجين نزلوا السوق مع بعض، مبنيين على هوية Heller القوية والنضيفة اللي حط أساسها اتنين زمايل. وزراير السطح، من أهم تفاصيله، تصميم زميل في الفريق.",
          "وزي أي منتج هنا، طلعوا من نقاشات وتعليقات ومحاولات كتير مع الفريق كله."
        ]
      },
      "images": [
        {
          "f": "hhob-01",
          "c": {
            "en": "Hob and hood",
            "ar": "السطح والشفاط"
          }
        },
        {
          "f": "hhob-02",
          "c": {
            "en": "Chimney hood",
            "ar": "الشفاط"
          }
        },
        {
          "f": "hhob-03",
          "c": {
            "en": "Gas hob",
            "ar": "سطح الغاز"
          }
        },
        {
          "f": "hhob-04",
          "c": {
            "en": "Hob detail",
            "ar": "تفصيلة السطح"
          }
        },
        {
          "f": "hhob-05",
          "c": {
            "en": "Hood detail",
            "ar": "تفصيلة الشفاط"
          }
        },
        {
          "f": "hhob-06",
          "c": {
            "en": "In a kitchen",
            "ar": "في مطبخ"
          }
        },
        {
          "f": "hhob-07",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        },
        {
          "f": "hhob-08",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        }
      ]
    },
    {
      "id": "tcook",
      "title": {
        "en": "Tornado Cooker",
        "ar": "Tornado Cooker"
      },
      "line": {
        "en": "My first cooker, and one of the first Tornado products exported to the Gulf.",
        "ar": "أول بوتاجاز أصممه، ومن أول منتجات Tornado اللي اتصدرت للخليج."
      },
      "year": "2024",
      "kind": "market",
      "field": {
        "en": "Kitchen appliances",
        "ar": "أجهزة مطبخ"
      },
      "role": {
        "en": "Industrial design",
        "ar": "التصميم الصناعي"
      },
      "team": {
        "en": "ELARABY Group",
        "ar": "مجموعة العربي"
      },
      "specs": [
        {
          "k": {
            "en": "Market",
            "ar": "السوق"
          },
          "v": {
            "en": "Egypt and the Gulf",
            "ar": "مصر والخليج"
          }
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "The first cooker I ever designed, and one of the first products exported to the Gulf region: a milestone for me and for the brand."
        ],
        "ar": [
          "أول بوتاجاز أصممه في حياتي، ومن أول المنتجات اللي اتصدرت للخليج: محطة مهمة ليا وللبراند."
        ]
      },
      "images": [
        {
          "f": "tcook-01",
          "c": {
            "en": "The cooker",
            "ar": "البوتاجاز"
          }
        },
        {
          "f": "tcook-02",
          "c": {
            "en": "Front",
            "ar": "من قدام"
          }
        },
        {
          "f": "tcook-03",
          "c": {
            "en": "Hob",
            "ar": "السطح"
          }
        },
        {
          "f": "tcook-04",
          "c": {
            "en": "Off the production line",
            "ar": "من خط الإنتاج"
          }
        }
      ]
    },
    {
      "id": "theat",
      "title": {
        "en": "Tornado Gas Water Heater",
        "ar": "Tornado Gas Water Heater"
      },
      "line": {
        "en": "My first design at ELARABY Group.",
        "ar": "أول تصميم ليا في مجموعة العربي."
      },
      "year": "2023",
      "kind": "market",
      "field": {
        "en": "Home appliances",
        "ar": "أجهزة منزلية"
      },
      "role": {
        "en": "Industrial design",
        "ar": "التصميم الصناعي"
      },
      "team": {
        "en": "ELARABY Group",
        "ar": "مجموعة العربي"
      },
      "specs": [
        {
          "k": {
            "en": "Capacity",
            "ar": "السعة"
          },
          "v": "10 L"
        },
        {
          "k": {
            "en": "Status",
            "ar": "الحالة"
          },
          "v": {
            "en": "In market",
            "ar": "في السوق"
          }
        }
      ],
      "story": {
        "en": [
          "A 10-litre gas water heater for Tornado, and the first of my designs to reach the market."
        ],
        "ar": [
          "سخان غاز 10 لتر لـ Tornado، وأول تصميم ليا ينزل السوق."
        ]
      },
      "images": [
        {
          "f": "theat-01",
          "c": {
            "en": "The heater",
            "ar": "السخان"
          }
        },
        {
          "f": "theat-02",
          "c": {
            "en": "In store",
            "ar": "في المعرض"
          }
        }
      ]
    },
    {
      id: "bravo",
      title: { en: "Bravo Edge", ar: "Bravo Edge" },
      line: {
        en: "A new identity for Bravo's writing instruments: one family, from highlighter to fineliner.",
        ar: "هوية جديدة لأقلام برافو: عيلة واحدة، من الهايلايتر للفاين لاينر."
      },
      year: "2025",
      kind: "client",
      field: { en: "Stationery", ar: "أدوات كتابية" },
      role: { en: "Product design & identity", ar: "تصميم المنتج والهوية" },
      team: { en: "Client: Bravo (freelance)", ar: "العميل: برافو (فريلانس)" },
      specs: [
        { k: { en: "Family", ar: "العيلة" }, v: { en: "5 instruments", ar: "5 أقلام" } },
        { k: { en: "Colourways", ar: "الألوان" }, v: { en: "White · Black · Orange · Sage", ar: "أبيض · أسود · برتقاني · زيتي" } },
        { k: { en: "Finish", ar: "التشطيب" }, v: { en: "Matte body, gloss logo", ar: "جسم مطفي ولوجو لامع" } }
      ],
      story: {
        en: [
          "Bravo asked for a new visual identity across its writing instruments: ballpoint and gel pens, colouring pens, markers and whiteboard markers.",
          "Concept 1 treats them as one family. Every piece shares the same soft body and a long engraved line ending in the Bravo wordmark, and the ink colour shows at the tip and again at the end, so you can find the right one in a cup of pens.",
          "The direction came from tech and automotive products: a clean, matte body with a glossy logo for a quiet premium contrast."
        ],
        ar: [
          "برافو طلبت هوية بصرية جديدة لكل أدوات الكتابة بتاعتها: أقلام جاف وجل، وأقلام تلوين، وماركرز، وأقلام سبورة.",
          "الكونسبت الأول بيعاملهم كعيلة واحدة. كل قطعة ليها نفس الجسم الناعم وخط محفور طويل بيخلص في اسم برافو، ولون الحبر باين في السن وفي الآخر، فتلاقي القلم اللي عايزه وسط كوباية أقلام.",
          "الاتجاه جاي من منتجات التكنولوجيا والعربيات: جسم نضيف مطفي ولوجو لامع يدي فخامة هادية."
        ]
      },
      images: [
        {"f": "bravo-cover", "c": {"en": "Bravo Edge: the instrument family", "ar": "Bravo Edge: عيلة الأدوات"}},
        { f: "bravo-02", c: { en: "Concept 1, the full family in four colourways", ar: "الكونسبت الأول، العيلة كاملة بأربع ألوان" } },
        { f: "bravo-09", c: { en: "Sketches", ar: "الاسكتشات" } },
        { f: "bravo-01", c: { en: "White set, capped", ar: "المجموعة البيضا مقفولة" } },
        { f: "bravo-03", c: { en: "Uncapped: highlighter, marker, gel, ballpoint, fineliner", ar: "مفتوحة: هايلايتر، ماركر، جل، جاف، فاين لاينر" } },
        { f: "bravo-04", c: { en: "Black", ar: "أسود" } },
        { f: "bravo-05", c: { en: "Orange", ar: "برتقاني" } },
        { f: "bravo-06", c: { en: "Sage", ar: "زيتي" } },
        { f: "bravo-08", c: { en: "All colourways, capped", ar: "كل الألوان مقفولة" } }
      ]
    },
    {
      id: "iqring",
      title: { en: "IQ Ring", ar: "IQ Ring" },
      line: {
        en: "A smart tasbih you wear: a ring with a screen and one button that counts your dhikr.",
        ar: "سبحة ذكية بتلبسها: خاتم فيه شاشة وزرار واحد بيعد الذكر."
      },
      year: "2024–25",
      kind: "built",
      field: { en: "Wearables", ar: "أجهزة قابلة للارتداء" },
      role: { en: "Product design, CAD for production", ar: "تصميم المنتج وملفات التصنيع" },
      team: { en: "Freelance client", ar: "عميل فريلانس" },
      specs: [
        { k: { en: "Sizes", ar: "المقاسات" }, v: { en: "18 · 20 · 22 mm", ar: "18 · 20 · 22 مم" } },
        { k: { en: "Display", ar: "الشاشة" }, v: { en: "Count, time, battery", ar: "العدد والوقت والبطارية" } },
        { k: { en: "Status", ar: "الحالة" }, v: { en: "In production", ar: "اتنفذ" } }
      ],
      story: {
        en: [
          "A digital tasbih small enough to live on your finger. The thumb finds the side button without looking, and the top screen shows the count, the time and the battery.",
          "I took it from early directions to the final Design C, then built the production CAD in three ring sizes, 18, 20 and 22 mm, sharing one outline so the electronics stay the same.",
          "Produced samples were checked against the CAD with calipers before the run."
        ],
        ar: [
          "سبحة رقمية صغيرة كفاية إنها تفضل في صباعك. الإبهام بيلاقي الزرار الجانبي من غير ما تبص، والشاشة اللي فوق بتوري العدد والوقت والبطارية.",
          "اشتغلت عليه من الاتجاهات الأولى لحد Design C النهائي، وبعدين عملت ملفات التصنيع بتلات مقاسات، 18 و20 و22 مم، بنفس الشكل الخارجي علشان الإلكترونيات تفضل واحدة.",
          "العينات المصنّعة اتقاست بالكاليبر قصاد الـ CAD قبل الإنتاج."
        ]
      },
      images: [
        {"f": "iqring-cover", "c": {"en": "IQ Ring: the count and battery on its face", "ar": "IQ Ring: العدد والبطارية على الوش"}},
        { f: "iqring-ai1", c: { en: "Balanced between volcanic rock", ar: "متوازن بين صخور بركانية" } },
        { f: "iqring-ai2", c: { en: "In the sand", ar: "في الرمل" } },
        { f: "iqring-ai3", c: { en: "On limestone, black and green", ar: "على حجر جيري، أسود وأخضر" } },
        { f: "iqring-ai4", c: { en: "One button, one hand", ar: "زرار واحد، إيد واحدة" } },
        { f: "iqring-ai5", c: { en: "On limestone", ar: "على حجر جيري" } },
        { f: "iqring-ex", c: { en: "Process: 2024 colour and button explorations", ar: "المراحل: تجارب ألوان وزرار 2024" } },
        { f: "iqring-3d1", c: { en: "Process: Rhino, surfacing the head around the button", ar: "المراحل: Rhino، سطح الراس حوالين الزرار" } },
        { f: "iqring-3d2", c: { en: "Process: Rhino, fitting the screen and battery inside", ar: "المراحل: Rhino، تركيب الشاشة والبطارية جوه" } },
        { f: "iqring-3d3", c: { en: "Process: Rhino, the final smooth form", ar: "المراحل: Rhino، الشكل النهائي الناعم" } },
        { f: "iqring-3d4", c: { en: "Process: Rhino, the full ring", ar: "المراحل: Rhino، الخاتم كامل" } },
        { f: "iqring-3d5", c: { en: "Process: Rhino, placing the components", ar: "المراحل: Rhino، أماكن المكونات" } },
        { f: "iqring-06", c: { en: "Three sizes: 18, 20, 22 mm", ar: "تلات مقاسات: 18 و20 و22 مم" } },
        { f: "iqring-01", c: { en: "Production render, black and green", ar: "رندر الإنتاج، أسود وأخضر" } },
        { f: "iqring-07", c: { en: "QC: production sample on the calipers", ar: "فحص الجودة: عينة الإنتاج على الكاليبر" } },
        { f: "iqring-09", c: { en: "QC: outer diameter", ar: "فحص الجودة: القطر الخارجي" } },
        { f: "iqring-10", c: { en: "QC: inner diameter, 20 mm size", ar: "فحص الجودة: القطر الداخلي، مقاس 20 مم" } },
        { f: "iqring-11", c: { en: "QC: head width", ar: "فحص الجودة: عرض الراس" } },
        { f: "iqring-12", c: { en: "QC: checking against the CAD", ar: "فحص الجودة: مقارنة بالـ CAD" } }
      ]
    },
    {
      id: "ufo",
      title: { en: "The Arrival", ar: "The Arrival" },
      line: {
        en: "A walk-in spaceship for Ali Kamel's paintings, cut in Egypt and rebuilt in Saudi Arabia for every show.",
        ar: "مركبة فضائية بتدخلها، معرض للوحات علي كامل، اتقصت في مصر وبتتركب في السعودية في كل معرض."
      },
      year: "2024",
      kind: "built",
      field: { en: "Exhibition structure", ar: "تصميم معرض" },
      role: { en: "Form design, parametric slicing, cut files", ar: "تصميم الشكل، التقطيع البارامتري، ملفات القص" },
      team: { en: "For artist Ali Kamel (AK Studio)", ar: "للفنان علي كامل (AK Studio)" },
      specs: [
        { k: { en: "Structure", ar: "الهيكل" }, v: { en: "119 ribs + 39 rings, slot-fit", ar: "119 ضلع + 39 حلقة، تعشيق" } },
        { k: { en: "Assembly", ar: "التركيب" }, v: { en: "Flat-pack, no glue", ar: "بيتفك ويتركب، من غير غرا" } },
        { k: { en: "Shown", ar: "اتعرض" }, v: { en: "The Arrival, FCR", ar: "The Arrival، FCR" } }
      ],
      story: {
        en: [
          "Ali Kamel, an artist in Saudi Arabia, wanted a spaceship to hang his paintings in. The catch: it had to be made in Egypt and travel to him, then go up again at every exhibition.",
          "I started from a sketch with a flying mode and a landing mode with legs and an open door, modelled it in Rhino and checked the proportions with a 3D-printed model.",
          "Then I turned the form into a parametric slice structure in Slicer for Fusion 360: 119 radial ribs locked by 39 rings. Every part is a flat CNC sheet, so the whole ship packs flat, ships, and slots back together without glue."
        ],
        ar: [
          "علي كامل فنان في السعودية كان عايز مركبة فضائية يعرض فيها لوحاته. المشكلة إنها لازم تتنفذ في مصر وتسافرله، وتتركب من جديد في كل معرض.",
          "بدأت من اسكتش فيه وضع الطيران ووضع الهبوط برجول وباب مفتوح، وعملتها موديل على Rhino واتأكدت من النسب بموديل مطبوع 3D.",
          "بعد كدا حولت الشكل لهيكل شرايح بارامتري على Slicer for Fusion 360: ‏119 ضلع بيمسكهم 39 حلقة. كل قطعة لوح مسطح بيتقص CNC، فالمركبة كلها بتتفك وتتشحن وتتركب تاني بالتعشيق من غير غرا."
        ]
      },
      images: [
        { f: "ufo-r1", c: { en: "The Arrival in the gallery (render of the built pavilion)", ar: "The Arrival في المعرض (ريندر للي اتنفذ)" } },
        {"f": "ufo-cover", "c": {"en": "The slice structure: 119 ribs locked by 39 rings", "ar": "هيكل الشرايح: 119 ضلع بيمسكهم 39 حلقة"}},
        { f: "ufo-01", c: { en: "The Arrival, installed at FCR", ar: "The Arrival، متركبة في FCR" } },
        { f: "ufo-02", c: { en: "Inside: the ribs become the gallery wall", ar: "من جوه: الضلوع بقت حيطة المعرض" } },
        { f: "ufo-03", c: { en: "Process: sketch, flying and landing modes", ar: "المراحل: الاسكتش، وضع الطيران ووضع الهبوط" } },
        { f: "ufo-04", c: { en: "Process: Rhino model", ar: "المراحل: موديل Rhino" } },
        { f: "ufo-07", c: { en: "Process: 3D-printed scale model", ar: "المراحل: موديل مصغر مطبوع 3D" } },
        { f: "ufo-05", c: { en: "Process: the form, ready for slicing", ar: "المراحل: الشكل جاهز للتقطيع" } },
        { f: "ufo-06", c: { en: "Process: ribs and rings, the first test", ar: "المراحل: الضلوع والحلقات، أول تجربة" } },
        { f: "ufo-10", c: { en: "Through the door", ar: "من الباب" } }
      ]
    },
    {
      id: "w01",
      title: { en: "W-01", ar: "W-01" },
      line: {
        en: "A 3D-printed desk lamp for Vertex Studio: one base, interchangeable shells.",
        ar: "أباجورة مكتب مطبوعة 3D لـ Vertex Studio: قاعدة واحدة وأجسام بتتبدل."
      },
      year: "2026",
      kind: "built",
      field: { en: "Lighting, 3D printing", ar: "إضاءة، طباعة 3D" },
      role: { en: "Design direction, product design, print-ready CAD", ar: "اتجاه التصميم، تصميم المنتج، ملفات الطباعة" },
      team: { en: "For Vertex Studio", ar: "لـ Vertex Studio" },
      specs: [
        { k: { en: "Editions", ar: "الإصدارات" }, v: { en: "Solid, Perforated, Clear, Mini", ar: "Solid وPerforated وClear وMini" } },
        { k: { en: "Process", ar: "التصنيع" }, v: { en: "FDM 3D printing", ar: "طباعة 3D (FDM)" } },
        { k: { en: "Base", ar: "القاعدة" }, v: "111 × 105 × 60 mm" },
        { k: { en: "Status", ar: "الحالة" }, v: { en: "Produced", ar: "اتنفذ" } }
      ],
      story: {
        en: [
          "Vertex Studio is a home décor brand that makes everything on 3D printers. They asked for an identity, and for the first products that show what that identity looks like as objects.",
          "I set the design language, rounded, rectilinear and bold, then sketched lamps around one idea: a soft capsule of light standing on a solid base, with the bulb, switch and wiring hidden in the base.",
          "W-01 is the result. The shell is split into printable parts that fit a home printer bed, and one base takes interchangeable shells: a textured solid one, a clear one that shows the print lines, a perforated one that throws light through its pattern, and a shorter Mini."
        ],
        ar: [
          "Vertex Studio براند ديكور بيعمل كل منتجاته بالطباعة 3D. طلبوا هوية، وأول منتجات توري الهوية دي شكلها إيه كأشياء حقيقية.",
          "حددت لغة التصميم: مدوّرة ومستقيمة وجريئة، وبعدين رسمت أباجورات حوالين فكرة واحدة: كبسولة نور ناعمة واقفة على قاعدة تقيلة، واللمبة والسويتش والسلك مستخبيين في القاعدة.",
          "W-01 هي النتيجة. الجسم متقسم لأجزاء بتتطبع على طابعة عادية، وقاعدة واحدة بتاخد أجسام بتتبدل: جسم مصمت بملمس، وجسم شفاف باينة فيه خطوط الطباعة، وجسم مخرّم بيطلّع النور من النقشة، ونسخة Mini أقصر."
        ]
      },
      images: [
        { f: "wimx-r1", c: { en: "W-01, Clear Edition (render)", ar: "W-01، إصدار Clear (ريندر)" } },
        { f: "wimx-r2", c: { en: "Render: the Clear Edition, lit from the base", ar: "ريندر: إصدار Clear منور من القاعدة" } },
        { f: "wimx-p03", c: { en: "Clear Edition, lit", ar: "إصدار Clear منور" } },
        { f: "wimx-p01", c: { en: "Perforated Edition, lit", ar: "إصدار Perforated منور" } },
        { f: "wimx-p02", c: { en: "Three shells, one base: Clear, Solid, Perforated", ar: "تلات أجسام وقاعدة واحدة: Clear وSolid وPerforated" } },
        { f: "wimx-p04", c: { en: "The pattern opens up toward the top", ar: "النقشة بتوسع كل ما تطلع لفوق" } },
        { f: "wimx-p05", c: { en: "Perforated Edition, off", ar: "إصدار Perforated مطفي" } },
        { f: "wimx-p06", c: { en: "Solid Edition in red light, the printed texture", ar: "إصدار Solid في نور أحمر، ملمس الطباعة" } },
        { f: "wimx-p07", c: { en: "Mini Edition, lit", ar: "إصدار Mini منور" } },
        { f: "wimx-p08", c: { en: "Clear Edition, off", ar: "إصدار Clear مطفي" } },
        { f: "wimx-p09", c: { en: "Clear Edition, the print lines catch the light", ar: "إصدار Clear، خطوط الطباعة بتمسك النور" } },
        { f: "wimx-p10", c: { en: "Solid Edition, textured finish", ar: "إصدار Solid، تشطيب بملمس" } },
        { f: "wimx-sk2", c: { en: "Process: sketches", ar: "المراحل: الاسكتشات" } },
        { f: "wimx-sk1", c: { en: "Process: the capsule direction", ar: "المراحل: اتجاه الكبسولة" } },
        { f: "wimx-parts", c: { en: "Process: printable parts", ar: "المراحل: الأجزاء اللي بتتطبع" } },
        { f: "wimx-dwg1", c: { en: "Drawing: the shared base, 111 × 105 × 60 mm, with a Ø28.5 mm lamp seat and a cable slot", ar: "رسم هندسي: القاعدة المشتركة، 111 × 105 × 60 مم، فيها مكان للمبة Ø28.5 مم وفتحة للسلك" } },
        { f: "wimx-dwg2", c: { en: "Drawing: the bottom cap with the Vertex logo", ar: "رسم هندسي: الغطا السفلي بلوجو Vertex" } }
      ]
    },
    {
      id: "imotec",
      title: { en: "IMOTEC Smart Switch", ar: "IMOTEC Smart Switch" },
      line: {
        en: "A Wi-Fi smart switch for IMOTEC that fits the wall box you already have.",
        ar: "سويتش ذكي Wi-Fi لـ IMOTEC بيركب في علبة الحيطة اللي عندك أصلاً."
      },
      year: "2026",
      kind: "prototype",
      field: { en: "Smart home, consumer electronics", ar: "البيت الذكي، إلكترونيات" },
      role: { en: "Research, concepts, industrial design, CMF, renders", ar: "البحث، الكونسبتات، التصميم الصناعي، الخامات والألوان، الريندر" },
      team: { en: "PHOTONX · For IMOTEC", ar: "PHOTONX · لـ IMOTEC" },
      specs: [
        { k: { en: "Range", ar: "المجموعة" }, v: { en: "1, 2, 3 and 4 gang, plus a shutter switch", ar: "1 و2 و3 و4 مفاتيح، وسويتش شيش" } },
        { k: { en: "Concepts", ar: "الكونسبتات" }, v: { en: "4 directions, 13 variants", ar: "4 اتجاهات و13 نسخة" } },
        { k: { en: "Status", ar: "الحالة" }, v: { en: "Prototyped", ar: "في مرحلة البروتوتايب" } }
      ],
      story: {
        en: [
          "IMOTEC makes smart home devices: motion sensors, smart plugs, IR controllers. They wanted a Wi-Fi light and shutter switch that works in any home with no new wiring, built to sit from the premium end down to the upper mid-range.",
          "I started with research: their current models, the brands already on the wall, trends in touch and mechanical switches, and how each switching technology feels, from tactile keys to embossed stickers to piezo glass. That became four concepts, each tried as a 1, 2, 3 and 4 gang set.",
          "The final design keeps one calm black frame and splits it into glass keys with a soft line of light at the edge of each. Every layout, the shutter version and the back housing were designed to fit a standard wall box. Prototype parts have been made and fitted on a wall mock-up."
        ],
        ar: [
          "IMOTEC بتعمل أجهزة للبيت الذكي: حساسات حركة، وفيش ذكية، وريموتات IR. كانوا عايزين سويتش نور وشيش Wi-Fi يشتغل في أي بيت من غير تمديدات جديدة، ويناسب من الفئة البريميوم لحد الفئة المتوسطة العليا.",
          "بدأت بالبحث: موديلاتهم الحالية، والبراندات اللي على الحيطة فعلاً، والترندات في السويتشات التاتش والميكانيكال، وإحساس كل تكنولوجيا ضغط، من الزرار التاكتايل للاستيكر البارز لزجاج البيزو. ده طلع منه أربع كونسبتات، كل واحد اتجرب بمفتاح و2 و3 و4.",
          "التصميم النهائي فيه فريم أسود هادي واحد، متقسم لمفاتيح زجاج في طرف كل واحد خط نور خفيف. كل التقسيمات ونسخة الشيش والجسم الخلفي اتصمموا يركبوا في علبة الحيطة العادية. اتعملت قطع بروتوتايب واتركبت على حيطة تجربة."
        ]
      },
      images: [
        { f: "imo-01", c: { en: "Final design, 1 gang", ar: "التصميم النهائي، مفتاح واحد" } },
        { f: "imo-spin", v: "imo-spin", c: { en: "The 3 gang, all the way round", ar: "الـ 3 مفاتيح، لفة كاملة" } },
        { f: "imo-05", c: { en: "4 gang, a soft line of light under each key", ar: "4 مفاتيح، خط نور خفيف تحت كل مفتاح" } },
        { f: "imo-02", c: { en: "3 gang", ar: "3 مفاتيح" } },
        { f: "imo-03", c: { en: "4 gang", ar: "4 مفاتيح" } },
        { f: "imo-04", c: { en: "Shutter switch", ar: "سويتش الشيش" } },
        { f: "imo-06", c: { en: "2 gang", ar: "مفتاحين" } },
        { f: "imo-07", c: { en: "3 gang, front", ar: "3 مفاتيح، من قدام" } },
        { f: "imo-08", c: { en: "The back housing fits a standard wall box", ar: "الجسم الخلفي بيركب في علبة الحيطة العادية" } },
        { f: "imo-proto1", c: { en: "Prototype on a wall mock-up", ar: "البروتوتايب على حيطة تجربة" } },
        { f: "imo-proto2", c: { en: "Prototype mounting frame", ar: "فريم التركيب في البروتوتايب" } },
        { f: "imo-proto3", c: { en: "Clear prototype parts", ar: "قطع البروتوتايب الشفافة" } },
      ]
    },
    {
      id: "threein1",
      title: { en: "3 In 1", ar: "3 In 1" },
      line: {
        en: "Hot water, cold water, ice and a minibar in one black-glass column.",
        ar: "مياه سخنة ومياه ساقعة وتلج وميني بار في عمود واحد من الزجاج الأسود."
      },
      year: "2026",
      kind: "exhibition",
      field: { en: "Home appliance", ar: "أجهزة منزلية" },
      role: { en: "Product design & visualisation", ar: "تصميم المنتج والتصور" },
      team: { en: "PHOTONX", ar: "PHOTONX" },
      specs: [
        { k: { en: "Minibar", ar: "الميني بار" }, v: "100 L" },
        { k: { en: "Outputs", ar: "المخارج" }, v: { en: "Hot · Cold · Ice", ar: "سخن · ساقع · تلج" } },
        { k: { en: "For", ar: "لـ" }, v: { en: "Homes, offices, hotels", ar: "البيوت والمكاتب والفنادق" } }
      ],
      story: {
        en: [
          "Large homes, offices and hotels often keep a water dispenser, an ice maker and a minibar side by side. 3 In 1 stacks them into one column.",
          "The top head has touch icons for hot, cold and ice, and both water and ice leave through the same nozzle. Below it sits a 100 L minibar, and the bottom drawer holds the water tank, filled from the mains and fed up by a pump.",
          "The body is black glass with satin bezels that frame each module."
        ],
        ar: [
          "البيوت الكبيرة والمكاتب والفنادق غالبًا فيها كولدير وماكينة تلج وميني بار جنب بعض. 3 In 1 بيجمعهم في عمود واحد.",
          "الراس فيها أزرار لمس للسخن والساقع والتلج، والمياه والتلج بيطلعوا من نفس الفتحة. تحتها ميني بار 100 لتر، والدرج اللي تحت فيه خزان المياه اللي بيتملي من الحنفية وبيطلع بطلمبة.",
          "الجسم زجاج أسود بإطارات ساتان بتحدد كل موديول."
        ]
      },
      images: [
        { f: "threein1-n4", c: { en: "In a living space", ar: "في مساحة معيشة" } },
        { f: "threein1-n3", c: { en: "Closed: black glass framed in steel", ar: "مقفول: زجاج أسود بإطار ستيل" } },
        { f: "threein1-n5", c: { en: "Open and closed", ar: "مفتوح ومقفول" } },
        { f: "threein1-n2", c: { en: "100 L minibar, stocked", ar: "ميني بار 100 لتر" } },
        { f: "threein1-n1", c: { en: "How it works: water from the tank up to the dispenser", ar: "إزاي بيشتغل: المية من الخزان لحد الكولدير" } },
        { f: "threein1-02", c: { en: "Dispenser head with hot, cold and ice", ar: "راس الكولدير: سخن وساقع وتلج" } },
        { f: "threein1-04", c: { en: "Tank drawer", ar: "درج الخزان" } },
        { f: "threein1-05", c: { en: "Exhibition pair", ar: "قطعتين للمعرض" } }
      ]
    },
    {
      id: "gbflip", key: true,
      title: { en: "Game Boy Flip", ar: "Game Boy Flip" },
      line: {
        en: "A small square handheld for retro games that unfolds into a wide screen for modern ones.",
        ar: "جهاز ألعاب مربع صغير للألعاب القديمة، بيتفتح لشاشة عريضة للألعاب الحديثة."
      },
      year: "2024",
      kind: "concept",
      field: { en: "Consumer electronics", ar: "إلكترونيات" },
      role: { en: "Design & product film", ar: "التصميم وفيلم المنتج" },
      team: null,
      specs: [
        { k: { en: "Published", ar: "اتنشر" }, v: { en: "4 September 2024 · Behance", ar: "4 سبتمبر 2024 · Behance" }, url: "https://www.behance.net/gallery/207173143/Game-Boy-Flip" },
        { k: { en: "Tools", ar: "البرامج" }, v: "Rhino, KeyShot" },
        { k: { en: "Closed", ar: "مقفول" }, v: "92 × 80 mm" },
        { k: { en: "Open", ar: "مفتوح" }, v: "184 mm" },
        { k: { en: "With grips", ar: "بالدراعات" }, v: "253 mm" }
      ],
      story: {
        en: [
          "Closed, it is a small square that plays retro games on the outer screen. It opens like a book, with both screens meeting in the middle, to give one wide display.",
          "Telescopic grips slide out to fit each mode, and it can be played without them."
        ],
        ar: [
          "وهو مقفول، مربع صغير بيشغل الألعاب القديمة على الشاشة اللي برا. بيتفتح زي الكتاب والشاشتين بيتقابلوا في النص ويعملوا شاشة واحدة عريضة.",
          "الدراعات بتطلع وتدخل عشان تناسب كل وضع، وممكن تلعب من غيرها."
        ]
      },
      images: [
        { f: "gbflip-cover", c: { en: "Game Boy Flip, open with grips", ar: "Game Boy Flip مفتوح بالدراعات" } },
        { f: "gbflip-01", c: { en: "Open, with grips", ar: "مفتوح بالدراعات" } },
        { f: "gbflip-02", c: { en: "Wide screen for modern games", ar: "الشاشة العريضة للألعاب الحديثة" } },
        { f: "gbflip-03", c: { en: "Unfolding", ar: "وهو بيتفتح" } },
        { f: "gbflip-04", c: { en: "Modes side by side", ar: "الأوضاع جنب بعض" } },
        { f: "gbflip-05", c: { en: "Closed", ar: "مقفول" } }
      ],
      note: { en: "Unofficial concept. Not affiliated with Nintendo.", ar: "تصميم غير رسمي، ليس تابعًا لنينتندو." }
    },
    {
      "id": "cmfspk", key: true,
      "title": {
        "en": "CMF Speaker",
        "ar": "CMF Speaker"
      },
      "line": {
        "en": "A portable speaker concept for CMF by Nothing, with a clear shell, a light bar and a small player screen.",
        "ar": "كونسبت سبيكر محمول لـ CMF by Nothing، بجسم شفاف وخط نور وشاشة تشغيل صغيرة."
      },
      "year": "2024",
      "kind": "concept",
      "field": {
        "en": "Consumer electronics, audio",
        "ar": "إلكترونيات، صوتيات"
      },
      "role": {
        "en": "Design, CMF, 3D and renders",
        "ar": "التصميم، الخامات والألوان، الـ 3D والريندر"
      },
      "team": {
        "en": "Personal concept · not affiliated with Nothing",
        "ar": "كونسبت شخصي · مش تابع لـ Nothing"
      },
      "specs": [
        {
          "k": {
            "en": "Published",
            "ar": "اتنشر"
          },
          "v": {
            "en": "18 August 2024 · Behance",
            "ar": "18 أغسطس 2024 · Behance"
          },
          "url": "https://www.behance.net/gallery/205801501/CMF-Speaker"
        },
        {
          "k": {
            "en": "Tools",
            "ar": "البرامج"
          },
          "v": "Blender"
        }
      ],
      "story": {
        "en": [
          "A speaker that follows CMF's playful, honest language: a transparent shell that shows the driver inside, one bold accent colour, and a small screen for what is playing.",
          "I worked through the colours, materials and finish in Blender, from the clear version to a solid one with a grille, and staged it in a few home settings."
        ],
        "ar": [
          "سبيكر ماشي على لغة CMF المرحة والصريحة: جسم شفاف بيوري السماعة اللي جواه، ولون واحد جريء كأكسنت، وشاشة صغيرة للي شغال.",
          "اشتغلت على الألوان والخامات والتشطيب على Blender، من النسخة الشفافة لنسخة مصمتة بشبكة، وصورته في كذا مكان في البيت."
        ]
      },
      "images": [
        {
          "f": "be-cmf-1",
          "c": {
            "en": "CMF Speaker",
            "ar": "CMF Speaker"
          }
        },
        {
          "f": "be-cmf-3",
          "c": {
            "en": "The light bar",
            "ar": "خط النور"
          }
        },
        {
          "f": "be-cmf-4",
          "c": {
            "en": "Player screens",
            "ar": "شاشات التشغيل"
          }
        },
        {
          "f": "be-cmf-5",
          "c": {
            "en": "Clear shell, the driver inside",
            "ar": "الجسم الشفاف والسماعة جواه"
          }
        },
        {
          "f": "be-cmf-6",
          "c": {
            "en": "Clear shell, top view",
            "ar": "الجسم الشفاف من فوق"
          }
        },
        {
          "f": "be-cmf-7",
          "c": {
            "en": "Solid edition with grille",
            "ar": "النسخة المصمتة بالشبكة"
          }
        },
        {
          "f": "be-cmf-8",
          "c": {
            "en": "At home",
            "ar": "في البيت"
          }
        },
        {
          "f": "be-cmf-9",
          "c": {
            "en": "In daylight",
            "ar": "في نور النهار"
          }
        }
      ]
    },
    {
      "id": "oledtv", key: true,
      "title": {
        "en": "Flex OLED TV",
        "ar": "Flex OLED TV"
      },
      "line": {
        "en": "A TV concept that uses OLED's flexibility: the screen bends from flat to curved on its stand.",
        "ar": "كونسبت تلفزيون بيستغل مرونة الـ OLED: الشاشة بتتني من مستوية لمنحنية على القاعدة بتاعتها."
      },
      "year": "2021",
      "kind": "concept",
      "field": {
        "en": "Consumer electronics, TV",
        "ar": "إلكترونيات، تلفزيون"
      },
      "role": {
        "en": "Design, 3D and renders",
        "ar": "التصميم، الـ 3D والريندر"
      },
      "team": {
        "en": "Personal concept · not affiliated with Samsung",
        "ar": "كونسبت شخصي · مش تابع لـ Samsung"
      },
      "specs": [
        {
          "k": {
            "en": "Published",
            "ar": "اتنشر"
          },
          "v": {
            "en": "19 February 2021 · Behance",
            "ar": "19 فبراير 2021 · Behance"
          },
          "url": "https://www.behance.net/gallery/113865845/Flex-OLED-TV"
        },
        {
          "k": {
            "en": "Tools",
            "ar": "البرامج"
          },
          "v": "Maya, KeyShot, Photoshop"
        }
      ],
      "story": {
        "en": [
          "OLED panels can bend. Flex OLED makes that the point of the product: a thin panel that rises from a low stand and flexes from flat for everyday viewing to curved for films and games.",
          "The stand holds the electronics and speakers, so the panel itself stays as thin as possible."
        ],
        "ar": [
          "شاشات الـ OLED بتتني. Flex OLED بيخلي ده هو فكرة المنتج: شاشة رفيعة طالعة من قاعدة واطية، وبتتني من مستوية للفرجة العادية لمنحنية للأفلام والألعاب.",
          "القاعدة شايلة الإلكترونيات والسماعات، عشان الشاشة نفسها تفضل رفيعة على قد ما تقدر."
        ]
      },
      "images": [
        {
          "f": "flex-cover",
          "c": {"en": "Flex OLED TV, from above", "ar": "Flex OLED TV من فوق"}
        },
        {
          "f": "flex-hero-1",
          "c": {"en": "From flat to curved, and back", "ar": "من مستوية لمنحنية، وترجع تاني"}
        },
        {
          "f": "flex-pair-1",
          "c": {"en": "The same screen, flat or curved", "ar": "نفس الشاشة، مستوية أو منحنية"}
        },
        {
          "f": "flex-low-1",
          "c": {"en": "Curved, on its low stand", "ar": "منحنية على قاعدتها الواطية"}
        },
        {
          "f": "be-oled-2",
          "c": {
            "en": "Flat and curved",
            "ar": "مستوية ومنحنية"
          }
        },
        {
          "f": "be-oled-v",
          "v": "be-oled-v",
          "c": {
            "en": "The panel flexing",
            "ar": "الشاشة وهي بتتني"
          }
        },
        {
          "f": "be-oled-6",
          "c": {
            "en": "Flat",
            "ar": "مستوية"
          }
        },
        {
          "f": "be-oled-5",
          "c": {
            "en": "Curved",
            "ar": "منحنية"
          }
        },
        {
          "f": "be-oled-7",
          "c": {
            "en": "Curved, from the side",
            "ar": "منحنية من الجنب"
          }
        },
        {
          "f": "be-oled-3",
          "c": {
            "en": "Detail: the panel meets the stand",
            "ar": "تفصيلة: الشاشة والقاعدة"
          }
        },
        {
          "f": "be-oled-4",
          "c": {
            "en": "Detail: the thin panel",
            "ar": "تفصيلة: الشاشة الرفيعة"
          }
        },
        {
          "f": "be-oled-1",
          "c": {
            "en": "Top view: the bend",
            "ar": "من فوق: الانحناء"
          }
        }
      ]
    },
    {
      "id": "braun07", key: true,
      "title": {
        "en": "BRAUN Audio 07",
        "ar": "BRAUN Audio 07"
      },
      "line": {
        "en": "A classic Braun-style speaker with a touch screen and Spotify built in, so it plays without a phone.",
        "ar": "سبيكر بروح Braun الكلاسيكية، فيه شاشة تاتش وSpotify جواه، فبيشتغل من غير موبايل."
      },
      "year": "2020",
      "kind": "concept",
      "field": {
        "en": "Consumer electronics, audio",
        "ar": "إلكترونيات، صوتيات"
      },
      "role": {
        "en": "Design, UI, 3D and renders",
        "ar": "التصميم، الواجهة، الـ 3D والريندر"
      },
      "team": {
        "en": "Personal concept · not affiliated with Braun",
        "ar": "كونسبت شخصي · مش تابع لـ Braun"
      },
      "specs": [
        {
          "k": {
            "en": "Published",
            "ar": "اتنشر"
          },
          "v": {
            "en": "15 April 2020 · Behance",
            "ar": "15 أبريل 2020 · Behance"
          },
          "url": "https://www.behance.net/gallery/95414813/BRAUN-Audio-07"
        },
        {
          "k": {
            "en": "On Behance",
            "ar": "على Behance"
          },
          "v": {
            "en": "474 appreciations · 13.9K views",
            "ar": "474 إعجاب · 13.9 ألف مشاهدة"
          }
        },
        {
          "k": {
            "en": "Tools",
            "ar": "البرامج"
          },
          "v": "Maya, KeyShot, Photoshop"
        }
      ],
      "story": {
        "en": [
          "BRAUN Audio 07 takes the calm, rational look of classic Braun audio and gives it a future: a wide touch screen across the top, one rotary knob for volume, and the speaker grille below.",
          "Spotify runs on the speaker itself, so it plays without another device. It comes in a few quiet colours."
        ],
        "ar": [
          "BRAUN Audio 07 بياخد الشكل الهادي والمنطقي بتاع أجهزة صوت Braun الكلاسيكية ويديله مستقبل: شاشة تاتش عريضة على الوش من فوق، وزرار واحد بيلف للصوت، والشبكة تحت.",
          "Spotify شغال على السبيكر نفسه، فبيشغل من غير أي جهاز تاني. وفيه كذا لون هادي."
        ]
      },
      "images": [
        {
          "f": "braun-low-1",
          "c": {"en": "BRAUN Audio 07", "ar": "BRAUN Audio 07"}
        },
        {
          "f": "braun-glass-4",
          "c": {"en": "On show", "ar": "معروض"}
        },
        {
          "f": "braun-navy-1",
          "c": {"en": "One knob, one screen", "ar": "زرار واحد وشاشة واحدة"}
        },
        {
          "f": "braun-use-1",
          "c": {"en": "Turning it up", "ar": "بيعلّي الصوت"}
        },
        {
          "f": "braun-use-2",
          "c": {"en": "Late-night listening", "ar": "سماع بالليل"}
        },
        {
          "f": "be-braun-9",
          "c": {
            "en": "One knob for volume",
            "ar": "زرار واحد للصوت"
          }
        },
        {
          "f": "braun-curtain-4",
          "c": {"en": "In a quiet room", "ar": "في أوضة هادية"}
        },
        {
          "f": "braun-shelf",
          "c": {"en": "On a glass shelf", "ar": "على رف إزاز"}
        },
        {
          "f": "braun-table-3",
          "c": {"en": "At home in a living room", "ar": "في مكانه في الليفنج"}
        },
        {
          "f": "be-braun-3",
          "c": {
            "en": "BRAUN Audio 07",
            "ar": "BRAUN Audio 07"
          }
        },
        {
          "f": "be-braun-1",
          "c": {
            "en": "The colours",
            "ar": "الألوان"
          }
        },
        {
          "f": "be-braun-6",
          "c": {
            "en": "The touch screen",
            "ar": "الشاشة التاتش"
          }
        },
        {
          "f": "be-braun-4",
          "c": {
            "en": "Spotify built in",
            "ar": "Spotify جواه"
          }
        },
        {
          "f": "be-braun-5",
          "c": {
            "en": "Front",
            "ar": "من قدام"
          }
        },
        {
          "f": "be-braun-8",
          "c": {
            "en": "The interface",
            "ar": "الواجهة"
          }
        },
        {
          "f": "be-braun-7",
          "c": {
            "en": "Back",
            "ar": "من ورا"
          }
        },
        {
          "f": "be-braun-2",
          "c": {
            "en": "At home",
            "ar": "في البيت"
          }
        }
      ]
    },
    {
      id: "keychain",
      title: { en: "AI Keychain", ar: "ميدالية الذكاء الاصطناعي" },
      line: {
        en: "A pocket assistant you talk to, with a character that lives on its screen.",
        ar: "مساعد في جيبك بتكلمه، وفيه شخصية عايشة على الشاشة."
      },
      year: "2026",
      kind: "concept",
      field: { en: "Consumer electronics", ar: "إلكترونيات" },
      role: { en: "Design, character & UI motion", ar: "التصميم والشخصية وحركة الواجهة" },
      team: null,
      specs: [
        { k: { en: "Published", ar: "اتنشر" }, v: { en: "1 October 2026 · Behance", ar: "1 أكتوبر 2026 · Behance" }, url: "https://www.behance.net/gallery/256532579/Dodo-Ai-Assistant" },
        { k: { en: "Body", ar: "الجسم" }, v: "36 × 66 × 13 mm" },
        { k: { en: "Screen", ar: "الشاشة" }, v: "30.4 × 60.4 mm" },
        { k: { en: "Input", ar: "التحكم" }, v: { en: "Push to talk", ar: "اضغط واتكلم" } }
      ],
      story: {
        en: [
          "A soft-touch pill that hangs from a braided lanyard. Press the orange key on the side and talk.",
          "The speaker is a thin crescent of fine perforations on one shoulder, flush with the skin. The screen is almost the whole face, so the character has room to react: it waves, listens, thinks and answers."
        ],
        ar: [
          "حباية ناعمة متعلقة في حبل مضفور. اضغط الزرار البرتقاني اللي على الجنب واتكلم.",
          "السماعة هلال رفيع من ثقوب صغيرة على الكتف، مستوية مع الجسم. الشاشة تقريبًا الوش كله، فالشخصية عندها مساحة تتفاعل: بتسلم وبتسمع وبتفكر وبترد."
        ]
      },
      images: [
        {"f": "keychain-cover", "c": {"en": "DODO, listening", "ar": "DODO وهو بيسمع"}},
        { f: "keychain-01", c: { en: "On its braided lanyard", ar: "على الحبل المضفور" } },
        { f: "keychain-03", c: { en: "The character on screen", ar: "الشخصية على الشاشة" } },
        { f: "keychain-02", c: { en: "Crescent speaker, flush with the body", ar: "سماعة الهلال مستوية مع الجسم" } },
        { f: "keychain-04", c: { en: "Push-to-talk key", ar: "زرار الكلام" } }
      ]
    },
    {
      "id": "keyhop",
      "title": {
        "en": "KEYHOP",
        "ar": "KEYHOP"
      },
      "line": {
        "en": "A pocket fidget made of real mechanical keys, with a tiny game for when the Wi-Fi drops.",
        "ar": "فيدجت جيب معمول من زراير كيبورد ميكانيكي حقيقية، وفيه لعبة صغيرة للحظة اللي النت يقع فيها."
      },
      "year": "2026",
      "kind": "concept",
      "field": {
        "en": "Consumer electronics, toys",
        "ar": "إلكترونيات، ألعاب"
      },
      "role": {
        "en": "Concept, 3D, game and character design",
        "ar": "الكونسبت، الـ 3D، تصميم اللعبة والشخصية"
      },
      "team": {
        "en": "Personal project",
        "ar": "مشروع شخصي"
      },
      "specs": [
        {
          "k": {
            "en": "Screen",
            "ar": "الشاشة"
          },
          "v": {
            "en": "128×64 reflective LCD, no backlight",
            "ar": "LCD عاكسة 128×64 من غير إضاءة خلفية"
          }
        },
        {
          "k": {
            "en": "Keys",
            "ar": "الزراير"
          },
          "v": {
            "en": "4 hot-swap mechanical switches",
            "ar": "4 سويتشات ميكانيكية بتتبدل"
          }
        },
        {
          "k": {
            "en": "Battery",
            "ar": "البطارية"
          },
          "v": {
            "en": "250 mAh, USB-C, about 60 h of play",
            "ar": "250 mAh، USB-C، حوالي 60 ساعة لعب"
          }
        },
        {
          "k": {
            "en": "Colourways",
            "ar": "الألوان"
          },
          "v": {
            "en": "Chalk, Graphite, Mint",
            "ar": "Chalk وGraphite وMint"
          }
        }
      ],
      "story": {
        "en": [
          "Remember the little game you play when the internet dies? I wanted it to live somewhere better than an error page.",
          "KEYHOP is built from the things we already love touching: real mechanical switches and keycaps. Under them sits a calculator-style LCD that reads best in daylight. No glow, no notifications.",
          "It has two modes. Clicker counts every press, for when your hands just need something to do. Kap Run is a game about a keycap that escaped the keyboard: tap to jump, hold to jump higher, duck under the bugs. It is designed around catalogue parts, so it can actually be built."
        ],
        "ar": [
          "فاكر اللعبة الصغيرة اللي بتلعبها لما النت يقع؟ كنت عايزها تعيش في مكان أحسن من صفحة إيرور.",
          "KEYHOP معمول من الحاجات اللي بنحب نلمسها أصلاً: سويتشات وزراير كيبورد ميكانيكي حقيقية. وتحتهم شاشة LCD زي بتاعة الآلة الحاسبة، بتتقري أحسن في نور النهار. لا إضاءة ولا نوتيفيكيشنز.",
          "فيه وضعين. Clicker بيعد كل ضغطة، للوقت اللي إيدك محتاجة تعمل أي حاجة. وKap Run لعبة عن زرار هرب من الكيبورد: اضغط عشان ينط، وطوّل الضغطة عشان ينط أعلى، ووطّي تحت الباجز. ومتصمم على قطع موجودة في الكتالوجات، فينفع يتصنع فعلاً."
        ]
      },
      "images": [
        {
          "f": "keyhop-01",
          "c": {
            "en": "KEYHOP, Chalk",
            "ar": "KEYHOP، لون Chalk"
          }
        },
        {
          "f": "keyhop-v",
          "v": "keyhop-v",
          "c": {
            "en": "Kap Run",
            "ar": "Kap Run"
          }
        },
        {
          "f": "keyhop-02",
          "c": {
            "en": "On the desk",
            "ar": "على المكتب"
          }
        },
        {
          "f": "keyhop-03",
          "c": {
            "en": "Clicker mode counts every press",
            "ar": "وضع Clicker بيعد كل ضغطة"
          }
        },
        {
          "f": "keyhop-04",
          "c": {
            "en": "Four keys, one game",
            "ar": "أربع زراير ولعبة واحدة"
          }
        },
        {
          "f": "keyhop-05",
          "c": {
            "en": "Mint colourway",
            "ar": "لون Mint"
          }
        },
        {
          "f": "keyhop-06",
          "c": {
            "en": "In the hand",
            "ar": "في الإيد"
          }
        }
      ]
    },
    {
      "id": "evhold",
      "title": {
        "en": "EV Charger Holder",
        "ar": "حامل شاحن العربية الكهربا"
      },
      "line": {
        "en": "A holder that keeps the charging connector off the ground, gripping the car's own glass while it charges.",
        "ar": "حامل بيشيل كونكتور الشحن من على الأرض، وبيمسك في إزاز العربية نفسها وهي بتشحن."
      },
      "year": "2026",
      "kind": "prototype",
      "field": {
        "en": "Automotive accessory",
        "ar": "إكسسوار عربيات"
      },
      "role": {
        "en": "Product design, prototyping",
        "ar": "تصميم المنتج، البروتوتايب"
      },
      "team": {
        "en": "Product Lab, Coventry University Cairo · with Ahmed, Habiba and Mohamed",
        "ar": "Product Lab، جامعة كوفنتري القاهرة · مع أحمد وحبيبة ومحمد"
      },
      "specs": [
        {
          "k": {
            "en": "Grip",
            "ar": "التثبيت"
          },
          "v": {
            "en": "Two flexible rubber suction pads",
            "ar": "اتنين شفاط كاوتش مرن"
          }
        },
        {
          "k": {
            "en": "Programme",
            "ar": "البرنامج"
          },
          "v": {
            "en": "Product Lab, Coventry University",
            "ar": "Product Lab، جامعة كوفنتري"
          }
        }
      ],
      "story": {
        "en": [
          "When an electric car charges, the heavy connector and cable usually end up on the ground. We wanted to keep them clean, safe and within easy reach.",
          "The holder uses two flexible rubber suction pads that grip the car's window, so it works on any car without fixing anything to it. It was a team project at Product Lab, Coventry University, full of ideas, discussions and experiments."
        ],
        "ar": [
          "لما العربية الكهربا بتشحن، الكونكتور التقيل والسلك غالباً بينتهوا على الأرض. كنا عايزينهم يفضلوا نضاف وآمنين وقريبين من إيدك.",
          "الحامل فيه اتنين شفاط كاوتش مرن بيمسكوا في شباك العربية، فيشتغل على أي عربية من غير ما تركب فيها حاجة. ده كان مشروع فريق في Product Lab بجامعة كوفنتري، مليان أفكار ونقاشات وتجارب."
        ]
      },
      "images": [
        {
          "f": "ev-01",
          "c": {
            "en": "The holder with the connector and cable",
            "ar": "الحامل ومعاه الكونكتور والسلك"
          }
        },
        {
          "f": "ev-v",
          "v": "ev-v",
          "c": {
            "en": "Prototype test",
            "ar": "تجربة البروتوتايب"
          }
        },
        {
          "f": "ev-04",
          "c": {
            "en": "On the car while it charges",
            "ar": "على العربية وهي بتشحن"
          }
        },
        {
          "f": "ev-02",
          "c": {
            "en": "The suction pads",
            "ar": "الشفاطات"
          }
        },
        {
          "f": "ev-03",
          "c": {
            "en": "Pressing a pad onto the glass",
            "ar": "تثبيت الشفاط على الإزاز"
          }
        },
        {
          "f": "ev-05",
          "c": {
            "en": "Mounting it on the window",
            "ar": "تركيبه على الشباك"
          }
        },
        {
          "f": "ev-06",
          "c": {
            "en": "From inside the car",
            "ar": "من جوه العربية"
          }
        },
        {
          "f": "ev-07",
          "c": {
            "en": "The connector stays off the ground",
            "ar": "الكونكتور بعيد عن الأرض"
          }
        },
        {
          "f": "ev-08",
          "c": {
            "en": "Hanging the connector",
            "ar": "تعليق الكونكتور"
          }
        }
      ]
    },
    {
      id: "ds01",
      title: { en: "DS-01 Sound Display", ar: "DS-01 Sound Display" },
      line: {
        en: "A desk speaker with a wide tilted touch screen for music and ambient modes.",
        ar: "سماعة مكتب بشاشة لمس عريضة مايلة للمزيكا والأجواء."
      },
      year: "2025",
      kind: "concept",
      field: { en: "Audio", ar: "صوتيات" },
      role: { en: "Design, internals & product film", ar: "التصميم والمكونات الداخلية وفيلم المنتج" },
      team: null,
      specs: [
        { k: { en: "Published", ar: "اتنشر" }, v: { en: "9 February 2025 · Behance", ar: "9 فبراير 2025 · Behance" }, url: "https://www.behance.net/gallery/217365871/Dyson-Speaker" },
        { k: { en: "Screen", ar: "الشاشة" }, v: "188 × 67 mm" },
        { k: { en: "Modes", ar: "الأوضاع" }, v: { en: "Player · Rain · Wind", ar: "مشغل · مطر · رياح" } }
      ],
      story: {
        en: [
          "Blue fins, a copper base and a gunmetal rim around a stadium-shaped touch screen. The screen is a music player with ambient modes like rain and wind.",
          "The film shows real internals: drivers, tweeter, passive radiator and board, exploded and reassembled."
        ],
        ar: [
          "زعانف زرقا وقاعدة نحاس وإطار رمادي غامق حوالين شاشة لمس على شكل ملعب. الشاشة مشغل مزيكا وفيها أوضاع زي المطر والرياح.",
          "الفيلم بيوري المكونات الحقيقية جوه: السماعات والتويتر والراديتور والبوردة، وهي بتتفك وبتتركب."
        ]
      },
      images: [
        { f: "ds01-01", c: { en: "Hero", ar: "المنظر الرئيسي" } },
        { f: "ds01-03", c: { en: "Internals", ar: "المكونات الداخلية" } },
        { f: "ds01-02", c: { en: "Screen modes", ar: "أوضاع الشاشة" } },
        { f: "ds01-04", c: { en: "Detail", ar: "تفاصيل" } }
      ],
      note: { en: "Unofficial concept. Not affiliated with Dyson.", ar: "تصميم غير رسمي، ليس تابعًا لدايسون." }
    },
    {
      id: "ns01",
      title: { en: "Speaker 01", ar: "Speaker 01" },
      line: {
        en: "A transparent speaker with a cassette mechanism you can watch turn.",
        ar: "سماعة شفافة فيها ميكانيزم كاسيت بتتفرج عليه وهو بيلف."
      },
      year: "2026",
      kind: "concept",
      field: { en: "Audio", ar: "صوتيات" },
      role: { en: "Design & product film", ar: "التصميم وفيلم المنتج" },
      team: null,
      specs: [
        { k: { en: "Body", ar: "الجسم" }, v: { en: "Transparent", ar: "شفاف" } },
        { k: { en: "Inside", ar: "جوه" }, v: { en: "Cassette mechanism", ar: "ميكانيزم كاسيت" } }
      ],
      story: {
        en: [
          "A clear housing shows everything inside, including a cassette mechanism that turns while music plays. The film was built shot by shot in Blender."
        ],
        ar: [
          "جسم شفاف بيوري كل اللي جوه، ومنهم ميكانيزم كاسيت بيلف وانت بتسمع. الفيلم اتعمل لقطة لقطة على بلندر."
        ]
      },
      images: [
        { f: "ns01-01", c: { en: "Opening shot", ar: "اللقطة الأولى" } },
        { f: "ns01-02", c: { en: "Mechanism", ar: "الميكانيزم" } },
        { f: "ns01-03", c: { en: "Detail", ar: "تفاصيل" } },
        { f: "ns01-04", c: { en: "Top plate", ar: "الوش العلوي" } }
      ],
      note: { en: "Unofficial concept study in the style of Nothing. Not affiliated with Nothing.", ar: "دراسة غير رسمية بأسلوب Nothing، ليست تابعة لها." }
    }
  ],

  // Logos live in img/brands. h = display height in px; inv = logo is white and needs inverting.
  BRANDS: {
    clients: [
      { n: "ELARABY", f: "elaraby.svg", h: 44 },
      { n: "Sharp", f: "sharp.svg", h: 24 },
      { n: "Tornado", f: "tornado.png", h: 20 },
      { n: "Heller", f: "heller.png", h: 120 },
      { n: "Kajito", f: "kajito.png", h: 26, inv: true },
      { n: "Bravo", f: "bravo.svg", h: 22 },
      { n: "AK Studio", f: "akstudio.png", h: 52 }
    ],
    featured: [
      { n: "Cairo Design Week", f: "cdw.png", h: 54 },
      { n: "Yanko Design", f: "yanko.png", h: 30 },
      { n: "Render Weekly", f: "renderweekly.png", h: 46 },
      { n: "KeyShot", f: "keyshot.svg", h: 28 },
      { n: "Design Burger", f: "designburger.png", h: 50 },
      { n: "Trend Hunter", f: "trendhunter.png", h: 30 }
    ]
  },

  // Older work from Behance. Each card links to the Behance project.
  // Move one into PROJECTS above to give it a full page.
  behance: "https://www.behance.net/Abdelrahman_Shaapan",
  ARCHIVE: [
    { t: "Braun Wall Beam", id: "222614465" },
    { t: "OpenAI Productivity Assistant", id: "216608789" },
    { t: "My Garage", id: "207339531" },
    { t: "Nothing Ultra Watch", id: "206154313" },
    { t: "Frame Pro", id: "205267129" },
    { t: "Porsche 911 Carrera 4S", id: "204834903" },
    { t: "Apple Watch Ultra 3", id: "182862933" },
    { t: "Mini massage gun", id: "161799647" },
    { t: "Magic mac", id: "142411991" },
    { t: "!nstafolio", id: "112143091" },
    { t: "Nest Clock", id: "100898127" },
    { t: "National Cassette player RX-M50", id: "94475159" },
    { t: "Google Thermometer", id: "94121623" },
    { t: "Sony PS5", id: "92867905" },
    { t: "Wildfire (Peacekeeper Weapon Skin)", id: "91085091" },
    { t: "Dynamic Alarm Clock", id: "90205301" },
    { t: "The Golden Pharaoh (R-301 Weapon Skin)", id: "89885307" },
    { t: "Magic Trackpad 3", id: "88275601" },
    { t: "Apple VR", id: "87655467" },
    { t: "Hexa Phone", id: "87179421" },
    { t: "Hexa Watch", id: "86120073" },
    { t: "PlayStation Store", id: "85051869" },
    { t: "HomePod 2", id: "82993805" },
    { t: "Bose Diamond Earbuds", id: "82241593" },
    { t: "MI Calculator", id: "80766553" },
    { t: "X Remote Control", id: "80495677" },
    { t: "Vehicles of the Future", id: "79972073" },
    { t: "Galaxy Gear Projector", id: "79531595" },
    { t: "C Chair", id: "79014665" },
    { t: "Pen Holder", id: "77724295" },
    { t: "WAVES", id: "75025073" },
    { t: "Fortnite Egyptian Style", id: "72160961" },
    { t: "MOLO", id: "68167619" },
    { t: "Egyptian Premier League", id: "60802121" },
    { t: "Life Without Colors", id: "55235553" }
  ],

  kinds: {
    built: { en: "Built", ar: "منفذ" },
    client: { en: "Client concept", ar: "كونسبت لعميل" },
    prototype: { en: "Prototyped", ar: "بروتوتايب" },
    market: { en: "In market", ar: "في السوق" },
    competition: { en: "Competition", ar: "مسابقة" },
    exhibition: { en: "Exhibition", ar: "معرض" },
    concept: { en: "Concept", ar: "كونسبت" }
  },

  ui: {
    work: { en: "Work", ar: "الأعمال" },
    about: { en: "About", ar: "عني" },
    contact: { en: "Contact", ar: "تواصل" },
    all: { en: "All", ar: "الكل" },
    role: { en: "Role", ar: "دوري" },
    team: { en: "Team", ar: "الفريق" },
    field: { en: "Field", ar: "المجال" },
    year: { en: "Year", ar: "السنة" },
    status: { en: "Status", ar: "الحالة" },
    back: { en: "All work", ar: "كل الأعمال" },
    next: { en: "Next project", ar: "المشروع التالي" },
    services: { en: "What I do", ar: "بعمل إيه" },
    tools: { en: "Tools", ar: "الأدوات" },
    experience: { en: "Experience", ar: "الخبرة" },
    copy: { en: "Copy", ar: "نسخ" },
    copied: { en: "Copied", ar: "اتنسخ" },
    projects: { en: "projects", ar: "مشاريع" },
    view: { en: "View project", ar: "شوف المشروع" },
    workedWith: { en: "Designed for", ar: "صممت لـ" },
    featuredOn: { en: "Featured on", ar: "اتنشر شغلي في" },
    pdf: { en: "Portfolio PDF", ar: "البورتفوليو PDF" },
    facts: [
      { n: "15+", en: "products in market", ar: "منتج في السوق" },
      { n: "20+", en: "features on international design media", ar: "مقال عن شغلي في مواقع تصميم عالمية" },
      { n: "4", en: "pieces built and installed", ar: "قطع اتنفذت واتركبت" }
    ],
    conceptsNav: { en: "Concepts", ar: "كونسبتات" },
    concepts: { en: ["Key", "Concepts"], ar: ["كونسبتات", "مختارة"] },
    conceptsNote: { en: "Self-initiated product concepts, published on Behance. The date each one went live is part of the story.", ar: "كونسبتات منتجات من مبادرتي، منشورة على بيهانس. وتاريخ نشر كل واحد جزء من الحكاية." },
    published: { en: "Published", ar: "اتنشر" },
    moreConcepts: { en: "More concepts", ar: "كونسبتات تانية" },
    archive: { en: "Archive", ar: "الأرشيف" },
    archiveNote: { en: "Earlier projects and studies. Each one opens on Behance.", ar: "مشاريع ودراسات أقدم. كل واحد بيفتح على بيهانس." },
    noEmail: { en: "Email coming soon", ar: "الإيميل قريبًا" }
  }
};

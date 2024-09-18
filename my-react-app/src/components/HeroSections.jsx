import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        සාහිත්‍ය මාසය වෙනුවෙන් නිකුත් කරන ලද ලිපි 
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
        සාහිත්‍යය
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        භාෂාව උපයෝග කර ගනිමින් රසය ජනනය කරන කලාව, සාහිත්‍යය ලෙස හැඳින්වෙයි."සමාන හදවත" යන්න සාහිත්‍යය යන වචනයෙන් අදහස් වෙයි.
         එය හුදෙක් භාෂා වික්‍රමයක් පමණක් නොව මානව ජීවිතයේ විවිධ පැතිකඩ නිරූපණය කරන මාධ්‍යයකි. සාහිත්‍යය නිර්මාණය, රස වින්දනය හා විචාරය යන ක්ෂේත්‍ර තුනකින් සමන්විත බව ඇතැම් විචාරකයෝ පවසති. රස වින්දනය සාහිත්‍යය පරිශීලනයෙන් ලැබිය හැකි ප්‍රතිලාභයකි.[1] සාහිත්‍යය යන්නට නොයෙකුත් විවරණ ඇත. එම විවරණ සාහිත්‍යය භාවිතා කරන්නන් මත හා එහි අන්තර්ගතය මත රඳා පවතී. එය පුළුල් ලෙස සලකා බලන විට ඕනෑම රූ සටහනක සිට අක්ෂර දක්වා ඕනෑම සංකේතයක් අඩංගු වන වාර්තාවක් ලෙස දැක්විය හැක. පටු දැක්මකින් යුතුව බලන කළ එය අක්ෂර පමණක් හෝ අක්ෂර සංකේත වශයෙන් ඇති ඕනෑම ලිඛිත භාෂාවකින් යුත් වාර්තාවක් ලෙස පෙනිය හැකිය. (උදාහරණ ලෙස ඊජිප්තු) එසේම පටු දෘෂ්ඨියකින් සලකා බලන කළ සාහිත්‍යමය කෘතියක් යන්න භෞතිකමය ස්වභාවයක් සහිත වන්නක් බව සැලකේ. මුස්ලිම් දාර්ශනික ඉමාම් ජෆා අල් සදික්ගේ (ක්‍රි. ව. 702 - 756) අර්ථ දැක්විම් වලට අනුව සාහිත්‍යය යන්න පහත පරිදි වේ. සාහිත්‍යය යනු යමෙකු විසින් අඳිනු ලබන වස්ත්‍රයක් වැනිය. යමකු පවසන හෝ ලියා දක්වන දෙයින් එය තවත් සිත්ගන්නා සුළු වේ. ෆැගිලියෝ මුයිගි පවසන පරිදි සාහිත්‍යය යනු යම් මඟ පෙන්වීමක් සහ අර්ථයක් කැටි කළ ජීවිතයේ එක් පැතිකඩකි. එය අර්ථ දක්වන්නන්ගේ දැකීමට අනුව ලෝකය පිළිබඳ අර්ථ දැක්වීමකි.
         එහෙත් සාහිත්‍යයට අඩංගු වන්නා වූ ලියවිලි නිරතුරුවම මෙම සීමා පසු කරයි.
        </p>
        <button className="bg-yellow-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-yellow-600 active:scale-95">
          For More Details 
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroSection;
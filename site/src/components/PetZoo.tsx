"use client";
import { useEffect, useRef } from "react";

const PETS = [
  {name:"capybara",rarity:"legendary",stars:5,frames:[["  n______n  "," ( o    o ) "," (   oo   ) ",'  `------´  '],["  n______n  "," ( o    o ) "," (   Oo   ) ",'  `------´  ']]},
  {name:"cactus",rarity:"legendary",stars:5,frames:[[" n  ____  n "," | |o  o| | "," |_|    |_| ","   |    |   "],["    ____    "," n |o  o| n "," |_|    |_| ","   |    |   "]]},
  {name:"robot",rarity:"legendary",stars:5,frames:[["   .[||].   ","  [ o  o ]  ","  [ ==== ]  ",'  `------´  '],["   .[||].   ","  [ o  o ]  ","  [ -==- ]  ",'  `------´  ']]},
  {name:"ghost",rarity:"epic",stars:4,frames:[["   .----.   ","  / o  o \\  ","  |      |  ","  ~`~``~`~  "],["   .----.   ","  / o  o \\  ","  |      |  ","  `~`~~`~`  "]]},
  {name:"axolotl",rarity:"epic",stars:4,frames:[["}~(______)~{","}~(o .. o)~{","  ( .--. )  ","  (_/  \\_)  "],["~}(______){~","~}(o .. o){~","  ( .--. )  ","  (_/  \\_)  "]]},
  {name:"penguin",rarity:"rare",stars:3,frames:[["  .---.     ","  (o>o)     "," /(   )\\    ",'  `---´     '],["  .---.     ","  (o>o)     "," |(   )|    ",'  `---´     ']]},
  {name:"turtle",rarity:"rare",stars:3,frames:[["   _,--._   ","  ( o  o )  "," /[______]\\ ",'  ``    ``  '],["   _,--._   ","  ( o  o )  "," /[______]\\ ",'   ``  ``   ']]},
  {name:"snail",rarity:"rare",stars:3,frames:[[" o    .--.  ","  \\  ( @ )  ",'   \\_`--´   ',"  ~~~~~~~   "],["  o   .--.  ","  |  ( @ )  ",'   \\_`--´   ',"  ~~~~~~~   "]]},
  {name:"dragon",rarity:"uncommon",stars:2,frames:[["  /^\\  /^\\  "," <  o  o  > "," (   ~~   ) ",'  `-vvvv-´  '],["  /^\\  /^\\  "," <  o  o  > "," (        ) ",'  `-vvvv-´  ']]},
  {name:"octopus",rarity:"uncommon",stars:2,frames:[["   .----.   ","  ( o  o )  ","  (______)  ","  /\\/\\/\\/\\  "],["   .----.   ","  ( o  o )  ","  (______)  ","  \\/\\/\\/\\/  "]]},
  {name:"owl",rarity:"uncommon",stars:2,frames:[["   /\\  /\\   ","  ((o)(o))  ","  (  ><  )  ",'   `----´   '],["   /\\  /\\   ","  ((o)(o))  ","  (  ><  )  ","   .----.   "]]},
  {name:"duck",rarity:"common",stars:1,frames:[["    __      ","  <(o )___  ","   (  ._>   ",'    `--´    '],["    __      ","  <(o )___  ","   (  ._>   ",'    `--´~   ']]},
  {name:"goose",rarity:"common",stars:1,frames:[["     (o>    ","     ||     ","   _(__)_   ","    ^^^^    "],["    (o>     ","     ||     ","   _(__)_   ","    ^^^^    "]]},
  {name:"blob",rarity:"common",stars:1,frames:[["   .----.   ","  ( o  o )  ","  (      )  ",'   `----´   '],["  .------.  "," (  o  o  ) "," (        ) ",'  `------´  ']]},
  {name:"cat",rarity:"common",stars:1,frames:[["   /\\_/\\    ","  ( o   o)  ","  (  \u03c9  )   ",'  (")_(")   '],["   /\\_/\\    ","  ( o   o)  ","  (  \u03c9  )   ",'  (")_(")~  ']]},
  {name:"rabbit",rarity:"common",stars:1,frames:[["   (\\__/)   ","  ( o  o )  "," =(  ..  )= ",'  (")__(")  '],["   (|__/)   ","  ( o  o )  "," =(  ..  )= ",'  (")__(")  ']]},
  {name:"mushroom",rarity:"common",stars:1,frames:[[" .-o-OO-o-. ","(__________)","   |o  o|   ","   |____|   "],[" .-O-oo-O-. ","(__________)","   |o  o|   ","   |____|   "]]},
  {name:"chonk",rarity:"common",stars:1,frames:[["  /\\    /\\  "," ( o    o ) "," (   ..   ) ",'  `------´  '],["  /\\    /|  "," ( o    o ) "," (   ..   ) ",'  `------´  ']]},
];

const RARITY_STYLES: Record<string, string> = {
  legendary: "border-yellow-400/40 bg-gradient-to-b from-yellow-50 to-white",
  epic: "border-purple-400/30 bg-gradient-to-b from-purple-50 to-white",
  rare: "border-cyan/30 bg-gradient-to-b from-sky-50 to-white",
  uncommon: "border-green/20 bg-gradient-to-b from-green-50 to-white",
  common: "border-border",
};
const RARITY_TEXT: Record<string, string> = {
  legendary: "text-yellow-600", epic: "text-purple-600", rare: "text-cyan", uncommon: "text-green", common: "text-text3",
};
const STARS: Record<string, string> = {
  legendary: "\u2605\u2605\u2605\u2605\u2605", epic: "\u2605\u2605\u2605\u2605", rare: "\u2605\u2605\u2605", uncommon: "\u2605\u2605", common: "\u2605",
};
const WEIGHTS: Record<string, number> = { common: 60, uncommon: 25, rare: 10, epic: 4, legendary: 1 };

function PetCard({ pet }: { pet: typeof PETS[0] }) {
  const ref = useRef<HTMLPreElement>(null);
  useEffect(() => {
    let f = 0;
    const id = setInterval(() => {
      f = (f + 1) % pet.frames.length;
      if (ref.current) ref.current.textContent = pet.frames[f].join("\n");
    }, 700 + Math.random() * 500);
    return () => clearInterval(id);
  }, [pet.frames]);

  return (
    <div className={`border rounded-xl p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${RARITY_STYLES[pet.rarity]}`}>
      <pre ref={ref} className={`font-mono text-xs leading-snug whitespace-pre min-h-[56px] flex items-center justify-center ${RARITY_TEXT[pet.rarity]}`}>
        {pet.frames[0].join("\n")}
      </pre>
      <div className="font-mono font-semibold text-sm mt-2 capitalize">{pet.name}</div>
      <div className={`text-xs capitalize ${RARITY_TEXT[pet.rarity]}`}>{pet.rarity} &middot; {WEIGHTS[pet.rarity]}% drop</div>
      <div className={`text-xs mt-0.5 tracking-widest ${RARITY_TEXT[pet.rarity]}`}>{STARS[pet.rarity]}</div>
    </div>
  );
}

export default function PetZoo() {
  return (
    <section id="pets" className="py-20 bg-surface2">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Hidden Feature &mdash; Buddy System</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">ASCII Pet Zoo</h2>
        <p className="text-text2 max-w-xl mb-3">
          18 species, 5 rarity tiers, animated ASCII sprites, hats, and personality stats. All gated behind the <code className="text-brand font-mono text-sm bg-brand-bg px-1.5 py-0.5 rounded">BUDDY</code> feature flag.
        </p>
        <p className="text-text2 text-sm mb-8">
          <strong>Why this matters:</strong> This isn&apos;t a joke feature. Each companion has <code className="font-mono text-xs">CompanionBones</code> (species, eye, hat, shiny, stats) derived from <code className="font-mono text-xs">hash(userId)</code>,
          and a <code className="font-mono text-xs">CompanionSoul</code> (name, personality) generated by the model on first hatch.
          Species names are encoded via <code className="font-mono text-xs">String.fromCharCode()</code> because &quot;Capybara&quot; collides with an internal model codename scanner.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {PETS.map(p => <PetCard key={p.name} pet={p} />)}
        </div>

        {/* Extras */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-border rounded-xl p-5">
            <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-2">Hats</div>
            <div className="flex flex-wrap gap-1.5">
              {["\\^^^/ Crown","[___] Top Hat","-+- Propeller","( ) Halo","/^\\ Wizard","(___) Beanie",",> Tiny Duck"].map(h => (
                <span key={h} className="font-mono text-xs px-2 py-1 bg-surface2 border border-border rounded">{h}</span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-border rounded-xl p-5">
            <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-2">Eye Variants</div>
            <div className="flex gap-3 text-xl">
              {["·","✦","×","◉","@","°"].map(e => (
                <span key={e} className="w-9 h-9 flex items-center justify-center bg-surface2 border border-border rounded-lg">{e}</span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-border rounded-xl p-5">
            <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-2">Companion Stats</div>
            <div className="flex flex-wrap gap-1.5">
              {["DEBUGGING","PATIENCE","CHAOS","WISDOM","SNARK"].map(s => (
                <span key={s} className="font-mono text-xs px-2 py-1 bg-green-bg text-green border border-green/15 rounded">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Prompt */}
        <div className="mt-6 bg-code-bg text-code-text rounded-xl p-5 font-mono text-xs leading-relaxed relative overflow-hidden">
          <span className="absolute top-2 right-3 text-[10px] text-text3 uppercase tracking-widest">buddy/prompt.ts</span>
          {`A small [species] named [name] sits beside the user's input box and
occasionally comments in a speech bubble. You're not [name] — it's
a separate watcher.

When the user addresses [name] directly (by name), its bubble will answer.
Your job in that moment is to stay out of the way: respond in ONE line or
less, or just answer any part of the message meant for you.`}
        </div>
      </div>
    </section>
  );
}

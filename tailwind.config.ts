import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
theme:{extend:{colors:{bg:"#F7F7F4",surface:"#FFFFFF",ink:"#202124",mute:"#73777F",accent:"#526B91",sand:"#EAE6DE",line:"#E6E6E1"},
fontFamily:{sans:['"Manrope Variable"',"Inter","system-ui","sans-serif"]},
maxWidth:{page:"1280px"}}},plugins:[]} satisfies Config;

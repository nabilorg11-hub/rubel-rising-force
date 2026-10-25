export const WEAPONS = [
 {name:'AR-7 VANGUARD',damage:28,rate:.14,mag:30,reserve:210,reload:1.6,spread:.014,range:85,pellets:1},
 {name:'SG-12 BREACHER',damage:19,rate:.8,mag:8,reserve:64,reload:2,spread:.09,range:24,pellets:7},
 {name:'SR-9 SENTINEL',damage:110,rate:1,mag:5,reserve:40,reload:2.2,spread:.002,range:130,pellets:1},
 {name:'PULSE / HELIX',damage:60,rate:.38,mag:16,reserve:96,reload:1.9,spread:.008,range:90,pellets:1}
];
export const MISSIONS=[{name:'CITY UNDER SIEGE',subtitle:'Break the blockade. Secure the extraction.',waves:2,count:4},{name:'DARK SECTOR',subtitle:'Push into the industrial quarter. Recover supplies.',waves:3,count:5},{name:'RISING FORCE',subtitle:'Silence the hostile force. Defeat the elite.',waves:3,count:6}];
export function parseSave(raw){try{const s=JSON.parse(raw||'{}');return {best:Number.isFinite(s.best)?Math.max(0,s.best):0,unlocked:Math.max(1,Math.min(3,Math.floor(s.unlocked)||1)),settings:cleanSettings(s.settings)}}catch{return {best:0,unlocked:1,settings:{}}}}
export function circleBlocked(x,z,r,boxes){return Math.abs(x)>29-r||Math.abs(z)>29-r||boxes.some(b=>x+r>b.x-b.w/2&&x-r<b.x+b.w/2&&z+r>b.z-b.d/2&&z-r<b.z+b.d/2)}

function cleanSettings(s){const out={};if(!s||typeof s!=='object')return out;for(const [k,min,max] of [['scale',.5,1],['sensitivity',.3,2],['master',0,1],['music',0,1],['effects',0,1]])if(Number.isFinite(s[k]))out[k]=Math.max(min,Math.min(max,s[k]));if(['LOW','MEDIUM','HIGH'].includes(s.quality))out.quality=s.quality;for(const k of ['shake','touch'])if(typeof s[k]==='boolean')out[k]=s[k];return out}

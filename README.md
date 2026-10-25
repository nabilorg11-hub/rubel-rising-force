# RUBEL: RISING FORCE

An original playable **first-release prototype**, built with TypeScript, Three.js, Vite and Web Audio. This is a stylized procedural browser game, not an AAA production or native Windows/Android application.

## Windows setup (CMD)

Install Node.js 22.12 or newer from the official Node.js distribution. Extract the project ZIP, open CMD in the extracted folder, then run:

```cmd
npm install
npm run dev
```

Open the URL printed by Vite. The development preview during this build was `http://terminal.local:4173/`; that is an internal testing address, not a URL for your computer. Vite normally prints a localhost address when you run it locally.

```cmd
npm test
npm run build
```

The production files are in `dist`. Serve the folder over HTTP/HTTPS; double-clicking index.html using file:// is unsupported. A ready-built copy of dist is included.

## Play

Deploy from the title screen. Clear all waves, then travel to the cyan extraction pylon at the north end of the street. Green crates recover 40 health; orange crates add two magazines to each reserve. Complete each operation to unlock the next. Best score, mission unlocks and settings save in browser-local storage. Storage failure does not block play.

- WASD: move. Mouse: look. Left click: fire. Right click: aim.
- Shift: sprint. Space: dash (brief damage avoidance, 1.8 second cooldown).
- R: reload. 1–4: switch weapon. Switching cancels reload without consuming reserves.
- P or Escape: pause. Pointer-lock loss, window blur and hidden tabs also pause.
- If mouse capture is unavailable, click and drag to look.
- Mobile: left joystick, right look region, FIRE, AIM, R, DASH and weapon switch.
- Touch controls can also be enabled manually in Settings for desktop testing.

## Implemented

Three sequential operations on a shared ruined-city arena, with 9 / 18 / 21 enemies respectively. Assault, ranged and heavy enemies use perception, line-of-sight checks, cooldowns, chase/attack states and simple obstacle steering. The final operation includes a heavy enemy in its final wave.

Four distinct weapons: automatic rifle, seven-pellet shotgun, long-range precision rifle and traveling energy bolts with a small blast radius. Raycast hits are obstructed by cover. Upper-body critical hits, ammo reserves, timed reloads, recoil, tracers, sparks and kill rewards are included. Energy is intentionally sci-fi; no realistic weapon simulation is claimed.

Procedural armored soldiers, leg animation, gun motion, fog, PBR materials, directional shadows, emissive highlights and city silhouettes in WebGL mode. LOW/MEDIUM/HIGH adjust pixel ratio, shadows and effect counts. Resolution, shake, sensitivity, touch controls, master/music/effects audio and session mute are adjustable. Synthesized audio consists of short layered effects and an ambient harmonic drone; no recorded cinematic soundtrack is claimed.

If WebGL initialization fails, a Canvas compatibility renderer draws the same Three.js scene and preserves gameplay. It has simpler cuboid rendering, no PBR or shadows, approximate depth sorting and reduced visual quality. The mode is identified in the header.

## Verification actually performed

- `npm run build`: TypeScript checks and Vite production bundling passed.
- `npm test`: four Node tests passed, covering corrupt saves, collision boundaries, weapon configurations/ammo budget and campaign wave progression.
- Browser QA in Canvas compatibility mode: title/menu load, mission start, firing consumes ammunition, reload feedback, weapon switching through keyboard and touch buttons, visible enemy pursuit and damage, defeat screen, restart restoring health/ammo/score, pause screen, settings and touch-control display.
- Settings controls and mute interaction were exercised. Audio listening quality was not independently assessed.

## Verification still needed / limitations

- The cloud test browser has WebGL disabled. The WebGL path type-checks/builds, but its visual output, shadows and hardware performance were not browser-verified here.
- No actual Android/iPhone or small-screen browser emulation was available. Responsive CSS and multi-pointer controls are implemented but need real-device testing.
- A full mission win, all three campaign completions, enemy kill balancing, every camera angle and all reload timing edge cases have not been manually verified end-to-end. No critical gameplay exception was observed in the exercised path; this is not a claim of exhaustive QA.
- All operations share one arena. AI steering is local, not a navigation mesh; occasional blockage may occur. No squad tactics, authored cinematics, gamepad support, ragdolls, multiplayer, cloud saves, configurable joystick positions, recorded voices, native packaging or post-processing pipeline.
- Software compatibility rendering is slower and less accurate than WebGL. Performance is hardware-dependent; no 30–60 FPS benchmark is claimed.
- Optional Google Fonts have local system fallbacks. Core models, gameplay and audio require no external asset downloads, accounts or API keys. Initial npm dependency installation needs registry access.

## Publish

Run `npm run build`, then upload the contents of `dist` to any static web host. Use HTTPS for reliable pointer lock and browser audio behavior. No backend, environment secrets or database is needed. To replace an existing deployment, upload a fresh build. Browser saves are specific to the site's origin.

The project also includes a private hosted version delivered with the game. Its deployment and source version are managed separately from this downloadable archive.

## Source map

- `src/main.ts`: world creation, input, enemy/combat loop, camera, menus, HUD and mission flow.
- `src/rules.mjs`: weapon/mission definitions, save sanitization and collision rules.
- `src/audio.ts`: bounded synthesized effect nodes and ambient audio buses.
- `src/software.ts`: Canvas compatibility renderer.
- `src/style.css`: responsive menus, HUD and touch layout.
- `tests/rules.test.mjs`: rule tests.

## Credits and licensing

Original project code and procedural designs are provided under the included MIT license. Three.js and Vite use MIT; TypeScript uses Apache-2.0. Fonts: Inter and Barlow Condensed, SIL Open Font License, optionally served by Google Fonts. No commercial game assets, proprietary sound samples or third-party character models are included.

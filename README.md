# <p align="center"><img src="dist/sticks.webp" alt="Sticks Game Icon" width="120" /></p>

# Farcade Game Template - Phaser.js + TypeScript

## 🎮 Play the Live Game

Play the latest version instantly on Farcade:
[https://app.farcade.ai?gameId=qLQRPw4PFA3Y](https://app.farcade.ai?gameId=qLQRPw4PFA3Y)

### 📊 Game Stats (as one of the top games on Farcade)
- **Plays:** 68,537 total plays
- **Users:** 6,024 unique users
- **Time:** 320 hours played
- **Rating:** 4.2 (85 ratings)

---

## 🚀 Remix This Game!

- **Fork this repo** to start your own version.
- **Remix the code**: Change art, rules, or add your own features.
- **Upload to Farcade**: Build and copy your `dist/index.html` to [Farcade](https://app.farcade.ai) to publish your remix.

---

## Overview

This is a template for creating a game for the Farcade platform using TypeScript. It provides a structured foundation with Phaser.js game framework integration and the Farcade SDK for building mobile-first HTML5 games.

## Features

- 📱 Mobile-first design with 5:8 aspect ratio
- 🎮 Phaser.js game framework integration
- 🔧 TypeScript support for type-safe development
- 🔄 Hot-reload development server (port 3000) with QR code for mobile testing
- 📦 Optimized build process for Farcade platform
- 🏗️ Organized project structure for game development
- 🎨 Pre-configured game scene and utilities

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js) or yarn

## ⚠️ Important Notes

- This template loads Phaser.js from a CDN within `index.html`. Consequently, Phaser is globally available and does not need to be installed as a project dependency or imported into source files. AI code generation tools might attempt to add Phaser imports; **These attempts will break your game and should be removed.**

## Setup

1. Clone this repository
2. Do a find and replace for `GAME_NAME` with your game's name
3. Update the package.json with your game details

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

This will:

- Start a development server at `http://localhost:3000`
- Generate a QR code for mobile testing on the same network
- Enable hot-reload for quick development iterations

## Game Development Guide

### Adding Game Objects

1. Create new game objects in the `src/objects/` directory
2. Objects can be players, enemies, items, or any interactive game elements
3. Extend Phaser game objects as needed

### Creating Scenes

1. Use `src/scenes/GameScene.ts` as a template
2. Add new scenes in the `src/scenes/` directory
3. Configure scene transitions in your game flow

### Implementing Game Systems

1. Add game systems in `src/systems/` (e.g., collision detection, scoring)
2. Keep systems modular and focused on specific functionality
3. Import and initialize systems in relevant scenes

### Configuration

1. Update `src/config/GameSettings.ts` for game-specific settings
2. Modify `vite.config.ts` for build customization if needed

## Production

Build the game for production:

```bash
npm run build
```

This generates an optimized `dist/index.html` file ready for the Farcade platform.

## Deploying

1. Build your game using `npm run build`
2. Find the generated `index.html` file in the `dist` directory
3. Copy and paste the contents into the Farcade platform
4. Test thoroughly on the platform before publishing

## Project Structure

```
.
├── dist/                # Production build output (generated after build)
│   └── index.html
├── index.html           # Main HTML file, loads Phaser and Farcade SDK
├── package.json         # Project metadata and scripts
├── scripts/             # Build script
│   └── build.js
├── src/                 # Main source code
│   ├── main.ts          # Entry point for the game
│   ├── types.ts         # Shared TypeScript types
│   ├── config/          # Game configuration files
│   │   └── GameSettings.ts
│   ├── objects/         # Game object definitions such as Player, Enemy, etc. (empty by default)
│   ├── scenes/          # Game scenes
│   │   └── GameScene.ts
│   ├── systems/         # Game systems such as Collisions, Environment, etc. (empty by default)
│   └── utils/           # Utility functions (Shared utilities used throughout multiple files)
│       └── FarcadeUtils.ts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build tool configuration
└── .gitignore          # Git ignore rules
```

- **src/** is where you write your game code, organized by purpose (scenes, objects, systems, config, utils).
- **dist/** is generated after running `npm run build` and contains the final optimized `index.html` to deploy to Farcade.
- **scripts/** contains custom build and development scripts.
- **index.html** (root) is the HTML template used by Vite during development, loads Phaser and Farcade SDK.
- **vite.config.ts** and **tsconfig.json** configure the build and TypeScript environment.

## Contributing

Feel free to submit issues and enhancement requests. Follow these steps to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - See LICENSE file for details

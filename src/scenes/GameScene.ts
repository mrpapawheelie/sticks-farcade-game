import GameSettings from "../config/GameSettings"

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" })
  }

  preload(): void {}

  create(): void {
    // Debug specific initializers
    if (GameSettings.debug) {
    }
  }

  update(time: number, deltaTime: number): void {}

  // --- Scene Shutdown Logic ---
  shutdown() {}
}

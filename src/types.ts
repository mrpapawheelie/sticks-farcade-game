/**
 * Shared type definitions and interfaces
 */
declare global {
  interface Window {
    FarcadeSDK: {
      singlePlayer: {
        actions: {
          ready: () => void
          gameOver: (data: { score: number }) => void
          hapticFeedback: () => void
        }
      }
      on: (event: string, callback: (data: any) => void) => void
    }
  }
}

// export Phaser types
export type Phaser = typeof import("phaser")

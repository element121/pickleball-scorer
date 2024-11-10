// generated by co-pilot PickleballGame.ts
export class PickleballGame {
  player1Score: number;
  player2Score: number;
  currentServer: string;

  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentServer = "Player 1"; // Can be either "Player 1" or "Player 2"
  }

  // Method to score a point for the current server
  scorePoint() {
    if (this.currentServer === "Player 1") {
      this.player1Score++;
    } else {
      this.player2Score++;
    }
    this.checkWin();
  }

  // Method to switch server
  switchServer() {
    this.currentServer =
      this.currentServer === "Player 1" ? "Player 2" : "Player 1";
  }

  // Method to check if there's a winner
  private checkWin() {
    if (this.player1Score >= 11 && this.player1Score - this.player2Score >= 2) {
      console.log("Player 1 wins!");
      this.resetGame();
    } else if (
      this.player2Score >= 11 &&
      this.player2Score - this.player1Score >= 2
    ) {
      console.log("Player 2 wins!");
      this.resetGame();
    }
  }

  // Method to reset the game
  private resetGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentServer = "Player 1";
  }

  // Method to get the current score
  getScore() {
    return `Player 1: ${this.player1Score}, Player 2: ${this.player2Score}`;
  }
}

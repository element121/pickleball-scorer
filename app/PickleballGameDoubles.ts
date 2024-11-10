// PickleballGame.ts co-pilot doubles
type Player = {
  name: string;
  score: number;
};

export class PickleballGame {
  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
  currentServer: string;

  constructor() {
    this.player1 = { name: "Player 1", score: 0 };
    this.player2 = { name: "Player 2", score: 0 };
    this.player3 = { name: "Player 3", score: 0 };
    this.player4 = { name: "Player 4", score: 0 };
    this.currentServer = this.player1.name; // Start with Player 1
  }

  // Method to score a point for the current server
  scorePoint() {
    switch (this.currentServer) {
      case "Player 1":
        this.player1.score++;
        break;
      case "Player 2":
        this.player2.score++;
        break;
      case "Player 3":
        this.player3.score++;
        break;
      case "Player 4":
        this.player4.score++;
        break;
    }
    this.checkWin();
  }

  // Method to switch server
  switchServer() {
    const serverOrder = ["Player 1", "Player 2", "Player 3", "Player 4"];
    const currentIndex = serverOrder.indexOf(this.currentServer);
    this.currentServer = serverOrder[(currentIndex + 1) % serverOrder.length];
  }

  // Method to check if there's a winner
  private checkWin() {
    const team1Score = this.player1.score + this.player3.score;
    const team2Score = this.player2.score + this.player4.score;

    if (team1Score >= 11 && team1Score - team2Score >= 2) {
      console.log("Team 1 (Player 1 and Player 3) wins!");
      this.resetGame();
    } else if (team2Score >= 11 && team2Score - team1Score >= 2) {
      console.log("Team 2 (Player 2 and Player 4) wins!");
      this.resetGame();
    }
  }

  // Method to reset the game
  private resetGame() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.player3.score = 0;
    this.player4.score = 0;
    this.currentServer = this.player1.name;
  }

  // Method to get the current score
  getScore() {
    return `Player 1: ${this.player1.score}, Player 2: ${this.player2.score}, Player 3: ${this.player3.score}, Player 4: ${this.player4.score}`;
  }
}

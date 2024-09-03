import io from "socket.io-client";

const web = io.connect("https://www.ethercrash.io")

web.on("connect", () => {
  console.log("Connected to server");
  web.emit("join", ["english"], () => { })
})

web.on("connect_error", (error: any) => {
  console.log("Connection error", error);
})

web.on("msg", (msg: string) => {
  console.log("Received message: ", msg);
})

const game = io.connect("https://gs.ethercrash.io")

game.on("connect", () => {
  console.log("Connected to game server");
  game.emit("join", { "api_version": 1 }, () => { })
})

game.on("game_starting", (msg: string) => console.log("game_starting", msg))
game.on("game_started", (msg: string) => console.log("game_started", msg))
game.on("game_crash", (msg: string) => console.log("game_crash", msg))
game.on("game_tick", (msg: string) => console.log("game_tick", msg))
game.on("cashed_out", (msg: string) => console.log("cashed_out", msg))
game.on("player_bet", (msg: string) => console.log("player_bet", msg))

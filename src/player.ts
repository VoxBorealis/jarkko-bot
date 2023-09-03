import { YouTubeExtractor } from "@discord-player/extractor";
import { Player } from "discord-player";
import { Client } from "discord.js";

export const initPlayer = async (client: Client) => {
 const player = new Player(client)

 player.extractors.register(YouTubeExtractor, undefined)

 player.events.on("playerStart", (queue, track) => {
  queue.metadata.channel.send(`Nyt blästätään **${track.title}**!`)
 })
}
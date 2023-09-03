import { Client } from "discord.js";
import { config } from "./config"
import { deployGuildCommands, deployGlobalCommands } from "./deploy-commands";
import { commands } from "./commands";

const client = new Client({
 intents: ["Guilds", "GuildMessages", "DirectMessages"]
})

client.once("ready", async () => {
 console.log("FDRL_bauer online! 😎🌆")
 await deployGlobalCommands()
})

client.on("guildCreate", async (guild) => {
 await deployGuildCommands({ guildId: guild.id})
})

client.on("interactionCreate", async (interaction) => {
 if (!interaction.isCommand()) {
  return
 }
 const { commandName } = interaction
 if (commands[commandName as keyof typeof commands]) {
  commands[commandName as keyof typeof commands].execute(interaction);
}
})

client.login(config.DISCORD_TOKEN);
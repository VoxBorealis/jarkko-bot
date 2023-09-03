import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
 .setName("play")
 .setDescription("Searches for the song on Youtube and plays it!")

export const execute = async (interaction: CommandInteraction) => {
 return interaction.reply(`Couldn't find that song... Try again later.`)
}

import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { useQueue } from "discord-player"

export const data = new SlashCommandBuilder()
 .setName("skip")
 .setDescription("Skippaa nykyisen biisin.")

export const execute = async (interaction: CommandInteraction) => {
 if (!interaction.guild) {
  return interaction.reply("Virhe keissi bro")
 }
 const queue = useQueue(interaction.guild.id)
 queue?.node.skip()
}

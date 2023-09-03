import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
                    .setName('server')
                    .setDescription("Kertoo tietoja servusta.")

export const execute = async (interaction: CommandInteraction) => {
 console.log(interaction)
 return interaction.reply(`Tää servu on ${interaction.guild?.name} ja täällä on ${interaction.guild?.memberCount} jäsentä.`)
}
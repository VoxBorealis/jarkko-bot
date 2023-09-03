import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { useMainPlayer } from "discord-player"

export const data = new SlashCommandBuilder()
 .setName("play")
 .setDescription("Bro mää etin sen Youtubest")
 .addStringOption(option => 
   option.setName('query')
    .setDescription("Biisin nimi"))

export const execute = async (interaction: CommandInteraction) => {
 const player = useMainPlayer()
 if (!player) return interaction.reply("Virhe keissi...")

 const channel = interaction.member?.voice.channel
 if (!channel) {
  return interaction.reply("Inshallah... Et voi soittaa musiikkia, jos et ole voicessa.")
 }
 const query = interaction.options.getString("query", true)

 await interaction.deferReply()

 try {
  const { track } = await player.play(channel, query, {
   nodeOptions: {
    metadata: interaction
   }
  })

  return interaction.followUp(`Ay yo, nyt paukkuu jonoon **${track.title}**`)
 } catch (error) {
  return interaction.followUp(`Virhe keissi: ${error}`)
 }
}

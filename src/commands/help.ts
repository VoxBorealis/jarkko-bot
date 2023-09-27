import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
 .setName("apua")
 .setDescription("Esittelee itsensä.")

export const execute = async (interaction: CommandInteraction) => {
 const reply = `
😎 Jarkko DJ tässä terve teille kaikille, yo! 😎
Laittakaa musapyyntöi hei nii etin ne Youtubesta ja laitan soimaa! 🔥
Täl hetkel toimii vaan /play ja /skip. 🤦
(En oo tosiaan aina paikalla sit vielä, ei oo vakkarisopparia bro) 🙅
(oon vähä cringe poju, hihihi :3 mjäyyyy) 😻
`;
 return interaction.reply(reply)
}

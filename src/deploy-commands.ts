import { REST, Routes } from "discord.js"
import { config } from "./config"
import { commands } from "./commands"

const commandsData = Object.values(commands).map((command) => command.data)

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN)

type DeployCommandsProps = {
 guildId: string
}

export const deployGuildCommands = async ({ guildId }: DeployCommandsProps) => {
 try {
  console.log("Started refreshing application (/) commands.")

  await rest.put(
   Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
   {
    body: commandsData
   }
  )

  console.log("Successfully reloaded application (/) commands.")
 } catch (error) {
  console.error(error)
 }
}

export const deployGlobalCommands = async () => {
 try {
  console.log("Started refreshing application global (/) commands.")

  await rest.put(
   Routes.applicationCommands(config.DISCORD_CLIENT_ID),
   {
    body: commandsData
   }
  )

  console.log("Successfully reloaded application global (/) commands.")
 } catch (error) {
  console.error(error)
 }
}
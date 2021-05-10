#### <span class="span-underline">Introduction</span>

The LW-Network was a series of game servers started up by my friends: Brennen Kosmeh, Brock Radford, Justin Sigai; and I.

We hosted these servers from June 2019 to December 2019, and provided services to a community of hundreds of players during our peak. Our servers had to be running 24 hours a day, 7 days a week, as at any given time we had
at least 100 players on the servers at any given time. At the end of our run, we had generated USD ~$21,000 dollars in revenue through the sale of in-game cosmetics and items.

This article won't be going into much detail about the actual business. Instead, we'll be focusing on the software developed for it: LW-Core, LW-Hub, and Punish-GUI. These plugins were written by myself and others in order to improve our service and optimize server efficiency. In the cases of Punish-GUI and parts of LW-Core, they were designed to give a front-end interface to our back-end that our volunteer staff and administrators could utilize to make sure their daily tasks were completed.

If you are interested in learning more about the LW-Network besides the software aspect of it, you can either [contact me](https://www.darrenbentler.com/contact), or watch this short video I made with Brock Radford where we discuss our time running the network together (it's more of a podcast than a video).

#### <span class="span-underline">Definitions</span>

Now I'm going to be using a lot of terms you, the reader, may not be all too familiar with. For the sake of your clarity, I'll define the terms that'll be used in this article, along with links to additional reading (which I highly recommend checking out if you are **NOT** familar with something at all).

Technical terms include:

- **[Minecraft](https://en.wikipedia.org/wiki/Minecraft)**: A Java, voxel-based sandbox game developed by [Mojang Studios](https://en.wikipedia.org/wiki/Mojang_Studios).
- **Block**: A cube voxel - the foundation of Minecraft. One block is measured as having a width of 1 meter, a length of 1 meter, and height of 1 meter.
- **Chunk**: A unit of measurement made up of a 16x16x256 array of blocks.
- **The World**: A minecraft world with X, Y, and Z coordinates. Usually 30 million blocks across, we had a world border of 10,000 blocks.
- **[SpigotMC](https://www.spigotmc.org/wiki/about-spigot/)**: A modified server.jar based on [CraftBukkit](https://dev.bukkit.org/) with performance improvements and additional features. We ran the build compatible with Minecraft 1.8.9.
- **[SpigotAPI](https://hub.spigotmc.org/javadocs/bukkit/)**: Spigot's API, built off of the CraftBukkit API (Think C++ and C). It provides an interface for the server to interact with players and the in-game world, and vice versa. We used v1.8.9 of the API.
- **Plugin**: A Java program built off of either the Spigot or CraftBukkit API that provides a Minecraft server with custom command features that can be used by either the player or server directly.
- **[BungeeCord](https://www.spigotmc.org/wiki/about-bungeecord/)**: Proxy bridge between a player's client (their local instance of Minecraft) and a server. Allows the seamless connection to multiple servers at once.
- **[OVH Cloud](https://www.ovh.com/world/)**: A French cloud computing company that VPS, dedicates servers, and other web services.
- **Factions**: A gametype where players form "teams" and battle against one another in order to become the dominant power. Teams or players can raid other teams or players in order to steal the latters belongings.
- **[SavageFactions](https://github.com/lonewolvespvp/SavageFactions)**: A fork of a fork (wow!) of the original Minecraft [Factions](https://www.spigotmc.org/resources/factions.1900/) plugin. What is linked is the LW team's fork of SavageFactions.
- **[Putty](https://www.putty.org/)**: An SSH and telnet client developed by Simon Tatham for Windows. We used this to interact with our OVH servers.
- **[BuyCraft/Tebex](https://www.spigotmc.org/resources/buycraft.336/)**: Created as a solution for server monetization, now under the name of [Tebex](https://www.tebex.io/). Will be referred by the original name of "BuyCraft".
- **[LuckPerms](https://github.com/lucko/LuckPerms)**: A Spigot plugin that allows what features a player can use by assigning them to groups.
- **[Vault](https://github.com/milkbowl/Vault)**: A plugin that provides a permissions, chat, and economy API for plugins to hook into, removing the need of dependencies.

Now for the non-technical terms:

- **We/Our/Admin Team/Us/The Team**: Used in reference to myself and the LW-Network administration team.
- **LW**: Slang for "LW-Network". LW stands for... *LoneWolves*. *God, what an embarrassing name*.
- **Spawn**: A term used to refer to point (0, ~, 0) in a world, where ~ is the y-value.
- **Alt**: A slang term used to reference alternative player accounts. I'll be refering to them with the full term, but the code may refer to this as "alt".
- **King of the Hill / KoTH**: A player vs player event where a team of players try to hold a certain (X, Y, Z) coordinate in the world uncontested.
- **Ban**: A permanent suspension from the LW-Network.
- **TempBan**: A temporary suspension from the LW-Network.
- **Mute**: A suspension of in-game chat privileges.
- **Staff**: Used in reference to our volunteer moderator team, and the admins.
- **Moderator**: A low-level staff member who does not have access to the backend of the server, but access to permissions such as ban and teleport.
- **Teleport**: A command that moves a player directly to the position of another player, or an (X, Y, Z) point in the world.
- **/help**: A command players can use that displays what features their current group assigned can access.
- **Warps**: Similar to spawn, a warp allows a player to teleport to any (X, Y, Z) position in the world that has been designated as a warp.
- **Anything prefaced by "/" ie: "/spawn"**: A way for players to interact with the server and call functions from plugins without leaving the game window.

With all of that out of the way, we are ready to begin diving deep into the software now.

#### <span class="span-underline">Where the heck am I?</span>

<div class="container center-text spacer-25px">
    <a href="https://github.com/dbentler/LW-Core/blob/master/src/me/ezjamo/commands/DistanceCommand.java">
        <button type="button" id="back" onclick="" class="btn btn-dark btn-lg">LW-Core: Distance Command</button>
    </a>
</div>

LW-Core started off as a simple quality of life plugin developed by myself known as "Distance". Before we went ahead and launched our service to the public, we started with a beta phase to stress test our current infrastructure. One of the things we missed in the beta phase was setting our spawnpoint to the world's (0, Y, 0) position, as this point in that world was located in an ocean.

In the factions gamemodes, your goal to to journey out as far as you can from the spawn point until you feel like you have reached a safe enough position to build your own base with your team. How can players feel confident that they journeyed out far enough if the spawn point is something like (-4873, Y, 2372)?

Luckily for us, players usually only travel along the X and Z axis. The Y axis is only used to get the player's elevation in relation to a point in the world. If we disregard this Y-axis, we can easily plot where a player is within the world.

<img src="https://saylordotorg.github.io/text_elementary-algebra/section_06/a261b102ea95af58439ffec935b5f686.jpg#center" alt="Graph" class="center">
*An example of what I mean.*

Utilizing the SpigotAPI, we can grab the player's inidivdual's X and Z coordinates. Then, using the following mathematical formula:

<img src="https://www.gstatic.com/education/formulas2/355397047/en/distance_formula.svg" alt="Graph" class="center">
*It's 8th grade Algebra all over again!*

And it's pretty easy to do this through code. Don't worry, I'll walk you through that everything does in just a second. But continuing forward, you should reference the [SpigotAPI](https://hub.spigotmc.org/javadocs/bukkit/) to get a better sense of what's exactly happening in the code:

```java
public class DistanceCommand extends Utils implements CommandExecutor {


	@Override
	public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
		if (!(sender instanceof Player)) {
			message(sender, "&cThis command can only be used by players!");
			return true;
		}
		Player player = (Player) sender;
		SpawnManager spawnCoords = SpawnManager.getManager();
		if (spawnCoords.getConfig().getConfigurationSection("spawn") == null) {
			message(player, Messages.prefix + "&fThere is no spawn set.");
			return true;
		}
		Location pLocation = player.getLocation();
		int playerX = pLocation.getBlockX();
		int playerZ = pLocation.getBlockZ();
		double spawnX = spawnCoords.getConfig().getDouble("spawn.x");
		double spawnZ = spawnCoords.getConfig().getDouble("spawn.z");
		int dist = (int) Math.sqrt((Math.pow(playerX - spawnX, 2)) + (Math.pow(playerZ - spawnZ, 2)));

		message(player, Messages.prefix + Messages.distanceCommand.replace("%distance%", Integer.toString(dist)));
		return true;
	}
}
```

Alright, let's break it down:

```java
if (!(sender instanceof Player)) {
            message(sender, "&cThis command can only be used by players!");
            return true;
        }
```

This is a simple check to prevent the server terminal from calling /distance, as a server terminal can not be a player.

```java
Player player = (Player) sender;
        SpawnManager spawnCoords = SpawnManager.getManager();
        if (spawnCoords.getConfig().getConfigurationSection("spawn") == null) {
            message(player, Messages.prefix + "&fThere is no spawn set.");
            return true;
        }
```

This code creates a local copy of of the Player instance who called /distance. It also checks our server configuration files to get a reference to whatever spawn point we had set with /setspawn. If no spawn is set, the server will inform the player that no spawn exists yet. Both `Player` and `SpawnManager` are from the [SpigotAPI](https://hub.spigotmc.org/javadocs/bukkit/), along with `Messages` and `Messages.prefix`. The functions `getConfig()`, and `getConfigurationSection()` are from a utilites class we built in later.

```java
Location pLocation = player.getLocation();
		int playerX = pLocation.getBlockX();
		int playerZ = pLocation.getBlockZ();
		double spawnX = spawnCoords.getConfig().getDouble("spawn.x");
		double spawnZ = spawnCoords.getConfig().getDouble("spawn.z");
		int dist = (int) Math.sqrt((Math.pow(playerX - spawnX, 2)) + (Math.pow(playerZ - spawnZ, 2)));

		message(player, Messages.prefix + Messages.distanceCommand.replace("%distance%", Integer.toString(dist)));
		return true;
```

This is where we implement the distance formula. Almost all calls are to the SpigotAPI, except for `spawnCoords.getConfig()`, which is from our utilities class.

Finally, to make sure our command is actually usable. We can add this to `Lonewolves.java`:

```java
getCommand("distance").setExecutor(new DistanceCommand())
```


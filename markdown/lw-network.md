#### <span class="span-underline">Introduction</span>

The LW-Network was a series of game servers started up by my friends: Brennen Kosmeh, Brock Radford, Justin Sigai; and I.

We hosted these servers from June 2019 to December 2019, and provided services to a community of hundreds of players during our peak. Our servers had to be running 24 hours a day, 7 days a week, as at any given time we had
at least 100 players on the servers at any given time. At the end of our run, we had generated USD ~$21,000 dollars in revenue through the sale of in-game cosmetics and items.

This article won't be going into much detail about the actual business. Instead, we'll be focusing on the software developed for it: LW-Core, LW-Hub, and Punish-GUI. These plugins were written by myself and others in order to improve our service and optimize server efficiency. In the cases of Punish-GUI and parts of LW-Core, they were designed to give a front-end interface to our back-end that our volunteer staff and administrators could utilize to make sure their daily tasks were completed.

If you are interested in learning more about the LW-Network besides the software aspect of it, you can either [contact me](https://www.darrenbentler.com/contact), or watch this short video I made with Brock Radford where we discuss our time running the network together (it's more of a podcast than a video).

#### <span class="span-underline">Definitions</span>

<div class="container center-text spacer-25px">
    <a href="https://github.com/dbentler/LW-Core">
        <button type="button" id="back" onclick="" class="btn btn-dark btn-lg">LW-Core</button>
    </a>
</div>

Now I'm going to be using a lot of terms you, the reader, may not be all too familiar with. For the sake of your clarity, I'll define the terms that'll be used in this article, along with links to additional reading (which I highly recommend if you are **NOT** familar with something at all).

Technical terms include:

- **[Minecraft](https://en.wikipedia.org/wiki/Minecraft)**: A Java, voxel-based sandbox game developed by [Mojang Studios](https://en.wikipedia.org/wiki/Mojang_Studios).
- **[SpigotMC](https://www.spigotmc.org/wiki/about-spigot/)**: A modified server.jar based on [CraftBukkit](https://dev.bukkit.org/) with performance improvements and additional features. We ran the build compatible with Minecraft 1.8.9.
- **[SpigotAPI](https://hub.spigotmc.org/javadocs/bukkit/)**: Spigot's API, built off of the CraftBukkit API (Think C++ and C). It provides an interface for the server to interact with players and the in-game world, and vice versa. We used v1.8.9 of the API.
- **Plugin**: A Java program built off of either the Spigot or CraftBukkit API that provides a Minecraft server with custom command features that can be used by either the player or server directly.
- **[BungeeCord](https://www.spigotmc.org/wiki/about-bungeecord/)**: Proxy bridge between a player's client (their local instance of Minecraft) and a server. Allows the seamless connection to multiple servers at once.
- **[OVH Cloud](https://www.ovh.com/world/)**: A French cloud computing company that VPS, dedicates servers, and other web services.
- **Factions**: A gametype where players form "teams" and battle against one another in order to become the dominant power. Teams or players can raid other teams or players in order to steal the latters belongings.
- **[SavageFactions](https://github.com/lonewolvespvp/SavageFactions)**: A fork of a fork (wow!) of the original Minecraft [Factions](https://www.spigotmc.org/resources/factions.1900/) plugin. What is linked is the LW team's fork of SavageFactions.
- **[Putty](https://www.putty.org/)**: An SSH and telnet client developed by Simon Tatham for Windows. We used this to interact with our OVH servers.
- **[BuyCraft/Tebex](https://www.spigotmc.org/resources/buycraft.336/)**: Created as a solution for server monetization, now under the name of [Tebex](https://www.tebex.io/). Will be referred by the original name of "BuyCraft".
- **[LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/)**: A Spigot plugin that allows what features a player can use by assigning them to groups.
- **[Vault](https://github.com/milkbowl/Vault)**: A plugin that provides a permissions, chat, and economy API for plugins to hook into, removing the need of dependencies.



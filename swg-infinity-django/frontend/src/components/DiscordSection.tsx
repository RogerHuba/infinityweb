"use client";

export function DiscordSection() {
  return (
    <section className="bg-[#0d0e30] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Join our Discord
        </h2>
        <p className="text-gray-300 mb-6">
          3,000 members and 800 active players. Join our welcoming community on Discord.
        </p>
        <a
          className="play-button"
          href="https://discord.gg/jyakeRJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join now
        </a>
      </div>
    </section>
  );
}

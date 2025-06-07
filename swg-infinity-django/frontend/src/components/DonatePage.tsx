"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { CreditCard, DollarSign, Heart, Gift, Star } from "lucide-react";
import { useState } from "react";

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationOptions = [
    { amount: 5, rewards: ["Supporter Badge on Discord", "1-month Premium Chat Access"] },
    { amount: 10, rewards: ["Supporter Badge on Discord", "3-month Premium Chat Access", "Exclusive Forum Title"] },
    { amount: 25, rewards: ["Supporter Badge on Discord", "6-month Premium Chat Access", "Exclusive Forum Title", "Special In-game Item"] },
    { amount: 50, rewards: ["Supporter Badge on Discord", "12-month Premium Chat Access", "Exclusive Forum Title", "Special In-game Item", "Custom Housing Decoration"] },
    { amount: 100, rewards: ["Supporter Badge on Discord", "Lifetime Premium Chat Access", "Exclusive Forum Title", "Special In-game Item", "Custom Housing Decoration", "Donor-only Discord Channel Access"] },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <div className="bg-[url('https://ext.same-assets.com/906812322/2240799338.jpeg')] bg-cover bg-center py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Support SWG Infinity</h1>
              <p className="text-gray-300">Your donations help keep our servers running and support our development team</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Why Donate?</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    SWG Infinity is a passion project run by dedicated volunteers who love Star Wars Galaxies as much as you do. While we provide the game for free, maintaining and improving it requires resources.
                  </p>
                  <p>
                    Your donations directly support:
                  </p>
                  <ul className="swg-bullet-list">
                    <li>Server hosting and maintenance costs</li>
                    <li>Development of new content and features</li>
                    <li>Community events and giveaways</li>
                    <li>Website and launcher upkeep</li>
                    <li>Security measures to protect the game</li>
                  </ul>
                  <p>
                    We believe in transparency, so at the end of each month, we publish a breakdown of how donations were used on our Discord server.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Community Support</h3>
                  <p className="text-gray-300">
                    Your donations help us maintain a stable, lag-free environment for all players to enjoy.
                  </p>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">New Content</h3>
                  <p className="text-gray-300">
                    Donations fund development of new quests, items, and gameplay features for everyone.
                  </p>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Donor Rewards</h3>
                  <p className="text-gray-300">
                    Donors receive special perks as our way of saying thanks for your support.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Donation Options</h2>
                <p className="text-gray-300 mb-8">
                  Choose an amount below or enter a custom amount. All donations are greatly appreciated!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  {donationOptions.map((option) => (
                    <button
                      key={option.amount}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedAmount === option.amount
                          ? 'border-yellow-500 bg-[rgba(30,30,60,0.6)]'
                          : 'border-gray-700 bg-[rgba(20,20,40,0.6)] hover:border-gray-500'
                      }`}
                      onClick={() => {
                        setSelectedAmount(option.amount);
                        setCustomAmount("");
                      }}
                    >
                      <div className="text-xl font-bold text-white mb-2">${option.amount}</div>
                      <div className="text-gray-400 text-sm">{option.rewards.length} Rewards</div>
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-white font-medium mb-2">Custom Amount</label>
                  <div className="flex items-center">
                    <div className="bg-[rgba(20,20,40,0.6)] p-3 rounded-l-lg border-2 border-r-0 border-gray-700">
                      <DollarSign className="h-6 w-6 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      className="flex-1 bg-[rgba(20,20,40,0.6)] p-3 rounded-r-lg border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                    />
                  </div>
                </div>

                {(selectedAmount || customAmount) && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {selectedAmount ? `$${selectedAmount} Tier Rewards:` : 'Custom Donation Rewards:'}
                    </h3>

                    {selectedAmount ? (
                      <ul className="swg-bullet-list text-gray-300 mb-6">
                        {donationOptions.find(option => option.amount === selectedAmount)?.rewards.map((reward) => (
                          <li key={reward}>{reward}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 mb-6">
                        Rewards will be based on the nearest tier to your donation amount. For example, a $15 donation will receive the $10 tier rewards.
                      </p>
                    )}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Payment Information</h3>
                  <div className="bg-[rgba(20,20,40,0.6)] p-6 rounded-lg border-2 border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">SWG Character Name</label>
                        <input
                          type="text"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="Your in-game character name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Discord Username (optional)</label>
                        <input
                          type="text"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="username#1234"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Payment Method</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <button className="bg-[rgba(20,20,40,0.6)] p-4 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-all flex flex-col items-center">
                      <CreditCard className="h-8 w-8 text-blue-500 mb-2" />
                      <span className="text-white font-medium">Credit Card</span>
                    </button>
                    <button className="bg-[rgba(20,20,40,0.6)] p-4 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-all flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 mb-2" fill="#169BD7">
                        <path d="M22.2,6H17.5C17,6,16.5,6.3,16.3,6.8l-3.2,10c-0.1,0.4-0.5,0.7-0.9,0.7h-2.9c-0.8,0-1.3-0.8-1-1.5L11,8.5 c0.1-0.4,0.5-0.7,0.9-0.7h3c0.4,0,0.7-0.3,0.7-0.8c0-0.4-0.3-0.8-0.7-0.8H7.8C7.3,6.3,6.8,6.7,6.7,7.2L3.7,17 c-0.2,0.7,0.3,1.3,1,1.3h4.9c0.5,0,0.9-0.3,1.1-0.7l0.3-1c0.1-0.4,0.5-0.7,0.9-0.7h2.9c0.8,0,1.3-0.8,1-1.5L14,8.5 c-0.1-0.4-0.5-0.7-0.9-0.7h-3c-0.4,0-0.7-0.3-0.7-0.8c0-0.4,0.3-0.8,0.7-0.8h11.6c0.4,0,0.8-0.3,0.8-0.8C22.5,6.3,22.4,6,22.2,6z"/>
                      </svg>
                      <span className="text-white font-medium">PayPal</span>
                    </button>
                    <button className="bg-[rgba(20,20,40,0.6)] p-4 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-all flex flex-col items-center">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-2" fill="#F7931A">
                        <path d="M23.638 14.904c-1.602 6.425-7.812 10.342-14.236 8.745-6.425-1.6-10.342-7.812-8.744-14.235 1.598-6.424 7.81-10.343 14.234-8.746 6.424 1.6 10.342 7.812 8.746 14.236zm-11.304-1.904c.037-.556-.42-1.088-1.026-1.2-.564-.142-1.27.124-1.574.565-.303.442-.493 1.215-.395 1.468.098.254.447.425 1.064.25.503-.111 1.533-.805 1.93-.083zm3.157 1.12c-.325.522-.754 1.035-1.286 1.438-.836.63-1.615.724-2.017.438-.303-.215-.395-.675-.208-1.108.367.218.748.272 1.05.126.26-.126.382-.354.382-.733l.003-2.118c.391-.29.912-.288 1.285.015v-.001c.348.291.547.898.65 1.232.103.334.397.197.142.71z"/>
                      </svg>
                      <span className="text-white font-medium">Crypto</span>
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <button className="play-button text-lg py-3 px-8">
                    Complete Donation
                  </button>
                  <p className="text-gray-400 text-sm mt-4">
                    By donating, you acknowledge that you are supporting the game voluntarily and that in-game rewards are a token of our appreciation, not a purchase.
                  </p>
                </div>
                <div className="text-center mt-8">
                  <Link href="/" className="play-button">
                    Return to Home
                  </Link>
                </div>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">How will I receive my rewards?</h3>
                    <p className="text-gray-300">
                      After your donation is processed, our team will manually assign rewards to your account within 24-48 hours. Make sure to include your correct in-game character name and Discord username.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Are donations required to play?</h3>
                    <p className="text-gray-300">
                      Absolutely not! SWG Infinity is and always will be free to play. Donations are completely voluntary and only provide cosmetic or convenience rewards, never gameplay advantages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Can I donate without receiving rewards?</h3>
                    <p className="text-gray-300">
                      Yes! Simply indicate in the notes field that you don't wish to receive rewards, and we'll honor your request.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Is my payment information secure?</h3>
                    <p className="text-gray-300">
                      Yes, all transactions are processed through secure payment gateways. We never store your payment information on our servers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">I have another question about donating</h3>
                    <p className="text-gray-300">
                      Please reach out to us on our <Link href="https://discord.gg/jyakeRJ" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Discord server</Link> and a team member will be happy to assist you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <Footer />
    </main>
  );
}

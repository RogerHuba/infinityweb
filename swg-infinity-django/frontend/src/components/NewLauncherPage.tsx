"use client";

import { PageLayout } from "@/components/PageLayout";
import { Download, Monitor, HardDrive, Cpu, Shield, Settings, Info, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export function NewLauncherPage() {
  return (
    <PageLayout
      title="New Infinity Launcher"
      subtitle="The official launcher for SWG Infinity"
    >
      <h2 className="section-title mb-6">SWG Infinity Launcher</h2>

      <p className="text-gray-300 mb-8">
        The SWG Infinity Launcher is the easiest way to install, update, and play
        Star Wars Galaxies on our server. Our custom launcher handles all aspects of
        keeping your game up-to-date and optimized.
      </p>

      {/* Download Section */}
      <div className="bg-[rgba(13,20,40,0.8)] p-8 rounded-md border border-[#1a1a4a] mb-12">
        <div className="flex flex-col items-center text-center">
          <Download className="h-16 w-16 text-[hsl(var(--swg-accent-gold))] mb-4" />
          <h3 className="text-white font-bold text-2xl mb-4">Download the Launcher</h3>
          <p className="text-gray-300 mb-6 max-w-2xl">
            Click below to download the latest version of the SWG Infinity Launcher.
            The launcher will handle the rest of the installation process for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mb-6">
            <a
              href="#"
              className="play-button bg-[rgba(30,50,100,0.3)] py-3 flex items-center justify-center"
              onClick={(e) => e.preventDefault()}
            >
              <Download className="mr-2 h-5 w-5" />
              Windows Download
            </a>
            <a
              href="#"
              className="play-button bg-[rgba(30,50,100,0.3)] py-3 flex items-center justify-center opacity-50 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              <Download className="mr-2 h-5 w-5" />
              Mac Download (Coming Soon)
            </a>
          </div>
          <p className="text-gray-400 text-sm">Version 2.0.3 | Released May 10, 2025</p>
        </div>
      </div>

      {/* Features */}
      <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start mb-3">
            <Settings className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-3 mt-1" />
            <div>
              <h4 className="text-white font-semibold">Easy Installation</h4>
              <p className="text-gray-300">
                Automatically downloads and installs all necessary game files with minimal user intervention.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start mb-3">
            <Download className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-3 mt-1" />
            <div>
              <h4 className="text-white font-semibold">Auto-Updates</h4>
              <p className="text-gray-300">
                Keeps your game client up-to-date with the latest patches, content, and improvements.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start mb-3">
            <Shield className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-3 mt-1" />
            <div>
              <h4 className="text-white font-semibold">File Verification</h4>
              <p className="text-gray-300">
                Ensures game files are intact and uncorrupted, repairing any damaged files automatically.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start mb-3">
            <Info className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-3 mt-1" />
            <div>
              <h4 className="text-white font-semibold">News and Updates</h4>
              <p className="text-gray-300">
                Displays the latest news, events, and server status directly in the launcher.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <h3 className="text-xl font-bold text-white mb-6">System Requirements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <h4 className="text-white font-semibold flex items-center mb-4">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            Minimum Requirements
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Cpu className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Processor:</span>
                <p className="text-gray-300">Intel Core i3 or AMD equivalent</p>
              </div>
            </li>
            <li className="flex items-start">
              <Monitor className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Graphics:</span>
                <p className="text-gray-300">DirectX 9.0c compatible with 1GB VRAM</p>
              </div>
            </li>
            <li className="flex items-start">
              <HardDrive className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Storage:</span>
                <p className="text-gray-300">10GB available space</p>
              </div>
            </li>
            <li className="flex items-start">
              <Settings className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Operating System:</span>
                <p className="text-gray-300">Windows 7, 8, 10, or 11</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <h4 className="text-white font-semibold flex items-center mb-4">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            Recommended Requirements
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Cpu className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Processor:</span>
                <p className="text-gray-300">Intel Core i5 or AMD equivalent</p>
              </div>
            </li>
            <li className="flex items-start">
              <Monitor className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Graphics:</span>
                <p className="text-gray-300">DirectX 11 compatible with 2GB VRAM</p>
              </div>
            </li>
            <li className="flex items-start">
              <HardDrive className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Storage:</span>
                <p className="text-gray-300">20GB available space (SSD recommended)</p>
              </div>
            </li>
            <li className="flex items-start">
              <Settings className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2 mt-0.5" />
              <div>
                <span className="text-white font-medium">Operating System:</span>
                <p className="text-gray-300">Windows 10 or 11 (64-bit)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Installation Instructions */}
      <h3 className="text-xl font-bold text-white mb-6">Installation Instructions</h3>
      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mb-10">
        <ol className="list-decimal pl-6 text-gray-300 space-y-3">
          <li>Download the SWG Infinity Launcher from the link above.</li>
          <li>Run the downloaded installer and follow the on-screen instructions.</li>
          <li>Choose your installation directory.</li>
          <li>The launcher will automatically download all necessary game files.</li>
          <li>Once the installation is complete, create an account or log in with your existing credentials.</li>
          <li>Click the PLAY button to launch the game.</li>
        </ol>
      </div>

      {/* Troubleshooting */}
      <h3 className="text-xl font-bold text-white mb-6">Troubleshooting</h3>
      <div className="space-y-4 mb-10">
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold">Launcher Won't Start</h4>
              <p className="text-gray-300">
                Make sure you have the latest .NET Framework installed. Try running the launcher as administrator.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold">Download Issues</h4>
              <p className="text-gray-300">
                If downloads are slow or failing, try temporarily disabling your antivirus or firewall.
                You can also try the "Repair" option in the launcher settings.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold">Game Crashes</h4>
              <p className="text-gray-300">
                Use the "Verify Files" option in the launcher to check for and repair any corrupted game files.
                Make sure your graphics drivers are up to date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Need Help?</h3>
        <p className="text-gray-300 mb-4">
          If you're experiencing issues not covered above, please visit our Discord server for support.
          Our community and staff members are ready to help with any technical problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://discord.gg/jyakeRJ"
            target="_blank"
            rel="noopener noreferrer"
            className="play-button inline-flex items-center"
          >
            Get Support on Discord
          </a>
          <Link
            href="/support-2"
            className="play-button inline-flex items-center"
          >
            Support Center
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

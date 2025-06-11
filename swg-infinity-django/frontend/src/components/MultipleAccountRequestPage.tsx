"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function MultipleAccountRequestPage() {
  const [formData, setFormData] = useState({
    primaryUsername: "",
    primaryEmail: "",
    discordUsername: "",
    additionalAccounts: [{ username: "", email: "", reason: "" }],
    agreeToTerms: false,
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdditionalAccountChange = (index: number, field: string, value: string) => {
    const updatedAccounts = [...formData.additionalAccounts];
    updatedAccounts[index] = { ...updatedAccounts[index], [field]: value };
    setFormData({
      ...formData,
      additionalAccounts: updatedAccounts,
    });
  };

  const addAccount = () => {
    setFormData({
      ...formData,
      additionalAccounts: [...formData.additionalAccounts, { username: "", email: "", reason: "" }],
    });
  };

  const removeAccount = (index: number) => {
    const updatedAccounts = [...formData.additionalAccounts];
    updatedAccounts.splice(index, 1);
    setFormData({
      ...formData,
      additionalAccounts: updatedAccounts,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.primaryUsername || !formData.primaryEmail || !formData.discordUsername) {
      setErrorMessage("Please fill out all required fields in the Primary Account section.");
      setFormState("error");
      return;
    }

    if (!formData.agreeToTerms) {
      setErrorMessage("You must agree to the Terms and Conditions.");
      setFormState("error");
      return;
    }

    for (const account of formData.additionalAccounts) {
      if (!account.username || !account.email || !account.reason) {
        setErrorMessage("Please fill out all fields for each additional account.");
        setFormState("error");
        return;
      }
    }

    // Submit the form
    setFormState("submitting");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <div className="bg-[url('https://ext.same-assets.com/906812322/2240799338.jpeg')] bg-cover bg-center py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Multiple Account Request</h1>
              <p className="text-gray-300">Apply to link additional SWG Infinity accounts to your primary account</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Account Policy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By default, each player is allowed to have one SWG Infinity account. However, we understand that in some situations, players may need additional accounts for legitimate reasons.
                  </p>
                  <p>
                    To maintain the integrity of the game and ensure fair play, we require all players who wish to have multiple accounts to complete this request form. All requests are manually reviewed by our staff.
                  </p>
                  <div className="bg-[rgba(20,30,60,0.6)] p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Legitimate Reasons for Multiple Accounts:</h3>
                    <ul className="swg-bullet-list">
                      <li>Family members sharing the same household/IP</li>
                      <li>Dedicated crafting or harvesting accounts</li>
                      <li>Roleplay purposes (different character stories)</li>
                      <li>Event hosting and management</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(60,20,20,0.6)] p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Prohibited Uses for Multiple Accounts:</h3>
                    <ul className="swg-bullet-list">
                      <li>Exploiting game mechanics</li>
                      <li>Manipulating the in-game economy</li>
                      <li>Evading sanctions or restrictions</li>
                      <li>Harassing other players</li>
                    </ul>
                  </div>
                </div>
              </div>

              {formState === "success" ? (
                <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white text-center mb-4">Request Submitted Successfully!</h2>
                  <p className="text-gray-300 text-center mb-8">
                    Thank you for submitting your multiple account request. Our team will review your application and respond within 24-48 hours via the Discord username you provided.
                  </p>
                  <div className="text-center">
                    <a href="/" className="play-button">
                      Return to Home
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                  {formState === "error" && (
                    <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg mb-6 flex items-start">
                      <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-bold">Error</h3>
                        <p className="text-gray-300">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Primary Account Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2" htmlFor="primaryUsername">
                          SWG Username <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="primaryUsername"
                          name="primaryUsername"
                          type="text"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="Your primary SWG character name"
                          value={formData.primaryUsername}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2" htmlFor="primaryEmail">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="primaryEmail"
                          name="primaryEmail"
                          type="email"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="email@example.com"
                          value={formData.primaryEmail}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-white font-medium mb-2" htmlFor="discordUsername">
                          Discord Username <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="discordUsername"
                          name="discordUsername"
                          type="text"
                          className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                          placeholder="username#1234 or username"
                          value={formData.discordUsername}
                          onChange={handleInputChange}
                          required
                        />
                        <p className="text-gray-400 text-sm mt-1">
                          We'll use this to contact you about your request.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Additional Account Requests</h2>

                    {formData.additionalAccounts.map((account, index) => (
                      <div key={`account-${index}-${account.username || 'unnamed'}`} className="mb-8 bg-[rgba(20,30,60,0.3)] p-6 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold text-white">Account #{index + 1}</h3>
                          {index > 0 && (
                            <button
                              type="button"
                              className="text-red-400 hover:text-red-300 text-sm"
                              onClick={() => removeAccount(index)}
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block text-white font-medium mb-2">
                              Username <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                              placeholder="Additional account username"
                              value={account.username}
                              onChange={(e) => handleAdditionalAccountChange(index, 'username', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white font-medium mb-2">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                              placeholder="Email for this account"
                              value={account.email}
                              onChange={(e) => handleAdditionalAccountChange(index, 'email', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">
                            Reason for Additional Account <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 min-h-[100px]"
                            placeholder="Please explain why you need this additional account (e.g., dedicated crafter, family member, etc.)"
                            value={account.reason}
                            onChange={(e) => handleAdditionalAccountChange(index, 'reason', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                      onClick={addAccount}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Request Another Account (Maximum 3)
                    </button>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-start">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        className="h-5 w-5 mt-1 bg-[rgba(13,13,30,0.6)] border border-gray-700 rounded focus:ring-blue-500 text-blue-500"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        required
                      />
                      <label htmlFor="agreeToTerms" className="ml-3 text-gray-300">
                        I understand that submitting false information or using multiple accounts for exploitative purposes may result in account suspension or termination. I agree to comply with the SWG Infinity <button type="button" className="text-blue-400 hover:text-blue-300 underline bg-transparent border-none cursor-pointer" onClick={() => window.open('/terms-of-service', '_blank')}>Terms of Service</button>.
                      </label>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="play-button text-lg py-3 px-8"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? "Submitting..." : "Submit Request"}
                    </button>
                    <p className="text-gray-400 text-sm mt-4">
                      All requests are reviewed manually by our staff team. Please allow 24-48 hours for a response.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <Footer />
    </main>
  );
}

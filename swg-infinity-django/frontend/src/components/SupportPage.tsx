"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Search, HelpCircle, DownloadCloud, Shield, Users, MessageSquare } from "lucide-react";

type FAQCategory = "general" | "installation" | "gameplay" | "account" | "technical";

interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

export function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general_help",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | "all">("all");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      setFormState("error");
      return;
    }

    // Submit the form
    setFormState("submitting");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const toggleQuestion = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  const faqs: FAQ[] = [
    {
      question: "What is SWG Infinity?",
      answer: "SWG Infinity is a Pre-Combat Upgrade (PreCU) Star Wars Galaxies emulator, providing players with an authentic experience of Star Wars Galaxies as it existed before the controversial Combat Upgrade. We offer a stable environment with custom content and quality-of-life improvements while maintaining the core gameplay that made SWG beloved.",
      category: "general",
    },
    {
      question: "Is SWG Infinity free to play?",
      answer: "Yes, SWG Infinity is completely free to play. We are supported by voluntary donations from our community, but there is no requirement to pay anything to enjoy the full game experience.",
      category: "general",
    },
    {
      question: "How do I download and install SWG Infinity?",
      answer: "To play SWG Infinity, you'll need to download our custom launcher from the 'Play Now' section of our website. The launcher will guide you through the installation process, downloading all necessary game files and keeping them up-to-date automatically.",
      category: "installation",
    },
    {
      question: "Do I need the original Star Wars Galaxies discs?",
      answer: "No, you don't need the original game discs. Our launcher contains everything you need to play SWG Infinity. However, owning a legal copy of the original game is always encouraged to support the original creators.",
      category: "installation",
    },
    {
      question: "What are the system requirements?",
      answer: "SWG runs on most modern systems without issue. Minimum requirements: Windows 7 or newer, 4GB RAM, 20GB free disk space, and a dedicated graphics card with 1GB VRAM. Recommended: 8GB RAM, SSD storage, and a graphics card with 2GB VRAM or better.",
      category: "technical",
    },
    {
      question: "How do I create an account?",
      answer: "You can create a free account directly through our launcher when you first start it up, or through the account creation section on our website. You'll need to provide a valid email address for verification.",
      category: "account",
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the launcher login screen or on our website. A password reset link will be sent to your registered email address.",
      category: "account",
    },
    {
      question: "How do I become a Jedi?",
      answer: "Becoming a Jedi in SWG Infinity follows a modified version of the Village of Aurilia path. You'll need to find the Force Sensitive Village on Dathomir, complete various tasks and trials, and progress through four phases of Force training. See our detailed Jedi Unlock guide for more information.",
      category: "gameplay",
    },
    {
      question: "Can I have multiple accounts?",
      answer: "By default, each player is allowed one account. However, you can apply for additional accounts through our Multiple Account Request system. Legitimate reasons include family members sharing an IP address, dedicated crafting accounts, or roleplay purposes. All requests are manually reviewed.",
      category: "account",
    },
    {
      question: "The game won't launch. What should I do?",
      answer: "First, ensure your launcher is up-to-date. Try running the launcher as Administrator. If that doesn't work, try the repair option in the launcher settings. If you're still having issues, check our Discord for tech support or submit a support ticket through our website.",
      category: "technical",
    },
    {
      question: "How do I join a guild?",
      answer: "You can join guilds by receiving an invitation from a guild leader or officer. To find guilds recruiting, check the Community section of our forums, the #guild-recruitment channel on our Discord, or simply ask in general chat in-game. Many guilds are happy to welcome new members.",
      category: "gameplay",
    },
    {
      question: "How often is SWG Infinity updated?",
      answer: "We release major content updates approximately every 2-3 months, with smaller patches and bugfixes deployed weekly. We announce all updates on our Discord server and website, with patch notes detailing all changes.",
      category: "general",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    // Category filter
    if (selectedCategory !== "all" && faq.category !== selectedCategory) {
      return false;
    }

    // Search filter
    if (searchQuery.trim() !== "") {
      const normalizedQuery = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery)
      );
    }

    return true;
  });

  const categories = [
    { id: "all", label: "All FAQs", icon: HelpCircle },
    { id: "general", label: "General", icon: HelpCircle },
    { id: "installation", label: "Installation", icon: DownloadCloud },
    { id: "gameplay", label: "Gameplay", icon: Users },
    { id: "account", label: "Account", icon: Shield },
    { id: "technical", label: "Technical", icon: MessageSquare },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <div className="bg-[url('https://ext.same-assets.com/906812322/2240799338.jpeg')] bg-cover bg-center py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Center</h1>
              <p className="text-gray-300">Find answers to common questions or contact our team</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

                <div className="mb-8">
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="w-full bg-[rgba(13,13,30,0.6)] pl-10 pr-4 py-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Search for answers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Search className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => {
                      const CategoryIcon = category.icon;
                      return (
                        <button
                          key={category.id}
                          className={`px-4 py-2 rounded-full flex items-center text-sm ${
                            selectedCategory === category.id || (category.id === "all" && selectedCategory === "all")
                              ? "bg-blue-500 text-white"
                              : "bg-[rgba(20,30,60,0.6)] text-gray-300 hover:bg-[rgba(30,40,70,0.6)]"
                          }`}
                          onClick={() => setSelectedCategory(category.id as FAQCategory | "all")}
                        >
                          <CategoryIcon className="h-4 w-4 mr-2" />
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-10">
                    <HelpCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                    <p className="text-gray-300">
                      Try adjusting your search or filter to find what you're looking for, or contact our support team for help.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <div key={faq.question} className="border border-gray-700 rounded-lg overflow-hidden">
                        <button
                          className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
                            expandedQuestion === index ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)]"
                          }`}
                          onClick={() => toggleQuestion(index)}
                        >
                          <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
                          {expandedQuestion === index ? (
                            <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {expandedQuestion === index && (
                          <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Join our Discord</h3>
                  <p className="text-gray-300 mb-4">
                    Get instant support from our community and staff team. Our Discord server is the fastest way to get help with any issue.
                  </p>
                  <Link
                    href="https://discord.gg/jyakeRJ"
                    className="play-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord
                  </Link>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <DownloadCloud className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Launcher Support</h3>
                  <p className="text-gray-300 mb-4">
                    Having issues with the SWG Infinity launcher? Check out our troubleshooting guide or download the latest version.
                  </p>
                  <Link href="/new-launcher" className="play-button">
                    Launcher Guide
                  </Link>
                </div>
              </div>

              {formState === "success" ? (
                <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white text-center mb-4">Message Sent Successfully!</h2>
                  <p className="text-gray-300 text-center mb-8">
                    Thank you for reaching out. Our support team will respond to your message within 24-48 hours. Please check your email for updates.
                  </p>
                  <div className="text-center">
                    <Link href="/" className="play-button">
                      Return to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Support</h2>

                  {formState === "error" && (
                    <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg mb-6 flex items-start">
                      <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-bold">Error</h3>
                        <p className="text-gray-300">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white font-medium mb-2" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2" htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white font-medium mb-2" htmlFor="category">
                      Support Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="general_help">General Help</option>
                      <option value="account_issue">Account Issue</option>
                      <option value="technical_problem">Technical Problem</option>
                      <option value="bug_report">Bug Report</option>
                      <option value="feature_request">Feature Request</option>
                      <option value="billing_donation">Billing/Donation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white font-medium mb-2" htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Brief description of your issue"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-white font-medium mb-2" htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-[rgba(13,13,30,0.6)] p-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 min-h-[150px]"
                      placeholder="Please provide details about your issue. If it's a technical problem, include any error messages and steps to reproduce."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="play-button text-lg py-3 px-8"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                    <p className="text-gray-400 text-sm mt-4">
                      We typically respond to support requests within 24-48 hours. For faster assistance, please join our Discord server.
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

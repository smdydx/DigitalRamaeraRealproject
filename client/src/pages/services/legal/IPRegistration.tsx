
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, CheckCircle2, LucideIcon } from "lucide-react";

const IPRegistration = () => {
  return (
    <div className="min-h-screen bg-background relative pt-24 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Intellectual Property (IPR) Registration Services
            </h1>
            <p className="text-2xl font-bold text-green-400">Protect Your Brand, Ideas, and Innovations with SOFTBEEM</p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              At SOFTBEEM, we offer comprehensive Intellectual Property Rights (IPR) registration services including Trademark, Copyright, and Patent filings, ensuring your innovations and brands are legally secured. In today's competitive market, safeguarding your business identity is critical — and we are here to make the process simple, affordable, and effective.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Trademark Registration (Wordmark, Logo, Tagline)",
              "Trademark Renewal and Opposition Handling",
              "Copyright Registration",
              "Patent Search, Drafting, and Filing",
              "Design Registration (Industrial Designs)",
              "IP Assignment and Licensing Agreements",
              "International Trademark Filing Advisory"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* Why Register IP */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Register Your Intellectual Property?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Legal Protection Against Copying or Infringement",
                "Exclusive Commercial Usage Rights",
                "Increased Business Valuation and Brand Recognition",
                "Licensing and Monetization Opportunities",
                "Essential for Fundraising and M&A Deals"
              ].map((point, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Experienced Trademark Attorneys and IP Consultants",
                "100% Online, Hassle-Free Process",
                "Regular Updates on Status and Objections",
                "Cost-Effective Packages",
                "Advisory for Brand Strategy and Expansion"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Protect Your Brand Identity Today!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Schedule Free IP Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request IPR Registration Proposal
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IPRegistration;

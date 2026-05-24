import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Lock, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: ShieldCheck,
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when placing orders, subscribing to our newsletter, or contacting us. This includes your name, email address, phone number, delivery address, and payment information. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and pages visited."
    },
    {
      icon: Lock,
      title: "2. How We Use Your Information",
      content: "Your information is used to process orders, send order confirmations, communicate about your purchase, manage your account, and provide customer support. We may also use your information to send promotional updates about new Zellige collections or special offers, which you can opt out of at any time. We never sell or share your personal data with third parties without your explicit consent."
    },
    {
      icon: AlertCircle,
      title: "3. Data Security",
      content: "We implement industry-standard security measures to protect your personal information, including SSL encryption for all transactions. However, no method of Internet transmission is completely secure. While we strive to protect your data, we cannot guarantee absolute security. Please notify us immediately of any unauthorized access or data breaches."
    },
    {
      icon: Mail,
      title: "4. Cookies and Tracking",
      content: "Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze site usage patterns. You can control cookie settings through your browser preferences. We use analytics tools to understand how visitors use our site, but this data is always anonymous and aggregated. We do not track or sell your browsing behavior to third parties."
    }
  ];

  const additionalSections = [
    {
      title: "5. Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time by contacting us. Under GDPR, EU residents also have the right to data portability and the right to object to processing. To exercise these rights, please send your request to our privacy contact email with verification of your identity."
    },
    {
      title: "6. Third-Party Services",
      content: "Our website may contain links to third-party websites. We are not responsible for their privacy practices. This policy only applies to badraceram.com. Payment processing is handled by secure third-party payment providers who maintain their own privacy policies. We recommend reviewing their terms before providing payment information."
    },
    {
      title: "7. Age Restrictions",
      content: "Badra Ceram services are intended for users 18 years of age and older. We do not intentionally collect personal information from minors. If we become aware that a minor has provided us with personal information, we will take steps to delete such information and terminate the minor's account immediately."
    },
    {
      title: "8. Contact Information",
      content: "If you have questions about this privacy policy or our privacy practices, please contact us at privacy@badraceram.com or through our contact form. You can also write to us at our physical address. We will respond to all privacy inquiries within 30 days. Your feedback helps us improve our privacy practices."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-12 md:gap-16 py-8"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl bg-gradient-to-r from-indigo-50 to-purple-50 p-10 md:p-16"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Privacy <span className="text-indigo-600">Policy</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Badra Ceram, we are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This policy outlines our privacy practices.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </motion.section>

      {/* Main Sections with Icons */}
      <div className="w-full grid gap-6">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-2xl bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] p-8 md:p-10"
          >
            <div className="flex gap-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 h-fit flex-shrink-0">
                <section.icon size={28} className="text-indigo-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed text-base">{section.content}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="w-full grid gap-6">
        {additionalSections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-2xl bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed text-base">{section.content}</p>
          </motion.section>
        ))}
      </div>

      {/* Summary Notice */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-10 md:p-12 text-white"
      >
        <h2 className="text-3xl font-black mb-4">Important Note</h2>
        <p className="text-indigo-100 text-base leading-relaxed">
          Badra Ceram is committed to complying with all applicable data protection regulations, including GDPR. We regularly review and update our privacy practices to ensure compliance. If you have concerns about how we handle your data, please contact us immediately. We take privacy violations very seriously and will investigate all concerns promptly.
        </p>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-10 md:p-12 text-center"
      >
        <h2 className="text-3xl font-black text-gray-800 mb-4">Questions About Our Privacy?</h2>
        <p className="text-gray-600 text-base mb-8 max-w-2xl mx-auto">
          If you have any questions or concerns about our privacy practices, please don't hesitate to contact us. We're here to help.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/contact'}
          className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:bg-indigo-700"
        >
          Contact Us
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPolicy;

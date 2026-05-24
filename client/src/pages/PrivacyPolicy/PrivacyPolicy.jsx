import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "At Badra Ceram, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when purchasing our authentic Moroccan Zellige products. This Privacy Policy outlines how we collect, use, and protect your personal information."
    },
    {
      title: "2. Information We Collect",
      content: "We collect information you voluntarily provide when you:\n• Place an order for our zellige tiles\n• Create an account on our website\n• Subscribe to our mailing list\n• Contact us for inquiries\n• Complete forms on our site\n\nThis information may include: name, email address, phone number, mailing address, payment information, and product preferences."
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your information to:\n• Process and fulfill your zellige orders\n• Send order confirmations and updates\n• Provide customer support\n• Send promotional emails (with your consent)\n• Improve our website and services\n• Comply with legal obligations\n• Prevent fraudulent activities"
    },
    {
      title: "4. Data Security",
      content: "We implement industry-standard security measures to protect your personal information, including:\n• SSL encryption for online transactions\n• Secure payment processing\n• Limited access to personal data\n• Regular security updates\n\nHowever, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."
    },
    {
      title: "5. Third-Party Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share information with:\n• Payment processors for order fulfillment\n• Shipping partners for delivery\n• Service providers who assist in our operations\n\nAll third parties are bound by confidentiality agreements and are required to handle your data securely."
    },
    {
      title: "6. Cookies",
      content: "Our website uses cookies to enhance your browsing experience. Cookies help us:\n• Remember your preferences\n• Analyze website traffic\n• Improve our services\n\nYou can disable cookies in your browser settings, though this may affect your experience on our site."
    },
    {
      title: "7. Your Rights",
      content: "You have the right to:\n• Access your personal data\n• Request corrections to your information\n• Request deletion of your data\n• Opt-out of marketing communications\n• Withdraw consent at any time\n\nTo exercise these rights, please contact us at contact@badraceram.com"
    },
    {
      title: "8. Contact Us",
      content: "If you have questions about this Privacy Policy or your personal information, please contact us:\n\nBadra Ceram\nEmail: contact@badraceram.com\nPhone: 05 24 65 00 40\nAddress: 108 Kawki Rd, Safi 46000, Morocco"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-12 py-12"
    >
      {/* Header */}
      <section className="w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-2xl">
              <Shield size={28} className="text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-medium mb-6">
            Last Updated: April 4, 2026
          </p>
          <div className="bg-[#e0e5ec] rounded-2xl p-6 border-l-4 border-indigo-600">
            <p className="text-gray-700 font-medium">
              This Privacy Policy explains how Badra Ceram collects, uses, and protects your personal information when you visit our website and purchase our authentic Moroccan Zellige products.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="w-full px-4 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#e0e5ec] rounded-2xl p-8 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
            >
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How long do you keep my data?",
                a: "We retain your data only as long as necessary to provide our services and comply with legal obligations. You can request deletion at any time."
              },
              {
                q: "Is my payment information safe?",
                a: "Yes, all payment transactions are processed through secure, encrypted connections. We never store full credit card details on our servers."
              },
              {
                q: "How do I unsubscribe from emails?",
                a: "Every marketing email includes an unsubscribe link. You can also update your preferences in your account settings or contact us directly."
              },
              {
                q: "Do you comply with GDPR?",
                a: "Yes, Badra Ceram complies with GDPR and other international data protection regulations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#e0e5ec] rounded-2xl p-6 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
              >
                <h3 className="text-lg font-black text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 font-medium">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#e0e5ec] rounded-3xl p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center"
        >
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-gray-600 font-medium mb-8">
            Contact our support team anytime. We're here to help.
          </p>
          <a 
            href="mailto:contact@badraceram.com"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;

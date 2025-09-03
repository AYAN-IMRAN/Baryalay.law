import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const articles = [
  {
    title: "The Asset Management Review",
    desc: "A deep dive into asset management regulations and practices in Pakistan.",
    category: "Finance",
    link: "https://baryalay.law/assets/pakistan-Dw8yOgOr.pdf",
  },
  {
    title: "Liquidity Management in Islamic Financial Institutions",
    desc: "Exploring key challenges and innovative solutions for Sharia-compliant finance.",
    category: "Islamic Finance",
    link: "https://baryalay.law/assets/v15i02_30-7vCIOO3h.pdf",
  },
  {
    title: "Doing Business in Pakistan",
    desc: "A guide for foreign investors and businesses navigating the local market.",
    category: "Business",
    link: "https://baryalay.law/assets/doing_a_business_in_pakistan-D4mUsX4X.pdf",
  },
  {
    title: "Islamic Finance: More Than Window Dressing?",
    desc: "Unpacking myths and realities of Islamic financial frameworks.",
    category: "Islamic Finance",
    link: "https://baryalay.law/assets/islamic_finance_more_than_window_dressing-C8y-Vttc.pdf",
  },
  {
    title: "Land Acquisition in Pakistan",
    desc: "A colonial legacy and the urgent need for reform in land laws.",
    category: "Law & Policy",
    link: "https://baryalay.law/assets/land_acquisition_in_pakistan-o-zOONdN.pdf",
  },
  {
    title: "The Companies Act, 2017",
    desc: "Key legal frameworks and their impact on businesses in Pakistan.",
    category: "Corporate Law",
    link: "https://baryalay.law/assets/the_pakistani_companies_act_2017-Eo5IwHJs.pdf",
  },
  {
    title: "Islamic Capital Markets: Understanding Sukuk",
    desc: "An overview of Sukuk instruments and their growing role in finance.",
    category: "Islamic Finance",
    link: "https://baryalay.law/assets/understanding_sukuk-CJGoCoL1.pdf",
  },
];

function News() {
  return (
    <>
      <Navbar />
      <section className="bg-white mt-8 py-20 px-6 sm:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-black mb-12 uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          News & Insights
        </motion.h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {articles.map((article, idx) => (
    <motion.div
      key={idx}
      className="bg-black text-white rounded-2xl p-6 border border-neutral-800 relative group transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      <span className="text-xs text-gray-400 font-medium">
        {article.category}
      </span>

      <h3 className="text-xl font-semibold mt-3 group-hover:text-white transition-colors duration-300">
        {article.title}
      </h3>

      <p className="text-sm text-gray-300 mt-2">{article.desc}</p>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors duration-300"
      >
        Read More →
      </a>
    </motion.div>
  ))}
</div>


        {/* Disclaimer Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center text-gray-500 text-sm leading-relaxed">
          <p>
            The articles published on this website are for general information
            only and may not be relied on without seeking specific legal advice.
            We reserve the right to change the opinions and views expressed in
            these publications without prior notice and shall have no obligation
            to inform you. If you require legal guidance on the topics
            discussed in these publications, please contact us at{" "}
            <a
              href="mailto:haroon@baryalay.law"
              className="text-black font-medium hover:underline"
            >
              haroon@baryalay.law
            </a>.
          </p>
          <p className="mt-4">
            © Baryalay.law, Advocates & Consultants. All rights reserved
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default News;

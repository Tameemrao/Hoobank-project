import React, { useState, useEffect } from 'react';
import styles from "./style";
import { logo } from "./assets";
import { footerLinks, socialMedia } from "./constants";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full bg-primary flex items-center justify-center">
    <div className="w-12 h-12 relative animate-spin">
      <div className="circle absolute w-4 h-4 bg-blue-gradient rounded-full"></div>
      <div className="circle absolute w-4 h-4 bg-blue-gradient rounded-full right-0"></div>
      <div className="circle absolute w-4 h-4 bg-blue-gradient rounded-full bottom-0"></div>
      <div className="circle absolute w-4 h-4 bg-blue-gradient rounded-full bottom-0 right-0"></div>
    </div>
    <div className="absolute mb-4 px-4 bottom-0 w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Developed By Web Dev Tameem. All Rights Reserved. <span className="text-secondary underline">Contact Me On: </span>
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </div>
);


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of resources or data
    const fetchData = async () => {
      try {
        // Simulate fetching data
        // Replace these lines with actual API calls or data loading logic
        await fetchSomeData();
        await fetchSomeOtherData();

        // Once data is loaded, update the loading state
        setLoading(false);
      } catch (error) {
        console.error('Error while fetching data:', error);
        // Handle error if needed
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup tasks if any
    };
  }, []); // Empty dependency array means this effect runs only once, after initial render

  // Simulated data fetching functions
  const fetchSomeData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Simulating data fetching delay
    });
  };

  const fetchSomeOtherData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1500); // Simulating data fetching delay
    });
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      {loading ? <Loader /> : (
        <>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
          
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

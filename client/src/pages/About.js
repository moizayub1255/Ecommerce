import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="main">
        <div className="left">
          <img src="/images/about.jpeg" alt="About Us" />
        </div>
        <div className="right">
          <h1 className="abt-title">About Us</h1>
          <p className="abt-para">
            <section id="about-us">
              <p>Welcome to Capture Mart!</p>
              <p>
                At Capture Mart, we believe that every purchase should be an
                experience. Our mission is to provide you with the highest
                quality products that not only meet your needs but also enhance
                your lifestyle. Whether you’re searching for the latest gadgets,
                trendy fashion, or unique home decor, we’ve got you covered.
              </p>

              <h3>Why Choose Capture Mart?</h3>
              <ul>
                <li>
                  <strong>Quality Products:</strong> We source only the best
                  items, ensuring that you receive products that last.
                </li>
                <li>
                  <strong>Exceptional Customer Service:</strong> Our friendly
                  team is here to assist you with any questions or concerns.
                </li>
                <li>
                  <strong>Secure Shopping:</strong> Your privacy and security
                  are our top priorities, so you can shop with confidence.
                </li>
                <li>
                  <strong>Fast Shipping:</strong> We aim to get your orders to
                  you as quickly as possible, so you can enjoy your purchases
                  sooner.
                </li>
              </ul>

              <p>
                Thank you for choosing Capture Mart! We’re excited to have you
                as part of our community. Happy shopping!
              </p>
            </section>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

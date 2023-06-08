import React from "react";

import './Footer.css'

import a from "../assets/a.svg"
import twitter from "../assets/twitter.svg"
import insta from "../assets/insta.svg"
import linkedin from "../assets/linkedin.svg"

function Footer() {
  return (
    <>
      <div>
        <footer id="azure-footer">
            <div class="azure-footer-top-contens">
                <a href="" class="get-mobile-app">
                    <span>
                        <img src={a}/>
                    </span>
                    <span id="get-azure-mobile">Get the Azure mobile app</span>
                </a>
                <ul>
                    <li class="icon"><a href="">
                            <img src={twitter}/>
                        </a></li>
                    <li class="icon"><a href="">
                    <img src={insta}/>
                        </a></li>
                    <li class="icon"><a href="">                    
                    <img src={linkedin}/>
                        </a></li>
                </ul>
            </div>
            <div class="footer-second-part">
                <div class="informations ">
                    <button>Explore Azure</button>
                    <ul>
                        <li><a href="">What is Azure</a></li>
                        <li><a href="">Get started</a></li>
                        <li><a href="">Global infrastructure</a></li>
                        <li><a href="">Datacentre regions</a></li>
                        <li><a href="">Trust your cloud</a></li>
                        <li><a href="">Customer enblament</a></li>
                        <li><a href="">Customer stories</a></li>
                    </ul>
                </div>
                <div class="informations">
                    <button>Products and pricing</button>
                    <ul>
                        <li><a href="">Products</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Free Azure services</a></li>
                        <li><a href="">Flexible pirchase options</a></li>
                        <li><a href="">Cloud economics</a></li>
                        <li><a href="">Optimise your costs</a></li>

                    </ul>
                </div>
                <div class="informations sol-support-main">
                    <button class="sol-support">Solutions and support</button>
                    <ul>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Resources for accelerating growth</a></li>
                        <li><a href="">Solution architectures</a></li>
                        <li><a href="">Support</a></li>
                        <li class="q-a"><a href="">Azure demo and live Q&A</a></li>

                    </ul>
                </div>
                <div class="informations">
                    <button>Partners</button>
                    <ul>
                        <li><a href="">Azure Marketplace</a></li>
                        <li><a href="">Find a partner</a></li>
                        <li><a href="">Technology partners</a></li>
                    </ul>
                </div>
                <div class="informations resources-btn">
                    <button>Resources</button>
                    <ul>
                        <li class="text-wrap"><a href="">Training and certifications</a></li>
                        <li><a href="">Documentations</a></li>
                        <li><a href="">Updates</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Developer resources</a></li>
                        <li><a href="">students</a></li>
                        <li><a href="">Events and webinars</a></li>
                        <li class="text-wraps"><a href="">Analyst reports,white papers and e-books</a></li>
                        <li><a href="">Videos</a></li>
                    </ul>
                </div>
                <div class="informations">
                    <button>Cloud computing</button>
                    <ul>
                        <li><a href="">What is machine learning?</a></li>

                        <li><a href="">What is the cloud?</a></li>
                        <li><a href="">What is Big Data Analytics?</a></li>
                        <li><a href="">What is Paas?</a></li>
                        <li><a href="">What is a container?</a></li>
                        <li><a href="">What is DevOps?</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-last-part">
                <div class="languages">
                    <label for="">Change language</label>
                    <select name="" id="">
                        <option value="tetret">English (India)</option>
                        <option value="">Dansk</option>
                        <option value="">Deutsh</option>
                        <option value="">English (Australia)</option>
                        <option value="">English (Canada)</option>

                    </select>
                </div>
                <div class="footer-list">
                    <ul>
                        <li><a href="">Diversity and Inclusion</a></li>
                        <li><a href="">Accessibility</a></li>
                        <li><a href="">Privacy & Cookies</a></li>
                        <li><a href="">Data Protection Notice</a></li>
                        <li><a href="">Trademarks</a></li>
                        <li><a href="">Terms of use</a></li>
                        <li><a href="">Privacy Data Management</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Feedback</a></li>
                        <li><a href="">Sitemap</a></li>
                        <li><span>© Microsoft 2023</span></li>
                    </ul>
                </div>

            </div>
            <div class="chat">
                <section class="chat-with-sales">
                    <a href="">
                        <i class="fa-regular fa-comments"></i>
                        <span>Chat with sales</span>
                    </a>
                </section>
            </div>

        </footer>
    </div>

    </>
  );
}

export default Footer;

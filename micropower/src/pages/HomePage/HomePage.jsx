/// Import dependencies ///

import React from "react";

//--//

/// Import files ///

import "./HomePage.css";

//--//

// Import assets //

//--//

function HomePage() {
  return (
    <body>
      <header class="header">
        <div class="nav__bar">
          <div class="logo__img">
            <img
              src="/Micropower/images/logo/Micropower-Logo.png"
              alt="Micropower Logo"
              class="logo"
            />
          </div>
          <div class="navigation">
            <ul>
              <li>
                <a href="./index.html">HOME</a>
              </li>
              <li>
                <a href="./Instrumentation.html">INSTRUMENTATION</a>
              </li>
              <li>
                <a href="./solar.html">SOLAR</a>
              </li>
              <li>
                <a href="./hvac.html">HVAC</a>
              </li>
              <li>
                <a href="./aboutUs.html">ABOUT US</a>
              </li>
              <li>
                <a href="./contactUs.html">CONTACT US</a>
              </li>
            </ul>
            <div class="search">
              <input
                type="text"
                class="search__bar"
                name="search"
                id="search"
                placeholder="Search by keyword or part number"
              />
              <button class="search__btn"></button>
            </div>
          </div>
        </div>
      </header>
      <main class="main">
        <section class="hero">
          <div class="hero__pic">
            <p class="hero__text">
              One of South Africa's top instrumentation supplier
            </p>
            <img
              class="hero__img"
              src="/Micropower/images/hero img/building-services.webp"
              alt=""
            />
          </div>
        </section>
        <section class="categories">
          <h2>CATEGORIES</h2>
          <div class="categories__cards">
            <div class="categoryCard">
              <div class="categoryCard__pic"></div>
              <div class="categoryCard__banner"></div>
              <div class="categoryCard__icon"></div>
              <div class="categoryCard__description"></div>
            </div>
            <div class="categoryCard">
              <div class="categoryCard__pic"></div>
              <div class="categoryCard__banner"></div>
              <div class="categoryCard__icon"></div>
              <div class="categoryCard__description"></div>
            </div>
            <div class="categoryCard">
              <div class="categoryCard__pic"></div>
              <div class="categoryCard__banner"></div>
              <div class="categoryCard__icon"></div>
              <div class="categoryCard__description"></div>
            </div>
            <div class="categoryCard">
              <div class="categoryCard__pic"></div>
              <div class="categoryCard__banner"></div>
              <div class="categoryCard__icon"></div>
              <div class="categoryCard__description"></div>
            </div>
            <div class="categoryCard">
              <div class="categoryCard__pic"></div>
              <div class="categoryCard__banner"></div>
              <div class="categoryCard__icon"></div>
              <div class="categoryCard__description"></div>
            </div>
            <div class="categoryCard">
              <div class="categoryCard__pic"></div>
              <div class="categoryCard__banner"></div>
              <div class="categoryCard__icon"></div>
              <div class="categoryCard__description"></div>
            </div>
          </div>
        </section>
        <section class="featured">
          <div class="featured__container">
            <h2>FEATURED PRODUCTS</h2>
            <div class="product__card">
              <div class="product__pic"></div>
              <div class="product__info">
                <div class="product__banner"></div>
                <div class="product__icon"></div>
                <div class="product__description"></div>
              </div>
            </div>
            <div class="product__card">
              <div class="product__pic"></div>
              <div class="product__info">
                <div class="product__banner"></div>
                <div class="product__icon"></div>
                <div class="product__description"></div>
              </div>
            </div>
            <div class="product__card">
              <div class="product__pic"></div>
              <div class="product__info">
                <div class="product__banner"></div>
                <div class="product__icon"></div>
                <div class="product__description"></div>
              </div>
            </div>
            <div class="product__card">
              <div class="product__pic"></div>
              <div class="product__info">
                <div class="product__banner"></div>
                <div class="product__icon"></div>
                <div class="product__description"></div>
              </div>
            </div>
          </div>
        </section>
        <section class="objectives">
          <div class="objectives__container">
            <h2>COMPANY OBJECTIVES</h2>
          </div>
        </section>
        <section class="contact">
          <div class="contact__container">
            <h2>CONTACT US</h2>
          </div>
        </section>
        <footer class="footer">
          <div class="footer__container"></div>
        </footer>
      </main>
    </body>
  );
}

export default HomePage;

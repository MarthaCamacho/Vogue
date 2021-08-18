import React from 'react'
import { Button } from './components/Button';
import { Header } from './components/Header';
import '../src/styles/app.scss';

// https://icon-icons.com/es/icono/b%C3%BAsqueda-magnifing-de-vidrio-localizar-encontrar/108884

function App() {
  return (
    <div>
      <Header />
      <div>
        <img className="app-contentImage" src="image.jpg" alt="image" />
      </div>
      <div className="app-separation">
        <div className="app-separationContent" >
          <img className="app-separationImage" src="separation1.jpg" alt="image" />
        </div>
        <div className="app-separationContent" >
          <h3 className="app-separationSubtitle">"Pleasure is the flower that passes; remembrance, the lasting perfume"</h3>
          <Button label="See more here" />
        </div>
      </div>
      <h1 className="app-title">Trending right now</h1>
      <div className="app-trendingItems">
        <div className="app-trendingItemsContent" >
          <img className="app-trendingItemsImage" src="trending1.jpg" alt="image" />
          <h3 className="app-trendingItemsTitle">Beauty</h3>
          <h5 className="app-trendingItemsSubtitle">Blush bar</h5>
        </div>
        <div className="app-trendingItemsContent" >
          <img className="app-trendingItemsImage" src="trending2.jpg" alt="image" />
          <h3 className="app-trendingItemsTitle">Beauty</h3>
          <h5 className="app-trendingItemsSubtitle">Blush bar</h5>
        </div>
        <div className="app-trendingItemsContent" >
          <img className="app-trendingItemsImage" src="trending4.jpg" alt="image" />
          <h3 className="app-trendingItemsTitle">Beauty</h3>
          <h5 className="app-trendingItemsSubtitle">Blush bar</h5>
        </div>
        <div className="app-trendingItemsContent" >
          <img className="app-trendingItemsImage" src="trending5.jpg" alt="image" />
          <h3 className="app-trendingItemsTitle">Beauty</h3>
          <h5 className="app-trendingItemsSubtitle">Blush bar</h5>
        </div>
        <div className="app-trendingItemsContent" >
          <img className="app-trendingItemsImage" src="trending3.jpg" alt="image" />
          <h3 className="app-trendingItemsTitle">Beauty</h3>
          <h5 className="app-trendingItemsSubtitle">Blush bar</h5>
        </div>
        <div className="app-trendingItemsContent" >
          <img className="app-trendingItemsImage" src="trending6.jpg" alt="image" />
          <h3 className="app-trendingItemsTitle">Beauty</h3>
          <h5 className="app-trendingItemsSubtitle">Blush bar</h5>
        </div>
      </div>
      <div className="app-firstSection">
        <div className="app-firstSectionContent" >
          <img className="app-firstSectionImage" src="firstSection2.jpg" alt="image" />
          <h3 className="app-firstSectionTitle">Beauty</h3>
        </div>
        <div className="app-firstSectionContent" >
          <img className="app-firstSectionImage" src="firstSection1.jpg" alt="image" />
          <h3 className="app-firstSectionTitle">Care</h3>
        </div>
        <div className="app-firstSectionContent" >
          <img className="app-firstSectionImage" src="firstSection3.jpg" alt="image" />
          <h3 className="app-firstSectionTitle">Style</h3>
        </div>
      </div>
      <h1 className="app-title">Looking at beauty in the world is the first step of purifying the mind</h1>

      <div className="app-sectionProducts">
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts1.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$75.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts2.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$75.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts3.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$75.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts4.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$75.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts5.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$75.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts6.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$75.000</h3>
        </div>
      </div>
      <div className="app-sectionProducts">
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts7.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$140.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts8.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$140.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts9.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$140.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts10.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$140.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts11.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$140.000</h3>
        </div>
        <div className="app-sectionProductsContent" >
          <img className="app-sectionProductsImage" src="sectionProducts12.jpg" alt="image" />
          <h2 className="app-sectionProductsName">Beauty</h2>
          <h3 className="app-sectionProductsPrice">$140.000</h3>
        </div>
      </div>
      <div className="app-separation">
        <div className="app-separationContent" >
          <img className="app-separationImage" src="separation1.jpg" alt="image" />
        </div>
        <div className="app-separationContent" >
          <h3 className="app-separationSubtitle">"Pleasure is the flower that passes; remembrance, the lasting perfume"</h3>
          <Button label="See more here" />
        </div>
      </div>
    </div>
  );
}

export default App;

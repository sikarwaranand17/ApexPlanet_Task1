
import React, { useState } from 'react';
import Header from '../components/Header';
import HtmlSection from '../components/HtmlSection';
import CssSection from '../components/CssSection';
import JavaScriptSection from '../components/JavaScriptSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className="min-h-screen bg-lab-lightGray">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'html' && <HtmlSection />}
        {activeTab === 'css' && <CssSection />}
        {activeTab === 'javascript' && <JavaScriptSection />}
      </main>
      
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 border-t">
        <p>Interactive Web Lab - Learn HTML, CSS, and JavaScript</p>
      </footer>
    </div>
  );
};

export default Index;

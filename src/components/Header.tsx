
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm pb-4">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold text-lab-blue mb-2">
          Interactive Web Lab
        </h1>
        <p className="text-gray-600 mb-6">
          Learn and apply foundational HTML, CSS, and JavaScript concepts
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="html" className="flex-1 md:flex-none px-8">
              HTML
            </TabsTrigger>
            <TabsTrigger value="css" className="flex-1 md:flex-none px-8">
              CSS
            </TabsTrigger>
            <TabsTrigger value="javascript" className="flex-1 md:flex-none px-8">
              JavaScript
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default Header;

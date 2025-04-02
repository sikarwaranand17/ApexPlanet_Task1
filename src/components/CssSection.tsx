
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const CssSection = () => {
  const [boxStyle, setBoxStyle] = useState<'default' | 'styled'>('default');
  
  return (
    <div className="animate-slide-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>CSS Basics</CardTitle>
            <CardDescription>
              CSS (Cascading Style Sheets) is used to style and layout web pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Key Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Selectors target HTML elements to style</li>
              <li>Properties define what aspects to style</li>
              <li>Values specify how to style the property</li>
              <li>CSS can be applied inline, internal, or external</li>
            </ul>
            
            <div className="mb-4">
              <button 
                className="lab-button"
                onClick={() => setBoxStyle(boxStyle === 'default' ? 'styled' : 'default')}
              >
                {boxStyle === 'default' ? "Apply Styling" : "Remove Styling"}
              </button>
            </div>
            
            <div className={`
              p-6 border rounded-md transition-all duration-300
              ${boxStyle === 'default' 
                ? 'bg-gray-100 text-black' 
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg'}
            `}>
              <p className="mb-2">This is a demonstration box</p>
              <span className={boxStyle === 'styled' ? 'text-yellow-200' : ''}>
                Click the button to see CSS in action!
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>CSS Properties</CardTitle>
            <CardDescription>
              Explore common CSS properties and their effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="colors">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="colors">Colors & Text</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="effects">Effects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="colors" className="space-y-4">
                <div className="code-snippet">
                  <code>
                    color: #3b82f6; /* Text color */<br/>
                    background-color: #f9fafb; /* Background color */<br/>
                    font-family: 'Arial', sans-serif; /* Font */<br/>
                    font-size: 16px; /* Text size */<br/>
                    font-weight: bold; /* Text weight */<br/>
                    text-align: center; /* Text alignment */
                  </code>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 bg-lab-blue text-white text-center">
                    Blue Background
                  </div>
                  <div className="p-3 bg-white border text-lab-accent font-bold text-center">
                    Purple Text
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="layout">
                <div className="code-snippet mb-4">
                  <code>
                    margin: 10px; /* Outside spacing */<br/>
                    padding: 20px; /* Inside spacing */<br/>
                    width: 80%; /* Element width */<br/>
                    height: 200px; /* Element height */<br/>
                    display: flex; /* Layout model */<br/>
                    position: relative; /* Positioning */
                  </code>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1 p-2 border bg-gray-100 text-center">Box 1</div>
                  <div className="flex-1 p-2 border bg-gray-100 text-center">Box 2</div>
                  <div className="flex-1 p-2 border bg-gray-100 text-center">Box 3</div>
                </div>
                <p className="text-sm text-gray-600">The boxes above use Flexbox layout</p>
              </TabsContent>
              
              <TabsContent value="effects">
                <div className="code-snippet mb-4">
                  <code>
                    border-radius: 8px; /* Rounded corners */<br/>
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Shadow */<br/>
                    opacity: 0.8; /* Transparency */<br/>
                    transform: rotate(5deg); /* Transformation */<br/>
                    transition: all 0.3s ease; /* Smooth changes */
                  </code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-lg text-center">
                    Shadow & Rounded
                  </div>
                  <div className="p-4 bg-white border hover:rotate-2 hover:scale-105 transition-transform text-center cursor-pointer">
                    Hover Me!
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Styling Your HTML Page</CardTitle>
          <CardDescription>
            Let's add CSS to our HTML example to make it visually appealing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">CSS Code:</h3>
              <div className="code-snippet">
                <code>
                  body {'{'}<br/>
                  &nbsp;&nbsp;font-family: 'Arial', sans-serif;<br/>
                  &nbsp;&nbsp;line-height: 1.6;<br/>
                  &nbsp;&nbsp;max-width: 800px;<br/>
                  &nbsp;&nbsp;margin: 0 auto;<br/>
                  &nbsp;&nbsp;padding: 20px;<br/>
                  &nbsp;&nbsp;background-color: #f9fafb;<br/>
                  {'}'}<br/><br/>
                  
                  h1 {'{'}<br/>
                  &nbsp;&nbsp;color: #3b82f6;<br/>
                  &nbsp;&nbsp;border-bottom: 2px solid #3b82f6;<br/>
                  &nbsp;&nbsp;padding-bottom: 10px;<br/>
                  {'}'}<br/><br/>
                  
                  h2 {'{'}<br/>
                  &nbsp;&nbsp;color: #4b5563;<br/>
                  {'}'}<br/><br/>
                  
                  ul {'{'}<br/>
                  &nbsp;&nbsp;background-color: white;<br/>
                  &nbsp;&nbsp;border-radius: 8px;<br/>
                  &nbsp;&nbsp;padding: 15px 15px 15px 40px;<br/>
                  &nbsp;&nbsp;box-shadow: 0 2px 4px rgba(0,0,0,0.1);<br/>
                  {'}'}<br/><br/>
                  
                  img {'{'}<br/>
                  &nbsp;&nbsp;max-width: 100%;<br/>
                  &nbsp;&nbsp;border-radius: 8px;<br/>
                  &nbsp;&nbsp;border: 1px solid #e5e7eb;<br/>
                  {'}'}<br/><br/>
                  
                  a {'{'}<br/>
                  &nbsp;&nbsp;color: #3b82f6;<br/>
                  &nbsp;&nbsp;text-decoration: none;<br/>
                  {'}'}<br/><br/>
                  
                  a:hover {'{'}<br/>
                  &nbsp;&nbsp;text-decoration: underline;<br/>
                  {'}'}
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Result:</h3>
              <div className="border p-6 rounded-md bg-gray-50 font-sans">
                <h1 className="text-2xl font-bold mb-2 text-lab-blue border-b-2 border-lab-blue pb-2">Welcome to My Page</h1>
                <p className="mb-4">This is my first web page.</p>
                
                <h2 className="text-xl font-bold mb-2 text-gray-600">About Me</h2>
                <p className="mb-4">I am learning HTML.</p>
                
                <h2 className="text-xl font-bold mb-2 text-gray-600">My Favorite Foods</h2>
                <ul className="list-disc pl-6 mb-4 bg-white p-4 rounded-md shadow-sm">
                  <li>Pizza</li>
                  <li>Ice Cream</li>
                  <li>Chocolate</li>
                </ul>
                
                <div className="w-32 h-32 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center mb-4">
                  <span className="text-gray-600">Photo placeholder</span>
                </div>
                
                <a href="#" className="text-lab-blue hover:underline">Visit Example.com</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CssSection;

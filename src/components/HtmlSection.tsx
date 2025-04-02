
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const HtmlSection = () => {
  const [showImage, setShowImage] = useState(true);
  
  return (
    <div className="animate-slide-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>HTML Basics</CardTitle>
            <CardDescription>
              HTML (HyperText Markup Language) is the standard markup language for creating web pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Key Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>HTML documents have a hierarchical structure</li>
              <li>Elements are defined by tags</li>
              <li>Tags can contain attributes for additional information</li>
              <li>Elements can be nested inside other elements</li>
            </ul>
            
            <div className="mb-4">
              <button 
                className="lab-button"
                onClick={() => setShowImage(!showImage)}
              >
                {showImage ? "Hide Image" : "Show Image"}
              </button>
            </div>
            
            {showImage && (
              <div className="border rounded-md p-4 bg-gray-50">
                <img 
                  src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" 
                  alt="HTML code on screen" 
                  className="rounded-md w-full h-auto"
                />
                <p className="text-center text-sm text-gray-500 mt-2">HTML code example</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>HTML Elements</CardTitle>
            <CardDescription>
              Learn about different HTML elements and their purposes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="structure">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="structure">Structure</TabsTrigger>
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="links">Links & Media</TabsTrigger>
              </TabsList>
              
              <TabsContent value="structure" className="space-y-4">
                <div className="code-snippet">
                  <code>
                    &lt;!DOCTYPE html&gt;<br/>
                    &lt;html&gt;<br/>
                    &nbsp;&nbsp;&lt;head&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;<br/>
                    &nbsp;&nbsp;&lt;/head&gt;<br/>
                    &nbsp;&nbsp;&lt;body&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Content goes here --&gt;<br/>
                    &nbsp;&nbsp;&lt;/body&gt;<br/>
                    &lt;/html&gt;
                  </code>
                </div>
                <p>Every HTML document needs these basic structural elements.</p>
              </TabsContent>
              
              <TabsContent value="text">
                <ul className="space-y-2">
                  <li><code>&lt;h1&gt; - &lt;h6&gt;</code>: Headings</li>
                  <li><code>&lt;p&gt;</code>: Paragraph</li>
                  <li><code>&lt;strong&gt;</code>: Bold text</li>
                  <li><code>&lt;em&gt;</code>: Italic text</li>
                  <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: Lists</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="links">
                <div className="space-y-4">
                  <p>
                    <code>&lt;a href="url"&gt;Link text&lt;/a&gt;</code>: Creates a hyperlink
                  </p>
                  <p>
                    <code>&lt;img src="image.jpg" alt="description"&gt;</code>: Displays an image
                  </p>
                  <p>
                    <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>: Embed media content
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h4 className="font-semibold mb-2">Try It:</h4>
              <p className="mb-2">Elements on this page include:</p>
              <ul className="list-disc pl-6">
                <li>Headings (<code>&lt;h1&gt;</code>, <code>&lt;h3&gt;</code>)</li>
                <li>Paragraphs (<code>&lt;p&gt;</code>)</li>
                <li>Images (<code>&lt;img&gt;</code>)</li>
                <li>Lists (<code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>)</li>
                <li>Buttons (created with <code>&lt;button&gt;</code>)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Building Your First HTML Page</CardTitle>
          <CardDescription>
            Let's create a simple HTML page with multiple elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">HTML Code:</h3>
              <div className="code-snippet">
                <code>
                  &lt;!DOCTYPE html&gt;<br/>
                  &lt;html&gt;<br/>
                  &nbsp;&nbsp;&lt;head&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;My First Web Page&lt;/title&gt;<br/>
                  &nbsp;&nbsp;&lt;/head&gt;<br/>
                  &nbsp;&nbsp;&lt;body&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Welcome to My Page&lt;/h1&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This is my first web page.&lt;/p&gt;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;About Me&lt;/h2&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;I am learning HTML.&lt;/p&gt;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;My Favorite Foods&lt;/h2&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Pizza&lt;/li&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Ice Cream&lt;/li&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Chocolate&lt;/li&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="photo.jpg" alt="A photo of me"&gt;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;<br/>
                  &nbsp;&nbsp;&lt;/body&gt;<br/>
                  &lt;/html&gt;
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Result:</h3>
              <div className="border p-4 rounded-md bg-white">
                <h1 className="text-2xl font-bold mb-2">Welcome to My Page</h1>
                <p className="mb-4">This is my first web page.</p>
                
                <h2 className="text-xl font-bold mb-2">About Me</h2>
                <p className="mb-4">I am learning HTML.</p>
                
                <h2 className="text-xl font-bold mb-2">My Favorite Foods</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Pizza</li>
                  <li>Ice Cream</li>
                  <li>Chocolate</li>
                </ul>
                
                <div className="w-32 h-32 bg-gray-300 flex items-center justify-center mb-4">
                  <span className="text-gray-600">Photo placeholder</span>
                </div>
                
                <a href="#" className="text-blue-500 hover:underline">Visit Example.com</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlSection;

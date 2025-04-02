
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { useToast } from './ui/use-toast';

const JavaScriptSection = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [randomColor, setRandomColor] = useState('#3b82f6');
  const { toast } = useToast();
  
  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const showToast = () => {
    toast({
      title: "JavaScript Event",
      description: "This toast was triggered by a click event",
    });
  };
  
  const changeBackgroundColor = () => {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#10b981'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(newColor);
  };
  
  return (
    <div className="animate-slide-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>JavaScript Basics</CardTitle>
            <CardDescription>
              JavaScript is a programming language that enables interactive web pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Key Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Variables store data values</li>
              <li>Functions are blocks of code that perform tasks</li>
              <li>Events trigger code execution based on user actions</li>
              <li>DOM manipulation allows changing HTML elements</li>
            </ul>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <button 
                  className="lab-button w-full"
                  onClick={() => setShowAlert(true)}
                >
                  Show Alert
                </button>
              </div>
              <div>
                <button 
                  className="lab-button w-full"
                  onClick={showToast}
                >
                  Show Toast
                </button>
              </div>
            </div>
            
            <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>JavaScript Alert</AlertDialogTitle>
                  <AlertDialogDescription>
                    This is a custom alert created with JavaScript!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interactive Examples</CardTitle>
            <CardDescription>
              See JavaScript in action with these interactive demos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="counter">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="counter">Counter</TabsTrigger>
                <TabsTrigger value="dom">DOM Manipulation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="counter" className="space-y-4">
                <div className="code-snippet">
                  <code>
                    // Counter example<br/>
                    const [count, setCount] = useState(0);<br/><br/>
                    
                    function incrementCounter() {'{'}<br/>
                    &nbsp;&nbsp;setCount(prevCount => prevCount + 1);<br/>
                    {'}'}
                  </code>
                </div>
                
                <div className="flex flex-col items-center p-6 border rounded-md bg-white">
                  <div className="text-6xl font-bold mb-4">{count}</div>
                  <button 
                    className="lab-button"
                    onClick={incrementCounter}
                  >
                    Increment
                  </button>
                </div>
              </TabsContent>
              
              <TabsContent value="dom" className="space-y-4">
                <div className="code-snippet">
                  <code>
                    // Change background color<br/>
                    function changeBackgroundColor() {'{'}<br/>
                    &nbsp;&nbsp;const colors = ['#3b82f6', '#8b5cf6', '#ec4899', ...];<br/>
                    &nbsp;&nbsp;const newColor = colors[Math.floor(Math.random() * colors.length)];<br/>
                    &nbsp;&nbsp;setRandomColor(newColor);<br/>
                    {'}'}
                  </code>
                </div>
                
                <div 
                  className="p-6 rounded-md text-white text-center transition-colors duration-300"
                  style={{ backgroundColor: randomColor }}
                >
                  <p className="mb-4">This element's background will change</p>
                  <button 
                    className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100"
                    onClick={changeBackgroundColor}
                  >
                    Change Color
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Adding JavaScript to Your Page</CardTitle>
          <CardDescription>
            Let's add interactivity to our web page with JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">JavaScript Code:</h3>
              <div className="code-snippet">
                <code>
                  // Wait for the document to be fully loaded<br/>
                  document.addEventListener('DOMContentLoaded', () => {'{'}<br/><br/>
                  
                  &nbsp;&nbsp;// Get references to HTML elements<br/>
                  &nbsp;&nbsp;const greetButton = document.getElementById('greetButton');<br/>
                  &nbsp;&nbsp;const nameInput = document.getElementById('nameInput');<br/>
                  &nbsp;&nbsp;const greetingOutput = document.getElementById('greetingOutput');<br/><br/>
                  
                  &nbsp;&nbsp;// Add click event to the button<br/>
                  &nbsp;&nbsp;greetButton.addEventListener('click', () => {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;// Get the value from the input field<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;const name = nameInput.value;<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;// Check if name is not empty<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;if (name.trim() !== '') {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Create personalized greeting<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;greetingOutput.textContent = `Hello, ${'{'}name{'}'}! Welcome to my page.`;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;greetingOutput.classList.add('active');<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert('Please enter your name!');<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                  &nbsp;&nbsp;{'}'});<br/>
                  {'}'});
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Live Example:</h3>
              <div className="border p-6 rounded-md bg-white">
                <div className="mb-4">
                  <label htmlFor="nameInput" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your name:
                  </label>
                  <input
                    type="text"
                    id="nameInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <button
                  id="greetButton"
                  className="lab-button mb-4"
                  onClick={() => {
                    if (name.trim() !== '') {
                      toast({
                        title: "Greeting",
                        description: `Hello, ${name}! Welcome to my page.`,
                      });
                    } else {
                      toast({
                        title: "Error",
                        description: "Please enter your name!",
                        variant: "destructive",
                      });
                    }
                  }}
                >
                  Greet Me
                </button>
                
                <div className="p-4 rounded-md bg-gray-50 text-center">
                  <p id="greetingOutput">
                    {name.trim() !== '' ? `Hello, ${name}! Welcome to my page.` : 'Enter your name and click the button!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JavaScriptSection;

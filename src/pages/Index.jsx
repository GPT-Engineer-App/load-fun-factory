import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CatBreed = ({ name, description }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const CatNameGenerator = () => {
  const [catName, setCatName] = useState("");
  const generateName = () => {
    const prefixes = ["Mr.", "Mrs.", "Sir", "Lady", "Captain", "Professor"];
    const names = ["Whiskers", "Fluffy", "Mittens", "Socks", "Luna", "Oreo", "Simba", "Nala"];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setCatName(`${randomPrefix} ${randomName}`);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Cat Name Generator</h3>
      <div className="flex items-center space-x-2">
        <Input value={catName} readOnly placeholder="Your cat's fancy name" />
        <Button onClick={generateName}>Generate Name</Button>
      </div>
    </div>
  );
};

const Index = () => {
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-purple-800">All About Cats</h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img src={src} alt={`Cat ${index + 1}`} className="mx-auto object-cover w-full h-[400px] rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
          independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
          characteristics and personalities.
        </p>

        <Tabs defaultValue="breeds" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
            <TabsTrigger value="care">Care</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="breeds">
            <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
            {catBreeds.map((breed, index) => (
              <CatBreed key={index} name={breed.name} description={breed.description} />
            ))}
          </TabsContent>
          <TabsContent value="care">
            <Card>
              <CardHeader>
                <CardTitle>Cat Care Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Provide a balanced diet</li>
                  <li>Regular vet check-ups</li>
                  <li>Keep the litter box clean</li>
                  <li>Offer mental and physical stimulation</li>
                  <li>Groom your cat regularly</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle>Fun Cat Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Cats sleep for about 70% of their lives</li>
                  <li>A group of cats is called a "clowder"</li>
                  <li>Cats have over 20 vocalizations</li>
                  <li>A cat's sense of smell is 14 times stronger than a human's</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <CatNameGenerator />
      </div>
    </div>
  );
};

export default Index;

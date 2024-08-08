import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Cat, Heart } from "lucide-react";

const CatBreed = ({ name, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Cat className="mr-2 h-5 w-5 text-purple-500" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const CatNameGenerator = () => {
  const [catName, setCatName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateName = () => {
    setIsGenerating(true);
    const prefixes = ["Mr.", "Mrs.", "Sir", "Lady", "Captain", "Professor", "Duke", "Duchess", "Lord", "Queen"];
    const names = ["Whiskers", "Fluffy", "Mittens", "Socks", "Luna", "Oreo", "Simba", "Nala", "Mochi", "Pepper"];
    const suffixes = ["the Great", "von Purrington", "Pawsome", "Meowgnificent", "Fluffinator"];

    setTimeout(() => {
      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      setCatName(`${randomPrefix} ${randomName} ${randomSuffix}`);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <motion.div
      className="mt-8 bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-purple-800">Cat Name Generator</h3>
      <div className="flex items-center space-x-2">
        <Input
          value={catName}
          readOnly
          placeholder="Your cat's fancy name"
          className="text-lg font-medium"
        />
        <Button
          onClick={generateName}
          disabled={isGenerating}
          className="bg-purple-600 hover:bg-purple-700"
        >
          {isGenerating ? "Generating..." : "Generate Name"}
        </Button>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [likes, setLikes] = useState(0);
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
    { name: "Bengal", description: "Wild-looking cats with a leopard-like coat pattern." },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and extroverted personality." },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Six_weeks_old_cat_%28aka%29.jpg/1200px-Six_weeks_old_cat_%28aka%29.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLikes((prevLikes) => prevLikes + Math.floor(Math.random() * 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-6xl font-bold mb-6 text-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          All About Cats
        </motion.h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.p
          className="text-xl text-gray-700 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
          independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
          characteristics and personalities.
        </motion.p>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-md mb-8 flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Heart className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold text-gray-800">{likes} cat lovers</span>
        </motion.div>

        <Tabs defaultValue="breeds" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
            <TabsTrigger value="care">Care</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="breeds">
            <h2 className="text-3xl font-semibold mb-6 text-purple-800">Popular Cat Breeds</h2>
            {catBreeds.map((breed, index) => (
              <CatBreed key={index} name={breed.name} description={breed.description} />
            ))}
          </TabsContent>
          <TabsContent value="care">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Cat Care Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide a balanced diet with high-quality cat food</li>
                  <li>Schedule regular vet check-ups and vaccinations</li>
                  <li>Keep the litter box clean and in a quiet location</li>
                  <li>Offer mental and physical stimulation with toys and play sessions</li>
                  <li>Groom your cat regularly to prevent hairballs and bond with them</li>
                  <li>Provide fresh water daily and clean the water bowl regularly</li>
                  <li>Create a safe environment with scratching posts and hiding spots</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Fun Cat Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cats sleep for about 70% of their lives</li>
                  <li>A group of cats is called a "clowder"</li>
                  <li>Cats have over 20 vocalizations, including the famous "meow"</li>
                  <li>A cat's sense of smell is 14 times stronger than a human's</li>
                  <li>Cats can jump up to six times their length</li>
                  <li>The first cat in space was a French cat named Felicette in 1963</li>
                  <li>Cats can't taste sweetness</li>
                  <li>A cat's hearing is much more sensitive than a human's or dog's</li>
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

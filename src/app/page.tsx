import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Share } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ColorCircles from "@/component/ColorCircles";
import QuantityInput from "@/component/QuantityInput";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <div className="float-left w-1/2 p-24">
        <Image
          src={"/image.png"}
          className="border w-full rounded-xl mb-5"
          alt="photo"
          width={600}
          height={500}
        />
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 rounded-lg border-gray-500">
                  <Image
                    src={"/image.png"}
                    alt="photo"
                    className=""
                    width={300}
                    height={200}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
      <div className="float-left w-1/2 p-24">
        <h1 className="scroll-m-20 text-xl font-normal tracking-tight lg:text-4xl mb-6">
          Bang & Olufsen BeoPlay A1 2nd Gen
        </h1>
        <div className="price flex justify-between items-center mb-6">
          <div>
            <h3 className="font-semibold text-xl">$210.0 - 250.00</h3>
          </div>
          <div className="flex gap-4">
            <Button className="border-black" variant="outline" size="icon">
              <Share />
            </Button>
            <Button className="border-black" variant="outline" size="icon">
              <Heart />
            </Button>
          </div>
        </div>
        <ColorCircles />
        <div className="selectors flex justify-evenly gap-4 mb-5">
          <Select>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="l">L</SelectItem>
              <SelectItem value="xl">Xl</SelectItem>
              <SelectItem value="s">S</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="aradions mb-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="shop-inform">
              <AccordionTrigger>Shipping information</AccordionTrigger>
              <AccordionContent>
                POWERFUL SOUND: Enjoy Bang & Olufsen Signature Sound when you’re
                on the move with a peak power of 2x140 watts contained in a
                sleek, small speaker.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="buy-section flex items-center justify-between gap-5">
          <div>
            <h5 className="font-light text-sm">Quantity (pieces)</h5>
          </div>

          <QuantityInput />

          <div className="flex-grow">
            <Button className="w-full">Add to cart</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

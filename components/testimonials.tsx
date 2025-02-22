import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Tech Innovators Inc.",
    image: "/placeholder-user-1.jpg",
    quote:
      "This platform helped me land my dream job! The AI-powered interview prep was incredibly helpful.",
  },
  {
    name: "Jane Smith",
    role: "HR Manager",
    company: "Global Solutions Ltd.",
    image: "/placeholder-user-2.jpg",
    quote:
      "We've significantly reduced our hiring time and improved candidate quality using this AI-driven platform.",
  },
  {
    name: "Alex Johnson",
    role: "Tech Startup Founder",
    company: "NextGen Innovations",
    image: "/placeholder-user-3.jpg",
    quote:
      "The real-world project evaluations have been a game-changer for our hiring process. Highly recommended!",
  },
];

const partnerLogos = [
  { name: "TechCorp", logo: "/placeholder-logo-1.png" },
  { name: "InnovateTech", logo: "/placeholder-logo-2.png" },
  { name: "FutureSoft", logo: "/placeholder-logo-3.png" },
  { name: "AI Solutions", logo: "/placeholder-logo-4.png" },
];

export function Testimonials() {
  return (
    <section className="w-full py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-black bg-opacity-50 border-gray-800 hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full grayscale"
                  />
                  <div>
                    <CardTitle className="text-white">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 w-32 h-16 rounded flex items-center justify-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

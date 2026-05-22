import { Brain,Palette,Sigma,Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Problem Solving",
    description:
      "Breaking down complex challenges into simple, logical solutions.",
  },
  {
    icon: Palette,
    title: "UI Craftsmanship",
    description:
      "Designing clean, modern interfaces with a focus on usability and aesthetics.",
  },
  {
    icon: Sigma,
    title: "Mathematical Thinking",
    description:
      "Using logic and analytical thinking to build precise and efficient systems.",
  },
  {
    icon: Sparkles,
    title: "User Experience",
    description:
      "Creating smooth, intuitive experiences that users enjoy interacting with.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Coding with creativity 
              <span className="font-serif italic font-normal text-white">
                {" "}
               and mathematical thinking
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
             <p>
  I'm a passionate girl in tech and software engineering student who enjoys
  building modern, responsive, and user-friendly web applications. I love
  combining creativity with problem-solving to turn ideas into interactive
  digital experiences.
</p>

<p>
  I specialize in React, Express.js,java, Tailwind CSS, and TypeScript, creating
  everything from sleek portfolio websites to dynamic web applications. Alongside
  my love for technology, I also enjoy mathematics and analytical thinking,
  which helps me approach challenges with logic and creativity.
</p>

<p>
  Beyond coding, I enjoy exploring new technologies, working on personal
  projects, learning new concepts, and growing as a woman in tech while sharing
  my journey and inspiring others along the way.
</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build digital experiences that are simple, functional, and delightful—made for users, and built with care for developers."
              </p>
            </div>
          </div>

          {/* Right Column - Hiights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
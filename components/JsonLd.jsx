const JsonLd = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nisal Mallawaarachchi",
    url: "https://nisalmallawaarachchi.vercel.app",
    image: "https://nisalmallawaarachchi.vercel.app/og-image.png",
    jobTitle: "Full-Stack Developer",
    description:
      "Backend-focused Full-Stack Engineer specializing in scalable APIs, system design, and AI-integrated applications. BSc (Hons) in Information Technology at SLIIT.",
    email: "nisalmallawarachchi@gmail.com",
    sameAs: [
      "https://github.com/NisalMallawaarachchi",
      "https://www.linkedin.com/in/nisal-mallawaarachchi-483466279/",
      "https://nisal.hashnode.dev/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Lanka Institute of Information Technology (SLIIT)",
    },
    knowsAbout: [
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Python",
      "PHP",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "System Design",
      "AI Integration",
      "Web Development",
      "Full-Stack Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nisal Mallawaarachchi — Portfolio",
    url: "https://nisalmallawaarachchi.vercel.app",
    description:
      "Portfolio of Nisal Mallawaarachchi, a backend-focused Full-Stack Developer specializing in scalable APIs, system design, and AI-integrated applications.",
    author: {
      "@type": "Person",
      name: "Nisal Mallawaarachchi",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default JsonLd;

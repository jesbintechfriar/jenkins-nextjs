import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header style={{ backgroundColor: "#333", color: "white", padding: "1rem" }}>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main style={{ padding: "1rem" }}>
        <section>
          <h2>About Me</h2>
          <p>Write about yourself here...</p>
        </section>
        <section>
          <h2>Projects</h2>
          {/* Display your projects here */}
        </section>
        <section>
          <h2>Contact</h2>
          {/* Add contact form or contact information */}
        </section>
      </main>
      <footer style={{ backgroundColor: "#333", color: "white", padding: "1rem" }}>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
      {/* Import and display an image */}
      <Image src="/profile.jpg" alt="Profile Picture" width={200} height={200} style={{ borderRadius: "50%", marginTop: "1rem" }} />
    </div>
  );
}

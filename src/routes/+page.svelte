<script lang="ts">
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import * as Avatar from '$lib/components/ui/avatar';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Github, Linkedin, Mail, Code2, FileJson, Database, GitFork, Container, Coffee } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let skillsContainer: HTMLElement;

onMount(()   => {
  if (skillsContainer) {
    const animation = skillsContainer.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-50%)` }
      ],
      {
        duration: 30000,
        iterations: Infinity
      }
    );

    skillsContainer.addEventListener('mouseenter', () => {
      animation.pause();
    });

    skillsContainer.addEventListener('mouseleave', () => {
      animation.play();
    });
  }
});

const skills = [
  { name: 'HTML/CSS', icon: Code2 },
  { name: 'TailwindCSS', icon: Code2 },
  { name: 'JavaScript', icon: FileJson },
  { name: 'SvelteKit', icon: Code2 },

  { name: 'Java', icon: Coffee },
  { name: 'MySQL', icon: Database },

  { name: 'Git', icon: GitFork },

  { name: 'Docker', icon: Container }
];

  </script>
  
  <svelte:head>
    <title>mathdesigns.app</title>
    <meta name="description" content="My own portfolio as a fullstack junior developper" />
  </svelte:head>
  
  <div class="container mx-auto px-4 py-8">
    <section id="hero" class="mb-16">
      <div class="flex flex-col items-center text-center">
        <Avatar.Root class="w-32 h-32 mb-4 animate-floating">
          <Avatar.Image src="/logo.png" alt="Mathéo" />
          <Avatar.Fallback>M</Avatar.Fallback>
        </Avatar.Root>
        <h1 class="text-4xl font-bold mb-2">Mathéo S.</h1>
        <p class="text-xl mb-4">Junior Full-stack Developer</p>
        <p class="max-w-2xl mb-6">Passionate about creating efficient and user-friendly web applications. Constantly learning and exploring new technologies to deliver innovative solutions.</p>
        <div class="flex space-x-4">
          <Button href="#contact">Contact Me</Button>
          <Button href="/resume.pdf" variant="outline">Download Resume</Button>
        </div>
      </div>
    </section>
  
    <section id="projects" class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card.Root>
          <Card.Header>
            <Card.Title>mathdesigns.app</Card.Title>
            <Card.Description>My portofolio website</Card.Description>
          </Card.Header>
          <Card.Content>
            <img src="/server.svg" alt="Project 1" class="w-full h-50 object-cover mb-4" />
            <p>
              <Badge>SvelteKit</Badge>
            <Badge>TailwindCSS</Badge></p>
          </Card.Content>
          <Card.Footer class="flex justify-between">
            <Button variant="outline" href="https://github.com/MathDesigns/mathdesigns.app">GitHub</Button>
          </Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>GoTrics</Card.Title>
            <Card.Description>Dead Simple System Monitoring in Go</Card.Description>
          </Card.Header>
          <Card.Content>
            <img src="/server.svg" alt="Project 2" class="w-full h-50 object-cover mb-4" />
            <p>
              <Badge>Go</Badge>
            <Badge>Gin</Badge>
            <Badge>SvelteKit</Badge>
            <Badge>TailwindCSS</Badge>
          </p>
          </Card.Content>
          <Card.Footer class="flex justify-between">
            <Button variant="outline" href="https://github.com/MathDesigns/gotrics-server">GitHub</Button>
          </Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>WIP</Card.Title>
            <Card.Description>A brief description of WIP</Card.Description>
          </Card.Header>
          <Card.Content>
            <img src="/server.svg" alt="Project 3" class="w-full h-50 object-cover mb-4" />
            <p>
              <Badge>WIP</Badge>
          </p>
          </Card.Content>
          <Card.Footer class="flex justify-between">
            <Button variant="outline" href="https://youtu.be/dQw4w9WgXcQ?si=aSCLp-1qat6MlQjv">GitHub</Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </section>
  
    <section id="skills" class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div class="relative overflow-hidden">
        <div bind:this={skillsContainer} class="flex space-x-4 animate-carousel">
          {#each [...skills, ...skills] as skill}
            <div class="flex-none">
              <Badge variant="outline" class="flex items-center space-x-2 px-3 py-1">
                <svelte:component this={skill.icon} class="w-4 h-4" />
                <span>{skill.name}</span>
              </Badge>
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <section id="contact" class="mb-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <Card.Root class="max-w-2xl mx-auto">
        <Card.Header>
          <Card.Title>Get in Touch</Card.Title>
          <Card.Description>Fill out the form below, and I'll get back to you as soon as possible.</Card.Description>
        </Card.Header>
        <Card.Content>
          <form class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium mb-1">Name</label>
                <Input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <Input type="email" id="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message</label>
              <Textarea id="message" placeholder="Your message here..."  required />
            </div>
            <Button type="submit" class="w-full">Send Message</Button>
          </form>
        </Card.Content>
      </Card.Root>
      <div class="mt-8 flex justify-center space-x-6">
        <a href="https://github.com/MathDesigns" target="_blank" rel="noopener noreferrer">
          <Github class="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/matheo-simeoni/" target="_blank" rel="noopener noreferrer">
          <Linkedin class="w-6 h-6" />
        </a>
        <a href="mailto:matheo.simeoni@protonmail.com">
          <Mail class="w-6 h-6" />
        </a>
      </div>
    </section>
  </div>
  <style>
    .animate-carousel {
      animation: carousel 30s linear infinite;
    }
  
    @keyframes carousel {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  
    .animate-carousel:hover {
      animation-play-state: paused;
    }

    .animate-floating {
    animation: floating 3s ease-in-out infinite;
  }

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  </style>
  
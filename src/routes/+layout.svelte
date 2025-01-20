<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import TerminalAnimation from '$lib/components/TerminalAnimation.svelte';
	import { onMount } from 'svelte';
	
	let { children } = $props();
	
	const isMobileMenuOpen = writable(false);
	
	const toggleMobileMenu = () => {
		isMobileMenuOpen.update((value) => !value);
	};
	
	function smoothScroll(e: Event) {
	  e.preventDefault();
	  const target = e.target as HTMLAnchorElement;
	  const id = target.getAttribute('href')?.slice(1);
	  if (id) {
		const element = document.getElementById(id);
		if (element) {
		  element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		  });
		}
	  }
	  if ($isMobileMenuOpen) {
		toggleMobileMenu();
	  }
	}
	
	onMount(() => {
	  const links = document.querySelectorAll('a[href^="#"]');
	  links.forEach(link => {
		link.addEventListener('click', smoothScroll);
	  });
	
	  return () => {
		links.forEach(link => {
		  link.removeEventListener('click', smoothScroll);
		});
	  };
	});
	</script>
	
	<svelte:head>
	  <link rel="preconnect" href="https://rsms.me/">
	  <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
	</svelte:head>
	
	<ModeWatcher />
	<TerminalAnimation />
	
	<div class="bg-background text-foreground font-sans">
	  <nav>
		<div class="mx-auto px-4 sm:px-6 lg:px-8">
		  <div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center">
			  <a href="/" class="flex-shrink-0">
				<img class="h-8 w-auto" src="/logo.png" alt="MathDesigns" />
			  </a>
			</div>
			<div class="hidden sm:ml-6 sm:block">
			  <div class="flex space-x-4">
				<a href="#hero" class="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">Home</a>
				<a href="#projects" class="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">Projects</a>
				<a href="#skills" class="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">Skills</a>
				<a href="#contact" class="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
			  </div>
			</div>
			<div class="flex items-center">
			  <Button on:click={toggleMode} variant="ghost" size="icon" class="mr-2">
				<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span class="sr-only">Toggle theme</span>
			  </Button>
			  <div class="sm:hidden">
				<Button on:click={toggleMobileMenu} variant="ghost" size="icon">
				  <Menu class="h-6 w-6" />
				  <span class="sr-only">Open main menu</span>
				</Button>
			  </div>
			</div>
		  </div>
		</div>
	
		<div class={$isMobileMenuOpen ? 'sm:hidden' : 'hidden sm:hidden'} id="mobile-menu">
		  <div class="space-y-1 px-2 pb-3 pt-2">
			<a href="#hero" class="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10">Home</a>
			<a href="#projects" class="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10">Projects</a>
			<a href="#skills" class="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10">Skills</a>
			<a href="#contact" class="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10">Contact</a>
		  </div>
		</div>
	  </nav>
	
	  <main class="min-h-screen">
		{@render children()}
	  </main>
	
	  <footer class="py-8">
		<div class="container mx-auto px-4">
		  <div class="flex flex-col items-center justify-center">
			<p class="text-sm">&copy; {new Date().getFullYear()} MathDesigns. All rights reserved.</p>
		  </div>
		</div>
	  </footer>
	</div>
	
	
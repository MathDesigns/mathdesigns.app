<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<div
	class="mx-auto my-auto flex min-h-screen max-w-screen-lg flex-col flex-wrap items-center justify-center space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
>
	<Card.Root>
		<Card.Header>
			<Card.Title>Project name</Card.Title>
			<Card.Description>
				Small project description to understand<br />
			</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
		<Card.Footer class="flex justify-between">
			<Button>Go !</Button>
      <Badge variant="outline">
        <span>Tech/Stack used</span>
      </Badge>
		</Card.Footer>
	</Card.Root>

    <Card.Root>
		<Card.Header>
			<Card.Title>Project name</Card.Title>
			<Card.Description>
				Small project description to understand<br />
			</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
		<Card.Footer class="flex justify-between">
			<Button>Go !</Button>
      <Badge variant="outline">
        <span>Tech/Stack used</span>
      </Badge>
		</Card.Footer>
	</Card.Root>

    <Card.Root>
		<Card.Header>
			<Card.Title>Project name</Card.Title>
			<Card.Description>
				Small project description to understand<br />
			</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
		<Card.Footer class="flex justify-between">
			<Button>Go !</Button>
      <Badge variant="outline">
        <span>Tech/Stack used</span>
      </Badge>
		</Card.Footer>
	</Card.Root>
</div>
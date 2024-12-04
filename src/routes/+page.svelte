<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
  import * as Avatar from '$lib/components/ui/avatar';
</script>

<div
	class="mx-auto my-auto flex min-h-screen max-w-96 sm:max-w-screen-md flex-col flex-wrap space-y-4 font-tech"
>
	<Card.Root>
		<Card.Header>
			<Card.Title>Mathéo
      </Card.Title>
			<Card.Description>
				Studying full-stack development
			</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
	</Card.Root>

  <Card.Root>
		<Card.Header>
      <Card.Title>Stack I learned
      </Card.Title>
			<Card.Description>
        <ul>
          <li>
            HTML/CSS/JS
          </li>
          <li>
            TailwindCSS
          </li>
          <li>
            Java
          </li>
          <li>
            SQL
          </li>
          <li>
            Git/Docker
          </li>
        </ul>
			</Card.Description>
      <br>
			<Card.Title>Techs I already used (not mastered)
      </Card.Title>
			<Card.Description>
        <ul>
          <li>
            C/C#/Kotlin
          </li>
          <li>
            SvelteKit
          </li>
          <li>
          </li>
        </ul>
			</Card.Description>
      <Card.Title>Techs I want to discover
      </Card.Title>
			<Card.Description>
        <ul>
          <li>
            Rust
          </li>
          <li>
            Go
          </li>
          <li>
            Python
          </li>
          <li>
            Slint
          </li>
        </ul>
			</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
		<Card.Footer class="flex justify-between">
      <Badge variant="outline">
        <span>"Works on my machine" certified</span>
      </Badge>
		</Card.Footer>
	</Card.Root>
</div>

<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<div
	class="mx-auto flex min-h-screen items-center max-w-96 flex-col flex-wrap sm:max-w-screen-md"
>
	<Carousel.Root class="w-full max-w-xs sm:max-w-xl">
		<Carousel.Content>
                <Carousel.Item>
						<Card.Root>
							<Card.Content class="flex items-center justify-center">
                                <iframe src="https://embed.tidal.com/playlists/09839824-4180-44ac-9d7c-b2d47c832148?disableAnalytics=true" width="700" height="750" allow="encrypted-media" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player" />                            </Card.Content>
						</Card.Root>
				</Carousel.Item>
				<Carousel.Item>
						<Card.Root>
							<Card.Content class="flex items-center justify-center">
								<iframe src="https://embed.tidal.com/playlists/2082acb0-2c7e-4d88-ba1d-48a24e70ef66?disableAnalytics=true" width="700" height="750" allow="encrypted-media" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player" />
							</Card.Content>
						</Card.Root>
				</Carousel.Item>
                <Carousel.Item>
						<Card.Root>
							<Card.Content class="flex items-center justify-center">
                                <iframe src="https://embed.tidal.com/playlists/1f6b3438-e2cc-460d-b8c1-0a0eef139e05?disableAnalytics=true" width="700" height="750" allow="encrypted-media" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player" />
                            </Card.Content>
						</Card.Root>
				</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>

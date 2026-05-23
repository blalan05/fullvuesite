import { onDestroy } from 'svelte';
import { derived } from 'svelte/store';
import type { Readable } from 'svelte/store';

/** Run `fn` whenever the tuple of store values changes; cleans up on destroy. */
export function watch(stores: Readable<unknown>[], fn: (values: unknown[]) => void): void {
	const unsubscribe = derived(stores, (values) => values).subscribe(fn);
	onDestroy(unsubscribe);
}

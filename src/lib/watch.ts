import { onDestroy } from 'svelte';
import { derived, type Subscriber } from 'svelte/store';

export function watch(deps: any, fn: Subscriber<unknown>) {
	const unsubscribe = derived(deps, values => values).subscribe(fn);
	onDestroy(unsubscribe);
}
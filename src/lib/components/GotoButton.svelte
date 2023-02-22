<script lang="ts">
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>


<button on:click={() => {
  dispatch("test-event");
  if (browser) {
    return goto("/test-route");
  }
}}>Goto Test</button>

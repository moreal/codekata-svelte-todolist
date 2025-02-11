<script>
  import { filteredTodos } from "$lib/data.svelte.js";
  import TodoItem from "./TodoItem.svelte";

  $effect(() => {
    $inspect(filteredTodos())
  });
</script>

<ul class="todos">
  {#each filteredTodos() as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</ul>

<style>
  .todos {
    list-style: none;
    padding: 0;
  }
</style>

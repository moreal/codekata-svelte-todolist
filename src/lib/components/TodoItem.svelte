<script lang="ts">
  import { fade } from "svelte/transition";
  import type { TodoData } from "$lib/data.svelte";

  interface Props {
    todo: TodoData;
  }

  const { todo }: Props = $props();
</script>

<li class="todo" transition:fade>
  <input class="todo-checkbox" type="checkbox" bind:checked={todo.done} />
  <div>
    <span class="todo-content">{todo.content}</span>
    <div class="todo-metadata">
      <span class="todo-createdat">Created at {todo.createdAt.toLocaleTimeString()}</span>
      /
      {#if todo.deadline}
        <span class="todo-deadline">{todo.deadline}</span>
      {:else}
        <span class="todo-deadline">No deadline</span>
      {/if}
    </div>
  </div>
</li>

<style>
  .todo {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px;
    border-bottom: 1px solid #ddd;

    div {
      display: flex;
      flex-direction: column;
    }

    .todo-content {
      margin-bottom: 2px;
    }

    .todo-metadata {
      display: flex;
      flex-direction: row;

      gap: 4px;

      color: #888;
      font-size: 12px;
    }
  }

  .todo:last-child {
    border: none;
  }

  input[type="checkbox"] {
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
</style>

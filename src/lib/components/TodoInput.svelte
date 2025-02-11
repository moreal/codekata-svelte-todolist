<script>
  import { insertTodo } from "$lib/data.svelte.js";
  import Button from "./Button.svelte";
  let input = $state("");

  function insert() {
    insertTodo(input);
    input = "";
  }
</script>

<div class="todo-insert-container">
  <input
    type="text"
    bind:value={input}
    onkeydown={(e) => {
      if (e.key === "Enter") insert();
    }}
  />
  <Button onclick={insert}>추가</Button>
</div>

<style>
  .todo-insert-container {
    display: flex;
  }

  input[type="text"] {
    width: calc(100% - 100px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>

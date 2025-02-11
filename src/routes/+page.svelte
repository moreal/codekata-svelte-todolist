<script lang="ts">
  import TodoList from "$lib/components/TodoList.svelte";
  import Header from "$lib/components/Header.svelte";
  import TodoInput from "$lib/components/TodoInput.svelte";
</script>

<div class="container">
  <Header />
  <hr />
  <main>
    <TodoInput />
    <TodoList />
  </main>
</div>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    max-height: 100vh;
  }

  hr {
    border: 1px solid #d0d0d0;
  }
</style>

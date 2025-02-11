<script>
  import { Search, Settings } from "lucide-svelte";

  import { setFilter } from "$lib/data.svelte";
  import Button from "./Button.svelte";
</script>

<header>
  <div class="menu">
    <h2>할 일 목록</h2>
    <!-- <div class="filter-list">
      <div class="filter">
        <input type="checkbox" oninput={e => {
          setFilter(e.currentTarget.checked);
        }} />
        <p>Show "DONE"</p>
      </div>
    </div> -->
    <div style="margin-left: auto; display: flex; gap: 8px">
      <Search />
      <Settings />
    </div>
  </div>
</header>

<style>
  .menu {
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
    margin-bottom: 10px;
  }

  .filter-list {
    flex: none;
    display: flex;
  }

  .filter {
    display: flex;
    align-items: center;
  }

  .filter p {
    margin-left: 5px;
  }
</style>

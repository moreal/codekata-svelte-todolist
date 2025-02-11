<script lang='ts'>
  const { children, ...props } = $props();
</script>

<button {...props}>{@render children?.()}</button>

<style>
  button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

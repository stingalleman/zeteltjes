<script>
  export let color;
  export let button1Function;
  export let button2Function;

  const colors = {
    red: ['bg-red-600', 'bg-red-800', 'text-red-600', 'hover:bg-red-50'],
    green: ['bg-green-600', 'bg-green-800', 'text-green-600', 'hover:bg-green-50']
  };
</script>

<div class={colors[color][0]}>
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg {colors[color][1]}">
          <slot name="icon" />
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="hidden md:inline">
            <div class="text-white">
              <slot name="text" />
            </div>
          </span>
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <button
          class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium {colors[
            color
          ][2]} bg-white {colors[color][3]}"
          on:click={button1Function}
        >
          <slot name="button1Text" />
        </button>
      </div>
      <div class="order-3 mt-2 ml-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <button
          class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium {colors[
            color
          ][2]} bg-white {colors[color][3]}"
          on:click={button2Function}
        >
          <slot name="button2Text" />
        </button>
      </div>
    </div>
  </div>
</div>

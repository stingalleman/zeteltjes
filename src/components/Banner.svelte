<script>
  export let color;
  export let button1Function;
  export let button2Function;
</script>

<div class="bg-{color}-600">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-{color}-800">
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
          class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-{color}-600 bg-white hover:bg-{color}-50"
          on:click={button1Function}
        >
          <slot name="button1Text" />
        </button>
      </div>
      <div class="order-3 mt-2 ml-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <button
          class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-{color}-600 bg-white hover:bg-{color}-50"
          on:click={button2Function}
        >
          <slot name="button2Text" />
        </button>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
    export let href: string;
    export let addClass: string = '';
</script>

<li>
    <a 
        {href} 
        class="relative px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-sm hover:shadow-lg active:scale-95 {addClass}"
    >
        <slot />
        <!-- Underline animation -->
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
</li>
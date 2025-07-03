<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import SwiperFaculty from '../Swipers/faculty.svelte';
    import dataFakultas from '../../data/faculties';

    let fakultasSection: HTMLElement;
    let elementsVisible = {
        ornamentTop: false,
        title: false,
        ornamentBottom: false,
        swiperContainer: false
    };

    onMount(() => {
        // Intersection Observer for animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Staggered animations
                        setTimeout(() => elementsVisible.ornamentTop = true, 100);
                        setTimeout(() => elementsVisible.title = true, 300);
                        setTimeout(() => elementsVisible.ornamentBottom = true, 500);
                        setTimeout(() => elementsVisible.swiperContainer = true, 700);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (fakultasSection) {
            observer.observe(fakultasSection);
        }

        return () => {
            if (fakultasSection) {
                observer.unobserve(fakultasSection);
            }
        };
    });
</script>

<section 
    bind:this={fakultasSection}
    class="section-padding-x pt-12 pb-24"
>
    <div class="container max-w-screen-xl">
        <!-- Header Section -->
        <div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
            {#if elementsVisible.ornamentTop}
                <img
                    src="/img/elements/ornamen-1.png"
                    alt="Ornamen Atas"
                    class="w-36 md:w-40 lg:w-54 animate-pulse-gentle"
                    in:scale={{ duration: 600, start: 0.7, delay: 0 }}
                />
            {/if}

            {#if elementsVisible.title}
                <h2
                    class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
                    in:fly={{ y: 30, duration: 800, delay: 0 }}
                >
                    Fakultas di Unsoed
                </h2>
            {/if}

            {#if elementsVisible.ornamentBottom}
                <img
                    src="/img/elements/ornamen-1.png"
                    alt="Ornamen Bawah"
                    class="ornament-bottom w-36 md:w-40 lg:w-54"
                    in:scale={{ duration: 600, start: 0.7, delay: 0 }}
                />
            {/if}
        </div>

        <!-- Swiper Container -->
        {#if elementsVisible.swiperContainer}
            <div 
                class="flex h-96 max-h-96 w-full overflow-hidden md:h-80 md:max-h-80 swiper-container"
                in:fade={{ duration: 800, delay: 0 }}
            >
                <SwiperFaculty fakultas={dataFakultas} />
            </div>
        {/if}
    </div>
</section>

<style>
    @keyframes pulse-gentle {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    @keyframes pulse-gentle-delayed {
        0%, 100% {
            transform: scale(1) scaleY(-1);
        }
        50% {
            transform: scale(1.05) scaleY(-1);
        }
    }

    .animate-pulse-gentle {
        animation: pulse-gentle 3s ease-in-out infinite;
    }

    .ornament-bottom {
        transform: scaleY(-1);
        animation: pulse-gentle-delayed 3s ease-in-out infinite 0.5s;
    }

    .swiper-container {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* Enhanced section styling */
    section {
        position: relative;
        overflow: hidden;
    }

    section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(to bottom, 
            rgba(226, 60, 100, 0.05),
            transparent
        );
        pointer-events: none;
    }
</style>
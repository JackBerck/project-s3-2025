<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Swiper from 'swiper/bundle';
    import 'swiper/swiper-bundle.css';

    const docsImage = [
        './img/documentations/documentation-1.webp',
        './img/documentations/documentation-2.webp',
        './img/documentations/documentation-3.webp',
        './img/documentations/documentation-4.webp',
        './img/documentations/documentation-5.webp',
        './img/documentations/documentation-6.webp',
        './img/documentations/documentation-7.webp',
        './img/documentations/documentation-8.webp',
        './img/documentations/documentation-9.webp',
        './img/documentations/documentation-10.webp',
        './img/documentations/documentation-11.webp',
        './img/documentations/documentation-12.webp'
    ];

    let documentationSwiper: Swiper;
    let documentationSection: HTMLElement;
    let sectionVisible = false;

    onMount(() => {
        // Intersection Observer for animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        sectionVisible = true;
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (documentationSection) {
            observer.observe(documentationSection);
        }

        return () => {
            if (documentationSection) {
                observer.unobserve(documentationSection);
            }
            if (documentationSwiper) {
                documentationSwiper.destroy(true, true);
            }
        };
    });

    // Function to initialize swiper after fade animation completes
    function initializeSwiper() {
        // Wait for fade animation to complete + small buffer
        setTimeout(() => {
            documentationSwiper = new Swiper('.documentation-card', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                initialSlide: 2,
                speed: 600,
                preventClicks: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 80,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true
                },
                on: {
                    click(params) {
                        documentationSwiper.slideTo(params.clickedIndex);
                    }
                }
            });
        }, 900); // 800ms fade + 100ms buffer
    }
</script>

<div bind:this={documentationSection} class="documentation-container">
    {#if sectionVisible}
        <div 
            class="swiper documentation-card"
            in:fade={{ duration: 800, delay: 0 }}
            on:introend={initializeSwiper}
        >
            <div class="swiper-wrapper">
                {#each docsImage as image, index}
                    <div
                        class="swiper-slide max-w-[240px] shadow-md sm:max-w-[360px] lg:max-w-[480px]"
                    >
                        <img src={image} alt="documentation s3 {index + 1}" />
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .documentation-container {
        width: 100%;
    }

    .swiper {
        width: 100%;
        padding: 50px 0;
    }

    .documentation-card {
        overflow: visible;
    }

    .swiper-slide {
        position: relative;
        aspect-ratio: 16/10;
        border-radius: 14px;
        transition: transform 0.3s ease;
    }

    .swiper-slide:hover {
        transform: translateY(-5px);
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
        user-select: none;
        transition: transform 0.3s ease, filter 0.3s ease;
    }

    .swiper-slide:hover img {
        transform: scale(1.05);
        filter: brightness(1.1);
    }

	/* Enhanced coverflow styling */
	.swiper-slide:global(.swiper-slide-active) {
		z-index: 2;
	}

	.swiper-slide:global(.swiper-slide-active) img {
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	/* Smooth transitions for coverflow */
	.swiper-slide {
		transition: transform 0.3s ease;
	}
</style>
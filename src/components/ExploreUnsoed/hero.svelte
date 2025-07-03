<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let heroSection: HTMLElement;
    let elementsVisible = {
        title: false,
        description: false,
        waveLeft: false,
        waveRight: false
    };

    onMount(() => {
        // Intersection Observer for animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Staggered animations
                        setTimeout(() => elementsVisible.title = true, 300);
                        setTimeout(() => elementsVisible.description = true, 600);
                        setTimeout(() => elementsVisible.waveLeft = true, 900);
                        setTimeout(() => elementsVisible.waveRight = true, 1100);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (heroSection) {
            observer.observe(heroSection);
        }

        return () => {
            if (heroSection) {
                observer.unobserve(heroSection);
            }
        };
    });
</script>

<section
    bind:this={heroSection}
    id="hero-explore-unsoed"
    class="section-padding-x relative bg-[url('/img/backgrounds/patung-kuda-halaman-rektor.webp')] bg-cover bg-center bg-no-repeat pt-48 pb-36 lg:pb-48 xl:pt-60 xl:pb-64"
>
    <div
        class="absolute inset-0 bg-transparent bg-gradient-to-b from-transparent from-30% to-[#4B4B4B]/100"
    ></div>
    
    <div class="relative z-10 container max-w-screen-xl">
        {#if elementsVisible.title}
            <h1
                class="text-rose-s3-base mb-2 text-center font-extrabold md:mb-4 md:text-left font-miskan"
                in:fly={{ y: 50, duration: 1000, delay: 0 }}
            >
                Universitas Jenderal Soedirman
            </h1>
        {/if}

        {#if elementsVisible.description}
            <p 
                class="text-light-base max-w-xl text-justify md:text-left"
                in:fly={{ y: 30, duration: 800, delay: 0 }}
            >
                Universitas Jenderal Soedirman (Unsoed) adalah institusi pendidikan unggulan di Purwokerto
                yang memadukan inovasi teknologi dan komitmen lingkungan dalam setiap aspek pendidikan. Dengan
                kampus hijau yang modern dan beragam program studi, Unsoed siap mencetak lulusan yang kreatif
                dan kompetitif di era digital. Temukan peluang akademis dan profesional yang menarik di
                Unsoed, pusat pendidikan yang berorientasi masa depan!
            </p>
        {/if}
    </div>

    <!-- Wave Elements -->
    {#if elementsVisible.waveLeft}
        <div 
            class="absolute left-0 z-10 bottom-36 md:-bottom-12 lg:-bottom-36 xl:-bottom-64 overflow-hidden"
            in:fly={{ y: -100, duration: 1000, delay: 0 }}
        >
            <img
                src="/img/elements/gelombang-nirwana.png"
                alt="Wave decoration left"
                class="w-full animate-wave-gentle"
            />
        </div>
    {/if}

    {#if elementsVisible.waveRight}
        <div 
            class="absolute left-0 z-10 bottom-36 md:-bottom-12 lg:-bottom-36 xl:-bottom-64 overflow-hidden"
            in:fly={{ y: 100, duration: 1000, delay: 0 }}
        >
            <img
                src="/img/elements/gelombang-nirwana.png"
                alt="Wave decoration right"
                class="w-full transform wave-right animate-wave-gentle-delayed"
            />
        </div>
    {/if}
</section>

<style>
    @keyframes wave-gentle {
        0%, 100% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(5px);
        }
    }

    @keyframes wave-gentle-delayed {
        0%, 100% {
            transform: scaleX(-1) translateX(0px);
        }
        50% {
            transform: scaleX(-1) translateX(-5px);
        }
    }

	.wave-right {
		transform: scaleX(-1);
	}

    .animate-wave-gentle {
        animation: wave-gentle 4s ease-in-out infinite;
    }

    .animate-wave-gentle-delayed {
        animation: wave-gentle-delayed 4s ease-in-out infinite 0.5s;
    }

    /* Enhanced background parallax effect */
    #hero-explore-unsoed {
        background-attachment: fixed;
        transition: background-position 0.1s ease-out;
    }

    @media (max-width: 768px) {
        #hero-explore-unsoed {
            background-attachment: scroll;
        }
    }

    /* Text shadow for better readability */
    h1 {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    p {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
</style>
<script lang="ts">
    import navigation from '../../data/navigation';

    const socialMedia = [
        {
            platform: 'Instagram',
            name: '@soedirmanstudentsummit',
            url: 'https://www.instagram.com/soedirmanstudentsummit/',
        },
        {
            platform: 'TikTok',
            name: '@soedirmanstudentsummit',
            url: 'https://www.tiktok.com/@soedirmanstudentsummit',
        },
        {
            platform: 'WhatsApp',
            name: 'Minsoed S3',
            url: 'https://wa.me/6285290431823',
        },
        {
            platform: 'Spotify',
            name: 'Soedirman Students Summit',
            url: 'https://open.spotify.com/user/317jtugbgtp3gi5jnrnj6pys265q?si=DYBG44kjRYmuD67OY95k2g',
        },
        {
            platform: 'YouTube',
            name: 'BEM Unsoed',
            url: 'https://www.youtube.com/@BEMUnsoed',
        },
        {
            platform: 'Email',
            name: 'soedirmanstudentsummit25@gmail.com',
            url: 'mailto:soedirmanstudentsummit25@gmail.com',
        }
    ];

    // Function to get SVG path for each platform
    function getSocialIcon(platform: string): string {
        const icons = {
            Instagram: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
            TikTok: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
            WhatsApp: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
            Spotify: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z",
            YouTube: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
            Email: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
        };
        return icons[platform] || '';
    }

    // Function to get viewBox for each platform
    function getViewBox(platform: string): string {
        const viewBoxes = {
            Instagram: "0 0 448 512",
            TikTok: "0 0 448 512", 
            WhatsApp: "0 0 448 512",
            Spotify: "0 0 496 512",
            YouTube: "0 0 576 512",
            Email: "0 0 512 512"
        };
        return viewBoxes[platform] || "0 0 448 512";
    }
</script>

<footer id="footer" class="bg-light-base text-dark-base section-padding-x py-4">
    <div class="mx-auto max-w-screen-xl">
        <div
            class="mb-4 flex flex-wrap justify-between gap-4 border-b border-gray-200 pb-8 md:grid md:grid-cols-4 lg:flex lg:flex-wrap lg:gap-8"
        >
            <div class="max-w-sm md:col-span-4 md:max-w-none lg:col-span-1 lg:max-w-sm">
                <a href="/" class="mb-4 flex items-center gap-4" aria-label="Soedirman Student Summit">
                    <img src="/logo.png" class="w-16" alt="S3 Logo" />
                    <div class="flex flex-col">
                        <span class="big-font-size font-semibold">Soedirman Student Summit</span>
                        <small>Universitas Jenderal Soedirman</small>
                    </div>
                </a>
                <p class="small-font-size block text-gray-700">
                    Soedirman Student Summit (S3) adalah acara tahunan Unsoed untuk menyambut mahasiswa baru
                    dan memperkenalkan kehidupan kampus.
                </p>
            </div>
            
            <div class="max-w-sm lg:max-w-sm">
                <h5 class="mb-2 font-semibold">Tautan Cepat</h5>
                <ul class="flex flex-col gap-1">
                    {#each navigation as route}
                        {#if route.type === 'link'}
                            <li>
                                <a href={route.href} class="footer-link">
                                    {route.title}
                                </a>
                            </li>
                        {:else if route.type === 'dropdown' && route.submenu}
                            {#each route.submenu as item}
                                <li>
                                    <a href={item.href} class="footer-dropdown-link">
                                        {item.title}
                                    </a>
                                </li>
                            {/each}
                        {/if}
                    {/each}
                </ul>
            </div>
            
            <div class="max-w-sm lg:max-w-sm">
                <h5 class="mb-2 font-semibold">Sosial Media</h5>
                <ul class="flex gap-4 flex-wrap">
                    {#each socialMedia as social}
                        <li>
                            <a href={social.url} target="_blank" aria-label="{social.platform} - {social.name}">
                                <svg
                                    class="footer-social-media-link"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox={getViewBox(social.platform)}
                                >
                                    <path d={getSocialIcon(social.platform)} />
                                </svg>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
            
            <div class="max-w-sm md:col-span-2 lg:col-span-1 lg:max-w-sm">
                <h5 class="mb-2 font-semibold">Alamat</h5>
                <p class="small-font-size text-gray-700">
                    Jl. Profesor DR. HR Boenyamin No.708, Dukuhbandong, Grendeng, Kec. Purwokerto Utara,
                    Kabupaten Banyumas, Jawa Tengah 53122
                </p>
            </div>
        </div>
        
        <p class="text-center text-xs text-gray-700">
            © 2025 Soedirman Student Summit - Universitas Jenderal Soedirman
        </p>
    </div>
</footer>

<style>
    .footer-link {
        color: #6b7280;
        font-size: 0.875rem;
        transition: color 0.2s;
    }

    .footer-link:hover {
        color: #ef4444;
    }

    .footer-dropdown-link {
        color: #6b7280;
        font-size: 0.875rem;
        transition: color 0.2s;
    }

    .footer-dropdown-link:hover {
        color: #ef4444;
    }

    .footer-social-media-link {
        width: 1.5rem;
        height: 1.5rem;
        color: #6b7280;
        transition: color 0.2s, transform 0.2s;
    }

    .footer-social-media-link:hover {
        color: #ef4444;
        transform: scale(1.1);
    }
</style>
<template>
    <div class="grid h-screen place-items-center bg-white dark:bg-slate-700">
        <div class="mx-auto max-w-xs sm:max-w-7xl">
            <main class="sm:flex">
                <p
                    class="text-4xl font-bold tracking-tight text-green-600 sm:text-5xl"
                >
                    404
                </p>
                <div class="sm:ml-6">
                    <div class="sm:border-l sm:border-slate-200 sm:pl-6">
                        <h1
                            class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
                        >
                            Page not found
                        </h1>
                        <p class="mt-1 text-base text-slate-300">
                            Please check the URL in the address bar and try
                            again.
                        </p>
                    </div>
                    <div
                        class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
                    >
                        <nuxt-link to="/" class="btn btn-primary"
                            >Go back home</nuxt-link
                        >
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

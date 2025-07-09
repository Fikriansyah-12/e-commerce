<template>
  <div class="bg-white container">
    <div class="pt-6 grid grid-cols-2">
      <!-- Image gallery -->
      <div class="mx-auto">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
          alt="Two each of gray, white, and black shirts laying flat."
          class="aspect-square rounded-lg max-lg:hidden"
        />
      </div>

      <!-- Product info -->
      <div class="mx-auto px-4">
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Basic Tee 6-Pack
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3">
          <p class="text-3xl tracking-tight text-gray-900">$192</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <Iconify icon="emojione:star" class="w-5 h-5" />
              <a
                href="#"
                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >117 reviews</a
              >
            </div>
          </div>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
          <div>
            <div class="space-y-6">
              <p class="text-base text-gray-900">
                The Basic Tee 6-Pack allows you to fully express your vibrant personality
                with three grayscale options. Feeling adventurous? Put on a heather gray
                tee. Want to be a trendsetter? Try our exclusive colorway:
                &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our
                white tee has you covered.
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400">
                  <span class="text-gray-600">Hand cut and sewn locally</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">Dyed with our proprietary colors</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">Pre-washed &amp; pre-shrunk</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="space-y-6">
              <p class="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray Basic Tees.
                Sign up for our subscription service and be the first to get new, exciting
                colors, like our upcoming &quot;Charcoal Gray&quot; limited release.
              </p>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

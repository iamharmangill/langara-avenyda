<template>
  <div id="carousel" class="pl-5">
    <b-carousel id="testimonials"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#777"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-blank img-alt="Blank image">
        <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1 mb-5" />
        <h4>John Doe</h4>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-alt="Blank image">
        <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1 mb-5" />
        <h4>Christine Stevenson</h4>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-alt="Blank image">
        <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1 mb-5" />
        <h4>Phil Davies</h4>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-alt="Blank image">
        <b-img rounded="circle" blank width="250" height="250" blank-color="#ddd" alt="img" class="m-1 mb-5" />
        <h4>Steve Lock</h4>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped></style>

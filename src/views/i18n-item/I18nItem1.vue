<template>
<div class="py-5">
  <h1>{{ $t('page1.pageTitle') }}</h1>

  <br><br><br>

<template class="row">
   <aside class="col-4">
      <ul>
        <li class="list-unstyled">
          {{ $t('nav.title') }}
        </li>
        <li>
          <a href="javascript:;">{{ $t('nav.chi') }}</a>
        </li>
        <li>
          <a href="javascript:;">{{ $t('nav.eng') }}</a>
        </li>
        <li>
          <a href="javascript:;">{{ $t('nav.personalCenter') }}</a>
        </li>
        <li>
          <a href="javascript:;">{{ $t('nav.logout') }}</a>
        </li>
      </ul>
   </aside>

  <main class="col-8">
    <h2>{{ $t('page1.main.title') }}</h2>
    <p>
      {{ $t('page1.main.content') }}
    </p>
  </main>
 </template>

</div>

</template>
<script>
export default {
  components: {
  },

  data () {
    return {
    }
  },

  watch: {
  },

  methods: {
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope></style>

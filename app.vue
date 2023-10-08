<template>
  <header>
    <div class="line" />
    <Logo />
    <h1>i19</h1>
    <h2>{{ useTranslate('title') }}</h2>
  </header>

  <main>
    <section>
      <h3>{{ useTranslate('languages') }}</h3>
      <div class="buttons">
        <button @click="useChangeLocalization('en')">en</button>
        <button @click="useChangeLocalization('cs')">cs</button>
      </div>
    </section>

    <section>
      <h3>{{ useTranslate('current-page') }}</h3>
      <NuxtPage />
    </section>
    <section>
      <h3>Routes</h3>

      <div class="route">
        <NuxtLink :to="useTranslateRoute('index')">{{ useTranslateRoute('index') }}</NuxtLink>
        <code>useTranslateRoute('index')</code>
      </div>

      <div class="route">
        <NuxtLink :to="useTranslateRoute('items')">{{ useTranslateRoute('items') }}</NuxtLink>
        <code>useTranslateRoute('items')</code>
      </div>

      <div class="route">
        <NuxtLink :to="useTranslateRoute('items', { query: { search: 'all' } })">{{ useTranslateRoute('items', { query: { search: 'all' } }) }}</NuxtLink>
        <code>useTranslateRoute('items', { query: { search: 'all' } })</code>
      </div>

      <div class="route">
        <NuxtLink :to="useTranslateRoute('items-id', { params: { id: 1 } })">{{ useTranslateRoute('items-id', { params: { id: 1 } }) }}</NuxtLink>
        <code>useTranslateRoute('items-id', { params: { id: 1 } })</code>
      </div>

      <div class="route">
        <NuxtLink :to="useTranslateRoute('items-id-properties', { params: { id: 1 } })">{{ useTranslateRoute('items-id-properties', { params: { id: 1 } }) }}</NuxtLink>
        <code>useTranslateRoute('items-id-properties', { params: { id: 1 } })</code>
      </div>
    </section>

    <section class="translations">
      <h3>{{ useTranslate('translations') }}</h3>

      <div class="translation">
        <span>{{ useTranslate('normal-text') }}</span>
        <code>useTranslate('normal-text')</code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-variable', { variable: 'car' }) }}</span>
        <code>useTranslate('text-with-variable', { variable: 'car' })</code>
      </div>

      <div class="translation">
        <span v-html="useTranslate('text-with-html-strong-tag')"></span>
        <code>useTranslate('text-with-html-strong-tag')</code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-inflection-by-quantity', { quantity: 0 }, 0) }}</span>
        <code>
          useTranslate('text-with-inflection-by-quantity', { quantity: 0 }, 0) }}
        </code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-inflection-by-quantity', { quantity: 1 }, 1) }}</span>
        <code>
          useTranslate('text-with-inflection-by-quantity', { quantity: 1 }, 1) }}
        </code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-inflection-by-quantity', { quantity: 2 }, 2) }}</span>
        <code>
          useTranslate('text-with-inflection-by-quantity', { quantity: 1 }, 1) }}
        </code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-inflection-by-quantity', { quantity: 3 }, 3) }}</span>
        <code>
          useTranslate('text-with-inflection-by-quantity', { quantity: 3 }, 3) }}
        </code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-inflection-by-quantity', { quantity: 4 }, 4) }}</span>
        <code>
          useTranslate('text-with-inflection-by-quantity', { quantity: 4 }, 4) }}
        </code>
      </div>

      <div class="translation">
        <span>{{ useTranslate('text-with-inflection-by-quantity', { quantity: 5 }, 5) }}</span>
        <code>
          useTranslate('text-with-inflection-by-quantity', { quantity: 5 }, 5) }}
        </code>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
onMounted(() => {
  //history.scrollRestoration = "manual"
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

html {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  background: #000000;
  padding: 1rem .2rem;
}

header {
  position: relative;
}

.line {
  width: 100%;
  border-top: 1px solid #dd2786;
  position: absolute;
  top: 37px;
  z-index: -1;
}

h1 {
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
}

h2 {
  color: #bdbdbd;
  text-align: center;
  font-size: 1.8rem;
  margin: 0 0 2rem 0;
  letter-spacing: 2px;
}

h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
}

section {
  background: #18181b;
  max-width: 960px;
  padding: 1.5rem 2rem;
  margin: 0 auto 1.5rem auto;
  border-radius: 1rem;
}

.buttons {
  display: flex;
  gap: .8rem;
}

button {
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  color: #dd2786;
  background: #1f1522;
  border: 1px solid #dd2786;
  border-radius: 10px;
  cursor: pointer;
  transition: background .2s;

  &:hover {
   background: #2d1c32;
  }
}

a {
  color: #dd2786;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

code, span {
  color: #bdbdbd;
}

code {
  display: block;
  padding: 0.8rem 1rem;
  background: #222226;
  border-radius: 10px;
}

.route {
  margin-bottom: 1rem;

  a {
    display: block;
    margin-bottom: .5rem;
    margin-left: 1rem;
  }
}

.translation {
  margin-bottom: 1rem;

  span {
    display: block;
    margin-bottom: .5rem;
    margin-left: 1rem;
  }
}
</style>

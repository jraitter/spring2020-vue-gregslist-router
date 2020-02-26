<template>
  <div id="app">
    <div class="row">
      <div class="col text-center">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'CarsHome' }"
              :class="{
                active: $route.name == 'CarsHome' || $route.name == 'CarDetails'}"
            >Cars</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'JobsHome' || $route.name == 'JobDetails' }"
            >Jobs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'HousesHome' }">Houses</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  /* background-color: green; */
}

.active {
  color: green;
}
</style>

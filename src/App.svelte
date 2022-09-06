<script>
  import { Router, Link, Route } from "svelte-routing";
  import AboutPage from "./lib/aboutPage.svelte";
  import HomePage from "./lib/homePage.svelte";
  import NavigationBar from "./lib/navigationBar.svelte";
  import Timeplan from "./lib/timeplan.svelte";

  var documentTitle = document.title + " - ";

  function titleMarquee() {
    document.title = documentTitle =
      documentTitle.substring(1) + documentTitle.substring(0, 1);
    setTimeout(titleMarquee, 200);
  }

  titleMarquee();
</script>

<main>
  <Router url="">
    <NavigationBar />
    <div class="routes">
      <Route path="/">
        <HomePage />
      </Route>

      <Route path="about">
        <AboutPage />
      </Route>

      <Route path="timeplan">
        <Timeplan />
      </Route>

      <Route>404 not found</Route>
    </div>
  </Router>
</main>

<style>
</style>

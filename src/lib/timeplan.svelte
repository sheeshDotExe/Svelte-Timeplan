<script>
  import { onMount, onDestroy } from "svelte";
  let options = [{ id: 0, value: "ST2A" }];
  let ukeOptions = [];

  let selectedKlasse = "default option";
  let textFieldValue = "";
  let selectedUke;
  let currentDay;
  let currentTime;
  let highlightDay = true;
  let highlightHour = true;
  let sizeKonstant = 79;
  let hamburgerChecked = false;

  let colorCodes = {
    KRØ: "#4e79a7",
    "MR1+1": "#f28e2b",
    Valgfag: "#e15759",
    NOR: "#76b7b2",
    FY1: "#59a14f",
    Språk: "#edc948",
    KJ1: "#b07aa1",
    "STU+2": "#9c755f",
    "STU+1": "#9c755f",
    "KLA+1": "#9c755f",
    HIS: "#ff9da7",
    "STU+1-UOFFISIELL": "rgba(156, 117, 95, 0.5)",
  };

  let timeKonstant = 7.5;

  let showTimePlanData = false;

  $: timeplanInfo = null;

  function hideDefault() {
    let defaultText = document.getElementById("default-timeplan-text");
    let timeplanElement = document.getElementById("timeplan-generator");
    defaultText.style.display = "none";
    timeplanElement.style.display = "block";
  }

  function showDefault() {
    let defaultText = document.getElementById("default-timeplan-text");
    let timeplanElement = document.getElementById("timeplan-generator");
    defaultText.style.display = "block";
    timeplanElement.style.display = "none";
  }

  async function generateTimePlan(event) {
    setCookie("timeplanvalg", selectedKlasse, 1);
    if (textFieldValue !== "" || selectedKlasse !== "default option") {
      if (textFieldValue !== "") {
        selectedKlasse = textFieldValue;
      }
      await fetch(`api/getTimeplan/${selectedKlasse}`)
        .then((response) => response.json())
        .then((data) => {
          timeplanInfo = [...JSON.parse(data["response"])["content"]];
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      hideDefault();
      showTimePlanData = true;
      reRender();
    } else {
      showDefault();
      showTimePlanData = false;
    }
  }

  function calculateSize(start, slutt, kode, check) {
    let size = slutt - start;
    let realSize = (size / timeKonstant) * sizeKonstant;
    let string;
    if (check) {
      string = `${calculatePosition(
        start,
        0
      )} max-height: ${realSize}vh; height: ${realSize}vh; background-color: ${
        colorCodes[kode]
      };`;
    } else {
      string = `${calculatePosition(
        start,
        0
      )} max-height: ${realSize}vh; height: ${realSize}vh;`;
    }

    return string;
  }

  function calculatePosition(start, offset) {
    if (window.innerWidth <= 450) {
      offset /= 2;
    }
    let realSize = ((start - 8.5) / timeKonstant) * sizeKonstant;
    return `position: absolute; top: ${realSize - offset}vh;`;
  }

  function getFirstDayOfWeek(d) {
    // 👇️ clone date object, so we don't mutate it
    const date = new Date(d);
    const day = date.getDay(); // 👉️ get day of week

    // 👇️ day of month - day of week (-6 if Sunday), otherwise +1
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);

    return new Date(date.setDate(diff));
  }

  function getDateOfWeek(w, y) {
    var d = 3 + (w - 1) * 7; // 1st of January + 7 days for each week

    return new Date(y, 0, d);
  }

  function getDatoValue(index) {
    const values = selectedUke.split(" ");
    let date = getDateOfWeek(parseInt(values), 2022);
    date.setDate(date.getDate() + index);
    return `${date.getDate()}.${date.getMonth() + 1}`;
  }

  function reRender() {
    if (showTimePlanData) {
      timeplanInfo = timeplanInfo;
    }
  }

  function getDayHighlight(index) {
    if (highlightDay) {
      if (index === currentDay) {
        return "background-color:rgb(150, 150, 150);";
      }
      return "";
    }
  }

  function getHourHighlight(index) {
    if (index === currentDay) {
      let realSize = ((currentTime - 8.5) / timeKonstant) * sizeKonstant;
      return `position: absolute; top: ${realSize}vh;`;
    }
    return "display: none;";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function loadCookieInfo() {
    let val = getCookie("timeplanvalg");
    if (val !== "") {
      selectedKlasse = val;
    }
  }

  function loadRefreshInfo() {
    let val = getCookie("refresh");
    if (val === "" || val === "True") {
      setCookie("refresh", "False", 365);
      location.reload();
      return;
    } else {
      setCookie("refresh", "True", 365);
    }
  }

  function updateTimeMarker() {
    if (getHourHighlight) {
      let timeElements = document.getElementsByClassName("time-marker");
      //console.log(timeElements);
      if (currentDay <= 4) {
        timeElements[currentDay].style.top = `${
          ((currentTime - 8.5) / timeKonstant) * sizeKonstant
        }vh`;
        changeCurrentTime();
      }
    }
  }

  function changeCurrentTime() {
    var currentDate = new Date();
    currentDay = currentDate.getDay() - 1;
    currentTime =
      currentDate.getHours() +
      (currentDate.getMinutes() + 1) / 60 +
      (currentDate.getSeconds() + 1) / 3600;
  }

  function initTimeVars() {
    for (let i = 0; i < 41; i++) {
      let week = ((i + 33) % 51) + 1;
      let date = getDateOfWeek(week, 2022);

      let secondDate = new Date(date);
      secondDate.setDate(date.getDate() + 4);

      ukeOptions.push({
        id: i,
        value: `${week} (${date.getDate()}.${
          date.getMonth() + 1
        }-${secondDate.getDate()}.${secondDate.getMonth() + 1})`,
      });
    }

    var currentDate = new Date();
    currentDay = currentDate.getDay() - 1;
    currentTime = currentDate.getHours() + (currentDate.getMinutes() + 1) / 60;

    var startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);

    let date = getDateOfWeek(weekNumber, 2022);

    let secondDate = new Date(date);
    secondDate.setDate(date.getDate() + 4);
    selectedUke = `${weekNumber} (${date.getDate()}.${
      date.getMonth() + 1
    }-${secondDate.getDate()}.${secondDate.getMonth() + 1})`;
  }

  function checkboxHandler() {
    const navbar = document.getElementsByClassName("options-input")[0];
    const strek1 = document.getElementsByClassName("strek1")[0];
    const strek3 = document.getElementsByClassName("strek3")[0];
    if (hamburgerChecked) {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
    console.log(hamburgerChecked);
  }

  initTimeVars();
  let func = setInterval(updateTimeMarker, 10000);

  onMount(async () => {
    loadCookieInfo();
    generateTimePlan(null);
  });

  onDestroy(() => {
    clearInterval(func);
  });
</script>

<div>
  <form class="input-form" on:submit|preventDefault={generateTimePlan}>
    <div class="main-input">
      <div class="main-buttons">
        <select bind:value={selectedKlasse} name="klasse" id="klasse">
          <option value="default option"> Velg klasse </option>
          {#each options as item, index (item.id)}
            <option value={item.value}>
              {item.value}
            </option>
          {/each}
        </select>

        <select
          name="klasse"
          bind:value={selectedUke}
          on:change={reRender}
          id="klasse"
        >
          <option value="default option"> Velg uke </option>
          {#each ukeOptions as item, index (item.id)}
            <option value={item.value}>
              {item.value}
            </option>
          {/each}
        </select>

        <input type="submit" value="Vis" />
      </div>

      <div class="hamburger-plass">
        <input
          type="checkbox"
          class="hamburger-box"
          bind:checked={hamburgerChecked}
          on:change={checkboxHandler}
        />
        <div class="hamburger-container">
          <div class="streker">
            <div class="hamburger-strek strek1" />
            <div class="hamburger-strek strek2" />
            <div class="hamburger-strek strek3" />
          </div>
        </div>
      </div>
    </div>

    <div class="options-input">
      <div class="align-right">
        <label for="highlight-day">Framhev dag</label>
        <input
          type="checkbox"
          name="highlight-day"
          bind:checked={highlightDay}
          on:change={reRender}
          id="highlight-day"
        />
      </div>
      <div class="align-right">
        <label for="highlight-hour">Framhev time</label>
        <input
          type="checkbox"
          name="highlight-hour"
          bind:checked={highlightHour}
          on:change={reRender}
          id="highlight-hour"
        />
      </div>

      <input
        type="text"
        bind:value={textFieldValue}
        id="klasse-text-field"
        name="klasse-text-field"
      />
    </div>
  </form>

  <div class="timeplan-space" />
  <div class="align-center">
    <div class="timeplan">
      <div class="timeplan-generator" id="timeplan-generator">
        <div class="uke-plan">
          {#if showTimePlanData}
            {#each timeplanInfo as dag, index (dag.id)}
              <div class="dag" style={getDayHighlight(index)}>
                <div class="dag-title">
                  <p>{dag.dag + " " + getDatoValue(index)}</p>
                </div>

                <div class="top-space" />

                {#if highlightHour}
                  <div style="position:relative;">
                    <div class="time-marker" style={getHourHighlight(index)} />
                  </div>
                {/if}

                <div class="timeplan-timer">
                  {#each dag.timerInfo as time, index2 (time.id)}
                    <div
                      class="time-box"
                      style={calculateSize(
                        time.start,
                        time.slutt,
                        time.klasseKode,
                        true
                      )}
                    >
                      <div class="time-info" />
                      {#if time.klasse}
                        <div class="time-klasse time-info">
                          {time.klasse}
                        </div>
                      {/if}

                      {#if time.klasseKode}
                        <div class="time-klasseKode time-info">
                          {time.klasseKode}
                        </div>
                      {/if}

                      {#if time.klasserom}
                        <div class="time-klasserom time-info">
                          {time.klasserom}
                        </div>
                      {/if}

                      {#if time.lærer}
                        <div class="time-lærer time-info">
                          {time.lærer}
                        </div>
                      {/if}
                      <div class="time-info" />
                    </div>
                    <div
                      class="time-start-tid"
                      style={calculatePosition(time.start, 1)}
                    >
                      <p>
                        {time.startDisplay}
                      </p>
                    </div>

                    <div
                      class="time-slutt-tid"
                      style={calculatePosition(time.slutt, 1)}
                    >
                      <p>{time.sluttDisplay}</p>
                    </div>
                    {#if index2 < dag.timerInfo.length - 1}
                      <div
                        style={calculateSize(
                          time.slutt,
                          dag.timerInfo[index2 + 1].start,
                          time.klasseKode,
                          false
                        )}
                      />
                    {/if}
                  {/each}
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </div>
      <div class="default-timeplan" id="default-timeplan-text">
        besserSoftware <p class="small-text">novasoftware fell off</p>
      </div>
    </div>
  </div>
</div>

<style>
  @media screen and (max-width: 900px) {
    .timeplan {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 450px) {
    .timeplan {
      font-size: 11px;
    }

    .time-box {
      flex-direction: column;
      font-size: 1.5em !important;
      font-weight: bold;
      gap: 0.1rem !important;
    }

    .time-info {
      max-height: 2vh !important;
      padding: 0 0 !important;
      margin: 0.1em auto 0 auto !important;
    }

    .time-start-tid,
    .time-slutt-tid {
      max-height: 1vh !important;
      height: 1vh !important;
      max-width: 4vw !important;
      width: 4vw !important;
      font-size: 1em !important;
    }

    .input-form {
      flex-direction: column;
    }

    .main-input {
      display: flex;
      align-content: space-between;
      width: 80vw;
    }

    .main-buttons {
      display: flex;
    }

    .options-input {
      display: none;
      flex-direction: column;
      margin-top: 1rem;
    }

    .hamburger-plass {
      display: flex !important;
      justify-items: center;
      align-items: center;
      gap: 2em;
    }

    .hamburger-strek {
      display: block !important;
    }

    .hamburger-container {
      display: flex !important;
      cursor: pointer;
    }

    .hamburger-box {
      display: block !important;
      opacity: 0;
      z-index: 1;
    }
  }

  .hamburger-container {
    display: none;
    flex-direction: column;
    width: 2em;
    height: 2em;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    justify-content: center;
    position: absolute;
    gap: 0.4rem;
    left: 0;
  }

  .streker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    position: relative;
    width: 2em;
    height: 2em;
  }

  .hamburger-strek {
    background: white;
    display: none;
    width: 2em;
    height: 0.3em;
    max-height: 0.3em;
    flex: 1;
    border-radius: 20%;
    transition-duration: 0.5s;
  }

  .hamburger-box {
    position: absolute;
    width: 2em;
    height: 2em;
    display: none;
    left: 0;
  }

  .strek1,
  .strek2,
  .strek3 {
    position: absolute;
  }

  .strek1 {
    top: 0.3em;
  }

  .strek3 {
    bottom: 0.3em;
  }

  .hamburger-box:checked + .hamburger-container .streker .strek1 {
    top: 0.85em;
    transform: rotate(405deg);
  }
  .hamburger-box:checked + .hamburger-container .streker .strek3 {
    bottom: 0.85em;
    transform: rotate(-405deg);
  }

  .hamburger-box:checked + .hamburger-container .streker .strek2 {
    opacity: 0;
  }
  .hamburger-plass {
    display: none;
    width: 2em;
    position: relative;
  }
  .input-form {
    display: flex;
    justify-content: space-between;
    align-items: space-around;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1.25rem;
  }

  .uke-plan {
    overflow: hidden;
    color: rgb(0, 0, 0);
    width: 97.5vw;
    background-color: rgb(185, 181, 181);
  }

  .timeplan-timer {
    position: relative;
  }

  .timeplan-generator {
    font-size: 1.25vw;
    margin: auto;
    line-height: normal;
  }

  .time-marker {
    width: 19.3vw;
    max-width: 19.3vw;
    height: 0.5vh;
    max-height: 0.5vh;
    background-color: white;
    z-index: 9;
  }

  .time-info {
    float: left;
    position: relative;
    max-height: 5vh;
    flex: 1;
    text-align: center;
    margin: auto;
    display: flex;
  }

  .time-start-tid {
    font-size: 0.65vw;
    max-width: 2vw;
    width: 2vw;
    height: 2vh;
    max-height: 2vh;
    background-color: rgb(165, 170, 170);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .time-slutt-tid {
    font-size: 0.65vw;
    max-width: 2vw;
    width: 2vw;
    height: 2vh;
    max-height: 2vh;
    background-color: rgb(165, 170, 170);
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    z-index: 10;
  }

  .time-slutt-tid p {
    margin: auto;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    position: absolute;
    bottom: 0vh;
  }

  .time-start-tid p {
    margin: auto;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    position: absolute;
    bottom: 0vh;
  }

  .time-box {
    border-style: solid;
    border-width: 0.5px;
    max-width: calc(19.5vw - 2px);
    border-right: none;
    border-left: none;
    width: 19.5vw;
    max-height: 10vh;
    height: 10vh;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    gap: 1rem;
    overflow: visible;
  }

  .top-space {
    width: 19.5vw;
    height: 9vh;
  }

  .dag {
    float: left;
    width: calc(19.5vw - 2px);
    height: 90vh;
    border-style: solid;
    border-width: 1px;
  }

  .dag-title {
    float: left;
    color: rgb(2, 2, 2);
    text-align: center;
    max-width: calc(19.5vw - 4px);
    max-height: 7vh;
    width: 19.5vw;
    height: 7vh;
    text-decoration: none;
    font-size: 2.5vw;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    display: flex;
  }

  .dag-title p {
    margin: auto;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    position: relative;
    bottom: 0vh;
  }

  .align-right {
    float: right;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 0px 50px;
    text-decoration: none;
    font-size: 10px;
    background-color: white;
    border-style: solid;
    border-width: 0.4px;
  }

  .small-text {
    font-size: 3vh;
  }

  .default-timeplan {
    font-size: 10vh;
    text-align: center;
    top: 50%;
    left: 30vw;
    position: absolute;
  }

  .align-center {
    width: 100%;
    text-align: center;
  }

  .timeplan {
    width: 97.5vw;
    height: 85vh;
    background-color: aqua;
    border-style: solid;
    border-width: 0.2px;
    border-color: black;
    margin: 0 auto;
    display: inline-block;
  }

  .timeplan-space {
    height: 1vh;
  }
</style>

<script>
    let options = [{ id: 0, value: "ST2A" }];
    let ukeOptions = [];

    let selectedKlasse = "default option";
    let textFieldValue = "";
    let selectedUke;
    let currentDay;
    let currentTime;
    let highlightDay = true;
    let highlightHour = true;

    let colorCodes = {
        KRØ: "rgb(3, 136, 252)",
        "MR1+1": "yellow",
        Valgfag: "grey",
        NOR: "purple",
        FY1: "rgb(199, 7, 4)",
        Språk: "green",
        KJ1: "rgb(153, 28, 26)",
        "STU+2": "rgb(105, 136, 209)",
        "STU+1": "rgb(105, 136, 209)",
        "KLA+1": "rgb(105, 136, 209)",
        HIS: "rgb(81, 240, 118)",
    };

    let timeKonstant = 7.5;

    let showTimePlanData = false;

    let timeplanInfo = [
        {
            id: 0,
            dag: "Mandag",
            dato: "29.8",
            timerInfo: [
                {
                    id: 0,
                    start: 8.5,
                    slutt: 10,
                    startDisplay: "08:30",
                    sluttDisplay: "10:00",
                    lærer: "Anders Bark",
                    klasse: "ST2A",
                    klasseKode: "KRØ",
                    klasserom: "225",
                },
                {
                    id: 1,
                    start: 10.5,
                    slutt: 12,
                    startDisplay: "10:30",
                    sluttDisplay: "12:00",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "MR1+1",
                    klasserom: "225",
                },
                {
                    id: 2,
                    start: 12.5,
                    slutt: 14.5,
                    startDisplay: "12:30",
                    sluttDisplay: "14:30",
                    lærer: "",
                    klasse: "ST2A",
                    klasseKode: "Valgfag",
                    klasserom: "225",
                },
                {
                    id: 3,
                    start: 14.75,
                    slutt: 16,
                    startDisplay: "14:45",
                    sluttDisplay: "16:00",
                    lærer: "Line Lindberg",
                    klasse: "ST2A",
                    klasseKode: "NOR",
                    klasserom: "225",
                },
            ],
        }, // mandag
        {
            id: 1,
            dag: "Tirsdag",
            dato: "30.8",
            timerInfo: [
                {
                    id: 0,
                    start: 8.5,
                    slutt: 10.5,
                    startDisplay: "08:30",
                    sluttDisplay: "10:30",
                    lærer: "Andrea Klubicka",
                    klasse: "ST2A",
                    klasseKode: "FY1",
                    klasserom: "225",
                },
                {
                    id: 1,
                    start: 10.75,
                    slutt: 12,
                    startDisplay: "10:45",
                    sluttDisplay: "12:00",
                    lærer: "",
                    klasse: "ST2A",
                    klasseKode: "Språk",
                    klasserom: "201",
                },
                {
                    id: 2,
                    start: 12.5,
                    slutt: 13.5,
                    startDisplay: "12:30",
                    sluttDisplay: "13:30",
                    lærer: "",
                    klasse: "ST2A",
                    klasseKode: "STU+2",
                    klasserom: "225",
                },
                {
                    id: 3,
                    start: 13.5,
                    slutt: 14.5,
                    startDisplay: "13:30",
                    sluttDisplay: "14:30",
                    lærer: "Line Lindberg",
                    klasse: "ST2A",
                    klasseKode: "NOR",
                    klasserom: "225",
                },
                {
                    id: 4,
                    start: 14.75,
                    slutt: 16,
                    startDisplay: "14:45",
                    sluttDisplay: "16:00",
                    lærer: "Line Lindberg",
                    klasse: "ST2A",
                    klasseKode: "NOR",
                    klasserom: "225",
                },
            ],
        }, //tirsdag
        {
            id: 2,
            dag: "Onsdag",
            dato: "30.8",
            timerInfo: [
                {
                    id: 0,
                    start: 8.5,
                    slutt: 9.5,
                    startDisplay: "08:30",
                    sluttDisplay: "9:30",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "MR1+1",
                    klasserom: "225",
                },
                {
                    id: 1,
                    start: 10,
                    slutt: 12,
                    startDisplay: "10:00",
                    sluttDisplay: "12:00",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "KJ1",
                    klasserom: "225",
                },
                {
                    id: 2,
                    start: 12.5,
                    slutt: 14.5,
                    startDisplay: "12:30",
                    sluttDisplay: "14:30",
                    lærer: "Andrea Klubicka",
                    klasse: "ST2A",
                    klasseKode: "FY1",
                    klasserom: "225",
                },
            ],
        }, //onsdag
        {
            id: 3,
            dag: "Torsdag",
            dato: "30.8",
            timerInfo: [
                {
                    id: 0,
                    start: 8.5,
                    slutt: 9.5,
                    startDisplay: "08:30",
                    sluttDisplay: "9:30",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "MR1+1",
                    klasserom: "225",
                },
                {
                    id: 1,
                    start: 10,
                    slutt: 12,
                    startDisplay: "10:00",
                    sluttDisplay: "12:00",
                    lærer: "",
                    klasse: "ST2A",
                    klasseKode: "Valgfag",
                    klasserom: "225",
                },
                {
                    id: 2,
                    start: 12.5,
                    slutt: 14.25,
                    startDisplay: "12:30",
                    sluttDisplay: "14:15",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "KJ1",
                    klasserom: "225",
                },
                {
                    id: 3,
                    start: 14.5,
                    slutt: 16,
                    startDisplay: "14:30",
                    sluttDisplay: "16:00",
                    lærer: "Anders Bark",
                    klasse: "ST2A",
                    klasseKode: "HIS",
                    klasserom: "225",
                },
            ],
        }, //torsdag
        {
            id: 4,
            dag: "Fredag",
            dato: "30.8",
            timerInfo: [
                {
                    id: 0,
                    start: 8.5,
                    slutt: 9.4167,
                    startDisplay: "08:30",
                    sluttDisplay: "9:25",
                    lærer: "Line Lindberg",
                    klasse: "ST2A",
                    klasseKode: "NOR",
                    klasserom: "225",
                },
                {
                    id: 1,
                    start: 9.5,
                    slutt: 11.25,
                    startDisplay: "09:30",
                    sluttDisplay: "11:15",
                    lærer: "",
                    klasse: "ST2A",
                    klasseKode: "Språk",
                    klasserom: "201",
                },
                {
                    id: 2,
                    start: 11.33,
                    slutt: 12,
                    startDisplay: "11:20",
                    sluttDisplay: "12:00",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "KLA+1",
                    klasserom: "225",
                },
                {
                    id: 3,
                    start: 12.5,
                    slutt: 14.25,
                    startDisplay: "12:30",
                    sluttDisplay: "14:15",
                    lærer: "Kristian Weibye",
                    klasse: "ST2A",
                    klasseKode: "MR1+1",
                    klasserom: "225",
                },
                {
                    id: 4,
                    start: 14.5,
                    slutt: 15.5,
                    startDisplay: "14:30",
                    sluttDisplay: "15:30",
                    lærer: "",
                    klasse: "ST2A",
                    klasseKode: "STU+1",
                    klasserom: "225",
                },
            ],
        }, //fredag
    ];

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

    function generateTimePlan(event) {
        if (textFieldValue !== "" || selectedKlasse !== "default option") {
            hideDefault();
            showTimePlanData = true;
        } else {
            showDefault();
            showTimePlanData = false;
        }
    }

    function calculateSize(start, slutt, kode, check) {
        let size = slutt - start;
        let realSize = (size / timeKonstant) * 77;
        let string;
        if (check) {
            string = `max-height: ${realSize}vh; height: ${realSize}vh; background-color: ${colorCodes[kode]};`;
        } else {
            string = `max-height: ${realSize}vh; height: ${realSize}vh;`;
        }

        return string;
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
            let realSize = ((currentTime - 8.5) / timeKonstant) * 77;
            return `position: absolute; top: ${realSize}vh;`;
        }
        return "display: none;";
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
        currentTime =
            currentDate.getHours() + (currentDate.getMinutes() + 1) / 60;

        var startDate = new Date(currentDate.getFullYear(), 0, 1);
        var days = Math.floor(
            (currentDate - startDate) / (24 * 60 * 60 * 1000)
        );

        var weekNumber = Math.ceil(days / 7);

        let date = getDateOfWeek(weekNumber, 2022);

        let secondDate = new Date(date);
        secondDate.setDate(date.getDate() + 4);
        selectedUke = `${weekNumber} (${date.getDate()}.${
            date.getMonth() + 1
        }-${secondDate.getDate()}.${secondDate.getMonth() + 1})`;
    }
    initTimeVars();
</script>

<div>
    <form class="input-form" on:submit|preventDefault={generateTimePlan}>
        <select bind:value={selectedKlasse} name="klasse" id="klasse">
            <option value="default option"> Velg klasse </option>
            {#each options as item, index (item.id)}
                <option value={item.value}>
                    {item.value}
                </option>
            {/each}
        </select>

        <input
            type="text"
            bind:value={textFieldValue}
            id="klasse-text-field"
            name="klasse-text-field"
        />
        <input type="submit" value="Vis" />

        <div class="align-right">
            <label for="highlight-day">Highlight day</label>
            <input
                type="checkbox"
                name="highlight-day"
                bind:checked={highlightDay}
                on:change={reRender}
                id="highlight-day"
            />
        </div>
        <div class="align-right">
            <label for="highlight-hour">Highlight Hour</label>
            <input
                type="checkbox"
                name="highlight-hour"
                bind:checked={highlightHour}
                on:change={reRender}
                id="highlight-hour"
            />
        </div>
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
                                        <div
                                            class="time-marker"
                                            style={getHourHighlight(index)}
                                        />
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
                                            <div class="time-start-tid">
                                                <p>{time.startDisplay}</p>
                                            </div>
                                            <div class="time-klasse time-info">
                                                {time.klasse}
                                            </div>
                                            <div
                                                class="time-klasseKode time-info"
                                            >
                                                {time.klasseKode}
                                            </div>
                                            <div
                                                class="time-klasserom time-info"
                                            >
                                                {time.klasserom}
                                            </div>
                                            <div class="time-lærer time-info">
                                                {time.lærer}
                                            </div>
                                            <div class="time-slutt-tid">
                                                <p>{time.sluttDisplay}</p>
                                            </div>
                                        </div>
                                        {#if index2 < dag.timerInfo.length - 1}
                                            <div
                                                style={calculateSize(
                                                    time.slutt,
                                                    dag.timerInfo[index2 + 1]
                                                        .start,
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
            font-size: 7px;
        }
    }

    .uke-plan {
        overflow: hidden;
        color: rgb(0, 0, 0);
        width: 97.5vw;
        background-color: rgb(255, 255, 255);
    }

    .time-marker {
        width: 19.5vw;
        max-width: 19.5vw;
        height: 0.5vh;
        max-height: 0.5vh;
        background-color: white;
    }

    .time-info {
        float: left;
        position: relative;
        left: -1vw;
        max-height: 5vh;
        max-width: 4.8vw;
        width: 4.8vw;
        text-align: center;
        margin: auto;
    }

    .time-start-tid {
        font-size: 10px;
        text-align: center;
        top: -1.25vh;
        left: 1px;
        max-width: 2vw;
        width: 2vw;
        height: 2vh;
        max-height: 2vh;
        position: relative;
        background-color: rgb(165, 170, 170);
        overflow: visible;
    }

    .time-slutt-tid {
        font-size: 10px;
        text-align: center;
        top: 1.25vh;
        margin-top: auto;
        right: 1px;
        max-width: 2vw;
        width: 2vw;
        height: 2vh;
        max-height: 2vh;
        position: relative;
        background-color: rgb(165, 170, 170);
        overflow: visible;
    }

    .time-slutt-tid p {
        margin: 0px;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        position: relative;
        bottom: 0.75vh;
    }

    .time-start-tid p {
        margin: 0px;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        position: relative;
        bottom: 0.75vh;
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
        font-size: 30px;
        background-color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 1px;
    }

    .dag-title p {
        margin-top: 5%;
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

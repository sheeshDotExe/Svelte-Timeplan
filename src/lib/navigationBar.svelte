<script>
    import { Link } from "svelte-routing";
    import { isUserLoggedIn } from "./store.js";

    let navBarItems = [
        { id: 0, link: "/", name: "Home", active: "active" },
        { id: 1, link: "about", name: "About", active: "" },
        { id: 2, link: "timeplan", name: "Timeplan", active: "" },
    ];

    //let children = navBarItems.childNodes;

    // should run every time the site reloads
    function checkForStatusChanges() {
        const urlParams = document.location.href.split("/");
        if (urlParams.includes("about")) {
            changeActiveById(1);
        } else if (urlParams.includes("timeplan")) {
            changeActiveById(2);
        }

        fetch("api/checkLoginStatus")
            .then((response) => response.json())
            .then((data) => {
                isUserLoggedIn.set(data["response"]);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function changeActive(event) {
        navBarItems.forEach((element) => {
            element.active = "";
        });
        navBarItems[event.target.id].active = "active";
    }
    function changeActiveById(id) {
        navBarItems.forEach((element) => {
            element.active = "";
        });
        navBarItems[id].active = "active";
    }

    checkForStatusChanges();
</script>

<div>
    <div class="nav-bar topnav" id="nav-bar">
        {#each navBarItems as item, index (item.id)}
            <Link to={item.link}
                ><button on:click={changeActive} id={index} class={item.active}>
                    {item.name}</button
                ></Link
            >
        {/each}
        {#if $isUserLoggedIn}
            <a href="/accounts/logout/"
                ><button class="right"> Logg ut </button></a
            >
            <Link to="customise">
                <button on:click={changeActive} id={3}>
                    juster timeplan
                </button>
            </Link>
        {:else}
            <a href="/accounts/login/"
                ><button class="right login"> Logg inn </button></a
            >
        {/if}
    </div>
    <div id="content-block-1" />
</div>

<style>
    .nav-bar {
        z-index: 1000;
    }
    #content-block-1 {
        top: 0;
        left: 0;
        height: 56px;
    }

    .topnav {
        background-color: #333;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    /* Style the links inside the navigation bar */
    .topnav button {
        float: left;
        color: rgb(255, 255, 255);
        text-align: center;
        padding: 12px 14px;
        text-decoration: none;
        font-size: 17px;
        background-color: #333;
    }

    /* Change the color of links on hover */
    .topnav button:hover {
        background-color: #ddd;
        color: black;
    }

    /* Add a color to the active/current link */
    .topnav button.active {
        background-color: #04aa6d;
        color: white;
    }

    /* Make the logout button appear on right side of the screen*/
    .topnav button.right {
        float: right;
        background-color: rgb(166, 13, 13);
    }
    .topnav button.right:hover {
        background-color: rgb(83, 4, 4);
        color: white;
    }

    .topnav button.login {
        background-color: lightgreen;
    }
</style>

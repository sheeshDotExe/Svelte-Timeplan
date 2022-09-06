<script>
    import { Link } from "svelte-routing";

    let navBarItems = [
        { id: 0, link: "/", name: "Home", active: "active" },
        { id: 1, link: "about", name: "About", active: "" },
        { id: 2, link: "timeplan", name: "Timeplan", active: "" },
    ];

    let isUserLoggedIn = false;
    //let children = navBarItems.childNodes;

    function changeActive(event) {
        navBarItems.forEach((element) => {
            element.active = "";
        });
        navBarItems[event.target.id].active = "active";
    }
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
        {#if isUserLoggedIn}
            <a href="/accounts/logout/"
                ><button class="right"> Log out </button></a
            >
        {:else}
            <a href="/accounts/login/"
                ><button class="right login"> Log in </button></a
            >
        {/if}
    </div>
    <div id="content-block-1" />
</div>

<style>
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

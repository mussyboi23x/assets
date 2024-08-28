const announcementsScript = document.getElementById("announcementsScript");

Playsaurus.initialize({
    gameSlug: announcementsScript.dataset.gameSlug
});

Playsaurus.announcements.fetchAndShowDialog({
    theme: "light",
    dismissable: true
});
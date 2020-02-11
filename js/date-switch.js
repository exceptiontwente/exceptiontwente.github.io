$(() => {

    const today = Date.now();
    const dateOfEvent = new Date("2020-01-28"); // YYYY-MM-DD
    const theNextDay = dateOfEvent.setDate(dateOfEvent.getDate() + 1);

    if (today > theNextDay) {
        $("#inschrijf-knop").hide();
    }

});
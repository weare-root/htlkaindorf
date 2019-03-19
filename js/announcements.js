let now = new Date();

$.getJSON("/../stuff/announcements.json", function (data) {
    $.each(data, function (key, val) {
        let startTimes = val.to.split(' - ');
        let date = startTimes[0].split('.');
        date[1] = date[1] - 1; //months are from 0-11
        let time = startTimes[1].split(':');
        let startT = new Date(date[2], date[1], date[0], time[0], time[1]);

        if (now - startT <= 0) {
            let endTimes = val.from.split(' - ');
            let endDate = endTimes[0].split('.');
            endDate[1] = endDate[1] - 1; //months are from 0-11
            let endTime = endTimes[1].split(':');
            let endT = new Date(endDate[2], endDate[1], endDate[0], endTime[0], endTime[1]);
            if (now - endT >= 0) {
                let border = val.border;
                borderBefore = border.substring(0, border.indexOf(')') - 1) + ",0.5)";
                $(".announcements").append(`${"<div class=\"announcement-inner\" style=\"box-shadow: 0 0 5px 5px " + borderBefore + "\"><p>" + val.message + "</p></div>"}`);
            }
        }
    });
});

$.getJSON("/../stuff/aktuelles/aktuelles.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        let url = "/stuff/aktuelles/preview/" + val.preview;
        let text = val.text;
        let link = "/stuff/aktuelles/" + val.link;
        $(".aktuelles").append(`<div class="aktuelles-wrapper"><a href="${link}"><div><img src="${url}"/><p>${text}"</p></div></a></div>`);
    });
});
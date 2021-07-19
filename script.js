var schedule_body = document.getElementById('schedule_body');

window.onload = loadTxt();

function loadTxt() {
    fetch('schedule.txt')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log(data);

        var array = data.split('\n');

        

        const split_indexes = [];
        for (var i = 0; i < array.length; i++){
            if (array[i] == '++++') {
                split_indexes.push(i);
            }
        }

        console.log(array);
        
        var dates = [];
        var events = [];
        for (var x = 0; x < split_indexes.length-1; x++) {
            if (x % 2 == 0) {
                var new_date = '';
                for (var z = split_indexes[x] + 1; z < split_indexes[x+1]; z++) {
                    new_date = new_date + array[z] + '<br>';
                }
                new_date = new_date.substring(0,new_date.length - 4);
                dates.push(new_date);
            }
            if (x % 2 != 0) {
                var new_event = '';
                for (var z = split_indexes[x] + 1; z < split_indexes[x+1]; z++) {
                    new_event = new_event + array[z] + '<br>';
                }
                new_event = new_event.substring(0,new_event.length - 4);
                events.push(new_event);
            }
        }

        console.log(dates);
        console.log(events);

        for (var x = 0; x < dates.length; x++) {
            add_event(dates[x],events[x]);
        }

    })
}

function add_event(date, event) {
    schedule_body.insertAdjacentHTML('beforeend', '<tr> <th class="date">' + date + '</th> <th class="event">' + event + '</th> </tr>');
}
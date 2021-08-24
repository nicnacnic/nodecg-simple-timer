let interval;

module.exports = function (nodecg) {
    const timer = nodecg.Replicant('timer', { defaultValue: { time: '00:00:00:00', active: false } });
    const startDate = nodecg.Replicant('startDate', { defaultValue: undefined });

    timer.on('change', (newVal) => {
        if (newVal.active) {
            let d, h, m, s;
            let days, hours, minutes, seconds;
            let currentTime = (Date.now() - startDate.value);
            d = Math.floor(currentTime / (24 * 60 * 60 * 1000));
            h = Math.floor((currentTime / (1000 * 60 * 60)) % 24);
            m = Math.floor((currentTime / (1000 * 60)) % 60);
            s = Math.floor((currentTime / 1000) % 60);

            switch (true) {
                case (d < 0): days = '00'; break;
                case (d < 10): days = `0${d.toString()}`; break;
                default: days = d.toString(); break;
            }
            switch (true) {
                case (h < 0): hours = '00'; break;
                case (h < 10): hours = `0${h.toString()}`; break;
                default: hours = h.toString(); break;
            }
            switch (true) {
                case (m < 0): minutes = '00'; break;
                case (m < 10): minutes = `0${m.toString()}`; break;
                default: minutes = m.toString(); break;
            }
            switch (true) {
                case (s < 0): seconds = '00'; break;
                case (s < 10): seconds = `0${s.toString()}`; break;
                default: seconds = s.toString(); break;
            }
            let timerValue = days + ':' + hours + ':' + minutes + ':' + seconds;
            setTimeout(() => timer.value.time = timerValue, 1000);
        }
    })
}
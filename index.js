Vue.component('TimerComponent', {
    template : '<div>{hours}:{minutes}:{seconds}</div>',

    data() {
        var i = 0
        return {
            i
        }
    },
    created() {
        this.interval = setInterval(() => {
            this.i++
        }, 1000)
    },

    computed : {
        seconds() {
            const sec = this.i % 60
            return sec < 10 ? `0${sec}` : sec
        },
        minutes() {
            const m = Math.floor(this.i / 60)
            return m < 10 ? `0${m}` : m
        },

        hours() {
            const h = Math.floor(this.i / 3600)
            return h < 10 ? `0${h}` : h
        }
    }

})

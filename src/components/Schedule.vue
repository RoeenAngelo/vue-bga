<script setup>
const schedule = [
    {
        name: 'BGA PNR',
        location: 'Golf Course: Champions Course at Tukwet Canyon',
        date: 'March 19',
        time: '10:00 AM'
    },
    {
        name: 'BGA Masters',
        location: 'Golf Course: Oak Quarry',
        date: 'April 16',
        time: '1:00 PM'
    },
    {
        name: 'PEJA OPEN',
        location: 'Golf Course: Los Serranos Country Club (South Course)',
        date: 'May 28',
        time: '1:00 PM'
    },
    {
        name: 'WSOG',
        location: 'Golf Course: TBD',
        date: 'TBD',
        time: 'TBD'
    },
    {
        name: 'LL OPEN',
        location: 'Golf Course Champions Course at Tukwet Canyon',
        date: 'TBD',
        time: 'TBD'
    },
    {
        name: 'KAYAMI CLASSIC',
        location: 'Golf Course Champions Course at Tukwet Canyon',
        date: 'TBD',
        time: 'TBD'
    },
]
</script>

<template>
    <section class="schedule-container">
        <h3 class="title">Schedule</h3>
        <div v-for="event in schedule"  class="event-container">
            <div class="event">
                <div class="event-left">
                    <div class="event-date">
                        <div class="month">{{ event.date }}</div>
                    </div>
                </div>

                <div class="event-right">
                    <h3 class="event-title">{{ event.name }}</h3>
                    <div class="event-description">{{ event.location }}</div>
                    <div class="event-time">
                    <img src="@/assets/time.png" alt="">{{ event.time }}</div>
                </div>
            </div>
        </div>
    </section>

</template>



<style lang="scss" scoped>

.schedule-container {
    
    width: 100%;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    >h3 { 
        padding: 50px;
        text-align: center;
        font-size: 1.4em;

    }

}



.event-container {
	margin: 0 auto;
    width: 80%;
}

.event-container .event {
	box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.4);
	display: flex;
	border-radius: 8px;
	margin: 32px 0;
}

.event .event-left {
	background-color: #222;
	width: 130px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #eee;
	padding: 8px 48px;
	font-weight: bold;
	text-align: center;
	border-radius: 8px 0 0 8px;
}

event .event-left .date {
	font-size: 56px;
}

.event .event-left .month {
	font-size: 16px;
	font-weight: normal;
}

.event .event-right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start ;
	padding: 0 24px;
}

.event .event-right h3.event-title {
	font-size: 28px;
	margin: 24px 0 10px 0;
	text-transform: uppercase;
	font-weight: bold;
	text-align: left;
}
.event .event-right .event-description {
	
	font-size: 1.2rem;
	text-align: left;
}

.event .event-right .event-time {
	background-color: #fff8ba;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 120px;
	padding: 8px;
	border-radius: 16px;
	margin: 20px 0;
	font-size: 14px;
}

.event .event-right .event-time img {
	height: 20px;
	padding-right: 8px ;
}

@media screen and (max-width: 480px) {
	.event .event-left {
		
		width: 100px;
		padding: 6px 40px;
	}

	.event .event-right h3.event-title {
		font-size: 22px;
		margin: 20px 0 8px 0;
		text-transform: uppercase;
		font-weight: bold;
	}

	.event .event-right .event-description {
	
		font-size: 1.1rem;
		text-align: left;
	}
	.event .event-right .event-time img {
		height: 15px;
		padding-right: 6px ;
	}

}
</style>
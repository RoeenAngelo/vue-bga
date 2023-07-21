<script setup>
const schedule = [
    {
        name: 'BGA PNR',
        location: 'Champions Course at Tukwet Canyon',
        date: 'March 19',
        time: '10:00 AM'
    },
    {
        name: 'BGA Masters',
        location: 'Oak Quarry',
        date: 'April 16',
        time: '1:00 PM'
    },
    {
        name: 'PEJA OPEN',
        location: 'Los Serranos Country Club (South Course)',
        date: 'May 28',
        time: '1:00 PM'
    },
    {
        name: 'WSOG',
        location: 'Golf Course: Marshall Canyon',
        date: 'June 25',
        time: '1:10 PM'
    },
    {
        name: 'LL OPEN',
        location: 'Golf Course: Hidden Valley Golf Course',
        date: 'July 23',
        time: '1:40 PM'
    },
    {
        name: 'KAYAMI CLASSIC',
        location: 'Golf Course: TBD',
        date: 'August 20',
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
                        <div class="date">{{ event.date }}</div>
                    </div>
                </div>

                <div class="event-right">
                    <h3 class="event-title">{{ event.name }}</h3>
                    <div class="event-location">{{ event.location }}</div>
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
    border-radius: 0 0 8px 8px;
    padding-bottom: 100px;

    
    >h3 { 
        padding: 50px;
        text-align: center;
        font-size: 1.4em;

    }

}


.event-container {
	margin: 0 auto;
    width: 90%;

    .event {
        box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.4);
        display: flex;
        border-radius: 8px;
        margin: 32px 0;
        height: 200px;

        .event-left {
            background-color: #222;
            width: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #eee;
            padding: 8px 45px;
            font-weight: bold;
            text-align: center;
            border-radius: 8px 0 0 8px;

            .date {
                font-size: 15px;
                font-weight: normal;
            }
        }
    
    
        .event-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start ;
            padding: 0 18px;
        
            .event-title {
                font-size: 18px;
                margin: 24px 0 10px 0;
                text-transform: uppercase;
                font-weight: bold;
                text-align: left;
            }
        
            .event-location {
                font-size: 1
                +em;
                text-align: left;
            }

            .event-time {
                background-color: #fff8ba;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 110px;
                padding: 8px;
                border-radius: 16px;
                margin: 20px 0;
                font-size: 12px;             
            }

            img {
                    height: 16px;
                    padding-right: 8px ;
                }
        
        }
    
    
    }

}


</style>
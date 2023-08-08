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
        location: 'Oak Quarry Golf Club',
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
        location: 'Marshall Canyon Golf Course',
        date: 'June 25',
        time: '1:10 PM'
    },
    {
        name: 'LL OPEN',
        location: 'Hidden Valley Golf Course',
        date: 'July 23',
        time: '1:40 PM'
    },
    {
        name: 'KAYAMI CLASSIC',
        location: 'Industry Hills Golf Course (Ike)',
        date: 'August 20',
        time: '11:30 AM'
    },
]
</script>

<template>
    <section class="section-container">
        <h3>Schedule</h3>
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
                    <img src="@/assets/images/time.png" alt="">{{ event.time }}</div>
                </div>
            </div>
        </div>
    </section>

</template>



<style lang="scss" scoped>


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
                font-size: 1em;
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
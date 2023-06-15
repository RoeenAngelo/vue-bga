
<script setup>
    const leaderboard =  [
          { id: 1, name: 'Justin', score: 738.5 },
          { id: 2, name: 'Aaron', score: 633.5 },
          { id: 3, name: 'Daniel Lee', score: 633.5 },
          { id: 4, name: 'Morris', score: 571.0 },
          { id: 5, name: 'Niehmer', score: 448.6 },
          { id: 6, name: 'Dayza', score: 392.5 },
          { id: 7, name: 'Des', score: 365.0 },
          { id: 8, name: 'George', score: 348.8 },
          { id: 9, name: 'Aldrich', score: 336.7 },
          { id: 10, name: 'Arvin', score: 257.5 },
          { id: 11, name: 'Pat', score: 255.3 },
          { id: 12, name: 'Sam', score: 242.5 },
          { id: 13, name: 'Chris', score: 233.0 },
          { id: 14, name: 'Ed', score: 231.5 },
          { id: 15, name: 'Alan', score: 225.5 },
          { id: 16, name: 'Joe', score: 216.0 },
          { id: 17, name: 'Tim', score: 189.7 },
          { id: 18, name: 'Kyle', score: 186.5 },
          { id: 19, name: 'Jordan', score: 162.5 },
          { id: 20, name: 'Ezra', score: 158.7 },
          { id: 21, name: 'Galvin', score: 155.0 },
          { id: 22, name: 'James', score: 155.0 },
          { id: 23, name: 'Jason', score: 139.5 },
          { id: 24, name: 'Ronald', score: 119.1 },
          { id: 25, name: 'Ro', score: 152.5 },
        ]

    const sortedLeaderboard = leaderboard.sort((a,b) => b.score - a.score)
</script>
<template>
    <div class="leaderboard">
      <h3>Leaderboard</h3>
      <div class="leaderboard-container">
        <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(player, index) in sortedLeaderboard" :key="player.id">
                <td>{{ index + 1 }}</td>
                <td>{{ player.name }}</td>
                <td>{{ player.score }}</td>
            </tr>
            </tbody>
        </table>
    	</div>
    </div>
  </template>

  
  
  <style scoped>
  .leaderboard {
    width: 100%;
    margin: 0 auto;
    background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	  box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.4);

  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    font-size: .8em;
  }
  
  th {
    background-color: #f2f2f2;
  }

  h3 {
    padding: 50px;
    text-align: center;
    font-size: 1.4em;
  }

	.leaderboard-container {
		width: 90%;
	}
  </style>
  
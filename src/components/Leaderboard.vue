
<script setup>
    const leaderboard =  [
          { id: 1, name: 'Justin', score1: 87.5, score2: 600, score3: 51, score4: 55, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 2, name: 'Aaron', score1: 500, score2: 66, score3: 67.5, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 3, name: 'Daniel Lee', score1: 67.5, score2: 66, score3: 500, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 4, name: 'Morris', score1: 300, score2: 66, score3: 67.5, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 5, name: 'Niehmer', score1: 162.5, score2: 41.078, score3: 245, score4: 71.667, score5:0, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 6, name: 'Dayza', score1: 77.5, score2: 230	, score3: 85, score4: 167.5, score5:0, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 7, name: 'Des', score1: 67.5, score2: 230, score3: 67.5, score4: 115, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 8, name: 'George', score1: 162.5, score2: 101.333, score3: 85, score4: 109.167, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 9, name: 'Aldrich', score1: 43, score2: 48.733, score3: 245, score4: 101.945, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 10, name: 'Arvin', score1: 87.5, score2: 85, score3: 85, score4: 74.167, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 11, name: 'Pat', score1: 100, score2: 101.333, score3: 54, score4: 83.611, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 12, name: 'Sam', score1: 77.5, score2: 120, score3: 45, score4: 58, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 13, name: 'Chris', score1: 58.5, score2: 74.5, score3: 100, score4: 167.5, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 14, name: 'Ed', score1: 51, score2: 58, score3: 122.5, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 15, name: 'Alan', score1: 49, score2: 54, score3: 122.5, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 16, name: 'Joe', score1: 110, score2: 58, score3: 48, score4: 70.833, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 17, name: 'Tim', score1: 37.167, score2: 85, score3: 67.5, score4: 91.111, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 18, name: 'Kyle', score1: 37.167, score2: 101.333, score3: 48, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 19, name: 'Jordan', score1: 58.5, score2: 61, score3: 43, score4: 43.056, score5:0, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6}  },
          { id: 20, name: 'Ezra', score1: 37.167, score2: 54, score3: 67.5, score4: 115, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 21, name: 'Galvin', score1: 47, score2: 51, score3: 57, score4: 300, score5:0, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 22, name: 'James', score1: 45, score2: 74.5, score3: 35.5, score4: 59, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 23, name: 'Jason', score1: 54, score2: 46.467, score3: 39, score4: 43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 24, name: 'Ronald', score1: 41, score2: 41.078, score3: 37, score4:43.056, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
          { id: 25, name: 'Ro', score1: 54, score2: 44.2, score3: 54, score4: 53, score5:0, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
        ]

    const sortedLeaderboard = leaderboard.sort((a,b) => b.total - a.total)
</script>
<template>
    <div class="leaderboard">
      <h3>Leaderboard</h3>
      <div class="leaderboard-container">
        <table>
            <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>PnR</th>
              <th>Masters</th>
              <th>PEJA</th>
              <th>WSOG</th>
              <th>LL</th>
              <th>Kayami</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in sortedLeaderboard" :key="player.id">
                <td>{{ index + 1 }}</td>
                <td>{{ player.name }}</td>
                <td>{{ filters.formatScore(player.score1) }}</td>
                <td>{{ filters.formatScore(player.score2)}}</td>
                <td>{{ filters.formatScore(player.score3) }}</td>
                <td>{{ filters.formatScore(player.score4) }}</td>
                <td>{{ filters.formatScore(player.score5) }}</td>
                <td>{{ filters.formatScore(player.score6) }}</td>
                <td>{{ filters.formatScore(player.total) }}</td>
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
    border-radius: 0 0 8px 8px;
    padding-bottom: 100px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.4);
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
    border-radius: 8px 8px 8px 8px;

	}
  </style>
  
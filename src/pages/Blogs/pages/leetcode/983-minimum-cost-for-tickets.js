function Test() {
  return (
    <>
      <h1>Minimum Cost For Tickets</h1>;<p>Question: 983</p>
      <p>Difficult: Medium</p>
      <p>Companies</p>
      <p>
        You have planned some train traveling one year in advance. The <code>days</code> of the year in which you will travel are given as an integer array days. Each day is an integer from{" "}
        <code>1</code> to <code>365</code>.
      </p>
      <p>
        Train tickets are sold in <b>three different ways</b>:
      </p>
      <ul>
        <li>
          a <b>1-day</b> pass is sold for <code>costs[0]</code> dollars,
        </li>
        <li>
          a <b>7-day</b> pass is sold for <code>costs[1]</code> dollars,
        </li>
        <li>
          and a <b>30-day</b> pass is sold for <code>costs[2]</code> dollars.
        </li>
      </ul>
      <p>The passes allow that many days of consecutive travel.</p>
      <li>
        For example, if we get a <b>7-day</b> pass on day <code>2</code>, then we can travel for <code>7</code> days: <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>,
        <code>7</code>, and <code>8</code>.
      </li>
      <p>
        Return <i>the minimum number of dollars you need to travel every day in the given list of days.</i>
      </p>
      <p>Example 1:</p>
      <code>
        <b>Input:</b>
        <p>days = [1,4,6,7,8,20], costs = [2,7,15]</p>
        <b>Output:</b>
        <p>11</p>
        <b>Explanation:</b>
        <p>For example, here is one way to buy passes that lets you travel your travel plan:</p>
        <p>On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.</p>
        <p>On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.</p>
        <p>On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.</p>
        <p>In total, you spent $11 and covered all the days of your travel.</p>
      </code>
      <p>Example 2:</p>
      <code>
        <b>Input:</b>
        <p>days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]</p>
        <b>Output:</b>
        <p>17</p>
        <b>Explanation:</b>
        <p>For example, here is one way to buy passes that lets you travel your travel plan:</p>
        <p>On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.</p>
        <p>On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.</p>
        <p>In total, you spent $17 and covered all the days of your travel.</p>
      </code>
      <div>
        <p>
          To solve this problem, we can use dynamic programming. We can define a dp array of size 366 (one extra day at the end to handle edge cases) where dp[i] represents the minimum cost required
          to travel up to day i. We can initialize dp[0] = 0 since we don't need to pay anything to travel on day 0.
        </p>
        <p>For each day i in the input array, we can calculate the minimum cost required to travel up to day i using the following recurrence relation:</p>
        <p>dp[i] = min(dp[i-1] + costs[0], dp[max(i-7, 0)] + costs[1], dp[max(i-30, 0)] + costs[2])</p>
        <p>
          The first option represents buying a 1-day pass on day i, the second option represents buying a 7-day pass that covers day i, and the third option represents buying a 30-day pass that covers
          day i.
        </p>
        <p>
          We take the minimum of these three options since we want to minimize the cost. We also use max(i-7, 0) and max(i-30, 0) to handle the cases where we don't have enough days before day i to
          buy a 7-day or 30-day pass.
        </p>
        <p> After iterating over all days in the input array, we can return dp[days[-1]], which represents the minimum cost required to travel up to the last day in the input array.</p>
        <p> Here's the Python code implementation:</p>
        <pre>
          <code>
            def mincostTickets(days, costs): dp = [0] * 366 travel_days = set(days) for i in range(1, 366): if i not in travel_days: dp[i] = dp[i-1] else: dp[i] = min(dp[i-1] + costs[0], dp[max(i-7,
            0)] + costs[1], dp[max(i-30, 0)] + costs[2]) return dp[days[-1]]
          </code>
        </pre>
        <p>
          Note that we use a set to store the travel days for efficient membership checking. Also, the if statement in the for loop handles the case where the current day is not a travel day and we
          don't need to buy a ticket.
        </p>
      </div>
    </>
  );
}

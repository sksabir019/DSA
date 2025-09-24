/**
 * Given three arrays, starts, ends, and profits, each representing the start time, end time, and profit of jobs respectively, 
 * your task is to schedule the jobs to maximize total profit. You can only work on one job at a time, 
 * and once a job has been started, you must finish it before starting another. The goal is to find the maximum profit 
 * that can be earned by scheduling jobs such that they do not overlap.
 */

function jobScheduling(startTime, endTime, profit) {
    const n = startTime.length;
    const jobs = [];
    
    for (let i = 0; i < n; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    
    // Sort jobs by end time
    jobs.sort((a, b) => a.end - b.end);
    
    const dp = new Array(n).fill(0);
    dp[0] = jobs[0].profit;

    for (let i = 1; i < n; i++) {
        dp[i] = jobs[i].profit;
        for (let j = 0; j < i; j++) {
            if (jobs[j].end <= jobs[i].start) {
                dp[i] = Math.max(dp[i], dp[j] + jobs[i].profit);
            }
        }
    }

    return Math.max(...dp);
}

// Example usage:
const startTime = [1, 2, 3, 3];
const endTime = [3, 4, 5, 6];
const profit = [50, 10, 40, 70];
console.log(jobScheduling(startTime, endTime, profit)); // Output: 120

// Time Complexity: O(n^2) where n is the number of jobs
// Space Complexity: O(n) for the dp array

// Another way using binary search to optimize the inner loop
function jobScheduling(startTime, endTime, profit) {
    const n = startTime.length;
    const jobs = [];
    
    for (let i = 0; i < n; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    
    // Sort jobs by end time
    jobs.sort((a, b) => a.end - b.end);
    
    const dp = new Array(n).fill(0);
    dp[0] = jobs[0].profit;

    // Helper function for binary search
    function findLastNonConflictingJob(index) {
        let low = 0, high = index - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (jobs[mid].end <= jobs[index].start) {
                if (jobs[mid + 1].end <= jobs[index].start) {
                    low = mid + 1;
                } else {
                    return mid;
                }
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    for (let i = 1; i < n; i++) {
        dp[i] = jobs[i].profit;
        const lastNonConflictingJob = findLastNonConflictingJob(i);
        if (lastNonConflictingJob !== -1) {
            dp[i] = Math.max(dp[i], dp[lastNonConflictingJob] + jobs[i].profit);
        }
    }

    return Math.max(...dp);
}

// Example usage:
const sTime = [1, 2, 3, 3];
const eTime = [3, 4, 5, 6];
const profits = [50, 10, 40, 70];
console.log(jobScheduling(sTime, eTime, profits)); // Output: 120

// Time Complexity: O(n log n) where n is the number of jobs
// Space Complexity: O(n) for the dp array

// Another way using memoization with recursion
function jobScheduling(startTime, endTime, profit) {
    const n = startTime.length;
    const jobs = [];
    
    for (let i = 0; i < n; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    
    // Sort jobs by start time
    jobs.sort((a, b) => a.start - b.start);
    
    const memo = new Array(n).fill(-1);

    function findNextJobIndex(currentIndex) {
        let low = currentIndex + 1, high = n - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (jobs[mid].start >= jobs[currentIndex].end) {
                if (mid === currentIndex + 1 || jobs[mid - 1].start < jobs[currentIndex].end) {
                    return mid;
                }
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return n;
    }

    function helper(index) {
        if (index >= n) return 0;
        if (memo[index] !== -1) return memo[index];

        const nextIndex = findNextJobIndex(index);
        const includeProfit = jobs[index].profit + helper(nextIndex);
        const excludeProfit = helper(index + 1);

        memo[index] = Math.max(includeProfit, excludeProfit);
        return memo[index];
    }

    return helper(0);
}

// Example usage:
const startT = [1, 2, 3, 3];
const endT = [3, 4, 5, 6];
const prof = [50, 10, 40, 70];
console.log(jobScheduling(startT, endT, prof)); // Output: 120

// Time Complexity: O(n log n) due to sorting and binary search
// Space Complexity: O(n) for the memo array and recursion stack

// Another way:

function jobScheduling(starts, ends, profits) {
    const jobs = starts.map((start, i) => [start, ends[i], profits[i]])
                      .sort((a, b) => a[1] - b[1]);

    const dp = new Array(jobs.length + 1).fill(0);
    for (let i = 1; i <= jobs.length; i++) {
        const [start, end, profit] = jobs[i - 1];
        // find number of jobs to finish before start of current job
        const numJobs = bisectRight(jobs.map(job => job[1]), start);
        
        dp[i] = Math.max(dp[i - 1], dp[numJobs] + profit);
    }
    
    return dp[dp.length - 1];
}

function bisectRight(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return left;
}
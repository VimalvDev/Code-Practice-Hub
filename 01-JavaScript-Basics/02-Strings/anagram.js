class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        // code here
        count1 ={}
        count2 = {}
        if(s1.length !== s2.length) return false
        
        for(let char of s1)
        {
            count1[char] = (count1[char] || 0) + 1
        }
         for(let char of s2)
        {
            count2[char] = (count2[char] || 0) + 1
        }
        
        for(let key in count1)
        {
            if(count1[key] !== count2[key]) return false
        }
        return true
    }
}
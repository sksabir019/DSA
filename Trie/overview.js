/**
 * A trie (also known as a Prefix Tree) stores a set of strings in a tree-like data structure. 
 * The trie below stores the strings APPLE, APP, BAT, BALL, BATS, and BALL:
 */

// Trie class:
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    search(word) {
        // return true if word is in trie, false otherwise
        // implementation here
    }
    
    insert(word) {
        // insert word into trie
        // implementation here
    }
    
    delete(word) {
        // delete word from trie
        // implementation here
    }
}

class TrieNode {
    constructor(children = {}, eow = false) {
        this.children = children;
        this.isEndOfWord = eow;
    }
}

const root = new TrieNode();

root.children = {
    'A': new TrieNode(),
    'B': new TrieNode()
};

root.children['A'].children = {
    'P': new TrieNode()
};

root.children['A'].children['P'].children = {
    'P': new TrieNode()
};

root.children['A'].children['P'].children['P'].children = {
    'L': new TrieNode()
};

root.children['A'].children['P'].children['P'].children['L'].children = {
    'E': new TrieNode({}, true)
};

root.children['A'].children['P'].children['P'].isEndOfWord = true;

root.children['B'].children = {
    'A': new TrieNode()
};

root.children['B'].children['A'].children = {
    'T': new TrieNode({}, true),
    'L': new TrieNode()
};

root.children['B'].children['A'].children['L'].children = {
    'L': new TrieNode({}, true),
    'T': new TrieNode({}, true)
};

// The trie structure can be visualized as follows:

//         (root)
//        /      \
//      A         B
//      |         |
//      P         A
//      |         |
//      P         T (end of "BAT")
//      |         |
//      L         L
//      |         |
//      E (end of "APPLE")  L (end of "BALL")
//                |
//                T (end of "BATS")

/**
 * Each node contains:
 * - children: a mapping from characters to child TrieNodes.
 * - isEndOfWord: a boolean indicating if the node marks the end of a valid word.
 * 
 * The trie supports efficient insertion, search, and deletion operations for strings.
 */
// Time Complexity:
// Insertion: O(m) where m is the length of the word being inserted.
// Search: O(m) where m is the length of the word being searched.
// Deletion: O(m) where m is the length of the word being deleted.

// Space Complexity:
// O(N * M) where N is the number of words in the trie and M is the average length of the words.
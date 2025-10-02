/**
 * Use a Trie to implement a prefix matching function.

match(prefix) returns a list of all words in the Trie that start with the given prefix. The words can be in any order.
The creation of the Trie is already implemented for you.

The test cases include two parameters:

words: a list of words to add to the Trie,
prefix: a prefix to search for.
The test cases will create the Trie with the initial words, and then run the match command, and compare the output to the expected output.
initialWords = ["ball", "bath", "bat", "batter"]
prefix = "bat" 
*/


class prefixTrie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    match(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!(char in node.children)) {
                return [];  // No words with the given prefix
            }
            node = node.children[char];
        }
        return this._findAllWords(node);
    }

    _findAllWords(node) {
        const words = [];
        const dfs = (currentNode, currentWord) => {
            if (currentNode.isEnd) {
                words.push(currentWord);
            }
            for (const char in currentNode.children) {
                dfs(currentNode.children[char], currentWord + char);
            }
        };
        dfs(node, "");
        return words;
    }
}
    // Helper function to recursively delete a word
    function deleteHelper(node, word, depth) {
        if (!node) return false;

        // If we have reached the end of the word
        if (depth === word.length) {
            // If the word is found, mark the end of word as false
            if (node.isEnd) {
                node.isEnd = false;

                // If the node has no children, it can be deleted
                return Object.keys(node.children).length === 0;
            }
            return false; // Word not found
        }

        const char = word[depth];
        if (!(char in node.children)) {
            return false; // Word not found
        }

        const shouldDeleteChild = deleteHelper(node.children[char], word, depth + 1);

        // If true is returned, delete the mapping of character and TrieNode reference from this node
        if (shouldDeleteChild) {
            delete node.children[char];

            // Return true if no children are left and it's not the end of another word
            return Object.keys(node.children).length === 0 && !node.isEnd;
        }

        return false;
    } 

// example usage
const trie = new prefixTrie();
const words = ["ball", "bath", "bat", "batter"];
for (const word of words) {
    trie.insert(word);
}

console.log(trie.match("bat")); // Output: ["bat", "bath", "batter"]

// other implementation:
// initialWords = ["ball", "bath", "bat", "batter"]
// prefix = "bat"
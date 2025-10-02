/**
 * Implement trie methods: search, insert, delete
 * 
 * Each method should be added to the Trie class.
 * 
 * The TrieNode class is provided for reference.
 * 
 * The root node of the trie is also provided for reference.
 * 
 * Do not modify the TrieNode class or the root node.
 * 
 * Example usage:
 * const trie = new Trie();
 * trie.insert("APPLE");
 * console.log(trie.search("APPLE")); // true
 * console.log(trie.search("APP")); // true
 * trie.delete("APP");
 * console.log(trie.search("APP")); // false
 * console.log(trie.search("APPLE")); // true
 */

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    search(word) {
        // return true if word is in trie, false otherwise
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }
    
    insert(word) {
        // insert word into trie
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }
    
    delete(word) {
        // delete word from trie
        const deleteRecursively = (node, word, index) => {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false; // Word not found
                }
                node.isEndOfWord = false; // Unmark the end of word
                return Object.keys(node.children).length === 0; // If no children, node can be deleted
            }
            const char = word[index];
            const childNode = node.children[char];
            if (!childNode) {
                return false; // Word not found
            }
            const shouldDeleteChild = deleteRecursively(childNode, word, index + 1);
            if (shouldDeleteChild) {
                delete node.children[char];
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }
            return false;
        };
        deleteRecursively(this.root, word, 0);
    }
}

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
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


// Search:
function search(word) {
    // Search the trie for the given word.
    // Returns true if the word exists in the trie, false otherwise
    
    // start from the root node
    let node = this.root;
    
    for (const char of word) {
        if (!(char in node.children)) {
            return false;
        }
        node = node.children[char];
    }
    
    return node.isEnd;
}

// delete:
function deleteWord(word) {
    // Deletes the given the word from the Trie.
    // Returns nothing.
    
    const deleteHelper = (node, index) => {
        // base case: We have reached the end of the word
        if (index === word.length) {
            // Mark the node as not being the end of a word
            node.isEnd = false;
            // Return true if the node should be deleted
            return Object.keys(node.children).length === 0;
        }
        
        const char = word[index];
        const child = node.children[char];
        
        if (!child) {
            return false;  // Word not found
        }
        
        const shouldDeleteChild = deleteHelper(child, index + 1);
        
        if (shouldDeleteChild) {
            delete node.children[char];
        }
        
        // Return true if current node should be deleted
        return !node.isEnd && Object.keys(node.children).length === 0;
    };
    
    deleteHelper(this.root, 0);
}
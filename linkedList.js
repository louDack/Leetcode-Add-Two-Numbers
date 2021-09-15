function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// A function that converts number to a LL following the specifications of leetcode problem.
function NumToLL(num) {
    // console.log(num.toString())
    const str = num.toString()
    
    let currNode, prevNode, newLL
    // Start at end of digit to front of digit.
    for (let letter = str.length - 1; letter >= 0; letter--) {
        // console.log(str[letter])

        // Connect the nodes with each other
        if (str.length - 1 !== letter) {
            currNode = new ListNode(parseInt(str[letter]))
            prevNode.next = currNode
            prevNode = currNode
        }
        // The first node being created is not connected with anything.
        else {
            prevNode = new ListNode(parseInt(str[letter]))
            newLL = prevNode
        }
    }
    return newLL
}

// ************************************************************************************
// This version checks to see if NumToLL function can correctly reverse an integer

// let start = NumToLL(9234)
// console.log(NumToLL(9234))

// This loop should output a LL with: 4 -> 3 -> 2 -> 9
// console.log('Entering LL loop!')
// do {
//     console.log(start.val)
//     start = start.next
// } while (start !== null)

// shit, unshift
// push, pop

// ************************************************************************************
// Adding two LL with equal length with no carry.
// L1 = 4581
// L2 = 2317
// result = 6898

let L1 = NumToLL(4581)
let L2 = NumToLL(2317)
let sum, prevNode = null, finalSum

do {
    let result = L1.val + L2.val
    
    // Create first node of LL
    sum = new ListNode(result)
    // Store result's current node in a temp node so that it doesnt get erased by next resultant node

    // If this is not the first node of sum LL
    if (prevNode !== null) {
        prevNode.next = sum
    }
    // First node of sum LL
    else {
        finalSum = sum
    }

    prevNode = sum
    // Iterate to next node in L1/L2
    L1 = L1.next
    L2 = L2.next

} while (L1 !== null && L2 !== null)

console.log(finalSum)
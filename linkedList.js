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
// Adding two LL with different length with no carry.
// L1 = 99 => reversed: 99
// L2 =  1 => reversed: 1
// result = 100 => reversed: 001

let L1 = NumToLL(99)
let L2 = NumToLL(1)
let sum, prevNode = null, finalSum, result, carry = 0

do {
    // Check if there are two values to add or not.
    if (L1 === null) {
        result = L2.val + carry
    }
    else if (L2 === null) {
        result = L1.val + carry
    }
    else {
        result = L1.val + L2.val + carry
    }

    // Check if result is two digits or one digit.
    carry = result / 10
    result = result % 10

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
    if (L1 === null) {
        L2 = L2.next
    }
    else if (L2 === null) {
        L1 = L1.next
    }
    else {
        L1 = L1.next
        L2 = L2.next
    }

// Both can't be null. At least one has to non-null.
} while (L1 !== null || L2 !== null)

// Case where if we reach the end of either L1/L2 LL and there is a carry, we need to insert carry
// into finalSum LL.
if (carry !== 0) {
    sum = new ListNode(carry)
    prevNode.next = sum
}

console.log(finalSum)
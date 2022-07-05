var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    const root = new ListNode(null);
    let lastNode = root;

    while (l1 || l2) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        const node = new ListNode(sum);
        lastNode.next = node;
        lastNode = node;
    }

    return root.next
};



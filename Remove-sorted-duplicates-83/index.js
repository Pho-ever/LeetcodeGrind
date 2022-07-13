var deleteDuplicates = function (head) {
    let dummy = new ListNode(-Infinity, head)
    let prev = dummy;
    let cur = head;

    while (cur) {
        if (prev.val === cur.val) {
            while (cur && prev.val === cur.val) {
                cur = cur.next;
            }
            prev.next = cur;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return dummy.next;
};
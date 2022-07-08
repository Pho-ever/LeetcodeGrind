var hasCycle = function (head) {
    fast = head.next;
    slow = head;
    while (fast && fast.next && slow) {
        if (fast == slow) {
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}; 
document.getElementById('chat-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const text = this.value.trim();
        if (text) {
            sendToDean(text);
            this.value = ''; // Clear input field
        }
    }
});

function playGame(lcNguoi) {
    var arr = ['Rock', 'Paper', 'Scissors'];
    var lcMay = Math.floor(Math.random() * 3);

    var ketqua;

    if (lcNguoi === lcMay) {
        ketqua = 'Equal';
    } else if (
        (lcNguoi === 0 && lcMay === 2) ||
        (lcNguoi === 1 && lcMay === 0) ||
        (lcNguoi === 2 && lcMay === 1)
    ) {
        ketqua = 'You Win!';
    } else {
        ketqua = 'You Lose!';
    }

    document.getElementById('ketqua').textContent = 'mayChu: ' + arr[lcMay] + ', You: ' + arr[lcNguoi] + ', ketqua: ' + ketqua;
}
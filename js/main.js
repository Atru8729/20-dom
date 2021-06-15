function time(nuo, iki, step) {
    const pamokuKiekis = Math.floor((iki - nuo) * 60 / step);
    console.log(pamokuKiekis + 1);

    for (let i = nuo * 60; i <= iki * 60; i += step) {
        const h = Math.floor(i / 60);
        //const h = (i - m) / 60;
        const m = i % 60;
        //const m = i - (h * 60);

        console.log(i, `${h}:${m < 10 ? '0' + m : m}`);
    }
}
time(8, 11, 45);
time(1, 4, 31);
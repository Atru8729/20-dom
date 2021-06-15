function time(nuo, iki) {
    for (let h = nuo; h < iki; h++) {
        for (let m = 0; m < 60; m += 15) {
            console.log(`${h}:${m < 10 ? '0' + m : m}`);
        }

    }
}
time(1, 7);
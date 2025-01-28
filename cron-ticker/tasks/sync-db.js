
let times = 0;

const syncDB = () => {
    times++;
    console.log('running a task cada 5 segundos.', times);

    return times;
}

module.exports = {
    syncDB
}
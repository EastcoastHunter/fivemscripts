var count = 0;
var thisCount = 0;

const handlers = {
    startInitFunctionOrder(data){
        count = data.count;
    },
    initFunctionInvoking(data){
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width =((data.idx / count) * 100) + '%';

    },
    startDataFileEntries(data){
        count = data.count;
    },

    performMadLoadFunction(data){
        ++thisCount;
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function(e){
    (handlers[e.data.eventName] || function () { })(e.data);
});
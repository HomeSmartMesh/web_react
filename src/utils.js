

function time_to_text(timestamp){
    var t = new Date(timestamp * 1000);//as per javascript time in ms and c++ time_t in sec
    return t.toLocaleTimeString() + " , " + t.toLocaleDateString();
}

export default time_to_text;
